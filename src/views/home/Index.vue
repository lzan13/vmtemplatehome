<template>
    <div class="page is-mobile-devices">
        <!-- 导航 -->
        <nav id="nav" class="nav">
            <div class="wrapper">
                <img class="logo" src="@/assets/images/logo.png" alt="logo" draggable="false" />
                <div class="nav-items">
                    <a class="nav-item" @click="jumpAnchor('#header')">下载</a>
                    <a class="nav-item" @click="jumpAnchor('#features')">玩法介绍</a>
                    <a class="nav-item" @click="jumpAnchor('#about')">关于我们</a>
                </div>
            </div>
        </nav>
        <!-- 头部封面 -->
        <header id="header" class="header">
            <!-- 遮罩 -->
            <div class="cover"></div>
            <!-- 遮罩 -->
            <div class="mask">
                <div class="mask-top"></div>
                <div class="mask-bottom"></div>
            </div>
            <!-- 内容 -->
            <div class="wrapper">
                <section class="content">
                    <h2 class="slogan">忘忧大陆—虚拟空间交朋友</h2>
                    <div class="desc">
                        <p>帮助用户解决烦恼，忘记忧愁，放松心情，快乐交友等打造一站式社交平台，</p>
                        <p>弹幕式心情分享，及新颖的即时聊天方式，带给用户不一样的交流体验，让用户之间的交流充满趣味性，提高心情愉悦度，达到忘记烦恼的目的
                        </p>
                    </div>
                    <div class="tags">
                        <span class="tag">虚拟空间</span>
                        <span class="tag-decoration">/</span>
                        <span class="tag">温馨交流</span>
                        <span class="tag-decoration">/</span>
                        <span class="tag">忘却烦恼</span>
                        <span class="tag-decoration">/</span>
                        <span class="tag">享受快乐</span>
                        <span class="tag-decoration">/</span>
                        <span class="tag">真实自我</span>
                    </div>
                </section>
                <div class="download">
                    <div class="download-item" v-for="item in state.downlaodData" :key="item.url"
                        @click="jumpDownload(item)">
                        <img class="download-item-icon" :src="item.icon" draggable="false" />
                        <div class="download-item-content">
                            <span class="download-item-content-tips">{{ item.tips }}</span>
                            <span class="download-item-content-platform">{{ item.platform }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- 中间内容  -->
        <section id="features" class="features">
            <h2 class="title">玩法介绍</h2>
            <div class="wrapper">
                <ul class="features-content">
                    <li>
                        <img src="@/assets/images/img-guide-0.svg" alt="feature" draggable="false" />
                        <section>
                            <h3>来到忘忧大陆/<span>01</span></h3>
                            <p>分享你的快乐，忘记你的烦忧</p>
                        </section>
                    </li>
                    <li>
                        <section>
                            <h3>放松身心/<span>02</span></h3>
                            <p>在喧闹的尘世中，划出一片空间，让身心放松</p>
                        </section>
                        <img src="@/assets/images/img-guide-1.svg" alt="feature" draggable="false" />
                    </li>
                    <li>
                        <img src="@/assets/images/img-guide-2.svg" alt="feature" draggable="false" />
                        <section>
                            <h3>邂逅仙友/<span>03</span></h3>
                            <p>用文字和图片来分享自己的心情，邂逅和你有同感的仙友</p>
                        </section>
                    </li>
                    <li>
                        <section>
                            <h3>及时交流/<span>04</span></h3>
                            <p>飞剑传书，同心纸，不一样的交流体验，就好像你在我眼前</p>
                        </section>
                        <img src="@/assets/images/img-guide-3.svg" alt="feature" draggable="false" />
                    </li>
                    <li>
                        <img src="@/assets/images/img-guide-4.svg" alt="feature" draggable="false" />
                        <section>
                            <h3>美好心情/<span>05</span></h3>
                            <p>忘却你的烦恼和忧愁，收获好心情</p>
                        </section>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 关于我们 -->
        <section id="about" class="about">
            <h2 class="title">关于我们</h2>
            <div class="content">
                <p>帮助用户解决烦恼，忘记忧愁，放松心情，快乐交友等打造一站式社交平台，</p>
                <p>弹幕式心情分享，及新颖的即时聊天方式，带给用户不一样的交流体验，让用户之间的交流充满趣味性，提高心情愉悦度，达到忘记烦恼的目的。
                </p>
            </div>
            <div class="content">
                <p>邮箱支持：support@vmloft.cn</p>
                <p>软件使用问题请联系 QQ：1565176197</p>
            </div>
        </section>

        <!-- 底部 -->
        <Footer :showBeian="true"></Footer>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, reactive } from "vue"

import Footer from "@/components/Footer.vue"
import iconAndroid from "@/assets/images/icon-android.svg"
import iconGooglePlay from "@/assets/images/icon-google-play.svg"

const state = reactive({
    downlaodData: [
        {
            icon: iconAndroid,
            tips: "本地下载",
            platform: "Android 32位",
            url: "https://data.nepenthe.vmloft.com/download/apk/VMNepentheARM32.apk"
        },
        {
            icon: iconAndroid,
            tips: "本地下载",
            platform: "Android 64位",
            url: "https://data.nepenthe.vmloft.com/download/apk/VMNepentheARM64.apk"
        },
        {
            icon: iconGooglePlay,
            tips: "GooglePlay",
            platform: "Android",
            url: "https://play.google.com/store/apps/details?id=com.vmloft.develop.app.nepenthe"
        },
    ]
})

