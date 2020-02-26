(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{274:function(a,t,e){"use strict";e.r(t);var s=e(1),n=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/20191002121033.png",alt:"20191002121033.png"}})]),a._v(" "),e("h2",{attrs:{id:"entry-入口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entry-入口","aria-hidden":"true"}},[a._v("#")]),a._v(" entry(入口)")]),a._v(" "),e("p",[a._v("单入口：entry是一个字符串")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" module.exports={\n    entry:'./path/file.js'\n }  \n")])])]),e("p",[a._v("多入口：entry是一个对象")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module.exports={\n    entry:{\n        app:'./src/app.js',\n        adminApp:'./src/adminApp.js'\n    }\n}\n")])])]),e("h2",{attrs:{id:"output-输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-输出","aria-hidden":"true"}},[a._v("#")]),a._v(" output(输出)")]),a._v(" "),e("h3",{attrs:{id:"单入口配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单入口配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 单入口配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module.exports={\n    output:{\n        filename:'bundle.js',\n        path:_dirname+'/dist'\n    }\n}\n")])])]),e("h3",{attrs:{id:"多入口配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多入口配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 多入口配置")]),a._v(" "),e("p",[a._v("通过占位符确保文件名称的唯一")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module.exports={\n    output:{\n        filename:'[name].js',\n        path:_dirname+'/dist'\n    }\n}\n")])])]),e("h2",{attrs:{id:"loaders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loaders","aria-hidden":"true"}},[a._v("#")]),a._v(" loaders")]),a._v(" "),e("p",[a._v("webpack开箱即用只支持JS和JSON两种文件类型，通过Loaders去支持其他文件类型并且把它们转化成有效的模块，并且可以添加到依赖图中。"),e("br"),a._v("\n本身是一个函数，接受源文件作为参数，返回转换的结果。\ntest对应匹配规则，use匹配loader")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module.exports={\n    module:{\n        rules:[\n            {test:/\\.txt$/,use:'raw-loader'}\n        ]\n    }\n}\n")])])]),e("h2",{attrs:{id:"plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[a._v("#")]),a._v(" Plugins")]),a._v(" "),e("p",[a._v("插件用于bundle文件的优化，资源管理和环境变量注入。作用于整个构建过程")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module.exports={\n    plugins:[new HtmlWebpackPlugin({template:'./src/index.html'})]\n}\n")])])]),e("h2",{attrs:{id:"module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#module","aria-hidden":"true"}},[a._v("#")]),a._v(" module")]),a._v(" "),e("p",[a._v("指定当前的构建环境是：production、development还是none(什么都不做),\n设置mode可以使用webpack内置的函数，默认值为production\n"),e("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/20190911173248.png",alt:"20190911173248.png"}})]),a._v(" "),e("h2",{attrs:{id:"热更新：webpack-dev-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#热更新：webpack-dev-server","aria-hidden":"true"}},[a._v("#")]),a._v(" 热更新：webpack-dev-server")]),a._v(" "),e("p",[a._v("WDS不刷新浏览器"),e("br"),a._v("\nWDS不输出文件，而是放在内存中"),e("br"),a._v("\n使用的是HotModuleReplacementPlugin插件，设置hot:true之后会自动引用，不需要在plugin中添加")]),a._v(" "),e("h2",{attrs:{id:"文件指纹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件指纹")]),a._v(" "),e("p",[a._v("文件指纹就是打包后输出的文件名的后缀"),e("br"),a._v("\nHash:和整个项目的构建相关，只要项目文件有修改，整个项目构建的hash值就会修改"),e("br"),a._v("\nChunkhash:和webpack打包的chunk有关，不同的entry会生成不同的chunkhash值"),e("br"),a._v("\ncontenthash:根据文件内容来定义hash，文件内容不变，则contenthash不变"),e("br"),a._v("\n推荐使用contenthash")]),a._v(" "),e("h2",{attrs:{id:"js、css、html压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js、css、html压缩","aria-hidden":"true"}},[a._v("#")]),a._v(" js、css、html压缩")]),a._v(" "),e("p",[a._v("js压缩：webpack4内置uglifyjs-webpack-plugin"),e("br"),a._v("\ncss压缩：mini-css-extract-plugin + cssnano\nhtml压缩：html-webpack-plugin")]),a._v(" "),e("h2",{attrs:{id:"资源内联"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源内联","aria-hidden":"true"}},[a._v("#")]),a._v(" 资源内联")]),a._v(" "),e("p",[a._v("使用场景：")]),a._v(" "),e("ol",[e("li",[a._v("页面初始化需要做的的初始化脚本")]),a._v(" "),e("li",[a._v("css内联避免页面闪动")]),a._v(" "),e("li",[a._v("减少网络请求（小图片或者字体内联）")])]),a._v(" "),e("p",[a._v("html和js内联使用"),e("code",[a._v("raw-loader")]),e("br"),a._v("\ncss内联使用：")]),a._v(" "),e("ol",[e("li",[a._v("style-loader")]),a._v(" "),e("li",[a._v("html-inline-css-webpack-plugin")])]),a._v(" "),e("h2",{attrs:{id:"多页面打包通用方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多页面打包通用方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 多页面打包通用方案")]),a._v(" "),e("p",[a._v("动态获取entry和设置html-webpack-plugin数量"),e("br"),a._v("\n利用glob.sync")]),a._v(" "),e("h2",{attrs:{id:"提取页面公共资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提取页面公共资源","aria-hidden":"true"}},[a._v("#")]),a._v(" 提取页面公共资源")]),a._v(" "),e("ol",[e("li",[a._v("基础库分离（vue、react）"),e("br"),a._v("\n将基础包通过cdn引入，不打入bundle中，使用html-webpack-externals-plugin")]),a._v(" "),e("li",[a._v("公共脚本分离（utils中的工具）\n利用webpack内置的SplitChunksPlugin进行公共脚本分离")])]),a._v(" "),e("h2",{attrs:{id:"tree-shaking-摇树优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking-摇树优化","aria-hidden":"true"}},[a._v("#")]),a._v(" tree shaking(摇树优化)")]),a._v(" "),e("ol",[e("li",[a._v("tree shaking只能作用于ES6模块,Babel的预置默认把任何模块转译成CommonJS模块,你可以简单设置modules: false来解决此问题。")]),a._v(" "),e("li",[a._v("production mode的情况下默认开启")]),a._v(" "),e("li",[a._v("在具有副作用的代码中tree-shaking会失效，可以使用webpack-deep-scope-plugin插件来优化，但是如果使用了babel+代码具有副作用的情况下，这个插件还是会失效")])]),a._v(" "),e("h2",{attrs:{id:"scope-hoisting-打包后代码的优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scope-hoisting-打包后代码的优化","aria-hidden":"true"}},[a._v("#")]),a._v(" scope hoisting(打包后代码的优化)")]),a._v(" "),e("blockquote",[e("p",[a._v("production模式默认开启")])]),a._v(" "),e("p",[a._v("打包后有大量函数闭包包裹代码，导致体积增大，运行代码时创建的函数作用域变多，内存开销变大。\nimport会被转换成__webopack_require"),e("br"),a._v("\n通过scope hoisting插件可以解决这个问题，webpack mode为production时默认开启，必须是ES6语法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plugins:[\n    new webpack.optimize.ModuleConcatenationPlugin()\n]\n")])])]),e("h2",{attrs:{id:"动态分割和动态import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态分割和动态import","aria-hidden":"true"}},[a._v("#")]),a._v(" 动态分割和动态import")]),a._v(" "),e("p",[a._v("适用场景：")]),a._v(" "),e("ol",[e("li",[a._v("抽离相同代码到一个共享块")]),a._v(" "),e("li",[a._v("脚本懒加载，使用初始下载的代码更小（首屏优化）\n懒加载js脚本的方式：")]),a._v(" "),e("li",[a._v("conmmonJS:require.ensure")]),a._v(" "),e("li",[a._v("ES6:动态import(目前还没有原生支持，需要babel转换)"),e("br"),a._v("\n如何使用动态import?")]),a._v(" "),e("li",[a._v("安装babel插件")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm i @babel/plugin-syntax-dynamic-import --save-dev\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("配置.babelrc文件")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('    "plugin":["@babel/plugin-syntax-dynamic-import"]\n')])])]),e("h2",{attrs:{id:"打包组件库和基础库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包组件库和基础库","aria-hidden":"true"}},[a._v("#")]),a._v(" 打包组件库和基础库")]),a._v(" "),e("ol",[e("li",[a._v("在生成开发版文件和min版文件时，配置mode:'none'来避免打包后文件都为压缩状态的情况")])]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" TerserPlugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'terser-webpack-plugin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"none"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'large-number'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./src/index.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 测试环境代码")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'large-number.min'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./src/index.js'")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 线上环境代码")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        filename"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[name].js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        library"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'largeNumber'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        libraryTarget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'umd'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 用于多环境引入")]),a._v("\n        libraryExport"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'default'")]),a._v("               "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 去除引用时额外的.default")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    optimization"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        minimize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        minimizer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TerserPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("                "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// TerserPlugin插件支持压缩ES6代码")]),a._v("\n                include"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/\\.min\\.js$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("         "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 匹配只压缩.min.js文件")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h2",{attrs:{id:"构建日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建日志","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建日志")]),a._v(" "),e("h3",{attrs:{id:"统计信息stats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#统计信息stats","aria-hidden":"true"}},[a._v("#")]),a._v(" 统计信息stats")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Preset")]),a._v(" "),e("th",[a._v("Alternative")]),a._v(" "),e("th",[a._v("Description")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("'errors-only'")]),a._v(" "),e("td",[a._v("none")]),a._v(" "),e("td",[a._v("只在发生错误时输出")])]),a._v(" "),e("tr",[e("td",[a._v("minimal")]),a._v(" "),e("td",[a._v("none")]),a._v(" "),e("td",[a._v("只在发生错误或有新的编译时输出")])]),a._v(" "),e("tr",[e("td",[a._v("none")]),a._v(" "),e("td",[a._v("false")]),a._v(" "),e("td",[a._v("没有输出")])]),a._v(" "),e("tr",[e("td",[a._v("normal")]),a._v(" "),e("td",[a._v("true")]),a._v(" "),e("td",[a._v("标准输出")])]),a._v(" "),e("tr",[e("td",[a._v("verbose")]),a._v(" "),e("td",[a._v("none")]),a._v(" "),e("td",[a._v("全部输出")])])])]),a._v(" "),e("p",[a._v("生产环境配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module.exports = {\n    stats:'errors-only'   // 推荐\n}\n")])])]),e("p",[a._v("开发环境配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("devServer: {\n    contentBase: './dist',\n    hot: true,\n    stats: 'errors-only'\n},\n")])])]),e("p",[a._v("优化命令行的构建日志，使用"),e("code",[a._v("friendly-errors-webpack-plugin")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plugins:[\n    new FriendlyErrorsWebpackPlugin()\n],\nstats:'errors-only'  // 需要搭配这条命令使用\n")])])]),e("h2",{attrs:{id:"构建配置管理的可选方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建配置管理的可选方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建配置管理的可选方案")]),a._v(" "),e("ol",[e("li",[a._v("通过多个配置文件管理不同环境的构建，webpack --config 参数进行控制")]),a._v(" "),e("li",[a._v("将构建配置设计成一个库")]),a._v(" "),e("li",[a._v("抽成一个工具进行管理，比如：create-react-app")]),a._v(" "),e("li",[a._v("将所有的配置放在一个文件，通过--env参数控制分支选择")])]),a._v(" "),e("h2",{attrs:{id:"冒烟测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#冒烟测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 冒烟测试")]),a._v(" "),e("ol",[e("li",[a._v("判断是否构建成功")]),a._v(" "),e("li",[a._v("检测是否有内容输出：")])]),a._v(" "),e("ul",[e("li",[a._v("是否有js、css等静态资源文件")]),a._v(" "),e("li",[a._v("是否有HTML文件")])]),a._v(" "),e("h2",{attrs:{id:"持续集成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续集成","aria-hidden":"true"}},[a._v("#")]),a._v(" 持续集成")]),a._v(" "),e("p",[a._v("优点：")]),a._v(" "),e("ul",[e("li",[a._v("快速发现错误")]),a._v(" "),e("li",[a._v("防止分支大幅偏离主干\n核心措施是，代码集成到主干之前，必须通过自动化测试。只要有一个测试用例失败，就不能集成。"),e("br"),a._v("\n接入Travis CI")])]),a._v(" "),e("ol",[e("li",[a._v("https://travis-ci.org/ 使用gitHub账号登录")]),a._v(" "),e("li",[a._v("在https://travis-ci.org/account/repositories 为项目开启")]),a._v(" "),e("li",[a._v("项目根目录下新增.travis.yml"),e("br"),a._v("\ntravis.yml文件内容")])]),a._v(" "),e("ul",[e("li",[a._v("install安装项目依赖")]),a._v(" "),e("li",[a._v("script运行测试用例")])]),a._v(" "),e("h2",{attrs:{id:"编写好的构建包发布到npm上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写好的构建包发布到npm上","aria-hidden":"true"}},[a._v("#")]),a._v(" 编写好的构建包发布到npm上")]),a._v(" "),e("p",[a._v("添加用户：npm adduser"),e("br"),a._v("\n升级版本")]),a._v(" "),e("ul",[e("li",[a._v("升级补丁版本号：npm version patch")]),a._v(" "),e("li",[a._v("升级小版本号：npm version minor")]),a._v(" "),e("li",[a._v("升级大版本号：npm version major"),e("br"),a._v("\n发布版本：npm publish")])]),a._v(" "),e("h2",{attrs:{id:"git规范和changelog生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git规范和changelog生成","aria-hidden":"true"}},[a._v("#")]),a._v(" git规范和Changelog生成")]),a._v(" "),e("p",[a._v("良好的Git commit规范优势：")]),a._v(" "),e("ul",[e("li",[a._v("加快Code Review的流程")]),a._v(" "),e("li",[a._v("根据Git Commit的元数据生成Changelog")]),a._v(" "),e("li",[a._v("后续维护者可以知道Feature被修改的原因")])]),a._v(" "),e("p",[a._v("技术方案"),e("br"),a._v(" "),e("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/20191004115054.png",alt:"20191004115054.png"}}),e("br"),a._v("\n提交格式要求")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")])])]),e("p",[a._v("type代表某次提交的类型，比如是修复一个bug还是增加一个新的feature.所有的type类型如下:")]),a._v(" "),e("ul",[e("li",[a._v("build:主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交")]),a._v(" "),e("li",[a._v("ci:主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交,")]),a._v(" "),e("li",[a._v("docs:仅仅修改了文档，比如README,CHANGELOG,CONTRIBUTE等等")]),a._v(" "),e("li",[a._v("feat:新增feature")]),a._v(" "),e("li",[a._v("fix:修复bug")]),a._v(" "),e("li",[a._v("pref:优化相关，比如提升性能、体验")]),a._v(" "),e("li",[a._v("refactor:代码重构，没有加新功能或者修复bug")]),a._v(" "),e("li",[a._v("revert:回滚到上一个版本")]),a._v(" "),e("li",[a._v("style:仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑")]),a._v(" "),e("li",[a._v("test:测试用例，包括单元测试、集成测试等")]),a._v(" "),e("li",[a._v("chore:不属于以上类型的其他类型")])]),a._v(" "),e("p",[a._v("安装"),e("br"),a._v(" "),e("code",[a._v("npm install husky --save-dev")]),e("br"),a._v(" "),e("code",[a._v("npm install --save-dev @commitlint/{cli,config-conventional}")]),e("br"),a._v("\n配置commitlint.config.js")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module.exports = {extends: ['@commitlint/config-conventional']};\n")])])]),e("p",[a._v("配置package.json")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n  "husky": {\n    "hooks": {\n      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"\n    }  \n  }\n}\n')])])]),e("h2",{attrs:{id:"速度分析：使用speed-measure-webpack-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#速度分析：使用speed-measure-webpack-plugin","aria-hidden":"true"}},[a._v("#")]),a._v(" 速度分析：使用speed-measure-webpack-plugin")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');\nconst smp = new SpeedMeasureWebpackPlugin();\nmodule.exports = smp.wrap({   // 用smp.wrap包裹配置文件\n\n})\n")])])]),e("h2",{attrs:{id:"体积分析：使用webpack-bundle-analyzer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#体积分析：使用webpack-bundle-analyzer","aria-hidden":"true"}},[a._v("#")]),a._v(" 体积分析：使用webpack-bundle-analyzer")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const BundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;\nmodule.exports={\n    plugin:[\n        new BundleAnalyzerPlugin()\n    ]\n}\n")])])]),e("p",[a._v("构建完成后会在8888端口展示")]),a._v(" "),e("h2",{attrs:{id:"加快构建速度：升级webpack和node版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加快构建速度：升级webpack和node版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 加快构建速度：升级webpack和node版本")]),a._v(" "),e("p",[a._v("使用webpack4：优化原因"),e("br"),a._v("\nv8带来的优化（for of替代forEach、Map和Set替代Object、includes替代indexOf）"),e("br"),a._v("\n默认使用更快的md4 hash算法"),e("br"),a._v("\nwepacks AST 可以直接从loader传递给AST，减少解析时间"),e("br"),a._v("\n使用字符串方法替代正则表达式")]),a._v(" "),e("h2",{attrs:{id:"加快构建速度：多进程-多实例构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加快构建速度：多进程-多实例构建","aria-hidden":"true"}},[a._v("#")]),a._v(" 加快构建速度：多进程/多实例构建")]),a._v(" "),e("p",[a._v("使用webpack官方维护插件：thread-loader解析资源"),e("br"),a._v("\n原理：每次webpack解析一个模块，thread-loader会将它及它的依赖分配给worker线程中")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('npm install --save-dev thread-loader\n\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        include: path.resolve("src"),\n        use: [\n          "thread-loader",  // thread-loader要写在loader最前面\n          // your expensive loader (e.g babel-loader)\n        ]\n      }\n    ]\n  }\n}\n')])])]),e("h2",{attrs:{id:"加快构建速度：多进程-多实例并行压缩代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加快构建速度：多进程-多实例并行压缩代码","aria-hidden":"true"}},[a._v("#")]),a._v(" 加快构建速度：多进程/多实例并行压缩代码")]),a._v(" "),e("p",[a._v("使用terser-webppack-plugin 开启parallel参数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const TerserPlugin=require('terser-webpack-plugin');\nmodule.exports={\n    optimization:{\n        minimizer:[\n            new TerserPlugin({\n                parallel:4\n            })\n        ]\n    }\n}\n")])])]),e("h2",{attrs:{id:"加快构建速度：进一步分包-预编译资源模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加快构建速度：进一步分包-预编译资源模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 加快构建速度：进一步分包-预编译资源模块")]),a._v(" "),e("p",[a._v("使用html-webpack-externals-plugin的缺点：每一个基础包都要引入并配置，splitchunk也会再次解析")]),a._v(" "),e("p",[a._v("思路：将reat\\react-dom\\redux\\react-redux基础包和业务基础包打包成一个文件\n方法：使用DLLPlugin进行分包，DllReferencePlugin对manifest.json引用"),e("br"),a._v("\n一般需要单独创建webpack.dll.js配置文件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const path = require('path');\nconst webpack = require('webpack');\n\nmodule.exports = {\n    entry: {\n        library: [\n            'react',\n            'react-dom'\n        ]\n    },\n    output: {\n        filename: '[name]_[chunkhash].dll.js',\n        path: path.join(__dirname, 'build/library'),\n        library: '[name]'\n    },\n    plugins: [\n        new webpack.DllPlugin({\n            name: '[name]_[hash]',\n            path: path.join(__dirname, 'build/library/[name].json')\n        })\n    ]\n};\n")])])]),e("p",[a._v("在webpack中引用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module.exports={\n    plugins:[\n        new webpack.DllReferencePlugin({\n            manifest:require('./build/library/manifest.json')\n        })\n    ]\n}\n")])])]),e("blockquote",[e("p",[a._v("在webpack4中性能方面提升不大，但在分包作用中还是有用的")])]),a._v(" "),e("h2",{attrs:{id:"加快构建速度：缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加快构建速度：缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 加快构建速度：缓存")]),a._v(" "),e("p",[a._v("目的：提升二次构建速度"),e("br"),a._v("\n缓存思路：")]),a._v(" "),e("ul",[e("li",[a._v("babel-loader开启缓存")]),a._v(" "),e("li",[a._v("terser-webpack-plugin 开启缓存")]),a._v(" "),e("li",[a._v("使用cache-loader或者hard-source-webpack-plugin(推荐hard-source-webpack-plugin，配置更简单)")])]),a._v(" "),e("h2",{attrs:{id:"加快构建速度：缩小构建目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加快构建速度：缩小构建目标","aria-hidden":"true"}},[a._v("#")]),a._v(" 加快构建速度：缩小构建目标")]),a._v(" "),e("p",[a._v("目的：尽可能的少构建模块"),e("br"),a._v("\n比如：babel-loader不解析node_modules （各种exclude和include）\n减少文件搜索范围")]),a._v(" "),e("ul",[e("li",[a._v("优化resolve.modules配置（减少模块搜索层级）")]),a._v(" "),e("li",[a._v("优化resolve.mainFields配置")]),a._v(" "),e("li",[a._v("优化resolve.extensions配置")]),a._v(" "),e("li",[a._v("合理使用alias")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("modules.exports={\n    resolve:{\n        alias:{\n            react:path.resolve(__dirname,'./node_modules/react/dist/react.min.js'),\n        },\n        modules:[path.resolve(__dirname,'node_modules')],\n        extensions:['.js'],\n        mainFields:['main']\n    }\n}\n")])])]),e("h2",{attrs:{id:"treeshaking-删除无用的js和css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#treeshaking-删除无用的js和css","aria-hidden":"true"}},[a._v("#")]),a._v(" treeshaking-删除无用的js和css")]),a._v(" "),e("p",[a._v("无用的CSS如何删除掉？"),e("br"),a._v("\nPurifyCSS:遍历代码，识别已经用到的CSS class"),e("br"),a._v("\nuncss:HTML需要通过jsdom加载，所有的样式通过PostCSS解析，通过document.querySelector来识别在html文件里面不存在的选择器\n在webpack中如何使用PurifyCSS?"),e("br"),a._v("\nPurifyCSS-webpack-plugin不再维护所以使用："),e("br"),a._v("\npurgecss-webpack-plugin+mini-css-extract-plugin配合使用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const PurgecssPlugin = require('purgecss-webpack-plugin');\nconst PATHS={\n    src:path.join(__dirname,'src')\n}\n\n    plugins:[\n        new PurgecssPlugin({\n            paths:glob.sync(`${PATHS.src}/**/*`,nodir:true) // 插件要求路径必须是绝对路径\n        })\n    ]\n")])])]),e("h2",{attrs:{id:"图片压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片压缩","aria-hidden":"true"}},[a._v("#")]),a._v(" 图片压缩")]),a._v(" "),e("p",[a._v("使用image-webpack-loader"),e("br"),a._v("\nImagemin的优点分析")]),a._v(" "),e("ul",[e("li",[a._v("有很多定制选项")]),a._v(" "),e("li",[a._v("可以引入更多第三方优化插件，例如pngquant")]),a._v(" "),e("li",[a._v("可以处理多种图片格式")])]),a._v(" "),e("p",[a._v("Imagemin的压缩原理"),e("br"),a._v("\npngquant:是一款PNG压缩器，通过将图像转换为具有alpha通道（通常比24/32位PNG文件小60-80%）的更高效的8位PNG格式，可显著减少文件大小。"),e("br"),a._v("\npngcrush: 其主要目的是通过尝试不同的压缩级别和PNG过滤方法来降低PNG IDAT数据流的大小。"),e("br"),a._v("\noptipng:其设计灵感来自于pngcrush。optipng可将图像文件重新压缩为更小尺寸，而不会丢失任何信息。\ntinypng:也是将24位png文件转化为更小有索引的8位图片,同时所有非必要的metadata也会被剥离掉")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm i image-webpack-loader -D\n\nrules: [{\n  test: /\\.(gif|png|jpe?g|svg)$/i,\n  use: [\n    'file-loader',\n    {\n      loader: 'image-webpack-loader',\n      options: {\n        mozjpeg: {\n          progressive: true,\n          quality: 65\n        },\n        // optipng.enabled: false will disable optipng\n        optipng: {\n          enabled: false,\n        },\n        pngquant: {\n          quality: [0.65, 0.90],\n          speed: 4\n        },\n        gifsicle: {\n          interlaced: false,\n        },\n        // the webp option will enable WEBP\n        webp: {\n          quality: 75\n        }\n      }\n    },\n  ],\n}]\n")])])]),e("h2",{attrs:{id:"构建体积优化：动态polyfill"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建体积优化：动态polyfill","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建体积优化：动态polyfill")]),a._v(" "),e("p",[a._v("使用Polyfill Service"),e("br"),a._v("\n原理：识别User Agent,下发不同的Polyfill\n通过插入"),e("code",[a._v("https://polyfill.io/v3/polyfill.min.js")]),a._v("来实现动态polyfill"),e("br"),a._v("\n国内可以使用阿里的服务"),e("code",[a._v("http://polyfill.alicdn.com/polyfill.min.js")]),a._v(",速度更快\n使用方法：")]),a._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("https://polyfill.io/v3/polyfill.min.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),e("h3",{attrs:{id:"px自动转换成rem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px自动转换成rem","aria-hidden":"true"}},[a._v("#")]),a._v(" px自动转换成rem")]),a._v(" "),e("p",[a._v("需要在html文件中内联引入lib-flexible，一起使用，可以添加exclude去掉不想转换的库，也可以添加/"),e("em",[a._v("no")]),a._v("/的语法去设置某一行样式不进行转换")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("{\n    loader: 'px2rem-loader',\n    options: {\n        remUnit: 75,   // 如果是750的设计稿\n        remPrecision: 8\n    }\n}\n")])])]),e("h3",{attrs:{id:"自动添加css前缀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动添加css前缀","aria-hidden":"true"}},[a._v("#")]),a._v(" 自动添加css前缀")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("{\n    loader: 'postcss-loader',\n    options: {\n        plugins: () => [\n            require('autoprefixer')({\n                browsers: ['last 2 version', '>1%', 'ios 7']\n            })\n        ]\n    }\n")])])]),e("h3",{attrs:{id:"自动清除构建目录产物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动清除构建目录产物","aria-hidden":"true"}},[a._v("#")]),a._v(" 自动清除构建目录产物")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const CleanWebpackPlugin = require('clean-webpack-plugin');\nplugins: [\n        new webpack.HotModuleReplacementPlugin(),\n        new CleanWebpackPlugin(),\n        new FriendlyErrorsWebpackPlugin()\n    ].concat(htmlWebpackPlugins)\n")])])]),e("h3",{attrs:{id:"文件监听"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件监听","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件监听")]),a._v(" "),e("p",[a._v("webpack开启监听模式有两种方式：")]),a._v(" "),e("ul",[e("li",[a._v("启动webpack命令时，带上 --watch 参数")]),a._v(" "),e("li",[a._v("再配置webpack.config.js 中设置watch:true")])]),a._v(" "),e("p",[a._v("文件监听的原理分析：\n轮询判断文件的最后编辑时间是否变化\n某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等aggregateTimeout")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("export"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 默认false,")]),a._v("\n    watch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 只有开启监听模式时，watchOptions才有意义")]),a._v("\n    watchOptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 默认为空，忽略文件夹，支持正则，支持数组")]),a._v("\n        ignored"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/node_modules/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 监听到变化发生后会等300ms再去执行，默认300ms")]),a._v("\n        aggregateTimeout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 轮询间隔，默认每秒检查一次变动")]),a._v("\n        poll"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h3",{attrs:{id:"热更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#热更新","aria-hidden":"true"}},[a._v("#")]),a._v(" 热更新")]),a._v(" "),e("p",[a._v("需要"),e("code",[a._v("webpack-dev-server")]),a._v(",配置webpack文件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" devServer: {\n        hot: true\n }\n")])])]),e("h3",{attrs:{id:"devtool分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#devtool分类","aria-hidden":"true"}},[a._v("#")]),a._v(" devtool分类")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13805935-5616f8a35b8a6262.png",alt:"alt"}}),e("br"),a._v(" "),e("strong",[a._v("这么多模式，到底试用哪个？")])]),a._v(" "),e("ol",[e("li",[a._v("开发环境推荐："),e("code",[a._v("cheap-module-eval-source-map")])]),a._v(" "),e("li",[a._v("生产环境推荐："),e("code",[a._v("cheap-module-source-map")])]),a._v(" "),e("li",[a._v("相关解释：")])]),a._v(" "),e("ul",[e("li",[a._v("大部分情况我们调试并不关心列信息，而且就算 sourcemap 没有列，有些浏览器引擎（例如 v8） 也会给出列信息，所以我们使用 cheap 模式可以大幅提高 souremap 生成的效率。")]),a._v(" "),e("li",[a._v("使用 module 可支持 babel 这种预编译工具（在 webpack 里做为 loader 使用）。")]),a._v(" "),e("li",[a._v("使用 eval 方式可大幅提高持续构建效率，参考webapck devtool速度对比列表，这对经常需要边改边调的前端开发而言非常重要")]),a._v(" "),e("li",[a._v("直接将sourceMap放入打包后的文件，会明显增大文件的大小，不利于静态文件的快速加载；而外联.map时，.map文件只会在F12开启时进行下载（sourceMap主要服务于调试），故推荐使用外联.map的形式。")])]),a._v(" "),e("h3",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/hhhyaaon/p/5657469.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("[webpack] devtool配置对比"),e("OutboundLink")],1)])])},[],!1,null,null,null);t.default=n.exports}}]);