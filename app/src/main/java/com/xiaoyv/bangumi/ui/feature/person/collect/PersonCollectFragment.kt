package com.xiaoyv.bangumi.ui.feature.person.collect

import android.os.Bundle
import androidx.core.os.bundleOf
import androidx.core.view.updatePadding
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import com.chad.library.adapter.base.layoutmanager.QuickGridLayoutManager
import com.xiaoyv.bangumi.R
import com.xiaoyv.bangumi.base.BaseListFragment
import com.xiaoyv.bangumi.helper.RouteHelper
import com.xiaoyv.blueprint.constant.NavKey
import com.xiaoyv.common.api.parser.entity.MediaDetailEntity
import com.xiaoyv.common.kts.setOnDebouncedChildClickListener
import com.xiaoyv.widget.binder.BaseQuickDiffBindingAdapter
import com.xiaoyv.widget.kts.dpi

/**
 * Class: [PersonCollectFragment]
 *
 * @author why
 * @since 12/4/23
 */
class PersonCollectFragment :
    BaseListFragment<MediaDetailEntity.MediaWho, PersonCollectViewModel>() {

    override fun initArgumentsData(arguments: Bundle) {
        viewModel.personId = arguments.getString(NavKey.KEY_STRING).orEmpty()
        viewModel.isVirtual = arguments.getBoolean(NavKey.KEY_BOOLEAN)
    }

    override val isOnlyOnePage: Boolean
        get() = false

    override val loadingBias: Float
        get() = 0.3f

    override fun initView() {
        super.initView()
        binding.rvContent.updatePadding(8.dpi, 8.dpi, 8.dpi, 8.dpi)
    }

    override fun initListener() {
        super.initListener()

        contentAdapter.setOnDebouncedChildClickListener(R.id.iv_avatar) {
            RouteHelper.jumpUserDetail(it.id)
        }
    }

    override fun onCreateContentAdapter(): BaseQuickDiffBindingAdapter<MediaDetailEntity.MediaWho, *> {
        return PersonCollectAdapter()
    }

    override fun onCreateLayoutManager(): LinearLayoutManager {
        return QuickGridLayoutManager(requireContext(), 5, GridLayoutManager.VERTICAL, false)
    }

    companion object {
        fun newInstance(personId: String, isVirtual: Boolean): PersonCollectFragment {
            return PersonCollectFragment().apply {
                arguments = bundleOf(
                    NavKey.KEY_STRING to personId,
                    NavKey.KEY_BOOLEAN to isVirtual
                )
            }
        }
    }
}