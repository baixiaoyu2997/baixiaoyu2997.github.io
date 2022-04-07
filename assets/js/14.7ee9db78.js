(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{446:function(t,a,e){"use strict";e.r(a);var s=e(2),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"babel-到底做了什么-怎么做的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-到底做了什么-怎么做的"}},[t._v("#")]),t._v(" babel 到底做了什么？怎么做的？")]),t._v(" "),e("p",[t._v("简单来说把 JavaScript 中 es2015/2016/2017/2046 的新语法转化为 es5，让低端运行环境(如浏览器和 node )能够认识并执行。本文以 babel 6.x 为基准进行讨论。最近 babel 出了 7.x，放在最后聊。")]),t._v(" "),e("h3",{attrs:{id:"运行方式和插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行方式和插件"}},[t._v("#")]),t._v(" 运行方式和插件")]),t._v(" "),e("p",[t._v("babel 总共分为三个阶段：解析，转换，生成。")]),t._v(" "),e("p",[e("strong",[t._v("babel 本身不具有任何转化功能，它把转化的功能都分解到一个个 plugin 里面。因此当我们不配置任何插件时，经过 babel 的代码和输入是相同的。")])]),t._v(" "),e("p",[t._v("插件总共分为两种：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("语法插件（作用是让 babel 在解析的时候能够支持这种语法）")]),t._v(" "),e("blockquote",[e("p",[t._v("比如 callFoo(param1, param2,) 这种最后带逗号就是非法的，添加"),e("code",[t._v("babel-plugin-syntax-trailing-function-commas")]),t._v("插件就可以支持了。")])])]),t._v(" "),e("li",[e("p",[t._v("转译插件")]),t._v(" "),e("blockquote",[e("p",[t._v("比起语法插件，转译插件其实更好理解，比如箭头函数 (a) => a 就会转化为 function (a) {return a}。完成这个工作的插件叫做 "),e("code",[t._v("babel-plugin-transform-es2015-arrow-functions")]),t._v("。")])])])]),t._v(" "),e("p",[t._v("同一类语法可能同时存在语法插件版本和转译插件版本。如果我们使用了转译插件，就不用再使用语法插件了。")]),t._v(" "),e("h3",{attrs:{id:"preset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preset"}},[t._v("#")]),t._v(" preset")]),t._v(" "),e("p",[t._v("比如 es2015 是一套规范，包含大概十几二十个转译插件。如果每次要开发者一个个添加并安装，配置文件很长不说，npm install 的时间也会很长，更不谈我们可能还要同时使用其他规范呢。"),e("br"),t._v("\n为了解决这个问题，babel 还提供了一组插件的集合。"),e("br"),t._v("\npreset 分为以下几种：")]),t._v(" "),e("ol",[e("li",[t._v("官方内容，目前包括 env, react, flow, minify 等。这里最重要的是 env，后面会详细介绍。")]),t._v(" "),e("li",[t._v("stage-x，这里面包含的都是当年最新规范的草案，每年更新。\n"),e("ol",[e("li",[t._v("Stage 0 - 稻草人: 只是一个想法，经过 TC39 成员提出即可。")]),t._v(" "),e("li",[t._v("Stage 1 - 提案: 初步尝试。")]),t._v(" "),e("li",[t._v("Stage 2 - 初稿: 完成初步规范。")]),t._v(" "),e("li",[t._v("Stage 3 - 候选: 完成规范和浏览器初步实现。")]),t._v(" "),e("li",[t._v("Stage 4 - 完成: 将被添加到下一年度发布。(stage-4 在下一年更新会直接放到 env 中，所以没有单独的 stage-4 可供使用。)")])])]),t._v(" "),e("li",[t._v("es201x, latest 这些是已经纳入到标准规范的语法。例如 es2015 包含 arrow-functions，es2017 包含 syntax-trailing-function-commas。但因为 env 的出现，使得 es2016 和 es2017 都已经废弃。所以我们经常可以看到 es2015 被单独列出来，但极少看到其他两个。 latest 是 env 的雏形，它是一个每年更新的 preset，目的是包含所有 es201x。但也是因为更加灵活的 env 的出现，已经废弃。")])]),t._v(" "),e("h3",{attrs:{id:"执行顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序"}},[t._v("#")]),t._v(" 执行顺序")]),t._v(" "),e("ul",[e("li",[t._v("Plugin 会运行在 Preset 之前。")]),t._v(" "),e("li",[t._v("Plugin 会从前到后顺序执行。")]),t._v(" "),e("li",[t._v("Preset 的顺序则 刚好相反(从后向前)。")])]),t._v(" "),e("p",[t._v("preset 的逆向顺序主要是为了保证向后兼容，因为大多数用户的编写顺序是 ['es2015', 'stage-0']。这样必须先执行 stage-0 才能确保 babel 不报错。")]),t._v(" "),e("h3",{attrs:{id:"插件和-preset-的配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件和-preset-的配置项"}},[t._v("#")]),t._v(" 插件和 preset 的配置项")]),t._v(" "),e("p",[t._v("简略情况下，插件和 preset 只要列出字符串格式的名字即可。但如果某个 preset 或者插件需要一些配置项(或者说参数)，就需要把自己先变成数组。第一个元素依然是字符串，表示自己的名字；第二个元素是一个对象，即配置对象。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"presets"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带了配置项，自己变成数组")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个元素依然是名字")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二个元素是对象，列出配置项")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不带配置项，直接列出名字")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stage-2"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h3",{attrs:{id:"env-重点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#env-重点"}},[t._v("#")]),t._v(" env (重点)")]),t._v(" "),e("p",[t._v("因为 env 最为常用也最重要，所以我们有必要重点关注。")]),t._v(" "),e("p",[t._v("env 的核心目的是通过配置得知目标环境的特点，然后只做必要的转换。例如目标浏览器支持 es2015，那么 es2015 这个 preset 其实是不需要的，于是代码就可以小一点(一般转化后的代码总是更长)，构建时间也可以缩短一些。")]),t._v(" "),e("p",[t._v("如果不写任何配置项，env 等价于 latest，也等价于 es2015 + es2016 + es2017 三个相加(不包含 stage-x 中的插件)。env 包含的插件列表维护在"),e("a",{attrs:{href:"https://github.com/babel/babel-preset-env/blob/master/data/plugin-features.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("下面列出几种比较常用的配置方法：")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presets"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"targets"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"browsers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 2 versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"safari >= 7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("将必要的代码进行转换。而这些版本已有的功能就不进行转化了。这里的语法可以参考"),e("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserslist"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"其他配套工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他配套工具"}},[t._v("#")]),t._v(" 其他配套工具")]),t._v(" "),e("h3",{attrs:{id:"babel-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-node"}},[t._v("#")]),t._v(" babel-node")]),t._v(" "),e("p",[t._v("babel-node 是 babel-cli 的一部分，它不需要单独安装。")]),t._v(" "),e("p",[t._v("它的作用是在 node 环境中，直接运行 es2015 的代码，而不需要额外进行转码。")]),t._v(" "),e("p",[t._v("可以说：babel-node = babel-polyfill + babel-register。那这两位又是谁呢？")]),t._v(" "),e("h3",{attrs:{id:"babel-register"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-register"}},[t._v("#")]),t._v(" babel-register")]),t._v(" "),e("p",[e("code",[t._v("babel-register")]),t._v(" 模块改写 "),e("code",[t._v("require")]),t._v(" 命令，为它加上一个钩子。此后，每当使用 "),e("code",[t._v("require")]),t._v(" 加载 "),e("code",[t._v(".js、.jsx、.es")]),t._v("和 "),e("code",[t._v(".es6")]),t._v(" 后缀名的文件，就会先用 "),e("code",[t._v("babel")]),t._v("进行转码。使用时，必须首先加载 "),e("code",[t._v("require('babel-register')")]),t._v("。需要注意的是，"),e("code",[t._v("babel-register")]),t._v(" 只会对 "),e("code",[t._v("require")]),t._v(" 命令加载的文件转码，而不会对当前文件转码。"),e("br"),t._v("\n另外，由于它是实时转码，所以 只适合在开发环境使用。")]),t._v(" "),e("h3",{attrs:{id:"babel-polyfill"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill"}},[t._v("#")]),t._v(" babel-polyfill")]),t._v(" "),e("blockquote",[e("p",[t._v("babel v7.4.0 不推荐使用,推荐直接导入"),e("code",[t._v("core-js")])])]),t._v(" "),e("p",[t._v("babel 默认只转换 js 语法，而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法(比如 Object.assign)都不会转码。")]),t._v(" "),e("p",[t._v("使用时，在所有代码运行之前增加 require('babel-polyfill')。或者更常规的操作是在 webpack.config.js 中将 babel-polyfill 作为第一个 entry。因此必须把 babel-polyfill 作为 dependencies 而不是 devDependencies"),e("br"),t._v("\nbabel-polyfill 主要有两个缺点：")]),t._v(" "),e("p",[t._v("使用 babel-polyfill 会导致打出来的包非常大，因为 babel-polyfill 是一个整体，把所有方法都加到原型链上。比如我们只使用了 Array.from，但它把 Object.defineProperty 也给加上了，这就是一种浪费了。这个问题可以通过单独使用 core-js 的某个类库来解决，core-js 都是分开的。")]),t._v(" "),e("p",[t._v("babel-polyfill 会污染全局变量，给很多类的原型链上都作了修改，如果我们开发的也是一个类库供其他开发者使用，这种情况就会变得非常不可控。")]),t._v(" "),e("p",[t._v("因此在实际使用中，如果我们无法忍受这两个缺点(尤其是第二个)，通常我们会倾向于使用 babel-plugin-transform-runtime。但如果代码中包含高版本 js 中类型的实例方法 (例如 [1,2,3].includes(1))，这还是要使用 polyfill。")]),t._v(" "),e("h3",{attrs:{id:"babel-runtime-和-babel-plugin-transform-runtime-重点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-runtime-和-babel-plugin-transform-runtime-重点"}},[t._v("#")]),t._v(" babel-runtime 和 babel-plugin-transform-runtime (重点)")]),t._v(" "),e("p",[t._v("我们时常在项目中看到 .babelrc 中使用 babel-plugin-transform-runtime，而 package.json 中的 dependencies (注意不是 devDependencies) 又包含了 babel-runtime，那这两个是不是成套使用的呢？他们又起什么作用呢？")]),t._v(" "),e("p",[t._v("先说 babel-plugin-transform-runtime。")]),t._v(" "),e("p",[t._v("babel 会转换 js 语法，之前已经提过了。以 async/await 举例，如果不使用这个 plugin (即默认情况)，转换后的代码大概是：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// babel 添加一个方法，把 async 转化为 generator")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_asyncToGenerator")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 很长很长一段")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体使用处")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _ref "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_asyncToGenerator")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" something"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("这个 _asyncToGenerator 在当前文件被定义，然后被使用了，以替换源代码的 await。但每个被转化的文件都会插入一段 _asyncToGenerator 这就导致重复和浪费了。"),e("br"),t._v("\n在使用了 babel-plugin-transform-runtime 了之后，转化后的代码会变成")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从直接定义改为引用，这样就不会重复定义了。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _asyncToGenerator2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-runtime/helpers/asyncToGenerator"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _asyncToGenerator3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_interopRequireDefault")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_asyncToGenerator2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体使用处是一样的")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _ref "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_asyncToGenerator3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" something"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("从定义方法改成引用，那重复定义就变成了重复引用，就不存在代码重复的问题了。"),e("br"),t._v("\n但在这里，我们也发现 babel-runtime 出场了，它就是这些方法的集合处，也因此，在使用 babel-plugin-transform-runtime 的时候必须把 babel-runtime 当做依赖。")]),t._v(" "),e("p",[t._v("再说 "),e("code",[t._v("babel-runtime")]),t._v("，它内部集成了")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("core-js: 转换一些内置类 (Promise, Symbols 等等) 和静态方法 (Array.from 等)。绝大部分转换是这里做的。自动引入。")])]),t._v(" "),e("li",[e("p",[t._v("regenerator: 作为 core-js 的拾遗补漏，主要是 generator/yield 和 async/await 两组的支持。当代码中有使用 generators/async 时自动引入。")])]),t._v(" "),e("li",[e("p",[t._v("helpers, 如上面的 asyncToGenerator 就是其中之一，其他还有如 jsx, classCallCheck 等等，可以查看"),e("a",{attrs:{href:"https://github.com/babel/babel/blob/6.x/packages/babel-helpers/src/helpers.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-helpers"),e("OutboundLink")],1),t._v("。 在代码中有内置的 helpers 使用时(如上面的第一段代码)移除定义，并插入引用(于是就变成了第二段代码)。")])])]),t._v(" "),e("p",[e("code",[t._v("babel-plugin-transform-runtime")]),t._v(" 不支持 实例方法 (例如 [1,2,3].includes(1))"),e("br"),t._v("\n此外补充一点，把 helpers 抽离并统一起来，避免重复代码的工作还有一个 plugin 也能做，叫做 babel-plugin-external-helpers。但因为我们使用的 transform-runtime 已经包含了这个功能，因此不必重复使用。而且 babel 的作者们也已经开始讨论这两个插件过于类似，正在讨论在 babel 7 中把 external-helpers 删除，讨论在 "),e("a",{attrs:{href:"https://github.com/babel/babel/issues/5699",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue#5699"),e("OutboundLink")],1),t._v(" 中。")]),t._v(" "),e("h2",{attrs:{id:"babel7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel7"}},[t._v("#")]),t._v(" babel7")]),t._v(" "),e("h3",{attrs:{id:"查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[t._v("#")]),t._v(" 查询")]),t._v(" "),e("h4",{attrs:{id:"支持-api-的各浏览器版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持-api-的各浏览器版本"}},[t._v("#")]),t._v(" 支持 api 的各浏览器版本")]),t._v(" "),e("p",[t._v("https://github.com/zloirock/core-js/blob/master/packages/core-js-compat/src/data.js")]),t._v(" "),e("h4",{attrs:{id:"当前-babel-默认支持哪些特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当前-babel-默认支持哪些特性"}},[t._v("#")]),t._v(" 当前 babel 默认支持哪些特性")]),t._v(" "),e("blockquote",[e("p",[t._v("指的是 preset-env，因为 babel 本身不具备转换的能力。")])]),t._v(" "),e("p",[t._v("https://github.com/babel/babel/blob/main/packages/babel-compat-data/data/plugins.json")]),t._v(" "),e("h4",{attrs:{id:"图表形式-babel7-特性支持情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图表形式-babel7-特性支持情况"}},[t._v("#")]),t._v(" 图表形式 babel7 特性支持情况")]),t._v(" "),e("p",[t._v("https://kangax.github.io/compat-table/es2016plus/#babel7corejs3")]),t._v(" "),e("h3",{attrs:{id:"babel-preset-env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-preset-env"}},[t._v("#")]),t._v(" @babel/preset-env")]),t._v(" "),e("blockquote",[e("p",[t._v("默认转换 browserslist 文件中的版本")])]),t._v(" "),e("ul",[e("li",[t._v("useBuiltIns：为代码添加新 api 的 polyfill\n"),e("ul",[e("li",[t._v("entry: 使用 entry 会检测代码中"),e("code",[t._v('import "core-js";')]),t._v("或者"),e("code",[t._v('import "@babel/polyfill";')]),t._v(",如果有的话那么会把对应支持浏览器版本的所有新特性加载进来，即使没有使用该特性。如果 \"corejs\": 3, 则 import '@babel/polyfill' 需要改成:")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import 'core-js/stable';\nimport 'regenerator-runtime/runtime';\n")])])]),e("ul",[e("li",[e("ul",[e("li",[t._v("usage（推荐）: 只导入我们代码中使用到的 polyfill")])])]),t._v(" "),e("li",[e("p",[t._v("targets：支持版本")]),t._v(" "),e("ul",[e("li",[t._v("esmodules:如果设置这个属性会覆盖掉 targets.browsers 和"),e("code",[t._v(".browserslistrc")]),t._v("文件，改为支持“es6.module”语法")]),t._v(" "),e("li",[t._v("可以通过执行"),e("code",[t._v("import getTargets from '@babel/helper-compilation-targets'")]),t._v(",getTargets方法获取"),e("code",[t._v("browsers")]),t._v("配置文件中的值")])])]),t._v(" "),e("li",[e("p",[t._v("corejs：")]),t._v(" "),e("ul",[e("li",[t._v("version：版本，建议选择 3 以上")]),t._v(" "),e("li",[t._v("proposals：是否启用"),e("code",[t._v("esnext polyfill")]),t._v(",需要注意的是 corejs 的提案和 tc39 并不同步。")]),t._v(" "),e("li",[t._v("false:此时不对 polyfill 做操作。如果引入 @babel/polyfill，则无视配置的浏览器兼容，引入所有的 polyfill。")])])]),t._v(" "),e("li",[e("p",[t._v("debug:展示使用的插件和所有支持浏览器列表")])]),t._v(" "),e("li",[e("p",[t._v("include：强制加载某些插件")])]),t._v(" "),e("li",[e("p",[t._v("configPath：从哪里开始寻找 browserslist")])]),t._v(" "),e("li",[e("p",[t._v("ignoreBrowserslistConfig：是否忽略 browserslist 配置文件。")]),t._v(" "),e("blockquote",[e("p",[t._v("引用：https://blog.csdn.net/vv_bug/article/details/107052867")])])])]),t._v(" "),e("h3",{attrs:{id:"升级-babel7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级-babel7"}},[t._v("#")]),t._v(" 升级 babel7")]),t._v(" "),e("p",[t._v("使用官方的"),e("code",[t._v("babel-upgrade")]),t._v("插件来帮助你快速平稳的迁移，使用方式：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不安装到本地而是直接运行命令，npm 的新功能")]),t._v("\nnpx babel-upgrade --write\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者常规方式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i babel-upgrade -g\nbabel-upgrade --write\n")])])]),e("h2",{attrs:{id:"优化项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化项"}},[t._v("#")]),t._v(" 优化项")]),t._v(" "),e("ol",[e("li",[t._v("使用"),e("code",[t._v("@babel/plugin-transform-runtime")]),t._v(",解决多个地方使用相同代码导致打包重复的问题")])]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/5c19c5e0e51d4502a232c1c6",target:"_blank",rel:"noopener noreferrer"}},[t._v("一口(很长的)气了解 babel"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/6844903729188044814",target:"_blank",rel:"noopener noreferrer"}},[t._v("Show me the code，babel 7 最佳实践！"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);