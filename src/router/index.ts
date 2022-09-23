
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import { NextLoading } from "@/utils/vloading";


/**
 * 创建路由
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        // 首页
        path: "/",
        name: "/",
        component: () => import("@/views/home/Index.vue"),
        meta: {
            title: "社交项目",
        },
    }, {
        // 用户协议
        path: "/agreement",
        name: "agreement",
        component: () => import("@/views/home/Agreement.vue"),
        meta: {
            title: "用户协议",
        },
    }, {
        // 隐私政策
        path: "/policy",
        name: "policy",
        component: () => import("@/views/home/Policy.vue"),
        meta: {
            title: "隐私政策",
        },
    }, {
        // 用户行为规范
        path: "/norm",
        name: "norm",
        component: () => import("@/views/home/Norm.vue"),
        meta: {
            title: "用户行为规范",
        },
    }, {
        // 404 界面
        path: "/404",
        name: "404",
        component: () => import("@/views/error/404.vue"),
        meta: {
            title: "404",
        },
    }, {
        // 注意这里，404页面匹配规则和以前不相同，要采用这种配置方式才行
        path: "/:pathMatch(.*)*",
        redirect: "404"
    },],
});


/**
 * 路由加载前
 */
router.beforeEach(async (to, from, next) => {
    NProgress.configure({ showSpinner: false });
    if (to.meta.title) NProgress.start();
    next()
});

/**
 * 路由加载后
 */
router.afterEach(() => {
    NProgress.done();
    NextLoading.done();
});

// 导出路由
export default router;