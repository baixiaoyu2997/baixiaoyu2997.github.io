(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{484:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),a("ol",[a("li",[t._v("本文章使用的编辑器为"),a("code",[t._v("vscode")])]),t._v(" "),a("li",[t._v("安装插件 "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier-Standard"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" Node")]),t._v(" "),a("h3",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),a("p",[t._v("eslint+prettier+standard来实现js代码校验,同时保证在format时与eslint保持一致。")]),t._v(" "),a("h3",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("方法一：")]),t._v(" "),a("p",[t._v("首先初始化"),a("code",[t._v("eslint")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npx eslint --init\n")])])]),a("p",[t._v("然后根据提示依次选择：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("To check syntax, find problems, and enforce code style")])]),t._v(" "),a("li",[a("code",[t._v("JavaScript modules (import/export)")])]),t._v(" "),a("li",[a("code",[t._v("None of these")])]),t._v(" "),a("li",[t._v("是否使用ts，根据个人输入选择"),a("code",[t._v("y")]),t._v("或者"),a("code",[t._v("n")])]),t._v(" "),a("li",[t._v("只勾选"),a("code",[t._v("Node")])]),t._v(" "),a("li",[a("code",[t._v("Use a popular style guide")])]),t._v(" "),a("li",[a("code",[t._v("Standard: https://github.com/standard/standard")])]),t._v(" "),a("li",[t._v("根据个人情况选择"),a("code",[t._v("JavaScript")]),t._v("或者"),a("code",[t._v("yaml")]),t._v("或者"),a("code",[t._v("json")])]),t._v(" "),a("li",[t._v("提醒是否下载这些依赖，选择"),a("code",[t._v("YES")])])]),t._v(" "),a("p",[t._v("然后会自动生成"),a("code",[t._v("eslint")]),t._v("配置文件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  env"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    es6"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'standard'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  globals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Atomics"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'readonly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SharedArrayBuffer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'readonly'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  parserOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ecmaVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("package.json文件会自动添加以下依赖：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"devDependencies": {\n    "eslint": "^7.0.0",\n    "eslint-config-standard": "^14.1.1",\n    "eslint-plugin-import": "^2.20.2",\n    "eslint-plugin-node": "^11.1.0",\n    "eslint-plugin-promise": "^4.2.1",\n    "eslint-plugin-standard": "^4.0.1"\n}\n')])])]),a("p",[t._v("方法二：")]),t._v(" "),a("p",[t._v("直接安装方法一中的"),a("code",[t._v("package.json")]),t._v("中的依赖,添加方法一种的"),a("code",[t._v("eslint")]),t._v("配置文件")]),t._v(" "),a("h2",{attrs:{id:"js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[t._v("#")]),t._v(" JS")]),t._v(" "),a("h2",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" vue")]),t._v(" "),a("h2",{attrs:{id:"react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" react")]),t._v(" "),a("h2",{attrs:{id:"prettier介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prettier介绍"}},[t._v("#")]),t._v(" prettier介绍")]),t._v(" "),a("p",[t._v("如果有多个层级目录的prettier配置文件，那么会采取就近原则，如果当前目录没有配置文件，则会去查找父级目录，以此类推。")]),t._v(" "),a("h2",{attrs:{id:"stylelint介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylelint介绍"}},[t._v("#")]),t._v(" stylelint介绍")]),t._v(" "),a("p",[t._v("如果有多个层级目录的stylelint配置文件，那么会采取就近原则，如果当前目录没有配置文件，则会去查找父级目录，以此类推。")]),t._v(" "),a("h2",{attrs:{id:"git提交校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git提交校验"}},[t._v("#")]),t._v(" git提交校验")]),t._v(" "),a("p",[t._v("根目录创建配置文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// commitlint.config.js\nmodule.exports = { extends: ["@commitlint/config-conventional"] };\n')])])]),a("p",[t._v("在"),a("code",[t._v("package.json")]),t._v("中添加包依赖和触发时机")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.{js,vue}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.{css,vue}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -E HUSKY_GIT_PARAMS"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@commitlint/cli"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^9.1.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@commitlint/config-conventional"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^9.1.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.2.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^10.2.11"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);