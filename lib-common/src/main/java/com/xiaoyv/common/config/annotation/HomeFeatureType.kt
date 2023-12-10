package com.xiaoyv.common.config.annotation

import androidx.annotation.StringDef

/**
 * Class: [HomeFeatureType]
 *
 * @author why
 * @since 11/25/23
 */
@StringDef(
    HomeFeatureType.TYPE_DOLLARS,
    HomeFeatureType.TYPE_MAGI,
    HomeFeatureType.TYPE_SEARCH,
    HomeFeatureType.TYPE_EMAIL,
    HomeFeatureType.TYPE_ALMANAC,
    HomeFeatureType.TYPE_WIKI,
)
@Retention(AnnotationRetention.SOURCE)
annotation class HomeFeatureType {
    companion object {
        const val TYPE_DOLLARS = "dollars"
        const val TYPE_MAGI = "magi"
        const val TYPE_SEARCH = "search"
        const val TYPE_EMAIL = "email"
        const val TYPE_ALMANAC = "almanac"
        const val TYPE_WIKI = "wiki"
    }
}