onMounted(() => {
    nextTick(() => {
        window.onscroll = function () {
            let nav = document.getElementById("nav")
            if (window.scrollY > 64) {
                nav?.classList.add("is-light")
            } else {
                nav?.classList.remove("is-light")
            }
        }
    })
})

// 锚点定位
const jumpAnchor = (id: string) => {
    const anchorEle = document.querySelector(id)
    if (anchorEle) {
        anchorEle.scrollIntoView(true)
    }
}
// 跳转下载
const jumpDownload = (item) => {
    window.open(item.url, "_blank")
}
</script>

<!-- 添加“scoped”属性以将 CSS 仅限于此组件 -->
<style lang="scss" scoped>
@media screen and (max-width: 800px) {
    .is-mobile-devices {

        // display: none;
        .header {
            .wrapper {
                .content {

                    .slogan {
                        font-size: 24px;
                    }

                    .desc {
                        font-size: 14px;
                    }

                    .tags {
                        font-size: 12px;
                    }
                }

                .download {
                    display: grid;
                    justify-content: center;
                    grid-template-columns: repeat(1, 256px);
                    margin: 24px;
                    padding: 8px;
                    color: #fff;
                }
            }
        }

        .features .wrapper .features-content {
            li {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                justify-content: center;
                align-items: center;
            }
        }
    }
}

// 导航
.nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    transition: all 0.2s;
    z-index: 9;

    .wrapper {
        height: 100%;
        max-width: 960px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            height: 100%;
            display: block;
        }

        .nav-items {
            font-size: 18px;
            display: flex;
            align-items: center;

            a {
                color: var(--color-white);
                font-weight: 600;
                padding: 16px;
                text-decoration: none;
                text-shadow: 0 1px 20px #fff;

                &:hover {
                    color: #5a98ff;
                }
            }
        }
    }
}

.is-light {
    height: 56px;
    background: #ffffff;

    .wrapper {
        .nav-items {
            a {
                color: var(--title);
                text-shadow: none;
            }
        }
    }
}

.header {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .cover {
        position: absolute;
        height: 100vh;
        width: 100%;
        background: url(@/assets/images/img-cover-banner.jpg);
        background-size: cover;
        background-position: center center;
    }

    .mask {
        position: absolute;
        height: 100vh;
        width: 100%;
        background: rgba(22, 22, 22, 0.5);
    }

    .wrapper {
        position: relative;
        max-width: 1280px;
        margin: auto;
        top: 16%;

        .content {
            padding: 16px;
            color: #fff;
            text-shadow: 1px 3px 25px;
            text-align: center;

            .slogan {
                font-size: 56px;
                font-weight: 800;
            }

            .desc {
                margin-top: 24px;
                font-size: 24px;
                font-weight: 500;
            }

            .tags {
                margin: 36px 16px;
                color: #fff;
                font-size: 16px;

                .tag {
                    padding: 8px;
                }
            }
        }
    }

    .download {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, 256px);
        margin: 24px;
        padding: 8px;
        color: #fff;

        .download-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 192px;
            height: 56px;
            margin: 16px auto;
            background: rgba(128, 128, 128, 0.36);
            border-radius: 16px;
            border: 1px #fff solid;

            transition: all 0.2s;
            cursor: pointer;

            .download-item-icon {
                width: 36px;
                height: 36px;
                padding: 8px;
            }

            .download-item-content {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            &:hover {
                background: rgba(222, 222, 222, 0.5);
            }
        }
    }
}

.features {
    width: 100%;
    height: 2400px;
    padding: 36px 0 36px;
    //   background: url(@/assets/images/img-bg-0.png), url(@/assets/images/img-bg-1.png), url(@/assets/images/img-bg-2.png);
    background-size: 546px 552px, 720px 852px, 100% 1028px;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: 0 404px, right 455px, left 1304px;

    .wrapper {
        max-width: 960px;
        margin: auto;
    }

    .features-content {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            margin-bottom: 48px;
        }

        h3 {
            position: relative;
            margin: 0 0 16px;
            color: #9075fc;
            font-size: 36px;
            font-weight: 500;
            line-height: 56px;

            span {
                position: relative;
                left: -72px;
                color: rgba(143, 116, 250, 0.1);
                font-size: 100px;
                font-weight: 600;
                line-height: 122px;
            }
        }

        p {
            width: 360px;
            color: rgba(116, 126, 139, 0.8);
            font-size: 18px;
            line-height: 30px;
        }

        img {
            width: 360px;
            display: block;
        }
    }
}

.title {
    position: relative;
    margin: 0;
    color: #3f4658;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: 1px;

    &:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -20px;
        width: 80px;
        height: 8px;
        border-radius: 4px;
        background: rgba(128, 128, 128, 0.2);
        transform: translateX(-50%);
    }
}

/*关于*/
.about {
    padding-top: 36px;
    padding-bottom: 36px;

    .content {
        margin: 56px auto;
        padding: 16px;
        color: #747e8b;
        text-align: center;
        font-size: 18px;
        line-height: 30px;

        p {
            padding: 8px;
        }
    }
}
</style>
