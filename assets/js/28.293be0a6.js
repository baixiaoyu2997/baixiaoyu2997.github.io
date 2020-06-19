(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{450:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"项目配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目配置"}},[s._v("#")]),s._v(" 项目配置")]),s._v(" "),a("h3",{attrs:{id:"tsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json"}},[s._v("#")]),s._v(" tsconfig.json")]),s._v(" "),a("p",[s._v("|属性|详细|\n｜-｜-｜\n｜compilerOptions｜编译相关配置｜")]),s._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("h2",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")]),s._v(" "),a("h3",{attrs:{id:"全局模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局模块"}},[s._v("#")]),s._v(" 全局模块")]),s._v(" "),a("p",[s._v("在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中。如在 foo.ts 里的以下代码。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果你在相同的项目里创建了一个新的文件 bar.ts，TypeScript 类型系统将会允许你使用变量 foo，就好像它在全局可用一样：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const bar = foo; // allowed\n")])])]),a("h3",{attrs:{id:"文件模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件模块"}},[s._v("#")]),s._v(" 文件模块")]),s._v(" "),a("p",[s._v("如果我们在ts文件中使用"),a("code",[s._v("export")]),s._v("或者"),a("code",[s._v("import")]),s._v("，那么这个文件就会被标记为一个模块，文件内定义的声明也不会“污染”全局命名空间")]),s._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("h3",{attrs:{id:"typescript-引入文件报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-引入文件报错"}},[s._v("#")]),s._v(" TypeScript 引入文件报错")]),s._v(" "),a("p",[s._v("TypeScript引入文件时，不能引入"),a("code",[s._v("index.ts")]),s._v("文件，应该改成"),a("code",[s._v("index.js")]),s._v("或者"),a("code",[s._v("index")])]),s._v(" "),a("h3",{attrs:{id:"webpack打包报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包报错"}},[s._v("#")]),s._v(" webpack打包报错")]),s._v(" "),a("p",[s._v("原因是先进行了编译，产生了js文件，然后代码import中并没有指定文件后缀名，webpack中resolve优先引用js文件导致，改成优先引用ts文件可以解决这个问题")]),s._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[s._v("resolve: {\n"),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[s._v('-    extensions: [".js", ".ts", ".json"],\n')]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[s._v('+    extensions: [".ts", ".js", ".json"],\n')]),s._v("},\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);