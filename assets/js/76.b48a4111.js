(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{505:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" vue")]),t._v(" "),a("ol",[a("li",[t._v("在使用setInterval时，如果当页面内有使用v-model.lazy的组件，那么那个组件的值会无法改变，一直会变回上一次的值。")]),t._v(" "),a("li",[t._v("打包在生产环境运行时console中依旧提示当前在开发环境，原因是没有区分引用的vue版本，都是用的开发环境的vue")])]),t._v(" "),a("blockquote",[a("p",[t._v("解决方案：在webpack配置文件中修改vue的引用")])]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v(" resolve: {\n    extensions: ['.vue', '.js', '.json'],\n    alias: {\n      vue: process.env.NODE_ENV == 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'\n    }\n  },\n")])])]),a("ol",[a("li",[t._v("Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。两个元素属性名可以不一致，特殊的属性值会有影响，例如input的type属性会导致从头开始渲染。 ​​​​")]),t._v(" "),a("li",[t._v("vue的组件定义不能写在new vue()之后 ​​​​，实例化vue的时候会配置数据观测(data observer)、编译模版、挂载实例到 DOM ，然后在数据变化时更新 DOM")]),t._v(" "),a("li",[t._v("vue子组件给父组件传递事件，例如按键修饰符这样的特殊性写法，如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<input @keyup.enter=\"$emit(\\'ku\\')\"></input> ​​​​\n")])])]),a("h3",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),a("h4",{attrs:{id:"v-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-on"}},[t._v("#")]),t._v(" v-on")]),t._v(" "),a("p",[t._v("修饰符可以不写表达式，例如："),a("code",[t._v("@click.stop")])]),t._v(" "),a("h3",{attrs:{id:"scoped"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scoped"}},[t._v("#")]),t._v(" scoped")]),t._v(" "),a("p",[t._v("当style设置scoped时，使用less导入其他样式文件无效，有两种解决办法：")]),t._v(" "),a("ol",[a("li",[t._v("（推荐）可以在import外部包裹一层"),a("code",[t._v("/deep/ [选择器]")]),t._v(":")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/deep/ .content {\n    @import url('~/assets/styles/readonly');\n\n    margin-top: 0.25rem;\n  }\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("或者修改源文件为"),a("code",[t._v("less")]),t._v("或者"),a("code",[t._v("scss")]),t._v("格式,在里边所有样式前都添加"),a("code",[t._v("/deep/")])])]),t._v(" "),a("h3",{attrs:{id:"v-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-html"}},[t._v("#")]),t._v(" v-html")]),t._v(" "),a("p",[t._v("当使用v-html时，如果其中包含class指定的样式，并且设置了"),a("code",[t._v("style scoped")]),t._v("，那么样式不会生效，需要在class对应的样式前加"),a("code",[t._v("/deep/")])]),t._v(" "),a("h3",{attrs:{id:"vue数据和事件传递方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue数据和事件传递方式"}},[t._v("#")]),t._v(" vue数据和事件传递方式")]),t._v(" "),a("ol",[a("li",[t._v("props")]),t._v(" "),a("li",[a("code",[t._v("$parent")]),t._v("和"),a("code",[t._v("$children")])]),t._v(" "),a("li",[t._v("sync")]),t._v(" "),a("li",[t._v("v-model")]),t._v(" "),a("li",[t._v("eventBus")]),t._v(" "),a("li",[t._v("vuex")]),t._v(" "),a("li",[a("code",[t._v("$attrs")])]),t._v(" "),a("li",[a("code",[t._v("$listeners")])]),t._v(" "),a("li",[a("code",[t._v("$emit")]),t._v("和"),a("code",[t._v("$on")])]),t._v(" "),a("li",[t._v("provide / inject")])]),t._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("h4",{attrs:{id:"vue中的-click中为什么不能使用三元运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue中的-click中为什么不能使用三元运算符"}},[t._v("#")]),t._v(" vue中的@click中为什么不能使用三元运算符？")]),t._v(" "),a("p",[t._v("当click事件写成这样时无效："),a("code",[t._v("@click=\"dialogStatus=='create'?createData:updateData\"")]),a("br"),t._v("\n解决方法："),a("br"),t._v("\nvue中有正则来判断你click后面写的是什么，如果是函数，不作处理，但如果不是函数，他会封装一下，比如"),a("code",[t._v("dialogStatus=='create'?createData:updateData")]),t._v("会封装为"),a("code",[t._v("function($event){dialogStatus=='create'?createData:updateData}")]),t._v("，这个函数运行后，里面的createData:updateData是不会运行的,所以应该写成"),a("code",[t._v("@click=\"dialogStatus=='create'?createData():updateData()\"")])]),t._v(" "),a("h4",{attrs:{id:"如何在template中使用可选链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何在template中使用可选链"}},[t._v("#")]),t._v(" 如何在template中使用可选链？")]),t._v(" "),a("p",[t._v("只有在vue3中支持")]),t._v(" "),a("h3",{attrs:{id:"props对象和数组设置默认值无效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props对象和数组设置默认值无效"}},[t._v("#")]),t._v(" props对象和数组设置默认值无效？")]),t._v(" "),a("p",[t._v("不能使用箭头函数，必须是工厂函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("listProps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"无法获取refs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无法获取refs"}},[t._v("#")]),t._v(" 无法获取refs？")]),t._v(" "),a("p",[t._v("如果设置了"),a("code",[t._v("v-if")]),t._v("或者"),a("code",[t._v("v-show")]),t._v("会导致无法获取，还有如果组件为懒加载，那么也无法获取")]),t._v(" "),a("h2",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" vue-router")]),t._v(" "),a("h3",{attrs:{id:"动态添加路由router-addroutes-routes-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态添加路由router-addroutes-routes-array"}},[t._v("#")]),t._v(" 动态添加路由router.addRoutes(routes: Array"),a("RouteConfig",[t._v(")")])],1),t._v(" "),a("p",[t._v("在addroutes后，router.options.routes不会更新，这不是一个bug，以后应该也不会修复，有个简单的解决办法是通过vue-devtool>Routing>Routes查看，这里边的路由是实时更新的。")]),t._v(" "),a("h3",{attrs:{id:"路由参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由参数"}},[t._v("#")]),t._v(" 路由参数")]),t._v(" "),a("p",[t._v("query 在刷新页面得时候参数不会消失，而 params 刷新页面得时候会参数消失，可以考虑本地存储解决。"),a("br"),t._v("\nquery 传得参数都是显示在url 地址栏当中，而 params 传参不会显示在地址栏"),a("br"),t._v("\nquery语法："),a("br"),t._v('\nthis.$router.push({path:"地址",query:{id:"123"}}); 这是传递参数'),a("br"),t._v("\nthis.$route.query.id； 这是接受参数"),a("br"),t._v("\nparams语法："),a("br"),t._v('\nthis.$router.push({name:"地址",params:{id:"123"}}); 这是传递参数'),a("br"),t._v("\nthis.$route.params.id; 这是接受参数")]),t._v(" "),a("h3",{attrs:{id:"问题-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-2"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[a("code",[t._v("hash")]),t._v("模式和"),a("code",[t._v("history")]),t._v("模式的区别?")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.jb51.net/article/144341.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jb51.net/article/144341.htm"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("vue-devtools不能使用？")]),t._v(" "),a("ol",[a("li",[t._v("如果用了production/minified的vue，devtools的选项是默认关闭的所以没法用")]),t._v(" "),a("li",[t._v("如果页面是要用file://打开，需要到chrome设置->扩展应用->把“允许访问文件网址”的选项打开，才能读取到内容使用 ​​​​")])]),t._v(" "),a("h2",{attrs:{id:"vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" vuex")]),t._v(" "),a("h3",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[t._v("一、 vuex-router-sync")]),t._v(" "),a("p",[t._v("把 vue-router 当前的 $route 同步为 vuex 状态的一部分。")]),t._v(" "),a("p",[t._v("工作原理\n该库在 store 上增加了一个名为 route 的模块，用于表示当前路由的状态。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// current path (字符串类型)")]),t._v("\nstore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// current params (对象类型)")]),t._v("\nstore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// current query (对象类型)")]),t._v("\n")])])]),a("p",[t._v("当被导航到一个新路由时，store 的状态会被更新。")]),t._v(" "),a("p",[a("code",[t._v("store.state.route")]),t._v(" 是不可变更的，因为该值取自 URL，是真实的来源。你不应该通过修改该值去触发浏览器的导航行为。取而代之的是调用 "),a("code",[t._v("$router.push()")]),t._v(" 或者 "),a("code",[t._v("$router.go()")]),t._v("。另外，你可以通过 "),a("code",[t._v("$router.push({ query: {...}})")]),t._v(" 来更新当前路径的查询字符串。")])])}),[],!1,null,null,null);e.default=r.exports}}]);