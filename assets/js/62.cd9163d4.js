(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{493:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[a._v("#")]),a._v(" npm")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://juejin.im/post/5d08d3d3f265da1b7e103a4d",target:"_blank",rel:"noopener noreferrer"}},[a._v("你所需要的 npm 知识储备都在这了"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"局部安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部安装"}},[a._v("#")]),a._v(" 局部安装")]),a._v(" "),t("p",[a._v("在项目中局部安装包会在"),t("code",[a._v("node_modules\\.bin")]),a._v("目录下创建软连接")]),a._v(" "),t("h3",{attrs:{id:"设置淘宝镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置淘宝镜像"}},[a._v("#")]),a._v(" 设置淘宝镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npm.taobao.org\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" sass_binary_site https://npm.taobao.org/mirrors/node-sass/\n")])])]),t("p",[a._v("可以通过 nrm 来管理 registry 地址")]),a._v(" "),t("h3",{attrs:{id:"为scoped-package设置-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为scoped-package设置-registry"}},[a._v("#")]),a._v(" 为scoped package设置 registry")]),a._v(" "),t("p",[t("code",[a._v("npm config set @yy:registry=https://registry.yeeyun.io/repository/npm-hosted/")])]),a._v(" "),t("h4",{attrs:{id:"gitlab设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab设置"}},[a._v("#")]),a._v(" gitlab设置")]),a._v(" "),t("p",[a._v("gitlab为私有库时需要设置:")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("personal access token")])]),a._v(" "),t("li",[t("code",[a._v("deploy token")])]),a._v(" "),t("li",[t("code",[a._v("CI job token")])]),a._v(" "),t("li",[a._v("npm包name必须格式为"),t("code",[a._v("@scope/package-name")])])]),a._v(" "),t("p",[a._v("gitlab发布npm包：")]),a._v(" "),t("p",[a._v("区分"),t("code",[a._v("project-level")]),a._v("和"),t("code",[a._v("instance-level")]),a._v(",由于公司使用的是"),t("code",[a._v("project-level")]),a._v("所以下面只写项目级的使用方式：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" @foo:registry https://gitlab.example.com/api/v4/projects/"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your_project_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/packages/npm/\n")])])]),t("p",[a._v("gitlab下载npm包：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm config set @scoped:registry https://gitlab.example.com/api/v4/packages/npm/\n")])])]),t("h3",{attrs:{id:"登录私有库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录私有库"}},[a._v("#")]),a._v(" 登录私有库")]),a._v(" "),t("p",[t("code",[a._v("npm login --registry=http://localhost:8081/repository/npm-hosted/")])]),a._v(" "),t("h3",{attrs:{id:"恢复镜像地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复镜像地址"}},[a._v("#")]),a._v(" 恢复镜像地址")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npmjs.org\n")])])]),t("h3",{attrs:{id:"npm-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-cli"}},[a._v("#")]),a._v(" npm cli")]),a._v(" "),t("h4",{attrs:{id:"link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[a._v("#")]),a._v(" link")]),a._v(" "),t("p",[a._v("npm link 用来在本地项目和本地 npm 模块之间建立连接，可以在本地进行模块测试")]),a._v(" "),t("p",[a._v("具体用法：")]),a._v(" "),t("ol",[t("li",[a._v("项目和模块在同一个目录下，可以使用相对路径")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("npm link ../module")])])]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("项目和模块不在同一个目录下")])]),a._v(" "),t("ul",[t("li",[a._v("cd 到模块目录，"),t("code",[a._v("npm link")]),a._v("，进行全局 link")]),a._v(" "),t("li",[a._v("cd 到项目目录，"),t("code",[a._v("npm link 模块名(package.json中的name)")])])]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("解除 link")])]),a._v(" "),t("ul",[t("li",[a._v("解除项目和模块 link，项目目录下，"),t("code",[a._v("npm unlink 模块名")])]),a._v(" "),t("li",[a._v("解除模块全局 link，模块目录下，"),t("code",[a._v("npm unlink 模块名")])])]),a._v(" "),t("h4",{attrs:{id:"list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[a._v("#")]),a._v(" list")]),a._v(" "),t("p",[a._v("查看本地安装的所有包，如果要仅获取顶层的软件包可以添加参数："),t("code",[a._v("--depth=0")]),t("br"),a._v("\n也可以通过指定名称来获取特定软件包的版本："),t("code",[a._v("npm list cowsay")]),a._v(",这也适用于查看软件包的依赖包")]),a._v(" "),t("h4",{attrs:{id:"view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[a._v("#")]),a._v(" view")]),a._v(" "),t("p",[a._v("可以通过"),t("code",[a._v("npm view cowsay version")]),a._v("查看该包的最新版本，想要查看该包的所有版本，使用"),t("code",[a._v("npm view <package> versions")])]),a._v(" "),t("h4",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[a._v("#")]),a._v(" install")]),a._v(" "),t("p",[a._v("可以使用"),t("code",[a._v("npm i <package>@<version>")]),a._v("来安装指定版本。"),t("br"),a._v("\n在开发环境，应该添加"),t("code",[a._v("--production")]),a._v("参数来避免安装开发依赖。")]),a._v(" "),t("blockquote",[t("p",[a._v("在 npm5 之后，可以不用输入--save")])]),a._v(" "),t("h4",{attrs:{id:"uninstall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uninstall"}},[a._v("#")]),a._v(" uninstall")]),a._v(" "),t("p",[a._v("卸载软件包，如果添加"),t("code",[a._v("--save")]),a._v("或"),t("code",[a._v("-S")]),a._v("标志，会移除"),t("code",[a._v("package.json")]),a._v("中的引用，同理也可以使用"),t("code",[a._v("-D")])]),a._v(" "),t("h4",{attrs:{id:"outdated"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outdated"}},[a._v("#")]),a._v(" outdated")]),a._v(" "),t("p",[a._v("使用"),t("code",[a._v("npm outdated")]),a._v("查看可以更新的包。")]),a._v(" "),t("p",[a._v("注意，如果使用"),t("code",[a._v("taobao")]),a._v("镜像报错，那么需要切换回源镜像")]),a._v(" "),t("h4",{attrs:{id:"update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[a._v("#")]),a._v(" update")]),a._v(" "),t("p",[a._v("update 会升级本地包版本，会修改 lock 文件中的次版本和补丁版本，而不会更新主版本。")]),a._v(" "),t("h4",{attrs:{id:"ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ci"}},[a._v("#")]),a._v(" ci")]),a._v(" "),t("p",[a._v("类似于"),t("code",[a._v("npm i")]),a._v("，但是"),t("code",[a._v("ci")]),a._v("更适合部署环境，不会更改"),t("code",[a._v("lock")]),a._v("文件")]),a._v(" "),t("h4",{attrs:{id:"prefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prefix"}},[a._v("#")]),a._v(" --prefix")]),a._v(" "),t("p",[a._v("指定npm指令执行的目录，例如"),t("code",[a._v("npm --prefix packages/components run dev")])]),a._v(" "),t("h3",{attrs:{id:"npx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npx"}},[a._v("#")]),a._v(" npx")]),a._v(" "),t("blockquote",[t("p",[a._v("npm 5.2版本可用")])]),a._v(" "),t("p",[a._v("npx是一个非常强大的命令，可以使用node构建并通过npm仓库发布的代码。")]),a._v(" "),t("ul",[t("li",[a._v("npx解决了调用本地项目命令时，需要手输"),t("code",[a._v("bin")]),a._v("文件夹的痛苦")]),a._v(" "),t("li",[a._v("npx的另一个重要的特性是，无需安装命令即可运行命令。")]),a._v(" "),t("li",[a._v("npx执行的包如果之前不存在，那么在下载运行完之后会被删除")]),a._v(" "),t("li",[a._v("npx可以直接从 URL 运行任意代码片段，例如："),t("code",[a._v("npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32")])])]),a._v(" "),t("h3",{attrs:{id:"升级版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级版本"}},[a._v("#")]),a._v(" 升级版本")]),a._v(" "),t("ul",[t("li",[a._v("升级补丁版本号：npm version patch")]),a._v(" "),t("li",[a._v("升级小版本号：npm version minor")]),a._v(" "),t("li",[a._v("升级大版本号：npm version major")])]),a._v(" "),t("h3",{attrs:{id:"生产环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境"}},[a._v("#")]),a._v(" 生产环境")]),a._v(" "),t("p",[a._v("在生产环境中，应该使用"),t("code",[a._v("npm i --production")]),a._v("忽略开发依赖,只安装基本依赖")]),a._v(" "),t("h3",{attrs:{id:"发布-npm-包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布-npm-包"}},[a._v("#")]),a._v(" 发布 npm 包")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("创建 github 项目")])]),a._v(" "),t("li",[t("p",[a._v("使用"),t("code",[a._v("npm publish")]),a._v("发布项目")]),a._v(" "),t("blockquote",[t("p",[a._v("需要注意的是 registry 必须使用的是 npm 官方的才可以。如果第一次发布 scoped 包则需要先注册对应的组织（填写组织名称的时候不需要添加@）")])])]),a._v(" "),t("li",[t("p",[a._v("升级版本包可以使用"),t("code",[a._v("npm version patch|minor|major")])])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm version <update_type>\n<update_type>为：\npatch 0.0.*\nmajor *.0.0\nminor 1.*.0\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("修改 npm 初始化时的信息")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('> npm set init.author.email "example-user@example.com"\n> npm set init.author.name "example_user"\n> npm set init.license "MIT"\n')])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("关于 scoped/unscoped 有的包名(@babel/cli)会带有"),t("code",[a._v("@")]),a._v(",这个"),t("code",[a._v("@scopename")]),a._v("就是 scoped 的限定，发布的时候需要加上一下参数：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm publish -access publish\n")])])]),t("p",[a._v("或者不用命令行的形式，通过在"),t("code",[a._v("package.json")]),a._v("中添加：")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"publishConfig"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"access"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"public"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("Scope 用以关联一系列的包，每个用户和组织都有自己的 Scope，可以在登陆的时候指定 scope 名称：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm login --registry=http://reg.example.com --scope=@myco\n")])])]),t("p",[a._v("也可以在 config 中配置指定源的 scope:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm config set @myco:registry http://reg.example.com\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[a._v("撤销发布撤销整个包")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm unpublish --force your-package-name\n")])])]),t("p",[a._v("仅撤销某个版本")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm unpublish <package-name>@<version>\n")])])]),t("h3",{attrs:{id:"钩子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#钩子"}},[a._v("#")]),a._v(" 钩子")]),a._v(" "),t("p",[a._v("npm scripts 指令有 pre 和 post 两个钩子，运行顺序为 npm run prebuild && npm run build && npm run postbuild，这在你需要为命令提供参数时是非常有用的，可以把参数放到命令中，其他的操作交给 pre 或者 post. ​​​​")]),a._v(" "),t("h3",{attrs:{id:"lock-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lock-文件"}},[a._v("#")]),a._v(" lock 文件")]),a._v(" "),t("p",[a._v("npm7.0 版本中支持"),t("code",[a._v("yarn.lock")]),a._v("文件")]),a._v(" "),t("h3",{attrs:{id:"文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章"}},[a._v("#")]),a._v(" 文章")]),a._v(" "),t("ol",[t("li",[a._v("前端组件库本地开发调试的自动化流程实现：https://hijiangtao.github.io/2020/05/21/A-Better-Library-Development-Workflow/?utm_source=tuicool&utm_medium=referral")])]),a._v(" "),t("h2",{attrs:{id:"yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[a._v("#")]),a._v(" yarn")]),a._v(" "),t("h3",{attrs:{id:"设置淘宝镜像-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置淘宝镜像-2"}},[a._v("#")]),a._v(" 设置淘宝镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npm.taobao.org -g\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" sass_binary_site https://npm.taobao.org/mirrors/node-sass/ -g\n")])])]),t("p",[a._v("可以通过 yrm 来管理 registry 地址")]),a._v(" "),t("h3",{attrs:{id:"恢复镜像地址-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复镜像地址-2"}},[a._v("#")]),a._v(" 恢复镜像地址")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.yarnpkg.com\n")])])]),t("h2",{attrs:{id:"pakage-lock-json-和-yarn-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pakage-lock-json-和-yarn-lock"}},[a._v("#")]),a._v(" pakage-lock.json 和 yarn.lock")]),a._v(" "),t("p",[a._v("如果在一个项目中我们同时使用了"),t("code",[a._v("npm")]),a._v("和"),t("code",[a._v("yarn")]),a._v("(不建议这样做)，"),t("code",[a._v("npm")]),a._v("和"),t("code",[a._v("yarn")]),a._v("安装的包都会被记录在"),t("code",[a._v("package.json")]),a._v("中。但是他们会有各自的"),t("code",[a._v("lock")]),a._v("文件。如果你的项目中同时有"),t("code",[a._v("pakage-lock.json")]),a._v("和"),t("code",[a._v("yarn.lock")]),a._v("，你可以选择提交其中的任意的一个。如果你希望他人通过"),t("code",[a._v("npm")]),a._v("来进行依赖包的安装，你应该选择提交"),t("code",[a._v("pakage-lock.json")]),a._v("；如果你希望他人通过"),t("code",[a._v("yarn")]),a._v("来进行依赖包的安装，你应该提交"),t("code",[a._v("yarn.lock")]),a._v("。如果你希望他人自行决定是使用"),t("code",[a._v("npm")]),a._v("还是"),t("code",[a._v("yarn")]),a._v("，你应该提交"),t("code",[a._v("pakage-lock.json")]),a._v("和"),t("code",[a._v("yarn.lock")]),a._v("这两个文件，但是这有可能造成不同步的问题。"),t("br"),a._v(" "),t("code",[a._v("yarn")]),a._v("从"),t("code",[a._v("1.7.0")]),a._v("版本开始，"),t("code",[a._v("yarn import")]),a._v("命令可以利用"),t("code",[a._v("pakage-lock.json")]),a._v("来生成依赖包，详见官方文档。")]),a._v(" "),t("h3",{attrs:{id:"使用工具转换-lock-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用工具转换-lock-文件"}},[a._v("#")]),a._v(" 使用工具转换 lock 文件")]),a._v(" "),t("ol",[t("li",[t("p",[t("code",[a._v("npm install -g synp")])])]),a._v(" "),t("li",[t("p",[a._v("yarn.lock 转换成 package-lock.json "),t("code",[a._v("synp --source-file /path/to/yarn.lock")])])]),a._v(" "),t("li",[t("p",[a._v("package-lock.json 转换成 yarn.lock "),t("code",[a._v("synp --source-file /path/to/package-lock.json")])]),a._v(" "),t("blockquote",[t("p",[a._v("参考：https://www.jianshu.com/p/9ae748598f1a")])])])]),a._v(" "),t("h3",{attrs:{id:"生产环境-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境-2"}},[a._v("#")]),a._v(" 生产环境")]),a._v(" "),t("p",[t("code",[a._v("yarn install --production[=true|false]")])]),a._v(" "),t("blockquote",[t("p",[a._v("如果 NODE_ENV 环境变量设为 production，Yarn 将不安装任何列于 devDependencies 的包。 使用此标志指示 Yarn 忽略 NODE_ENV 并用它取代“生产”与否的状态。")])]),a._v(" "),t("h2",{attrs:{id:"nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[a._v("#")]),a._v(" nvm")]),a._v(" "),t("ol",[t("li",[a._v("nvm 在 mac 上遇到 npm 不是有效指令的问题，原因是 default 版本为未知")])]),a._v(" "),t("ul",[t("li",[a._v("解决办法："),t("code",[a._v("nvm alias default <version>")]),a._v("，如果没有选择使用的版本，还需要选择版本"),t("code",[a._v("nvm use <version>")])])]),a._v(" "),t("ol",[t("li",[t("code",[a._v("nvm use")]),a._v("指令不能持久化，在下一次打开时，nvm 版本又会变回去，可以使用"),t("code",[a._v("nvm alias default <version>")]),a._v("完成持久化，如果无效，可以删除 alias"),t("code",[a._v("nvm unalias default")]),a._v(",再重新添加。如果是在vscode终端打开，可能需要重新启动vscode才能生效。")])]),a._v(" "),t("h3",{attrs:{id:"卸载nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载nvm"}},[a._v("#")]),a._v(" 卸载nvm")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("移除nvm内容：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf .nvm\n")])])])]),a._v(" "),t("li",[t("p",[a._v("移除掉~/.profile, ~/.bash_profile, ~/.zshrc, ~/.bashrc文件中关于nvm的配置")])]),a._v(" "),t("li",[t("p",[a._v("命令行输入nvm、npm，分别提示command not found，删除成功")])])]),a._v(" "),t("h2",{attrs:{id:"nvm-widnows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm-widnows"}},[a._v("#")]),a._v(" nvm-widnows")]),a._v(" "),t("h3",{attrs:{id:"不能下载-npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不能下载-npm"}},[a._v("#")]),a._v(" 不能下载 npm")]),a._v(" "),t("p",[a._v("最近遇到了一个坑，nvm 安装新得 node 环境时不能自动安装 npm，在 "),t("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/issues/476#issuecomment-533693062",target:"_blank",rel:"noopener noreferrer"}},[a._v("github issues"),t("OutboundLink")],1),a._v("上找到了解决办法。"),t("br"),a._v("\n原因："),t("br"),a._v("\nnpm 迁移仓库导致地址改变，不能正常下载，但是 nvm-windows 作者一直没有修复这个 bug,目前只能手动解决"),t("br"),a._v("\n解决方法：")]),a._v(" "),t("ol",[t("li",[a._v("手动下载最新 npm，解压后把文件移动到"),t("code",[a._v("nvm\\版本号\\node_modules\\npm\\")])]),a._v(" "),t("li",[a._v("然后在该目录下进入"),t("code",[a._v("bin")]),a._v(",复制"),t("code",[a._v("npm")]),a._v("和"),t("code",[a._v("npm.cmd")]),a._v("到"),t("code",[a._v("nvm\\版本号\\")])]),a._v(" "),t("li",[a._v("切换到这个版本"),t("code",[a._v("nvm use 版本号")])])]),a._v(" "),t("h2",{attrs:{id:"volta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volta"}},[a._v("#")]),a._v(" Volta")]),a._v(" "),t("p",[a._v("相较于nvm，Volta拥有更快的速度，并且跨平台。它可以让我们轻松地在项目中锁定 node，npm 和 yarn 的版本。你只需在安装完 Volta 后，在项目的根目录中执行 volta pin 命令，那么无论您当前使用的 node 或 npm（yarn）版本是什么，volta 都会自动切换为您指定的版本。")]),a._v(" "),t("p",[a._v("当您项目的 CLI 工具与全局 CLI 工具不一致时，Volta 可以做到在项目根目录下自动识别，切换到项目指定的版本，这一切都是由 Volta 默默做到的，开发者不必关心任何事情。")]),a._v(" "),t("blockquote",[t("p",[a._v("如果某些情况无法识别"),t("code",[a._v("node")]),a._v("，在"),t("code",[a._v("zshrc")]),a._v("中添加"),t("code",[a._v("export PATH=${PATH}:/Users/l.rain/.volta/bin/node")])])]),a._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" https://get.volta.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])]),t("p",[a._v("该命令会自动执行"),t("code",[a._v("volta setup")]),a._v("来设置shell配置")]),a._v(" "),t("h3",{attrs:{id:"命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[a._v("#")]),a._v(" 命令行")]),a._v(" "),t("h4",{attrs:{id:"install-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-2"}},[a._v("#")]),a._v(" install")]),a._v(" "),t("p",[a._v("可以使用该命令安装指定版本node、npm、yarn")]),a._v(" "),t("h4",{attrs:{id:"pin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pin"}},[a._v("#")]),a._v(" pin")]),a._v(" "),t("p",[a._v("固定node、npm、yarn版本号。例如："),t("code",[a._v("volta pin node@12")])]),a._v(" "),t("h3",{attrs:{id:"workspaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workspaces"}},[a._v("#")]),a._v(" workspaces")]),a._v(" "),t("p",[a._v("monorepo项目中使用时需要配置根package.json：")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"volta"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"12.16.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"yarn"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.22.4"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("然后其他package的package.json继承这个配置就可以了：")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// packages/cli/package.json")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"volta"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"extends"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"../../package.json"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);