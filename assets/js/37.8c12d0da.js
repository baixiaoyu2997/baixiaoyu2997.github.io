(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{468:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"项目配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目配置"}},[t._v("#")]),t._v(" 项目配置")]),t._v(" "),a("h3",{attrs:{id:"tsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json"}},[t._v("#")]),t._v(" tsconfig.json")]),t._v(" "),a("p",[t._v("|属性|详细|\n｜-｜-｜\n｜compilerOptions｜编译相关配置｜")]),t._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h2",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[t._v("#")]),t._v(" 模块")]),t._v(" "),a("h3",{attrs:{id:"全局模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局模块"}},[t._v("#")]),t._v(" 全局模块")]),t._v(" "),a("p",[t._v("在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中。如在 foo.ts 里的以下代码。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果你在相同的项目里创建了一个新的文件 bar.ts，TypeScript 类型系统将会允许你使用变量 foo，就好像它在全局可用一样：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const bar = foo; // allowed\n")])])]),a("h3",{attrs:{id:"文件模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件模块"}},[t._v("#")]),t._v(" 文件模块")]),t._v(" "),a("p",[t._v("如果我们在ts文件中使用"),a("code",[t._v("export")]),t._v("或者"),a("code",[t._v("import")]),t._v("，那么这个文件就会被标记为一个模块，文件内定义的声明也不会“污染”全局命名空间")]),t._v(" "),a("h2",{attrs:{id:"接口-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口-interface"}},[t._v("#")]),t._v(" 接口（interface）")]),t._v(" "),a("p",[t._v("函数接受的值指定接口后，调用该函数的时候如果直接写成对象形式，有不符合接口定义的值会报错，但是如果先定义一个对象变量，再把这个变量传入函数中使用时，可以允许多余的值，例如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("interface Config{\n    a:string\n}\nfunction test(config:Config){\n    console.log(config)\n}\ntest({a:'1',b:2}) // 报错\n\nconst obj={a:'1',b:2}\ntest(obj) // 不报错\n")])])]),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("h3",{attrs:{id:"typescript-引入文件报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-引入文件报错"}},[t._v("#")]),t._v(" TypeScript 引入文件报错")]),t._v(" "),a("p",[t._v("TypeScript引入文件时，不能引入"),a("code",[t._v("index.ts")]),t._v("文件，应该改成"),a("code",[t._v("index.js")]),t._v("或者"),a("code",[t._v("index")])]),t._v(" "),a("h3",{attrs:{id:"webpack打包报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包报错"}},[t._v("#")]),t._v(" webpack打包报错")]),t._v(" "),a("p",[t._v("原因是先进行了编译，产生了js文件，然后代码import中并没有指定文件后缀名，webpack中resolve优先引用js文件导致，改成优先引用ts文件可以解决这个问题")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v("resolve: {\n"),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v('    extensions: [".js", ".ts", ".json"],\n')])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v('    extensions: [".ts", ".js", ".json"],\n')])]),t._v("},\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);