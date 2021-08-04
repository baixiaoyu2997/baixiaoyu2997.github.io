(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{492:function(e,s,v){"use strict";v.r(s);var t=v(2),_=Object(t.a)({},(function(){var e=this,s=e.$createElement,v=e._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),v("p",[e._v("主要属性介绍：")]),e._v(" "),v("ul",[v("li",[e._v("name:包名称，必须少于 214 个字符，不能包含空格，只能包含小写字母、连字符"),v("code",[e._v("-")]),e._v("或下划线"),v("code",[e._v("_")]),e._v(",这是因为当软件包在 npm 上发布时，它会基于此属性获得自己的 URL。")]),e._v(" "),v("li",[e._v("main:引用时，指定默认位置。")]),e._v(" "),v("li",[e._v("private：设置 true 可以防止意外地发不到 npm")]),e._v(" "),v("li",[e._v("engines：设置了该包使用了哪个版本的 node")]),e._v(" "),v("li",[e._v("browserslist：用于告知要支持哪些浏览器")]),e._v(" "),v("li",[e._v("version:版本号"),v("code",[e._v("x.x.x")]),e._v("，这些数字的含义是，金修复缺陷的版本是补丁版本，引入向后兼容的更改的版本是次版本，具有重大更改的是主版本。")]),e._v(" "),v("li",[e._v("license：软件包的许可证")]),e._v(" "),v("li",[e._v("keywords：关键字，便于搜索用")])]),e._v(" "),v("h3",{attrs:{id:"软件包版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#软件包版本"}},[e._v("#")]),e._v(" 软件包版本")]),e._v(" "),v("p",[e._v("语法使用了 semver（语义版本控制），具有以下规则：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("~")]),e._v(": 如果写入的是 〜0.13.0，则只更新补丁版本：即 0.13.1 可以，但 0.14.0 不可以。")]),e._v(" "),v("li",[v("code",[e._v("^")]),e._v(": 如果写入的是 ^0.13.0，则要更新补丁版本和次版本：即 0.13.1、0.14.0、依此类推。")]),e._v(" "),v("li",[v("code",[e._v("*")]),e._v(": 如果写入的是 *，则表示接受所有的更新，包括主版本升级。")]),e._v(" "),v("li",[v("code",[e._v(">")]),e._v(": 接受高于指定版本的任何版本。")]),e._v(" "),v("li",[v("code",[e._v(">=")]),e._v(": 接受等于或高于指定版本的任何版本。")]),e._v(" "),v("li",[v("code",[e._v("<=")]),e._v(": 接受等于或低于指定版本的任何版本。")]),e._v(" "),v("li",[v("code",[e._v("<")]),e._v(": 接受低于指定版本的任何版本。")])]),e._v(" "),v("p",[e._v("还有其他规则：")]),e._v(" "),v("ul",[v("li",[e._v("无符号：仅接收指定的特定版本。")]),e._v(" "),v("li",[e._v("latest：使用可用的最新版本。")])]),e._v(" "),v("p",[e._v("还可以在范围内组合以上大部分内容，例如：1.0.0 || >=1.1.0 <1.2.0，即使用 1.0.0 或从 1.1.0 开始但低于 1.2.0 的版本。")]),e._v(" "),v("h2",{attrs:{id:"入口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#入口"}},[e._v("#")]),e._v(" 入口")]),e._v(" "),v("h3",{attrs:{id:"main"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#main"}},[e._v("#")]),e._v(" main")]),e._v(" "),v("p",[e._v("定义了 "),v("code",[e._v("npm")]),e._v(" 包的入口文件，browser 环境和 node 环境均可使用")]),e._v(" "),v("h3",{attrs:{id:"module"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[e._v("#")]),e._v(" module")]),e._v(" "),v("p",[e._v("定义 "),v("code",[e._v("npm")]),e._v(" 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用")]),e._v(" "),v("h3",{attrs:{id:"browser"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#browser"}},[e._v("#")]),e._v(" browser")]),e._v(" "),v("p",[e._v("定义 "),v("code",[e._v("npm")]),e._v(" 包在 browser 环境下的入口文件")]),e._v(" "),v("h3",{attrs:{id:"优先级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[e._v("#")]),e._v(" 优先级")]),e._v(" "),v("p",[v("strong",[v("code",[e._v("browser")]),e._v(" = "),v("code",[e._v("browser+mjs")]),e._v(" > "),v("code",[e._v("module")]),e._v(" > "),v("code",[e._v("browser+cjs")]),e._v(" > "),v("code",[e._v("main")])])]),e._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),v("p",[e._v("如果 "),v("code",[e._v("npm")]),e._v(" 包导出的是 ESM 规范的包，使用 module")]),e._v(" "),v("p",[e._v("如果 "),v("code",[e._v("npm")]),e._v(" 包只在 web 端使用，并且严禁在 server 端使用，使用 browser。")]),e._v(" "),v("p",[e._v("如果 "),v("code",[e._v("npm")]),e._v(" 包只在 server 端使用，使用 main")]),e._v(" "),v("p",[e._v("如果 "),v("code",[e._v("npm")]),e._v(" 包在 web 端和  server 端都允许使用，使用 browser 和 main")]),e._v(" "),v("p",[e._v("其他更加复杂的情况，如"),v("code",[e._v("npm")]),e._v(" 包需要提供 commonJS 与 ESM 等多个规范的多个代码文件，请参考上述使用场景或流程图")]),e._v(" "),v("blockquote",[v("p",[e._v("参考：https://juejin.cn/post/6844903862977953806")])]),e._v(" "),v("h2",{attrs:{id:"files"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[e._v("#")]),e._v(" files")]),e._v(" "),v("p",[e._v("files是一个文件数组，描述了将软件包作为依赖项安装时要包括的条目。如果在数组里面声明了一个文件夹，那也会包含文件夹中的文件。某些特殊文件和目录也被包括或排除在外，无论它们是否存在于文件数组中。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("以下文件无论是否设置，总是包含：\n*   `package.json`\n*   `README`\n*   `CHANGES`/`CHANGELOG`/`HISTORY`\n*   `LICENSE`/`LICENCE`\n*   `NOTICE`\n*   The file in the “main” field\n\n以下文件总是被忽略：\n*   `.git`\n*   `CVS`\n*   `.svn`\n*   `.hg`\n*   `.lock-wscript`\n*   `.wafpickle-N`\n*   `.*.swp`\n*   `.DS_Store`\n*   `._*`\n*   `npm-debug.log`\n*   `.npmrc`\n*   `node_modules`\n*   `config.gypi`\n*   `*.orig`\n*   `package-lock.json`(use shrinkwrap instead)\n")])])]),v("h2",{attrs:{id:"dependencies"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" dependencies")]),e._v(" "),v("h3",{attrs:{id:"git-urls-as-dependencies"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-urls-as-dependencies"}},[e._v("#")]),e._v(" Git URLs as Dependencies")]),e._v(" "),v("p",[e._v("Examples：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("git+ssh://git@github.com:npm/cli.git#v1.0.27\ngit+ssh://git@github.com:npm/cli#semver:^5.0\ngit+https://isaacs@github.com/npm/cli.git\ngit://github.com/npm/cli.git#v1.0.27\n")])])]),v("p",[e._v("实例：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  ...\n  "dependencies": {\n    "remember-scroll": "git+ssh://git@github.com:fengxianqi/remember-scroll.git#v0.1.1",\n  },\n  "devDependencies": {\n    ...\n  }\n}\n')])])]),v("h2",{attrs:{id:"publishconfig"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#publishconfig"}},[e._v("#")]),e._v(" publishConfig")]),e._v(" "),v("p",[e._v("设置推送时候的地址："),v("code",[e._v('"publishConfig": { "registry": "https://registry.npmjs.com/"}')])])])}),[],!1,null,null,null);s.default=_.exports}}]);