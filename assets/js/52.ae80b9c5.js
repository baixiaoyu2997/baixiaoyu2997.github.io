(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{474:function(e,t,v){"use strict";v.r(t);var r=v(2),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"vue"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[e._v("#")]),e._v(" vue")]),e._v(" "),v("ol",[v("li",[e._v("在使用setInterval时，如果当页面内有使用v-model.lazy的组件，那么那个组件的值会无法改变，一直会变回上一次的值。")]),e._v(" "),v("li",[e._v("打包在生产环境运行时console中依旧提示当前在开发环境，原因是没有区分引用的vue版本，都是用的开发环境的vue")])]),e._v(" "),v("blockquote",[v("p",[e._v("解决方案：在webpack配置文件中修改vue的引用")])]),e._v(" "),v("div",{staticClass:"language-vue extra-class"},[v("pre",{pre:!0,attrs:{class:"language-vue"}},[v("code",[e._v(" resolve: {\n    extensions: ['.vue', '.js', '.json'],\n    alias: {\n      vue: process.env.NODE_ENV == 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'\n    }\n  },\n")])])]),v("ol",[v("li",[e._v("Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。两个元素属性名可以不一致，特殊的属性值会有影响，例如input的type属性会导致从头开始渲染。 ​​​​")]),e._v(" "),v("li",[e._v("vue的组件定义不能写在new vue()之后 ​​​​，实例化vue的时候会配置数据观测(data observer)、编译模版、挂载实例到 DOM ，然后在数据变化时更新 DOM")]),e._v(" "),v("li",[e._v("vue子组件给父组件传递事件，例如按键修饰符这样的特殊性写法，如下：")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("<input @keyup.enter=\"$emit(\\'ku\\')\"></input> ​​​​\n")])])]),v("h3",{attrs:{id:"vue数据和事件传递方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue数据和事件传递方式"}},[e._v("#")]),e._v(" vue数据和事件传递方式")]),e._v(" "),v("ol",[v("li",[e._v("props")]),e._v(" "),v("li",[v("code",[e._v("$parent")]),e._v("和"),v("code",[e._v("$children")])]),e._v(" "),v("li",[e._v("sync")]),e._v(" "),v("li",[e._v("v-model")]),e._v(" "),v("li",[e._v("eventBus")]),e._v(" "),v("li",[e._v("vuex")]),e._v(" "),v("li",[v("code",[e._v("$attrs")])]),e._v(" "),v("li",[v("code",[e._v("$listeners")])]),e._v(" "),v("li",[v("code",[e._v("$emit")]),e._v("和"),v("code",[e._v("$on")])]),e._v(" "),v("li",[e._v("provide / inject")])]),e._v(" "),v("h2",{attrs:{id:"vue-router"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[e._v("#")]),e._v(" vue-router")]),e._v(" "),v("h3",{attrs:{id:"动态添加路由router-addroutes-routes-array"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动态添加路由router-addroutes-routes-array"}},[e._v("#")]),e._v(" 动态添加路由router.addRoutes(routes: Array"),v("RouteConfig",[e._v(")")])],1),e._v(" "),v("p",[e._v("在addroutes后，router.options.routes不会更新，这不是一个bug，以后应该也不会修复，有个简单的解决办法是通过vue-devtool>Routing>Routes查看，这里边的路由是实时更新的。")]),e._v(" "),v("h3",{attrs:{id:"问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),v("p",[v("code",[e._v("hash")]),e._v("模式和"),v("code",[e._v("history")]),e._v("模式的区别?")]),e._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://www.jb51.net/article/144341.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.jb51.net/article/144341.htm"),v("OutboundLink")],1)])]),e._v(" "),v("p",[e._v("vue-devtools不能使用？")]),e._v(" "),v("ol",[v("li",[e._v("如果用了production/minified的vue，devtools的选项是默认关闭的所以没法用")]),e._v(" "),v("li",[e._v("如果页面是要用file://打开，需要到chrome设置->扩展应用->把“允许访问文件网址”的选项打开，才能读取到内容使用 ​​​​")])])])}),[],!1,null,null,null);t.default=s.exports}}]);