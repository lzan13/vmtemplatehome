import { nextTick } from "vue";
import router from "@/router/index";

/**
 * 设置浏览器标题国际化
 */
export function useTitle() {
    return () => {
        nextTick(() => {
            let routeTitle = router.currentRoute.value.meta.title as any
            document.title = `${routeTitle} - 忘忧大陆`;
        });
    };
}
