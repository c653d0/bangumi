package com.xiaoyv.common.api.api

import com.xiaoyv.common.api.BgmApiManager
import com.xiaoyv.common.api.response.BaiduTranslateEntity
import com.xiaoyv.common.api.response.CalendarEntity
import com.xiaoyv.common.api.response.MediaJsonEntity
import com.xiaoyv.common.api.response.douban.DouBanPhotoEntity
import com.xiaoyv.common.api.response.douban.DouBanSearchEntity
import com.xiaoyv.common.config.annotation.TimelineType
import org.jsoup.nodes.Document
import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Path
import retrofit2.http.Query

/**
 * Class: [BgmJsonApi]
 *
 * @author why
 * @since 11/24/23
 */
interface BgmJsonApi {

    @GET(BgmApiManager.URL_BASE_WEB)
    suspend fun queryMainPage(): Document

    @GET("${BgmApiManager.URL_BASE_WEB}/timeline")
    suspend fun queryWholeTimeline(
        @Query("type") @TimelineType type: String,
        @Query("ajax") ajax: Long = 1
    ): Document

    /**
     * 每日放送
     */
    @GET("/calendar")
    suspend fun queryCalendar(): CalendarEntity

    @GET("/v0/subjects/{mediaId}")
    suspend fun queryMediaDetail(@Path("mediaId", encoded = true) mediaId: String): MediaJsonEntity

    @FormUrlEncoded
    @POST("http://api.fanyi.baidu.com/api/trans/vip/translate")
    suspend fun postBaiduTranslate(
        @Field("q") q: String,
        @Field("appid") appId: String,
        @Field("salt") salt: String,
        @Field("secret") secret: String,
        @Field("sign") sign: String,
        @Field("from") from: String = "auto",
        @Field("to") to: String = "zh",
    ): BaiduTranslateEntity

    @GET("https://frodo.douban.com/api/v2/search/subjects")
    suspend fun queryDouBanSearchHint(
        @Query("q") q: String,
        @Query("count") count: Int = 10,
        @Query("apikey") apikey: String = "0dad551ec0f84ed02907ff5c42e8ec70",
    ): DouBanSearchEntity

    @GET("https://frodo.douban.com/api/v2/tv/{mediaId}/photos")
    suspend fun queryDouBanPhotoList(
        @Path("mediaId") mediaId: String,
        @Query("start") start: Int = 0,
        @Query("count") count: Int = 10,
        @Query("apikey") apikey: String = "0dad551ec0f84ed02907ff5c42e8ec70",
    ): DouBanPhotoEntity
}