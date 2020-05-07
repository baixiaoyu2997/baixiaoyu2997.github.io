(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{415:function(a,e,s){"use strict";s.r(e);var t=s(1),n=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"lerna是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna是什么？","aria-hidden":"true"}},[a._v("#")]),a._v(" Lerna是什么？")]),a._v(" "),s("p",[a._v("Lerna是一个工具，它优化了使用git和npm管理多包存储库的工作流（这里会涉及到"),s("code",[a._v("monorepo")]),a._v("的概念）。"),s("code",[a._v("vue")]),a._v(","),s("code",[a._v("babel")]),a._v(","),s("code",[a._v("react")]),a._v("等都在用。")]),a._v(" "),s("h2",{attrs:{id:"monorepo是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monorepo是什么？","aria-hidden":"true"}},[a._v("#")]),a._v(" monorepo是什么？")]),a._v(" "),s("p",[a._v("monorepo(monolithic repository)，与multirepo相对，分别是单代码仓库与多代码仓库（one-repository-per-module）")]),a._v(" "),s("h2",{attrs:{id:"工作的两种模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作的两种模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 工作的两种模式")]),a._v(" "),s("h3",{attrs:{id:"fixed-locked-mode-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixed-locked-mode-default","aria-hidden":"true"}},[a._v("#")]),a._v(" Fixed/Locked mode (default)")]),a._v(" "),s("p",[a._v("vue,babel都是用这种，在"),s("code",[a._v("publish")]),a._v("的时候,会在"),s("code",[a._v("lerna.json")]),a._v("文件里面"),s("code",[a._v('"version": "0.1.5"')]),a._v(",依据这个号，进行增加，只选择一次，其他有改动的包自动更新版本号。")]),a._v(" "),s("h3",{attrs:{id:"independent-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#independent-mode","aria-hidden":"true"}},[a._v("#")]),a._v(" Independent mode")]),a._v(" "),s("p",[s("code",[a._v("lerna init --independent")]),a._v("初始化项目。 "),s("code",[a._v("lerna.json")]),a._v("文件里面"),s("code",[a._v('"version": "independent"')]),a._v(",每次"),s("code",[a._v("publish")]),a._v("时，您都将得到一个提示符，提示每个已更改的包，以指定是补丁、次要更改、主要更改还是自定义更改。\n"),s("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/Lerna%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97_2020-05-06-21-32-36.png",alt:"Lerna学习指南_2020-05-06-21-32-36"}})]),a._v(" "),s("h2",{attrs:{id:"start-init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-init","aria-hidden":"true"}},[a._v("#")]),a._v(" Start init")]),a._v(" "),s("div",{staticClass:"language-SH extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" lerna -g\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" lerna-gp "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_")]),a._v("\n$ lerna init "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 用的默认的固定模式，vue babel等都是这个")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Add packages")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" packages\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" daybyday gpnode gpwebpack\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#分别进入三个目录初始化成包")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" daybyday\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" init -y \n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/gpnode\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" init -y\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/gpwebpack\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" init -y\n\n")])])]),s("h3",{attrs:{id:"项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 项目结构")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("➜  lerna-gp git:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ✗ tree\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n├── lerna.json\n├── package.json\n└── packages\n    ├── daybyday\n    │   └── package.json\n    ├── gpnode\n    │   └── package.json\n    └── gpwebpack\n        └── package.json\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" files\n\n")])])]),s("h2",{attrs:{id:"set-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up","aria-hidden":"true"}},[a._v("#")]),a._v(" Set up")]),a._v(" "),s("h3",{attrs:{id:"set-up-git-npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-git-npm","aria-hidden":"true"}},[a._v("#")]),a._v(" Set up git + npm")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("✗ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" origin git@gitlab.yourSite.com:gaopo/lerna-gp.git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看是否登录")]),a._v("\n✗ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("whoami")]),a._v("\ngp0320\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#没有则登录 ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" login \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输入username password ")]),a._v("\nLogged "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" as gp0320 on https://registry.npmjs.org/. "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# succeed")]),a._v("\n\n")])])]),s("h3",{attrs:{id:"set-up-yarn的workspaces模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-yarn的workspaces模式","aria-hidden":"true"}},[a._v("#")]),a._v(" Set up yarn的workspaces模式")]),a._v(" "),s("blockquote",[s("p",[a._v("默认是npm下载包, 而且每个子package都有自己的node_modules，通过这样设置后，只有顶层有一个node_modules，lerna默认是通过"),s("code",[a._v("bootstrap")]),a._v("来关联子包依赖，但是使用yarn的workspaces效果更好，所以通常做法是通过yarn workspaces+lerna使用。")])]),a._v(" "),s("ul",[s("li",[a._v("修改顶层 "),s("code",[a._v("package.json and lerna.json")])])]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("# package.json 文件加入\n "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"private"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"workspaces"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"packages/*"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n# lerna.json 文件加入\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"useWorkspaces"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"npmClient"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"yarn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[s("code",[a._v("yarn")]),a._v("安装后，不会更新根目录的"),s("code",[a._v("package.json")]),a._v(",而是更新"),s("code",[a._v("yarn.lock")]),a._v("文件,并且所有子包的依赖项会安装到根目录下的"),s("code",[a._v("node_modules")]),a._v(",所有子包的"),s("code",[a._v("node_modules")]),a._v("只有"),s("code",[a._v(".bin")]),a._v("目录下的指令，指令的链接位置也是指到根目录下的"),s("code",[a._v("node_modules/xxx")])]),a._v(" "),s("h2",{attrs:{id:"lerna-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-script","aria-hidden":"true"}},[a._v("#")]),a._v(" Lerna Script")]),a._v(" "),s("h3",{attrs:{id:"lerna-init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-init","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna init")]),a._v(" "),s("p",[a._v("创建一个新的Lerna库或将现有库升级到Lerna的当前版本。")]),a._v(" "),s("h3",{attrs:{id:"lerna-create-name-loc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-create-name-loc","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna create < name > [loc]")]),a._v(" "),s("blockquote",[s("p",[a._v("在"),s("code",[a._v("packages")]),a._v("目录下创建一个包，name包名（必填、string），loc 包位置（string）")])]),a._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('# 根目录的package.json \n "workspaces": [\n    "packages/*",\n    "packages/@gp0320/*"\n  ],\n  \n# 创建一个包gpnote默认放在 workspaces[0]所指位置\nlerna create gpnote \n\n# 创建一个包gpnote指定放在 packages/@gp0320文件夹下，注意必须在workspaces先写入packages/@gp0320，看上面\nlerna create gpnote packages/@gp0320\n\n')])])]),s("h3",{attrs:{id:"lerna-add-version-dev-exact"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-add-version-dev-exact","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna add [@version] [--dev] [--exact]")]),a._v(" "),s("blockquote",[s("p",[a._v("增加本地或者远程"),s("code",[a._v("package")]),a._v("做为当前项目"),s("code",[a._v("packages")]),a._v("里面的依赖，会添加到各个子包的"),s("code",[a._v("package.json")]),a._v("中")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("--dev")]),a._v(" devDependencies 替代 "),s("code",[a._v("dependencies")])]),a._v(" "),s("li",[s("code",[a._v("--exact")]),a._v(" 安装准确版本，就是安装的包版本前面不带"),s("code",[a._v("^")]),a._v(", Eg: "),s("code",[a._v('"^2.20.0" ➜ "2.20.0"')])])]),a._v(" "),s("h3",{attrs:{id:"examples-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加module-1包到 带有'prefix-'前缀的文件夹")]),a._v("\nlerna "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" module-1 packages/prefix-*\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装 module-1 到 module-2")]),a._v("\nlerna "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" module-1 --scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("module-2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装 module-1 到 module-2 ，并且修改为devDependencies")]),a._v("\nlerna "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" module-1 --scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("module-2 --dev\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 为所有子包安装module-1包，除了它自己")]),a._v("\nlerna "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" module-1\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 为所有包安装babel-core")]),a._v("\nlerna "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" babel-core\n\n")])])]),s("h3",{attrs:{id:"lerna-bootstrap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-bootstrap","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna bootstrap")]),a._v(" "),s("p",[a._v("默认是npm i,因为我们指定过yarn，所以只需要运行"),s("code",[a._v("yarn")]),a._v("会把所有包的依赖安装到根"),s("code",[a._v("node_modules")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"lerna-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-list","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna list")]),a._v(" "),s("p",[a._v("列出所有的包，如果与你文夹里面的不符，进入那个包运行"),s("code",[a._v("yarn init -y")]),a._v("解决")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("➜  lerna-gp git:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ✗ lerna list\nlerna notice cli v3.14.1\ndaybyday\ngpnode\ngpnote\ngpwebpack\nlerna success found "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" packages\n")])])]),s("h3",{attrs:{id:"lerna-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-import","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna import")]),a._v(" "),s("p",[a._v("导入本地已经存在的包\n"),s("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/Lerna%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97_2020-05-06-21-41-55.png",alt:"Lerna学习指南_2020-05-06-21-41-55"}})]),a._v(" "),s("h3",{attrs:{id:"lerna-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-run","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna run")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("lerna run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" script "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -- "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 运行所有包里面的有这个script的命令")]),a._v("\n$ lerna run --scope my-component "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])])]),s("h3",{attrs:{id:"lerna-exec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-exec","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna exec")]),a._v(" "),s("p",[a._v("运行任意命令在每个包")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ lerna "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -- "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# runs the command in all packages")]),a._v("\n$ lerna "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -- "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ./node_modules\n$ lerna "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -- protractor conf.js\nlerna "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" --scope my-component -- "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -la\n")])])]),s("h3",{attrs:{id:"lerna-link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-link","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna link")]),a._v(" "),s("p",[a._v("项目包建立软链，类似npm link")]),a._v(" "),s("h3",{attrs:{id:"lerna-clean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-clean","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna clean")]),a._v(" "),s("p",[a._v("删除所有包的node_modules目录\n"),s("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/Lerna%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97_2020-05-06-21-43-25.png",alt:"Lerna学习指南_2020-05-06-21-43-25"}})]),a._v(" "),s("h3",{attrs:{id:"lerna-changed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-changed","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna changed")]),a._v(" "),s("p",[a._v("列出下次发版lerna publish 要更新的包。"),s("br"),a._v("\n原理： 需要先git add,git commit 提交。 然后内部会运行"),s("code",[a._v("git diff --name-only v")]),a._v("版本号，搜集改动的包，就是下次要发布的。并不是网上人说的所有包都是同一个版全发布。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("➜  lerna-repo git:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ✗ lerna changed                                     \ninfo cli using "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" version of lerna\nlerna notice cli v3.14.1\nlerna info Looking "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" changed packages since v0.1.4\ndaybyday "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#只改过这一个 那下次publish将只上传这一个")]),a._v("\nlerna success found "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" package ready to publish\n\n")])])]),s("h3",{attrs:{id:"lerna-publish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-publish","aria-hidden":"true"}},[a._v("#")]),a._v(" lerna publish")]),a._v(" "),s("p",[a._v('会打tag，上传git,上传npm。 如果你的包名是带scope的例如："name": "@gp0320/gpwebpack", 那需要在packages.json添加')]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"publishConfig"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"access"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"public"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("lerna publish \nlerna info current version "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),a._v(".4\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#这句意思是查找从v0.1.4到现在改动过的包")]),a._v("\nlerna info Looking "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" changed packages since v0.1.4 \n\n? Select a new version "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("currently "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),a._v(".4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" Patch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),a._v(".5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\nChanges:\n - daybyday: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),a._v(".3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),a._v(".5 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#只改动过一个")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\nSuccessfully published:\n - daybyday@0.1.5\nlerna success published "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" package\n\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5ced1609e51d455d850d3a6c",target:"_blank",rel:"noopener noreferrer"}},[a._v("Lerna 中文教程详解"),s("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=n.exports}}]);