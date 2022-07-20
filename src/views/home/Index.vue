<template>
    <div class="page">
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
                    <h2 class="slogan">忘忧大陆—修仙一样交友</h2>
                    <div class="desc is-desktop">
                        <p>帮助用户解决烦恼，忘记忧愁，放松心情，快乐交友等打造一站式社交平台，</p>
                        <p>弹幕式心情分享，及新颖的即时聊天方式，带给用户不一样的交流体验，让用户之间的交流充满趣味性，提高心情愉悦度，达到忘记烦恼的目的
                        </p>
                    </div>
                </section>
                <div class="download">
                    <div class="btn ios">
                        <img class="icon" src="@/assets/images/icon-ios.png" alt="ios" draggable="false" />
                        <img class="qrcode" />
                    </div>
                    <div class="btn android" @click="jumpUrl(1)">
                        <img class="icon" src="@/assets/images/icon-android.png" alt="android" draggable="false" />
                        <img class="qrcode" src="@/assets/images/img-qr-local.png" alt="googleplayQR"
                            draggable="false" />
                    </div>
                    <div class="btn android" @click="jumpUrl(2)">
                        <img class="icon" src="@/assets/images/icon-googleplay.png" alt="android" draggable="false" />
                        <img class="qrcode" src="@/assets/images/img-qr-googleplay.png" alt="googleplayQR"
                            draggable="false" />
                    </div>
                </div>
            </div>
        </header>

        <!-- 中间内容  -->
        <section id="features" class="feature is-desktop">
            <h2 class="title">玩法介绍</h2>
            <div class="wrapper">
                <ul class="features">
                    <li>
                        <img src="@/assets/images/img-guide-0.svg" alt="feature" draggable="false" />
                        <section>
                            <h3>来到忘忧大陆/<span>01</span></h3>
                            <p>修仙一样交友，分享你的快乐，忘记你的烦忧</p>
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
import { nextTick, onMounted } from "vue"

import Footer from "@/components/Footer.vue"

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
// 页面跳转
const jumpUrl = (type: number) => {
    if (type == 0) {
        window.open("", "_blank")
    } else if (type == 1) {
        window.open("http://app.melove.net/fwn", "_blank")
    } else if (type == 2) {
        window.open("https://play.google.com/store/apps/details?id=com.vmloft.develop.app.nepenthe", "_blank")
    }
}
</script>

<!-- 添加“scoped”属性以将 CSS 仅限于此组件 -->
<style lang="scss" scoped>
@media screen and (max-width: 800px) {
    .is-desktop {
        display: none;
    }

    .is-mobile {
        display: block;
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
                text-shadow: 0 1px 20px #222222;

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
        width: 150%;
        left: 50%;
        transform: translateX(-50%);
        background: url(@/assets/images/img-cover.jpg);
        background-position: 50%;
        background-size: cover;
        border-radius: 0 0 50% 50%;
    }

    .mask {
        position: absolute;
        height: 100vh;
        width: 150%;
        left: 50%;
        transform: translateX(-50%);
        border-bottom-right-radius: 50%;
        background: rgba(255, 200, 200, 0.9);
        border-radius: 0 0 50% 50%;
    }

    .wrapper {
        position: relative;
        max-width: 1280px;
        margin: auto;
        top: 16%;

        .content {
            padding: 16px;
            color: #363636;

            .slogan {
                font-size: 32px;
                font-weight: 500;
            }

            .desc {
                margin-top: 24px;
                font-size: 16px;
            }
        }
    }

    .download {
        display: flex;
        margin: auto;
        margin-top: 24px;

        .btn {
            width: 152px;
            height: 55px;
            margin: 16px;
            background: rgba(0, 0, 0, 0.36);
            // box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.2s;
            cursor: pointer;

            &:hover {
                height: 210px;
            }

            .icon {
                width: 152px;
                height: 55px;
            }

            .qrcode {
                width: 152px;
                height: 152px;
                margin: 0 auto;
            }
        }

        .ios {
            display: none;
        }
    }
}

.feature {
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

    .features {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            margin-bottom: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        h3 {
            position: relative;
            margin: 0 0 18px;
            color: #886cf8;
            font-size: 36px;
            font-weight: 500;
            line-height: 56px;

            span {
                position: relative;
                left: -78px;
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
