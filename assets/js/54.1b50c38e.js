(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{475:function(t,e,s){"use strict";s.r(e);var a=s(2),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("Nuxt.js 是一个基于 Vue.js 的通用应用框架。支持spa模式、ssr模式、静态化模式"),s("br"),t._v("\nnuxt=vue+ vue-router + Vuex + Vue.js Server-Side + Vue-Meta + webpack")]),t._v(" "),s("h3",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("ul",[s("li",[t._v("基于 Vue.js")]),t._v(" "),s("li",[t._v("自动代码分层")]),t._v(" "),s("li",[t._v("服务端渲染")]),t._v(" "),s("li",[t._v("强大的路由功能，支持异步数据")]),t._v(" "),s("li",[t._v("静态文件服务")]),t._v(" "),s("li",[t._v("ES2015+ 语法支持")]),t._v(" "),s("li",[t._v("打包和压缩 JS 和 CSS")]),t._v(" "),s("li",[t._v("HTML 头部标签管理")]),t._v(" "),s("li",[t._v("本地开发支持热加载")]),t._v(" "),s("li",[t._v("集成 ESLint")]),t._v(" "),s("li",[t._v("支持各种样式预处理器： SASS、LESS、 Stylus 等等")]),t._v(" "),s("li",[t._v("支持 HTTP/2 推送")])]),t._v(" "),s("h2",{attrs:{id:"vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" vuex")]),t._v(" "),s("p",[t._v("开启"),s("code",[t._v("vuex")]),t._v("方法：root目录下新建store文件夹，按照目录自动生成。")]),t._v(" "),s("h2",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[t._v("TBC")]),t._v(" "),s("h2",{attrs:{id:"layouts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layouts"}},[t._v("#")]),t._v(" layouts")]),t._v(" "),s("p",[t._v("nuxt布局分为3类：")]),t._v(" "),s("ul",[s("li",[t._v("default：默认使用的布局，不需要指定")]),t._v(" "),s("li",[t._v("error：错误处理页面")]),t._v(" "),s("li",[t._v("其他布局:需要指定layout：'xxx',不能指定error为布局")])]),t._v(" "),s("h2",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("p",[s("code",[t._v("Nuxt.js")]),t._v("会依据 "),s("code",[t._v("pages")]),t._v(" 目录中的所有 "),s("code",[t._v("*.vue")]),t._v(" 文件生成应用的路由配置。")]),t._v(" "),s("h2",{attrs:{id:"插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("vue")]),t._v("应用程序执行之前，运行的js插件")]),t._v(" "),s("h3",{attrs:{id:"插件编写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件编写"}},[t._v("#")]),t._v(" 插件编写")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// plugins/vue-notifications.js\nimport Vue from 'vue'\nimport VueNotifications from 'vue-notifications'\n\nVue.use(VueNotifications)\n")])])]),s("h3",{attrs:{id:"启用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用插件"}},[t._v("#")]),t._v(" 启用插件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// nuxt.config.js \nmodule.exports = {\n  plugins: ['~/plugins/vue-notifications']\n}\n")])])]),s("h3",{attrs:{id:"es6插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6插件"}},[t._v("#")]),t._v(" ES6插件")]),t._v(" "),s("p",[t._v("如果是插件是在"),s("code",[t._v("node_modules")]),t._v("的话，需要预先编译才能使用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("module.exports = {\n  build: {\n    transpile: ['vue-notifications']\n  }\n}\n")])])]),s("h2",{attrs:{id:"process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[t._v("#")]),t._v(" process")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("'process.env.NODE_ENV': ,\n'process.mode': ,\n'process.dev': ,\n'process.static': ,\n'process.target': ,\n'process.env.VUE_ENV': ,\n'process.browser': ,\n'process.client': ,\n'process.server': ,\n'process.modern': \n")])])]),s("h2",{attrs:{id:"cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[t._v("#")]),t._v(" cache")]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://tflin.com/2020/05/13/%E6%B5%85%E8%B0%88%20vue%20%E5%89%8D%E7%AB%AF%E5%90%8C%E6%9E%84%E6%A1%86%E6%9E%B6%20nuxt%20%E5%8F%8A%E5%85%B6%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/#2-%E6%95%B0%E6%8D%AE%E7%9A%84%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈 vue 前端同构框架 nuxt 及其性能优化"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://tflin.com/2020/05/13/%E6%B5%85%E8%B0%88%20vue%20%E5%89%8D%E7%AB%AF%E5%90%8C%E6%9E%84%E6%A1%86%E6%9E%B6%20nuxt%20%E5%8F%8A%E5%85%B6%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈 vue 前端同构框架 nuxt 及其性能优化"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);