(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{269:function(e,t,r){"use strict";r.r(t);var a=r(1),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"vue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[e._v("#")]),e._v(" vue")]),e._v(" "),r("ol",[r("li",[e._v("在使用setInterval时，如果当页面内有使用v-model.lazy的组件，那么那个组件的值会无法改变，一直会变回上一次的值。")]),e._v(" "),r("li",[e._v("打包在生产环境运行时console中依旧提示当前在开发环境，原因是没有区分引用的vue版本，都是用的开发环境的vue")])]),e._v(" "),r("blockquote",[r("p",[e._v("解决方案：在webpack配置文件中修改vue的引用")])]),e._v(" "),r("div",{staticClass:"language-vue extra-class"},[r("pre",{pre:!0,attrs:{class:"language-vue"}},[r("code",[e._v(" resolve: {\n    extensions: ['.vue', '.js', '.json'],\n    alias: {\n      vue: process.env.NODE_ENV == 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'\n    }\n  },\n")])])]),r("h2",{attrs:{id:"vue-router"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-router")]),e._v(" "),r("h3",{attrs:{id:"动态添加路由router-addroutes-routes-array"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动态添加路由router-addroutes-routes-array","aria-hidden":"true"}},[e._v("#")]),e._v(" 动态添加路由router.addRoutes(routes: Array"),r("RouteConfig",[e._v(")")])],1),e._v(" "),r("p",[e._v("在addroutes后，router.options.routes不会更新，这不是一个bug，以后应该也不会修复，有个简单的解决办法是通过vue-devtool>Routing>Routes查看，这里边的路由是实时更新的。")])])},[],!1,null,null,null);t.default=s.exports}}]);