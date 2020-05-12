(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{459:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[a._v("#")]),a._v(" npm")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://juejin.im/post/5d08d3d3f265da1b7e103a4d",target:"_blank",rel:"noopener noreferrer"}},[a._v("你所需要的npm知识储备都在这了"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"局部安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部安装"}},[a._v("#")]),a._v(" 局部安装")]),a._v(" "),t("p",[a._v("在项目中局部安装包会在"),t("code",[a._v("node_modules\\.bin")]),a._v("目录下创建软连接")]),a._v(" "),t("h3",{attrs:{id:"设置淘宝镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置淘宝镜像"}},[a._v("#")]),a._v(" 设置淘宝镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npm.taobao.org\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" sass_binary_site https://npm.taobao.org/mirrors/node-sass/\n")])])]),t("p",[a._v("可以通过nrm来管理registry地址")]),a._v(" "),t("h3",{attrs:{id:"恢复镜像地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复镜像地址"}},[a._v("#")]),a._v(" 恢复镜像地址")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npmjs.org\n")])])]),t("h3",{attrs:{id:"link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[a._v("#")]),a._v(" link")]),a._v(" "),t("p",[a._v("在本地开发npm模块的时候，我们可以使用"),t("code",[a._v("npm link")]),a._v("命令，将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试")]),a._v(" "),t("h3",{attrs:{id:"生产环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境"}},[a._v("#")]),a._v(" 生产环境")]),a._v(" "),t("p",[a._v("在生产环境中，应该使用"),t("code",[a._v("npm i --production")]),a._v("忽略开发依赖,只安装基本依赖")]),a._v(" "),t("h3",{attrs:{id:"发布npm包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布npm包"}},[a._v("#")]),a._v(" 发布npm包")]),a._v(" "),t("ol",[t("li",[a._v("创建github项目")]),a._v(" "),t("li",[a._v("使用"),t("code",[a._v("npm publish")]),a._v("发布项目")])]),a._v(" "),t("blockquote",[t("p",[a._v("需要注意的是registry必须使用的是npm官方的才可以。如果第一次发布scoped包则需要先注册对应的组织（填写组织名称的时候不需要添加@）")])]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("升级版本包可以使用"),t("code",[a._v("npm version patch|minor|major")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm version <update_type>\n<update_type>为：\npatch 0.0.*\nmajor *.0.0\nminor 1.*.0\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("修改npm初始化时的信息")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('> npm set init.author.email "example-user@example.com"\n> npm set init.author.name "example_user"\n> npm set init.license "MIT"\n')])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("关于 scoped/unscoped\n有的包名(@babel/cli)会带有"),t("code",[a._v("@")]),a._v(",这个"),t("code",[a._v("@scopename")]),a._v("就是scoped的限定，发布的时候需要加上一下参数：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm publish -access publish\n")])])]),t("p",[a._v("或者不用命令行的形式，通过在"),t("code",[a._v("package.json")]),a._v("中添加：")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"publishConfig"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"access"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"public"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("Scope用以关联一系列的包，每个用户和组织都有自己的Scope，可以在登陆的时候指定scope名称：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm login --registry=http://reg.example.com --scope=@myco\n")])])]),t("p",[a._v("也可以在config中配置指定源的scope:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm config set @myco:registry http://reg.example.com\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[a._v("撤销发布\n撤销整个包")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm unpublish --force your-package-name\n")])])]),t("p",[a._v("仅撤销某个版本")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm unpublish <package-name>@<version>\n")])])]),t("h3",{attrs:{id:"钩子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#钩子"}},[a._v("#")]),a._v(" 钩子")]),a._v(" "),t("p",[a._v("npm scripts指令有pre和post两个钩子，运行顺序为npm run prebuild && npm run build && npm run postbuild，这在你需要为命令提供参数时是非常有用的，可以把参数放到命令中，其他的操作交给pre或者post. ​​​​")]),a._v(" "),t("h2",{attrs:{id:"yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[a._v("#")]),a._v(" yarn")]),a._v(" "),t("h3",{attrs:{id:"设置淘宝镜像-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置淘宝镜像-2"}},[a._v("#")]),a._v(" 设置淘宝镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npm.taobao.org -g\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" sass_binary_site https://npm.taobao.org/mirrors/node-sass/ -g\n")])])]),t("p",[a._v("可以通过yrm来管理registry地址")]),a._v(" "),t("h3",{attrs:{id:"恢复镜像地址-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复镜像地址-2"}},[a._v("#")]),a._v(" 恢复镜像地址")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.yarnpkg.com\n")])])]),t("h2",{attrs:{id:"pakage-lock-json和yarn-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pakage-lock-json和yarn-lock"}},[a._v("#")]),a._v(" pakage-lock.json和yarn.lock")]),a._v(" "),t("p",[a._v("如果在一个项目中我们同时使用了"),t("code",[a._v("npm")]),a._v("和"),t("code",[a._v("yarn")]),a._v("(不建议这样做)，"),t("code",[a._v("npm")]),a._v("和"),t("code",[a._v("yarn")]),a._v("安装的包都会被记录在"),t("code",[a._v("package.json")]),a._v("中。但是他们会有各自的"),t("code",[a._v("lock")]),a._v("文件。\n如果你的项目中同时有"),t("code",[a._v("pakage-lock.json")]),a._v("和"),t("code",[a._v("yarn.lock")]),a._v("，你可以选择提交其中的任意的一个。如果你希望他人通过"),t("code",[a._v("npm")]),a._v("来进行依赖包的安装，你应该选择提交"),t("code",[a._v("pakage-lock.json")]),a._v("；如果你希望他人通过"),t("code",[a._v("yarn")]),a._v("来进行依赖包的安装，你应该提交"),t("code",[a._v("yarn.lock")]),a._v("。如果你希望他人自行决定是使用"),t("code",[a._v("npm")]),a._v("还是"),t("code",[a._v("yarn")]),a._v("，你应该提交"),t("code",[a._v("pakage-lock.json")]),a._v("和"),t("code",[a._v("yarn.lock")]),a._v("这两个文件，但是这有可能造成不同步的问题。"),t("br"),a._v(" "),t("code",[a._v("yarn")]),a._v("从"),t("code",[a._v("1.7.0")]),a._v("版本开始，"),t("code",[a._v("yarn import")]),a._v("命令可以利用"),t("code",[a._v("pakage-lock.json")]),a._v("来生成依赖包，详见官方文档。")]),a._v(" "),t("h3",{attrs:{id:"使用工具转换lock文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用工具转换lock文件"}},[a._v("#")]),a._v(" 使用工具转换lock文件")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("npm install -g synp")])]),a._v(" "),t("li",[a._v("yarn.lock转换成package-lock.json "),t("code",[a._v("synp --source-file /path/to/yarn.lock")])]),a._v(" "),t("li",[a._v("package-lock.json转换成yarn.lock "),t("code",[a._v("synp --source-file /path/to/package-lock.json")])])]),a._v(" "),t("blockquote",[t("p",[a._v("参考：https://www.jianshu.com/p/9ae748598f1a")])]),a._v(" "),t("h3",{attrs:{id:"生产环境-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境-2"}},[a._v("#")]),a._v(" 生产环境")]),a._v(" "),t("p",[t("code",[a._v("yarn install --production[=true|false]")])]),a._v(" "),t("blockquote",[t("p",[a._v("如果 NODE_ENV 环境变量设为 production，Yarn 将不安装任何列于 devDependencies 的包。 使用此标志指示 Yarn 忽略 NODE_ENV 并用它取代“生产”与否的状态。")])]),a._v(" "),t("h2",{attrs:{id:"nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[a._v("#")]),a._v(" nvm")]),a._v(" "),t("ol",[t("li",[a._v("nvm在mac上遇到npm不是有效指令的问题，原因是default版本为未知")])]),a._v(" "),t("ul",[t("li",[a._v("解决办法：nvm alias default "),t("version",[a._v(" ，如果没有选择使用的版本，还需要选择版本"),t("code",[a._v("nvm use <version>")])])],1)]),a._v(" "),t("h2",{attrs:{id:"nvm-widnows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm-widnows"}},[a._v("#")]),a._v(" nvm-widnows")]),a._v(" "),t("h3",{attrs:{id:"不能下载npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不能下载npm"}},[a._v("#")]),a._v(" 不能下载npm")]),a._v(" "),t("p",[a._v("最近遇到了一个坑，nvm安装新得node环境时不能自动安装npm，在 "),t("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/issues/476#issuecomment-533693062",target:"_blank",rel:"noopener noreferrer"}},[a._v("github issues"),t("OutboundLink")],1),a._v("上找到了解决办法。"),t("br"),a._v("\n原因："),t("br"),a._v("\nnpm迁移仓库导致地址改变，不能正常下载，但是nvm-windows作者一直没有修复这个bug,目前只能手动解决"),t("br"),a._v("\n解决方法：")]),a._v(" "),t("ol",[t("li",[a._v("手动下载最新npm，解压后把文件移动到"),t("code",[a._v("nvm\\版本号\\node_modules\\npm\\")])]),a._v(" "),t("li",[a._v("然后在该目录下进入"),t("code",[a._v("bin")]),a._v(",复制"),t("code",[a._v("npm")]),a._v("和"),t("code",[a._v("npm.cmd")]),a._v("到"),t("code",[a._v("nvm\\版本号\\")])]),a._v(" "),t("li",[a._v("切换到这个版本"),t("code",[a._v("nvm use 版本号")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);