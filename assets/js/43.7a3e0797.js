(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{474:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("h3",{attrs:{id:"不用浪费时间去想类名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不用浪费时间去想类名"}},[t._v("#")]),t._v(" 不用浪费时间去想类名")]),t._v(" "),a("h3",{attrs:{id:"你的css不会增多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你的css不会增多"}},[t._v("#")]),t._v(" 你的css不会增多")]),t._v(" "),a("h3",{attrs:{id:"更安全的对样式进行修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更安全的对样式进行修改"}},[t._v("#")]),t._v(" 更安全的对样式进行修改")]),t._v(" "),a("p",[t._v("CSS是全局性的，当你做出改变时，你永远不知道你会破坏什么。HTML中的类是本地的，所以你可以改变它们，而不用担心其他东西会被破坏。")]),t._v(" "),a("h2",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ol",[a("li",[t._v("代码量的增加，侧面增加了第一时间发现拼写错误的难度，尤其是class中。")]),t._v(" "),a("li",[t._v("模版中大量的class代码导致业务逻辑难以分清和快速查找")]),t._v(" "),a("li",[t._v("编译速度变慢")]),t._v(" "),a("li",[t._v("团队的学习成本。虽然官方提供了默认的类名，并且有插件智能提示。但是遇到自定义样式项目还是要重新学习")])]),t._v(" "),a("h2",{attrs:{id:"最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),a("ol",[a("li",[t._v("可以适当使用"),a("code",[t._v("div")]),t._v("为代码结构分层，这样可以在大量大码中使用折叠，来快速找到目标元素")]),t._v(" "),a("li",[t._v("更适合用在小项目上，不适合用在长时间维护的大型项目")])]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("h3",{attrs:{id:"tailwind和nuxt同时使用时加载速度太慢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tailwind和nuxt同时使用时加载速度太慢"}},[t._v("#")]),t._v(" tailwind和nuxt同时使用时加载速度太慢？")]),t._v(" "),a("p",[t._v("解决方案参考这篇"),a("a",{attrs:{href:"https://nystudio107.com/blog/speeding-up-tailwind-css-builds",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),a("OutboundLink")],1),t._v(",同时可以关注tailwind的性能优化"),a("a",{attrs:{href:"https://github.com/tailwindlabs/tailwindcss/pull/3718",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"tailwind和px-to-viewport同时使用时没有被转换的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tailwind和px-to-viewport同时使用时没有被转换的问题"}},[t._v("#")]),t._v(" tailwind和px-to-viewport同时使用时没有被转换的问题？")]),t._v(" "),a("p",[t._v("需要在postcss的插件中优先指定加载tailwind，nuxt"),a("a",{attrs:{href:"https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#postcss-plugins--nuxtjstailwindcss",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v("有详细说明：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" join "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    postcss"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        tailwindcss"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tailwind.config.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postcss-pxtorem'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          propList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!border*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"为什么不直接使用内联样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么不直接使用内联样式"}},[t._v("#")]),t._v(" 为什么不直接使用内联样式？")]),t._v(" "),a("ol",[a("li",[t._v("约束：内联样式的值是可以随便填写的，使用功能类，你需要预先定义好样式。")]),t._v(" "),a("li",[t._v("响应式设计")]),t._v(" "),a("li",[t._v("悬停、焦点、和其他状态，内联无法实现。")])]),t._v(" "),a("h3",{attrs:{id:"如何解决同样权重-样式被覆盖问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决同样权重-样式被覆盖问题"}},[t._v("#")]),t._v(" 如何解决同样权重，样式被覆盖问题？")]),t._v(" "),a("p",[t._v("可以设置"),a("code",[t._v("important")]),t._v("为"),a("code",[t._v("true")]),t._v("或者"),a("code",[t._v("css选择器")]),t._v("来为"),a("code",[t._v("tailwind")]),t._v("加权")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  purge"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  important"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fontSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s29'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'29px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  variants"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    extend"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("另外tailwind会因为导入"),a("code",[t._v("base")]),t._v("包而提供一些默认样式，需要小心。")]),t._v(" "),a("h3",{attrs:{id:"如何修改其他-ui-库变量为-tailwind-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何修改其他-ui-库变量为-tailwind-类"}},[t._v("#")]),t._v(" 如何修改其他 UI 库变量为 tailwind 类？")]),t._v(" "),a("p",[a("code",[t._v("@apply")])]),t._v(" "),a("h3",{attrs:{id:"如何通过tailwind修改其他-ui-库深层组件类的样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何通过tailwind修改其他-ui-库深层组件类的样式"}},[t._v("#")]),t._v(" 如何通过tailwind修改其他 UI 库深层组件类的样式？")]),t._v(" "),a("p",[t._v("初步方法，使用"),a("code",[t._v("@apply")]),t._v("进行覆盖")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".customCell")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".van-cell__title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        @apply py-2 px-4 bg-indigo-500 text-white\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"如何禁用默认的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何禁用默认的配置"}},[t._v("#")]),t._v(" 如何禁用默认的配置？")]),t._v(" "),a("p",[t._v("将"),a("code",[t._v("tailwind.config.js")]),t._v("中的"),a("code",[t._v("presets")]),t._v("设置成空数组")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);