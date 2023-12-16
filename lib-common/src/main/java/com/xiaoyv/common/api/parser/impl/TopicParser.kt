package com.xiaoyv.common.api.parser.impl

import com.xiaoyv.common.api.parser.entity.LikeEntity
import com.xiaoyv.common.api.parser.entity.LikeEntity.Companion.normal
import com.xiaoyv.common.api.parser.entity.SampleRelatedEntity
import com.xiaoyv.common.api.parser.entity.TopicDetailEntity
import com.xiaoyv.common.api.parser.fetchStyleBackgroundUrl
import com.xiaoyv.common.api.parser.hrefId
import com.xiaoyv.common.api.parser.optImageUrl
import com.xiaoyv.common.api.parser.parserFormHash
import com.xiaoyv.common.api.parser.parserLikeParam
import com.xiaoyv.common.api.parser.replaceSmiles
import com.xiaoyv.common.api.parser.requireNoError
import com.xiaoyv.common.kts.fromJson
import com.xiaoyv.widget.kts.useNotNull
import org.jsoup.nodes.Document

/**
 * @author why
 * @since 12/2/23
 */
fun Document.parserTopic(topicId: String): TopicDetailEntity {
    requireNoError()
    val formHash = parserFormHash()

    return select("#news_list > .item, .entry_list > .item").let {
        val entity = TopicDetailEntity(id = topicId, gh = formHash)

        select(".postTopic .re_info small").outerHtml().let {
            val groupValues = "eraseEntry\\(\\s*(.*?)\\s*,\\s*'(.*?)'\\s*\\)".toRegex()
                .find(it)?.groupValues.orEmpty()
            if (entity.id.isBlank()) {
                entity.id = groupValues.getOrNull(1).orEmpty()
            }
        }

        // 关联的讨论条目
        entity.related = select("#pageHeader").let { item ->
            val related = SampleRelatedEntity(title = "关联的讨论")
            val relatedItem = SampleRelatedEntity.Item()
            val a = item.select("a")
            useNotNull(a.firstOrNull()) {
                relatedItem.image = select("img.avatar").attr("src").optImageUrl()
                relatedItem.title = text().ifBlank { attr("title") }

                relatedItem.imageLink = attr("href")
                relatedItem.titleLink = attr("href")
            }
            related.items.add(relatedItem)
            related
        }

        select(".postTopic").apply {
            entity.time = select(".re_info small")
                .firstOrNull()?.textNodes()?.firstOrNull()?.text()
                .orEmpty().trim()

            entity.userId = select("a.avatar").hrefId()
            entity.userAvatar = select("a.avatar > span").attr("style")
                .fetchStyleBackgroundUrl().optImageUrl()
            entity.userName = select(".inner strong a").text()
            entity.userSign = select(".inner .sign").text()

            // src="/img/smiles/tv/19.gif" -> src="https://bgm.tv/img/smiles/tv/19.gif"
            entity.content = select(".topic_content").html().replaceSmiles()

            // 解析文字添加贴贴参数
            entity.emojiParam = select(".topic_actions .like_dropdown").parserLikeParam()
        }

        if (entity.content.isBlank()) {
            entity.content = select("#columnCrtB .detail").html().replaceSmiles()
        }

        entity.title = select("#pageHeader h1")
            .firstOrNull()?.lastChild()?.toString()
            .orEmpty().trim()

        entity.comments = parserBottomComment()
        entity.replyForm = parserReplyForm()

        // 全部的贴贴列表
        val likeJson = "data_likes_list\\s*=\\s*([\\s\\S]+?);".toRegex()
            .find(html())?.groupValues?.getOrNull(1).orEmpty()

        // 贴贴列表填充（文章和评论的贴贴）
        entity.fillLikeInfo(likeJson.fromJson<LikeEntity>().normal())

        entity
    }
}