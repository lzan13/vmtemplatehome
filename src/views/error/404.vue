<template>
  <div class="error">
    <div class="error-flex">
      <div class="tips">
        <div class="tips-animation tips-title">访问地址错误，请重新输入地址~</div>
        <div class="tips-animation tips-msg">你可以先检查网址，然后重新输入或给我们反馈问题。</div>
        <div class="tips-animation tips-btn">
          <span @click="goHome">去首页</span>
        </div>
      </div>
      <div class="image">
        <img src="@/assets/images/img-error-404.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"

const router = useRouter()
const goHome = () => {
  router.push("/")
}
</script>

<style scoped lang="scss">
.error {
  height: 100%;
  background-color: var(--el-color-white);
  display: flex;
  .error-flex {
    margin: auto;
    display: flex;
    height: 512px;
    width: 960px;
    padding: 32px;
    .tips {
      flex: 1;
      height: 100%;
      align-items: flex-start;
      justify-content: center;
      display: flex;
      flex-direction: column;
      &-animation {
        opacity: 0;
        animation-name: error-num;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }
      &-num {
        color: var(--tips);
        font-size: 64px;
        font-weight: 600;
      }
      &-title {
        font-size: 20px;
        color: var(--body);
        margin: 15px 0 5px 0;
        animation-delay: 0.1s;
      }
      &-msg {
        color: var(--tips);
        font-size: 13px;
        margin-bottom: 30px;
        animation-delay: 0.2s;
      }
      &-btn {
        animation-delay: 0.2s;
        span {
          background-color: var(--color-primary);
          padding: 12px 24px;
          color: var(--color-white);
          border-radius: 24px;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
    .image {
      flex: 1;
      opacity: 0;
      animation-name: error-img;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
