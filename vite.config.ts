import { defineConfig, loadEnv } from "vite"
import { resolve } from "path"

import pluginVue from "@vitejs/plugin-vue"
import { createHtmlPlugin } from "vite-plugin-html"

import { env } from "process"


/**
 * Vite 配置参考 https://vitejs.dev/config/
 */
export default ({ mode }) => {
    const envDir = process.cwd() + "/config/"
    const env = loadEnv(mode, envDir, "vmVite")
    console.log(env)
    process.env = { ...process.env, ...env };

    // console.log(process.env)
    const vuePlugin = pluginVue()
    /**配置 html 插件 */
    const htmlPlugin = createHtmlPlugin({
        minify: true,
        /**
         * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
         * @default src/main.ts
         */
        // entry: './src/main.ts',
        /**
         * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
         * @default index.html
         */
        // template: './index.html',

        /**
         * 需要注入 index.html ejs 模版的数据
         */
        inject: {
            data: {
                description: process.env.vmViteAppDescription,
                keywords: process.env.vmViteAppKeywords,
                title: process.env.vmViteAppTitle,
            },
        },
    });

    return defineConfig({
        // 静态资源基础路径 base: './' || '',
        base: process.env.vmVitePath,
        envDir: "config", // 环境变量目录
        envPrefix: "vmVite", // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。
        plugins: [
            vuePlugin,
            htmlPlugin
        ],
        resolve: {
            alias: { // 路径别名
                "@": resolve(__dirname, "src")
            },
            extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"] // 导入时想要省略的扩展名列表
        },
        server: {
            port: Number(process.env.vmVitePort) || 9527, // 端口号
            https: Boolean(process.env.vmViteSSL), // 是否启用 TLS + HTTP/2
            open: Boolean(process.env.vmViteOpen), // 是否在开发服务器启动时自动在浏览器中打开应用程序
        }
    })
}

