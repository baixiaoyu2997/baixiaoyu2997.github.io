(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{547:function(a,t,e){"use strict";e.r(t);var s=e(2),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[a._v("#")]),a._v(" 限制")]),a._v(" "),e("p",[a._v("同一个分包中的页面享有共同的预下载大小限额 2M，限额会在工具中打包时校验。")]),a._v(" "),e("p",[a._v("如，页面 A 和 B 都在同一个分包中，A 中预下载总大小 0.5M 的分包，B 中最多只能预下载总大小 1.5M 的分包。")]),a._v(" "),e("h3",{attrs:{id:"微信小程序和-app-对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序和-app-对比"}},[a._v("#")]),a._v(" 微信小程序和 app 对比")]),a._v(" "),e("ol",[e("li",[a._v("开发成本低")]),a._v(" "),e("li",[a._v("开发效率快")]),a._v(" "),e("li",[a._v("流量大")]),a._v(" "),e("li",[a._v("用户：减轻内存，用完即走")]),a._v(" "),e("li",[a._v("商户：线上线下结合，转型互联网")]),a._v(" "),e("li",[a._v("创业者：场景广泛，创业更简单")])]),a._v(" "),e("h2",{attrs:{id:"生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[a._v("#")]),a._v(" 生命周期")]),a._v(" "),e("p",[a._v("onLoad>onShow>onReady")]),a._v(" "),e("p",[a._v("普通跳转到其他页面时，再回来只会触发 onShow，不会触发 onLoad 和 onReady")]),a._v(" "),e("h2",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[a._v("#")]),a._v(" 事件")]),a._v(" "),e("h3",{attrs:{id:"传递元素上的参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传递元素上的参数"}},[a._v("#")]),a._v(" 传递元素上的参数")]),a._v(" "),e("p",[a._v("可以在绑定元素上添加"),e("code",[a._v("data-xxx")]),a._v("，触发事件后可以在"),e("code",[a._v("e.currentTarget.dataset.xxx")]),a._v("获取：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(' <view bindtap="onTap" data-title="test">\n    姓名：{{item.name}},序号:{{index}}\n </view>\n// js\n  onTap:(e)=>{\n    console.log(e.currentTarget.dataset.title)  // test\n  }\n')])])]),e("p",[e("code",[a._v("data-xxx")]),a._v("这种传递形式，后边的值会自动转成小写，如果中间带连接符的话，会转换成小驼峰命名：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("data-NAME  // name\ndata-na-ME // naMe\n")])])]),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[a._v("#")]),a._v(" API")]),a._v(" "),e("h2",{attrs:{id:"上线相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上线相关"}},[a._v("#")]),a._v(" 上线相关")]),a._v(" "),e("h3",{attrs:{id:"配置合法域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置合法域名"}},[a._v("#")]),a._v(" 配置合法域名")]),a._v(" "),e("p",[a._v("小程序开发平台>开发>开发设置>服务器域名")]),a._v(" "),e("h2",{attrs:{id:"最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[a._v("#")]),a._v(" 最佳实践")]),a._v(" "),e("ol",[e("li",[a._v("图片 mode 选择"),e("code",[a._v("widthFix")]),a._v(",保持宽高比，去除不必要的空白。")])]),a._v(" "),e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),e("ol",[e("li",[a._v("hover-class 和:hover 的区别前者是点击后移出 自动去除效果，：hover 点击后移出没有改变")]),a._v(" "),e("li",[a._v("怎么单独查看某个页面选择编辑器顶部普通编译>添加编译模式>选择启动页面")]),a._v(" "),e("li",[a._v("微信小程序不能使用 indexOf")])])])}),[],!1,null,null,null);t.default=v.exports}}]);