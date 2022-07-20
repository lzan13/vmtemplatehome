/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMetaEnv {
    // 定义环境变量字段
    readonly vmViteAppDescription: string
    readonly vmViteAppKeywords: string
    readonly vmViteAppTitle: string
    readonly vmViteAppPort: number
    readonly vmVitePath: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}