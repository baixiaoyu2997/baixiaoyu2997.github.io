(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{475:function(e,t,r){"use strict";r.r(t);var s=r(2),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"vue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[e._v("#")]),e._v(" vue")]),e._v(" "),r("ol",[r("li",[e._v("在使用setInterval时，如果当页面内有使用v-model.lazy的组件，那么那个组件的值会无法改变，一直会变回上一次的值。")]),e._v(" "),r("li",[e._v("打包在生产环境运行时console中依旧提示当前在开发环境，原因是没有区分引用的vue版本，都是用的开发环境的vue")])]),e._v(" "),r("blockquote",[r("p",[e._v("解决方案：在webpack配置文件中修改vue的引用")])]),e._v(" "),r("div",{staticClass:"language-vue extra-class"},[r("pre",{pre:!0,attrs:{class:"language-vue"}},[r("code",[e._v(" resolve: {\n    extensions: ['.vue', '.js', '.json'],\n    alias: {\n      vue: process.env.NODE_ENV == 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'\n    }\n  },\n")])])]),r("ol",[r("li",[e._v("Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。两个元素属性名可以不一致，特殊的属性值会有影响，例如input的type属性会导致从头开始渲染。 ​​​​")]),e._v(" "),r("li",[e._v("vue的组件定义不能写在new vue()之后 ​​​​，实例化vue的时候会配置数据观测(data observer)、编译模版、挂载实例到 DOM ，然后在数据变化时更新 DOM")]),e._v(" "),r("li",[e._v("vue子组件给父组件传递事件，例如按键修饰符这样的特殊性写法，如下：")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<input @keyup.enter=\"$emit(\\'ku\\')\"></input> ​​​​\n")])])]),r("h2",{attrs:{id:"vue-router"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[e._v("#")]),e._v(" vue-router")]),e._v(" "),r("h3",{attrs:{id:"动态添加路由router-addroutes-routes-array"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动态添加路由router-addroutes-routes-array"}},[e._v("#")]),e._v(" 动态添加路由router.addRoutes(routes: Array"),r("RouteConfig",[e._v(")")])],1),e._v(" "),r("p",[e._v("在addroutes后，router.options.routes不会更新，这不是一个bug，以后应该也不会修复，有个简单的解决办法是通过vue-devtool>Routing>Routes查看，这里边的路由是实时更新的。")]),e._v(" "),r("h3",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),r("p",[r("code",[e._v("hash")]),e._v("模式和"),r("code",[e._v("history")]),e._v("模式的区别?")]),e._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://www.jb51.net/article/144341.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.jb51.net/article/144341.htm"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("vue-devtools不能使用？")]),e._v(" "),r("ol",[r("li",[e._v("如果用了production/minified的vue，devtools的选项是默认关闭的所以没法用")]),e._v(" "),r("li",[e._v("如果页面是要用file://打开，需要到chrome设置->扩展应用->把“允许访问文件网址”的选项打开，才能读取到内容使用 ​​​​")])])])}),[],!1,null,null,null);t.default=a.exports}}]);