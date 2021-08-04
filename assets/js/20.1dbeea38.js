(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{447:function(e,t,s){"use strict";s.r(t);var a=s(2),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),s("h2",{attrs:{id:"extends"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[e._v("#")]),e._v(" extends")]),e._v(" "),s("p",[e._v("extend 提供的是 eslint 现有规则的一系列预设。")]),e._v(" "),s("h3",{attrs:{id:"recommanded"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommanded"}},[e._v("#")]),e._v(" recommanded")]),e._v(" "),s("p",[e._v("recommanded相当于继承了plugin并且对其进行了规则配置：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "extends": ["plugin:xxx/recommended"] // eslint-plugin-xxx + eslint-config-xxx\n}\n')])])]),s("blockquote",[s("p",[e._v("前提是已经安装了相关依赖")])]),e._v(" "),s("h2",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" plugins")]),e._v(" "),s("p",[e._v("plugins提供了除 eslint 规定之外额外的规则。plugins只提供规则，但是不会设置eslint配置。\n添加plugin时，去掉前缀"),s("code",[e._v("eslint-plugin-*")]),e._v(",例如：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"plugins": [\n    // 这里安装了 eslint-plugin-import\n    "import"\n]\n')])])]),s("h2",{attrs:{id:"rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[e._v("#")]),e._v(" rules")]),e._v(" "),s("p",[e._v("rules是eslint规则配置，可以使用以下值之一：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("off")]),e._v("或"),s("code",[e._v("0")]),e._v("：关闭规则")]),e._v(" "),s("li",[s("code",[e._v("warn")]),e._v("或者"),s("code",[e._v("1")]),e._v("：将规则视为一个警告（不会影响退出码）")]),e._v(" "),s("li",[s("code",[e._v("error")]),e._v("或者"),s("code",[e._v("2")]),e._v("：将规则视为一个错误 (退出码为1)")])]),e._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),s("h3",{attrs:{id:"配置级联和优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置级联和优先级"}},[e._v("#")]),e._v(" 配置级联和优先级")]),e._v(" "),s("p",[e._v("eslint会根据每个文件夹下的配置文件进行校验，所以"),s("code",[e._v("eslint")]),e._v("是支持不同文件夹对应不同配置的，具体内容查看"),s("a",{attrs:{href:"https://eslint.bootcss.com/docs/user-guide/configuring#configuration-cascading-and-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"代码中禁用eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码中禁用eslint"}},[e._v("#")]),e._v(" 代码中禁用eslint")]),e._v(" "),s("p",[e._v("可以使用vscode的智能提示"),s("code",[e._v("eslint-disable-next-line")]),e._v("来禁用此语句下的错误，如果该语句有多条错误，那么可以用`,分隔规则：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// eslint-disable-next-line import/no-mutable-exports,prefer-const\nexport let _axios = {}\n")])])]),s("h2",{attrs:{id:"最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[e._v("#")]),e._v(" 最佳实践")]),e._v(" "),s("ul",[s("li",[e._v("在你项目根目录下的 "),s("code",[e._v("package.json")]),e._v(" 文件或者 "),s("code",[e._v(".eslintrc.*")]),e._v(" 文件里的 "),s("code",[e._v("eslintConfig")]),e._v(" 字段下设置 "),s("code",[e._v('"root": true')]),e._v("。"),s("code",[e._v("ESLint")]),e._v(" 一旦发现配置文件中有 "),s("code",[e._v('"root": true')]),e._v("，它就会停止在父级目录中寻找。")])]),e._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),s("h3",{attrs:{id:"设置-eslintignore无效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-eslintignore无效"}},[e._v("#")]),e._v(" 设置.eslintignore无效？")]),e._v(" "),s("p",[e._v("VSCode无法识别每个项目下的.eslintignore文件所致，它默认只会识别根目录下这个文件。可以把忽略文件放到根目录下。")]),e._v(" "),s("blockquote",[s("p",[e._v("引用：https://juejin.im/post/6844904135733706760")])]),e._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://liaoyongfu.github.io/2018/10/11/javascript/2018%E5%B9%B4%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92%EF%BC%88eslint%E7%AF%87%EF%BC%89/",target:"_blank",rel:"noopener noreferrer"}},[e._v("2018年学习计划（eslint篇）"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);