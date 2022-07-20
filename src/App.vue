
<template>
  <router-view />
</template>

<script setup lang="ts">
import { watch } from "vue"
import { useRoute } from "vue-router"
import { useTitle } from "@/utils/vweb"

const route = useRoute()
const title = useTitle()

// 监听路由的变化，设置网站标题
watch(
  () => route.path,
  () => {
    title()
  }
)
</script>

<style>
</style>
