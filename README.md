# vmnepenthehome

使用 ts+vue3+vite 进行开发的一个社交项目门户站点，具体使用及功能详情看下边介绍

### 本地开发调试

```shell
# 安装依赖
$ yarn install
# 开发调试，会监听文件改动重新加载
$ yarn dev
```

### 发布上线

```
# 打包编译
$ yarn build
# 规则检查
$ yarn lint
# 打包发布代码
$ tar -czvf ./vmnepenthehome.tgz -C dist .
# 将打包的代码上传到要发布的服务器上，解包
$ scp vmnepenthehome.tgz aly:/var/www/vmnepenthe/home/; rm vmnepenthehome.tgz
# 解压打包的资源
$ tar -xzvf vmnepenthehome.tgz .; rm vmnepenthehome.tgz
# 重启 ngnix
$ /etc/init.d/nginx restart
```

### 功能点

主要作用就是展示项目首页，作为一个宣传门户显示信息等

- [x] 首页
- [x] 下载
- [x] 玩儿法介绍
- [x] 关于
- [x] 用户协议
- [x] 隐私政策
- [x] 用户行为规范

### 更多

总体介绍 [忘忧大陆项目整体介绍](https://www.yuque.com/lzan13/nepenthe/ypa51f)
这里预览 [忘忧大陆门户站点](https://nepenthe.vmloft.com)

**项目客户端下载体验**

- [本地 APK 包下载](http://app.melove.net/fwn)
- [GooglePlay 市场下载](https://play.google.com/store/apps/details?id=com.vmloft.develop.app.nepenthe)

**开源仓库地址**

- [gitee/VMTemplateAndroid](https://gitee.com/lzan13/VMTemplateAndroid) Android 客户端
- [gitee/vmtemplateadmin](https://gitee.com/lzan13/vmtemplateadmin) 管理端项目使用`vue3`+`vite`+`element-plus`
- [gitee/vmtemplatehome](https://gitee.com/lzan13/vmtemplatehome) 首页端项目使用`vue3`+`vite`
- [gitee/vmtemplateserver](https://gitee.com/lzan13/vmtemplateserver) 服务器端项目使用`eggjs`

- [github/VMTemplateAndroid](https://github.com/lzan13/VMTemplateAndroid) Android 客户端
- [github/vmtemplateadmin](https://github.com/lzan13/vmtemplateadmin) 管理端项目使用`vue3`+`vite`+`element-plus`
- [github/vmtemplatehome](https://github.com/lzan13/vmtemplatehome) 首页端项目使用`vue3`+`vite`
- [github/vmtemplateserver](https://github.com/lzan13/vmtemplateserver) 服务器端项目使用`eggjs`

**沟通交流**

可以通过已下方式找到我，获取最新信息，以及技术支持

公众号: 穿裤衩闯天下

<div align="center">
    <img src="./images/wechatSubscribeGreen.jpg" width="570px" height="208px" alt="公众号: 穿裤衩闯天下"/>
</div>

QQ 群: 901211985 个人 QQ: 1565176197

<div align="center">
    <img src="./images/imGroup.jpg" width="256px" height="316.5px" alt="QQ 交流群"/>
    <img src="./images/qqQR1565176197.jpg" width="256px" height="316.5px" alt="个人 QQ"/>
</div>

**支持赞助**

如果你觉得当前项目帮你节省了开发时间，想要支持赞助我的话 👍，可以扫描下方的二维码打赏请我吃个鸡腿 🍗，你的支持将鼓励我继续创作 👨‍💻‍，感谢 ☺️ [赞助列表](./sponsor.md)

<div align="center">
    <img src="./images/payQRAli.jpg" width="256px" height="316.5px" alt="支付宝捐赠"/>
    <img src="./images/payQRWeChat.jpg" width="256px" height="316.5px" alt="微信捐赠"/>
</div>

### LICENSE

[MIT License Copyright (c) 2022 lzan13](./LICENSE)

## 配置参考

[Vite Config](https://vitejs.dev/config/).
