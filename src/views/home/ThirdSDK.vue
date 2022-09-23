<template>
    <div class="page">
        <h2>社交项目 个人信息第三方SDK共享清单</h2>
        <div class="content">
            <div>更新日期：2022/09/18</div>
            <div>生效日期：2022/09/18</div>
        </div>

        <h2>引言</h2>
        <div class="content">
            1、为保障"社交项目"平台相关功能的实现与应用安全稳定的运行，我们可能会接入由合作方提供的软件开发包（SDK）、应用程序接口（API）、应用程序插件等代码或通过其他合作方式，以实现相关目的。
            2、我们会对获取信息的合作方的代码进行严格的安全监测，以保护数据安全。
            3、我们对接入的相关合作方在目录中列明，合作方具体的处理情况请参见合作方的隐私政策或服务协议。
            4、请注意，合作方的代码可能因为其版本升级、策略调整等原因导致数据处理类型存在一定变化，请以其公示的官方说明为准。
        </div>

        <h3>一、第三方SDK目录</h3>
        <!-- <h4>个推 SDK</h4>
        <p>涉及个人信息：设备信息（品牌、厂商）、位置信息（GPS）、IMEI、IDFA、Android ID、MAC、OAID、IMSI、UAID、ICCID、Serial
            Number(硬件序列号)、AdvertisingID。网络信息：包含IP地址、WIFI信息、BSSID/SSID、基站信息，位置信息，应用列表信息。</p>
        <p>使用目的：支持安卓系统的通知推送</p>
        <p>使用场景：在用户使用App时使用</p>
        <p>合作方主体：浙江每日互动网络科技股份有限公司</p>
        <p>收集方式：SDK采集</p>
        <p>合作方官网链接：https://www.getui.com/</p>
        <p>合作方隐私政策：https://www.getui.com/privacy</p> -->

        <h4>友盟 SDK</h4>
        <p>设备信息（IMEI/MAC/Android ID/IDFA/OpenUDID/GUID/SIM卡IMSI/地理位置等）</p>
        <p>使用目的：提供统计分析服务，并通过地理位置校准报表数据准确性，提供基础反作弊能力。</p>
        <p>使用场景：在用户使用App时使用</p>
        <p>合作方主体：北京锐讯灵通科技有限公司</p>
        <p>收集方式：SDK采集</p>
        <p>合作方官网链接：<a href="https://www.umeng.com/">https://www.umeng.com/</a></p>
        <p>合作方隐私政策：<a href=""></a>https://www.umeng.com/page/policy</p>

        <h4>支付宝 SDK</h4>
        <p>涉及个人信息：IMEI/IMSI、ICCID、SIM卡序列号/MAC地址、安卓ID、设备存储空间大小、传感器信息、硬件序列号、网络类型、设备型号、设备品牌、设备主板型号、制造商、固件版本号、基带版本号、驱动型号、ROM名称、应用版本号、SSID、BSSID、蓝牙MAC、运营商、CPU信息、屏幕尺寸、电池信息。
        </p>
        <p>使用目的：用于用户登录账户和支付过程中的安全风控</p>
        <p>使用场景：用户使用支付宝支付时使用</p>
        <p>合作方主体：支付宝（中国）网络技术有限公司</p>
        <p>收集方式：SDK采集</p>
        <p>合作方官网链接：https://www.alipay.com/</p>
        <p>合作方隐私政策：https://opendocs.alipay.com/open/54</p>
        <p>涉及个人信息：设备信息（品牌、厂商）、位置信息（GPS）、IMEI、IDFA、Android ID、MAC、OAID、IMSI、UAID、ICCID、Serial Number(硬件序列号)、Advertising
        </p>

        <h4>腾讯Bugly SDK</h4>
        <p>涉及个人信息：日志信息（包括：第三方开发者自定义 日志、Logcat 日志以及 APP 崩溃堆栈信息）、设备 ID（包括：androidid 以及 idfv）、联网信息、系统名称、系统版本以及国家码。</p>
        <p>使用目的：软件出现崩溃时，收集崩溃时内存信息和设备信息</p>
        <p>使用场景：软件出现崩溃时</p>
        <p>合作方主体：深圳市腾讯计算机系统有限公司</p>
        <p>收集方式：SDK采集</p>
        <p>合作方官网链接：https://bugly.qq.com/v2/</p>
        <p>合作方隐私政策：https://static.bugly.qq.com/bugly-sdk-privacy-statement.pdf</p>

        <h4>OAID SDK</h4>
        <p>涉及个人信息：设备信息、网络设备硬件地址、网络信息</p>
        <p>使用目的：用于提高广告有效触达率、进一步了解用户广告需求</p>
        <p>使用场景：用于投放广告时</p>
        <p>合作方主体：电信终端产业协会移动安全工作委员会</p>
        <p>收集方式：SDK采集</p>
        <p>合作方官网链接：https://www.msa-alliance.cn/col.jsp?id=120</p>
        <p>合作方隐私政策：https://www.msa-alliance.cn/col.jsp?id=120</p>

        <h4>TopOn SDK</h4>
        <p>涉及个人信息：系统版本名、系统版本号、当前应用包名、应用版本名、应用版本号、设备生产商、设备型号、分辨率、网络类型，例：WiFi/3G/4G、MNC(mobile network code)、MCC(mobile
            country code)、系统语言，例：zh-CN、时区，例：GMT+08:00、时间戳、user_agent信息、设备id(android_id)、imei（用户授权才收集）、oaid、mac地址</p>
        <p>使用目的：1. 基于用户设备信息调整广告投放策略 2. 基于用户设备信息分析广告行为(如广告加载、展示、点击等）</p>
        <p>使用场景：用于投放广告时</p>
        <p>合作方主体：TopOn</p>
        <p>收集方式：SDK采集</p>
        <p>合作方官网链接：https://www.toponad.com/</p>
        <p>合作方隐私政策：https://docs.toponad.com/#/zh-cn/android/NetworkAccess/SDK_Policy/TopOn_SDK_Privacy_Policy_CN</p>

        <h4>Hyphenate-chat SDK</h4>
        <p>单聊、群聊、聊天室 用户ID、APPID（应用包名）、设备随机ID、设备硬件类型、设备型号、系统类型、SDK版本、设备网络类型、登录用时</p>
        <p>使用目的：用户实时沟通</p>
        <p>使用场景：即时聊天</p>
        <p>合作方主体：北京易掌云峰科技有限公司</p>
        <p>收集方式：SDK采集</p>
        <p>合作方官网链接：https://www.easemob.com</p>
        <p>合作方隐私政策：https://www.easemob.com/protocol
        </p>

        <p class="decoration">------- end --------</p>
    </div>
</template>

<script lang="ts" setup>
</script>

<!-- 添加“scoped”属性以将 CSS 仅限于此组件 -->
<style lang="scss" scoped>
h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 16px auto 8px;
    padding-left: 16px;
    padding-right: 16px;
}

h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 16px auto 8px;
    padding-left: 16px;
    padding-right: 16px;
}

h4 {
    font-size: 14px;
    font-weight: 500;
    margin: 16px auto 8px;
    padding-left: 16px;
    padding-right: 16px;
}

.content {
    font-size: 14px;
    padding-left: 16px;
    padding-right: 16px;

    p {
        text-indent: 2em;
        padding: 4px 16px;
    }
}

p {
    font-size: 14px;
    padding-left: 16px;
    padding-right: 16px;
}

.decoration {
    padding: 16px;
    text-align: center;
}

.point {
    font-weight: 600;
}

.decoration {
    height: 16px;
    padding: 16px;
    text-align: center;
}
</style>
 

 



