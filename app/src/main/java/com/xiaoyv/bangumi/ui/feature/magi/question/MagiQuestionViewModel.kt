package com.xiaoyv.bangumi.ui.feature.magi.question

import androidx.lifecycle.MutableLiveData
import com.xiaoyv.blueprint.base.mvvm.normal.BaseViewModel
import com.xiaoyv.blueprint.kts.launchUI
import com.xiaoyv.common.api.BgmApiManager
import com.xiaoyv.common.api.parser.entity.MagiQuestionEntity
import com.xiaoyv.common.api.parser.impl.parserMagiQuestion
import com.xiaoyv.common.config.annotation.MagiType
import com.xiaoyv.common.config.bean.MagiTab
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

/**
 * Class: [MagiQuestionViewModel]
 *
 * @author why
 * @since 11/24/23
 */
class MagiQuestionViewModel : BaseViewModel() {
    internal val onMagiQuestionLiveData = MutableLiveData<MagiQuestionEntity?>()

    internal var tab: MagiTab? = null
    internal val magiType: String = MagiType.TYPE_UNKNOWN

    fun queryQuestion() {
        launchUI(
            stateView = loadingViewState,
            error = {
                it.printStackTrace()
            },
            block = {
                onMagiQuestionLiveData.value = withContext(Dispatchers.IO) {
                    BgmApiManager.bgmWebApi.queryMagi(magiType).parserMagiQuestion()
                }
            }
        )
    }
}