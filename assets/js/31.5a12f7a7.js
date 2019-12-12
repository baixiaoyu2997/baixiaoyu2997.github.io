(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{270:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[a._v("#")]),a._v(" npm")]),a._v(" "),t("h3",{attrs:{id:"局部安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 局部安装")]),a._v(" "),t("p",[a._v("在项目中局部安装包会在"),t("code",[a._v("node_modules\\.bin")]),a._v("目录下创建软连接")]),a._v(" "),t("h3",{attrs:{id:"设置淘宝镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置淘宝镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置淘宝镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npm.taobao.org\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" sass_binary_site https://npm.taobao.org/mirrors/node-sass/\n")])])]),t("h3",{attrs:{id:"恢复镜像地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复镜像地址","aria-hidden":"true"}},[a._v("#")]),a._v(" 恢复镜像地址")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npmjs.org\n")])])]),t("h3",{attrs:{id:"生产环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 生产环境")]),a._v(" "),t("p",[a._v("在生产环境中，应该使用"),t("code",[a._v("npm i --production")]),a._v("忽略开发依赖,只安装基本依赖")]),a._v(" "),t("h3",{attrs:{id:"npm基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm基础知识","aria-hidden":"true"}},[a._v("#")]),a._v(" npm基础知识")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://juejin.im/post/5d08d3d3f265da1b7e103a4d",target:"_blank",rel:"noopener noreferrer"}},[a._v("你所需要的npm知识储备都在这了"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn","aria-hidden":"true"}},[a._v("#")]),a._v(" yarn")]),a._v(" "),t("h3",{attrs:{id:"设置淘宝镜像-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置淘宝镜像-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置淘宝镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npm.taobao.org -g\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" sass_binary_site https://npm.taobao.org/mirrors/node-sass/ -g\n")])])]),t("h3",{attrs:{id:"恢复镜像地址-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复镜像地址-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 恢复镜像地址")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.yarnpkg.com\n")])])]),t("h2",{attrs:{id:"pakage-lock-json和yarn-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pakage-lock-json和yarn-lock","aria-hidden":"true"}},[a._v("#")]),a._v(" pakage-lock.json和yarn.lock")]),a._v(" "),t("p",[a._v("如果在一个项目中我们同时使用了"),t("code",[a._v("npm")]),a._v("和"),t("code",[a._v("yarn")]),a._v("(不建议这样做)，"),t("code",[a._v("npm")]),a._v("和"),t("code",[a._v("yarn")]),a._v("安装的包都会被记录在"),t("code",[a._v("package.json")]),a._v("中。但是他们会有各自的"),t("code",[a._v("lock")]),a._v("文件。\n如果你的项目中同时有"),t("code",[a._v("pakage-lock.json")]),a._v("和"),t("code",[a._v("yarn.lock")]),a._v("，你可以选择提交其中的任意的一个。如果你希望他人通过"),t("code",[a._v("npm")]),a._v("来进行依赖包的安装，你应该选择提交"),t("code",[a._v("pakage-lock.json")]),a._v("；如果你希望他人通过"),t("code",[a._v("yarn")]),a._v("来进行依赖包的安装，你应该提交"),t("code",[a._v("yarn.lock")]),a._v("。如果你希望他人自行决定是使用"),t("code",[a._v("npm")]),a._v("还是"),t("code",[a._v("yarn")]),a._v("，你应该提交"),t("code",[a._v("pakage-lock.json")]),a._v("和"),t("code",[a._v("yarn.lock")]),a._v("这两个文件，但是这有可能造成不同步的问题。"),t("br"),a._v(" "),t("code",[a._v("yarn")]),a._v("从"),t("code",[a._v("1.7.0")]),a._v("版本开始，"),t("code",[a._v("yarn import")]),a._v("命令可以利用"),t("code",[a._v("pakage-lock.json")]),a._v("来生成依赖包，详见官方文档。")]),a._v(" "),t("h3",{attrs:{id:"使用工具转换lock文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用工具转换lock文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用工具转换lock文件")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("npm install -g synp")])]),a._v(" "),t("li",[a._v("yarn.lock转换成package-lock.json "),t("code",[a._v("synp --source-file /path/to/yarn.lock")])]),a._v(" "),t("li",[a._v("package-lock.json转换成yarn.lock "),t("code",[a._v("synp --source-file /path/to/package-lock.json")])])]),a._v(" "),t("blockquote",[t("p",[a._v("参考：https://www.jianshu.com/p/9ae748598f1a")])]),a._v(" "),t("h3",{attrs:{id:"生产环境-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 生产环境")]),a._v(" "),t("p",[t("code",[a._v("yarn install --production[=true|false]")])]),a._v(" "),t("blockquote",[t("p",[a._v("如果 NODE_ENV 环境变量设为 production，Yarn 将不安装任何列于 devDependencies 的包。 使用此标志指示 Yarn 忽略 NODE_ENV 并用它取代“生产”与否的状态。")])]),a._v(" "),t("h2",{attrs:{id:"nvm-widnows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm-widnows","aria-hidden":"true"}},[a._v("#")]),a._v(" nvm-widnows")]),a._v(" "),t("h3",{attrs:{id:"不能下载npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不能下载npm","aria-hidden":"true"}},[a._v("#")]),a._v(" 不能下载npm")]),a._v(" "),t("p",[a._v("最近遇到了一个坑，nvm安装新得node环境时不能自动安装npm，在 "),t("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/issues/476#issuecomment-533693062",target:"_blank",rel:"noopener noreferrer"}},[a._v("github issues"),t("OutboundLink")],1),a._v("上找到了解决办法。"),t("br"),a._v("\n原因："),t("br"),a._v("\nnpm迁移仓库导致地址改变，不能正常下载，但是nvm-windows作者一直没有修复这个bug,目前只能手动解决"),t("br"),a._v("\n解决方法：")]),a._v(" "),t("ol",[t("li",[a._v("手动下载最新npm，解压后把文件移动到"),t("code",[a._v("nvm\\版本号\\node_modules\\npm\\")])]),a._v(" "),t("li",[a._v("然后在该目录下进入"),t("code",[a._v("bin")]),a._v(",复制"),t("code",[a._v("npm")]),a._v("和"),t("code",[a._v("npm.cmd")]),a._v("到"),t("code",[a._v("nvm\\版本号\\")])]),a._v(" "),t("li",[a._v("切换到这个版本"),t("code",[a._v("nvm use 版本号")])])])])},[],!1,null,null,null);s.default=r.exports}}]);