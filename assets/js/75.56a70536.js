(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{505:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),a("ol",[a("li",[t._v("本文章使用的编辑器为"),a("code",[t._v("vscode")])]),t._v(" "),a("li",[t._v("安装插件 "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier-Standard"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" Node")]),t._v(" "),a("h3",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),a("p",[t._v("eslint+prettier+standard来实现js代码校验,同时保证在format时与eslint保持一致。")]),t._v(" "),a("h3",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("方法一：")]),t._v(" "),a("p",[t._v("首先初始化"),a("code",[t._v("eslint")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npx eslint --init\n")])])]),a("p",[t._v("然后根据提示依次选择：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("To check syntax, find problems, and enforce code style")])]),t._v(" "),a("li",[a("code",[t._v("JavaScript modules (import/export)")])]),t._v(" "),a("li",[a("code",[t._v("None of these")])]),t._v(" "),a("li",[t._v("是否使用ts，根据个人输入选择"),a("code",[t._v("y")]),t._v("或者"),a("code",[t._v("n")])]),t._v(" "),a("li",[t._v("只勾选"),a("code",[t._v("Node")])]),t._v(" "),a("li",[a("code",[t._v("Use a popular style guide")])]),t._v(" "),a("li",[a("code",[t._v("Standard: https://github.com/standard/standard")])]),t._v(" "),a("li",[t._v("根据个人情况选择"),a("code",[t._v("JavaScript")]),t._v("或者"),a("code",[t._v("yaml")]),t._v("或者"),a("code",[t._v("json")])]),t._v(" "),a("li",[t._v("提醒是否下载这些依赖，选择"),a("code",[t._v("YES")])])]),t._v(" "),a("p",[t._v("然后会自动生成"),a("code",[t._v("eslint")]),t._v("配置文件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  env"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    es6"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'standard'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  globals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Atomics"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'readonly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SharedArrayBuffer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'readonly'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  parserOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ecmaVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("package.json文件会自动添加以下依赖：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"devDependencies": {\n    "eslint": "^7.0.0",\n    "eslint-config-standard": "^14.1.1",\n    "eslint-plugin-import": "^2.20.2",\n    "eslint-plugin-node": "^11.1.0",\n    "eslint-plugin-promise": "^4.2.1",\n    "eslint-plugin-standard": "^4.0.1"\n}\n')])])]),a("p",[t._v("方法二：")]),t._v(" "),a("p",[t._v("直接安装方法一中的"),a("code",[t._v("package.json")]),t._v("中的依赖,添加方法一种的"),a("code",[t._v("eslint")]),t._v("配置文件")]),t._v(" "),a("h2",{attrs:{id:"js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[t._v("#")]),t._v(" JS")]),t._v(" "),a("h2",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" vue")]),t._v(" "),a("h2",{attrs:{id:"react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" react")]),t._v(" "),a("h2",{attrs:{id:"prettier介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prettier介绍"}},[t._v("#")]),t._v(" prettier介绍")]),t._v(" "),a("p",[t._v("如果有多个层级目录的prettier配置文件，那么会采取就近原则，如果当前目录没有配置文件，则会去查找父级目录，以此类推。")]),t._v(" "),a("h2",{attrs:{id:"stylelint介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylelint介绍"}},[t._v("#")]),t._v(" stylelint介绍")]),t._v(" "),a("p",[t._v("如果有多个层级目录的stylelint配置文件，那么会采取就近原则，如果当前目录没有配置文件，则会去查找父级目录，以此类推。")]),t._v(" "),a("h2",{attrs:{id:"git-规范和-changelog-生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-规范和-changelog-生成"}},[t._v("#")]),t._v(" git 规范和 Changelog 生成")]),t._v(" "),a("p",[t._v("良好的 Git commit 规范优势：")]),t._v(" "),a("ul",[a("li",[t._v("加快 Code Review 的流程")]),t._v(" "),a("li",[t._v("根据 Git Commit 的元数据生成 Changelog")]),t._v(" "),a("li",[t._v("后续维护者可以知道 Feature 被修改的原因")])]),t._v(" "),a("p",[t._v("技术方案"),a("br"),t._v(" "),a("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/20191004115054.png",alt:"20191004115054.png"}}),a("br"),t._v("\n提交格式要求")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")])])]),a("p",[t._v("type 代表某次提交的类型，比如是修复一个 bug 还是增加一个新的 feature.所有的 type 类型如下:")]),t._v(" "),a("ul",[a("li",[t._v("build:主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交")]),t._v(" "),a("li",[t._v("ci:主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交,")]),t._v(" "),a("li",[t._v("docs:仅仅修改了文档，比如 README,CHANGELOG,CONTRIBUTE 等等")]),t._v(" "),a("li",[t._v("feat:新增 feature")]),t._v(" "),a("li",[t._v("fix:修复 bug")]),t._v(" "),a("li",[t._v("pref:优化相关，比如提升性能、体验")]),t._v(" "),a("li",[t._v("refactor:代码重构，没有加新功能或者修复 bug")]),t._v(" "),a("li",[t._v("revert:回滚到上一个版本")]),t._v(" "),a("li",[t._v("style:仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑")]),t._v(" "),a("li",[t._v("test:测试用例，包括单元测试、集成测试等")]),t._v(" "),a("li",[t._v("chore:不属于以上类型的其他类型")])]),t._v(" "),a("p",[t._v("安装："),a("br"),t._v(" "),a("code",[t._v("npm install husky --save-dev")]),a("br"),t._v(" "),a("code",[t._v("npm install --save-dev @commitlint/{cli,config-conventional}")]),a("br"),t._v("\n根目录创建配置文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// commitlint.config.js\nmodule.exports = { extends: ["@commitlint/config-conventional"] };\n')])])]),a("p",[t._v("在"),a("code",[t._v("package.json")]),t._v("中添加包依赖和触发时机")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.{js,vue}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.{css,vue}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -E HUSKY_GIT_PARAMS"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@commitlint/cli"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^9.1.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@commitlint/config-conventional"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^9.1.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.2.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^10.2.11"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"prettier和eslint冲突问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prettier和eslint冲突问题"}},[t._v("#")]),t._v(" prettier和eslint冲突问题？")]),t._v(" "),a("p",[t._v("禁用 ESLint中和Prettier配置有冲突的规则；再使用 Prettier 来替代 ESLint 的格式化功能；\n安装"),a("code",[t._v("eslint-config-prettier")]),t._v("插件配置集，把其配置到eslintrc规则的尾部。执行ESLint命令，会禁用那些和Prettier配置有冲突的规则。\n安装"),a("code",[t._v("eslint-plugin-prettier")]),t._v("插件，先使用Prettier对代码进行格式化，再并对不一致的地方进行标记；\n这两个包配合使用，可以达到运行 "),a("code",[t._v("eslint --fix")]),t._v(" 时，采用Prettier的配置规则 来格式化文件。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考：https://juejin.cn/post/6895889063111294990")])])])}),[],!1,null,null,null);s.default=n.exports}}]);