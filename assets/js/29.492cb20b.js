(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{421:function(a,t,e){"use strict";e.r(t);var s=e(1),r=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"code-push是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code-push是什么","aria-hidden":"true"}},[a._v("#")]),a._v(" code-push是什么?")]),a._v(" "),e("p",[a._v("CodePush 是一个微软开发的云服务器。")]),a._v(" "),e("h2",{attrs:{id:"为什么使用code-push？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用code-push？","aria-hidden":"true"}},[a._v("#")]),a._v(" 为什么使用code-push？")]),a._v(" "),e("p",[a._v("支持Apache Cordova和React Native移动应用的热更新功能,本文只涉及cordova")]),a._v(" "),e("h2",{attrs:{id:"appcenter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appcenter","aria-hidden":"true"}},[a._v("#")]),a._v(" Appcenter")]),a._v(" "),e("ol",[e("li",[a._v("Cordova codepush 借助appcenter平台，首先要下载appcenter-cli")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm install -g appcenter-cli\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("成功安装appcenter-cli后，执行"),e("code",[a._v("appcenter login")]),a._v("命令为您的App Center帐户详细信息配置CLI。")]),a._v(" "),e("li",[a._v("在"),e("a",{attrs:{href:"https://appcenter.ms/",target:"_blank",rel:"noopener noreferrer"}},[a._v("appcenter"),e("OutboundLink")],1),a._v("中创建应用")]),a._v(" "),e("li",[a._v("创建deployment key")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("appcenter codepush deployment add -a <groupName>/<appname> Staging //测试环境\nappcenter codepush deployment add -a <groupName>/<appname> Production //生产环境\n")])])]),e("h2",{attrs:{id:"appcenter-cli-非必要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appcenter-cli-非必要","aria-hidden":"true"}},[a._v("#")]),a._v(" appcenter-cli(非必要)")]),a._v(" "),e("p",[a._v("以下内容是appcenter-cli的扩展，并不是使用code-push的必要条件，不想看的可以直接查看"),e("code",[a._v("将CodePush添加到你的程序")])]),a._v(" "),e("h3",{attrs:{id:"创建应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建应用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("appcenter apps create -d <appDisplayName> -o <operatingSystem>  -p <platform> \n// 例如：\nappcenter apps create -d MyApp-Android -o Android -p React-Native\nappcenter apps create -d MyApp-iOS -o iOS -p Cordova\n\n")])])]),e("h3",{attrs:{id:"添加deployments-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加deployments-部署","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加deployments(部署)")]),a._v(" "),e("p",[a._v("默认appcenter没有deployments,需要手动创建，没有数量限制。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("appcenter codepush deployment add -a <ownerName>/<appName> Staging\nappcenter codepush deployment add -a <ownerName>/<appName> Production\n")])])]),e("h3",{attrs:{id:"删除修改deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除修改deployment","aria-hidden":"true"}},[a._v("#")]),a._v(" 删除修改deployment")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 删除\nappcenter codepush deployment remove -a <ownerName>/<appName> <deploymentName>\n// 修改\nappcenter codepush deployment rename -a <ownerName>/<appName> <deploymentName> <newDeploymentName>\n")])])]),e("h3",{attrs:{id:"查看应用已有的deployments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看应用已有的deployments","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看应用已有的deployments")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("appcenter codepush deployment list -a <ownerName>/<appName>\n")])])]),e("p",[a._v("尾部追加"),e("code",[a._v("-k")]),a._v(",可以查看所有的key")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("appcenter codepush deployment list -a <ownerName>/<appName> -k\n")])])]),e("h3",{attrs:{id:"修改应用名称"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改应用名称","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改应用名称")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("appcenter apps update -n <newName> -a <ownerName>/<appName>\n")])])]),e("p",[a._v("该应用程序的名称仅旨在从管理方面进行识。由于更新查询是通过部署密钥进行的，因此它实际上不会影响正在运行的应用程序。")]),a._v(" "),e("h3",{attrs:{id:"删除应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 删除应用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("appcenter apps delete -a <ownerName>/<appName>\n")])])]),e("h3",{attrs:{id:"查看所有应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看所有应用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("appcenter apps list\n")])])]),e("h2",{attrs:{id:"将codepush添加到你的程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将codepush添加到你的程序","aria-hidden":"true"}},[a._v("#")]),a._v(" 将CodePush添加到你的程序")]),a._v(" "),e("p",[a._v("需要:")]),a._v(" "),e("ul",[e("li",[a._v("cordova5.0.0+")]),a._v(" "),e("li",[a._v("Android (cordova-android 4.0.0+)")]),a._v(" "),e("li",[a._v("iOS (cordova-ios 3.9.0+)")])]),a._v(" "),e("p",[a._v("查看当前应用platform版本：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cordova platform ls\n")])])]),e("p",[a._v("安装"),e("code",[a._v("cordova-plugin-code-push")]),a._v("插件:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cordova plugin add cordova-plugin-code-push@latest\n")])])]),e("p",[a._v("设置"),e("code",[a._v("config.xml")]),a._v("文件：")]),a._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("platform")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("preference")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("CodePushDeploymentKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("YOUR-ANDROID-DEPLOYMENT-KEY"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("platform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),e("p",[a._v("为确保您的应用可以访问CodePush服务器,在index.html文件中添加"),e("code",[a._v("meta")]),a._v("标签如下：")]),a._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[a._v("// 官网提供的csp规则在调用第三方接口时会被禁止\n"),e("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[a._v("- <meta http-equiv=\"Content-Security-Policy\" content=\"default-src https://codepush.appcenter.ms 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *\" />\n")]),a._v("// 推荐使用该规则\n"),e("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a._v("+ <meta http-equiv=\"Content-Security-Policy\" content=\"default-src https://codepush.azurewebsites.net 'self' data: gap: cdvfile: https://ssl.gstatic.com 'unsafe-eval' 'unsafe-inline' https: http: wss: ws:; style-src 'self' 'unsafe-inline'; img-src * filesystem: cdvfile: data:; media-src * blob:\">\n")])])])]),e("h3",{attrs:{id:"插件使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 插件使用")]),a._v(" "),e("p",[a._v("最简单的方式，是在"),e("code",[a._v("deviceready")]),a._v("事件中添加：")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("codePush"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//静默更新")]),a._v("\n")])])]),e("p",[a._v("当然，更新的时机可以根据自己需求进行选择")]),a._v(" "),e("h2",{attrs:{id:"发布更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布更新","aria-hidden":"true"}},[a._v("#")]),a._v(" 发布更新")]),a._v(" "),e("p",[a._v("发布指令集成了"),e("code",[a._v("cordova prepare")]),a._v("操作，更新本地文件后就可以直接运行"),e("code",[a._v("release-cordova")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 更新之后客户端会在下次启动时进行更新检测，这取决于你检测更新的时机。 \nappcenter codepush release-cordova -a <ownerName>/MyApp -d Production  \n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("//发布应用\nappcenter code-push release-cordova -a <ownerName>/MyApp [options]\n Options参数:\n[-t|--target-binary-version <targetBinaryVersion>]\n[--is-release-build-type]\n[-b|--build]\n[-r|--rollout <rolloutPercentage>]\n[--disable-duplicate-release-error]\n[-k|--private-key-path <privateKeyPath>]\n[-m|--mandatory] // 指定此版本是否为强制更新版本,从服务端下载完代码,会立即自动重启app\n[-x|--disabled]\n[--description <描述>]\n[-d|--deployment-name <指定部署的类型>]\n[-a|--app <ownerName>/<appName>]\n[--disable-telemetry]\n[-v|--version]\n  注意:一般生产环境的app是压缩过的,所以在发布正式环境热更新之前,先压缩代码\n")])])]),e("blockquote",[e("p",[a._v("客户端只能发现和下载deployment中最新的50条")])]),a._v(" "),e("h2",{attrs:{id:"查看发布历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看发布历史","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看发布历史")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("appcenter codepush deployment history -a <ownerName>/<appName> <deploymentName>\n")])])]),e("h2",{attrs:{id:"清除发布历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清除发布历史","aria-hidden":"true"}},[a._v("#")]),a._v(" 清除发布历史")]),a._v(" "),e("p",[a._v("此操作不可逆，不建议使用在生产环境")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("appcenter codepush deployment clear -a <ownerName>/<appName> <deploymentName>\n")])])]),e("h2",{attrs:{id:"codepush-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#codepush-api","aria-hidden":"true"}},[a._v("#")]),a._v(" codePush API")]),a._v(" "),e("blockquote",[e("p",[a._v("其他API未记录，可以前往"),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cordova#api-reference",target:"_blank",rel:"noopener noreferrer"}},[a._v("API Reference"),e("OutboundLink")],1),a._v("查看")])]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("属性")]),a._v(" "),e("th",[a._v("说明")]),a._v(" "),e("th",[a._v("参数")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("getCurrentPackage")]),a._v(" "),e("td",[a._v("获取当前版本，会返回俩种值，一种是null，在用户没有热更新过，或者安装了新客户端时出现，还有一种是"),e("code",[a._v("LocalPackage")])]),a._v(" "),e("td",[a._v("onSuccess,onError")])])])]),a._v(" "),e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),e("h3",{attrs:{id:"无法发起更新请求？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无法发起更新请求？","aria-hidden":"true"}},[a._v("#")]),a._v(" 无法发起更新请求？")]),a._v(" "),e("p",[a._v("corodva创建的模板自身是带一个"),e("code",[a._v('http-equiv="Content-Security-Policy"')]),a._v("的meta标签的：")]),a._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("meta")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("Content-Security-Policy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        \n")])])]),e("p",[a._v("我在其之下添加了：")]),a._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("meta")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("Content-Security-Policy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("default-src https://codepush.appcenter.ms 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])])]),e("p",[a._v("发现这样是无效的，把模板自带的那个去掉后可以正常使用。")]),a._v(" "),e("p",[a._v("也有可能是因为微软服务器不稳定导致的，可以添加"),e("code",[a._v("vconsole")]),a._v("在移动端应用查看网络调用返回")]),a._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://docs.microsoft.com/en-us/appcenter/distribution/codepush/",target:"_blank",rel:"noopener noreferrer"}},[a._v("CodePush"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cordova#getting-started",target:"_blank",rel:"noopener noreferrer"}},[a._v("Cordova Client SDK"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli",target:"_blank",rel:"noopener noreferrer"}},[a._v("Releasing CodePush updates using the App Center CLI"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"http://peakcool.cn/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/2019/04/25/cordova-with-appcenter.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Cordova Appcenter 应用整理"),e("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);