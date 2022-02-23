(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{541:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("p",[t._v("代码变成可执行文件")]),t._v(" "),s("h2",{attrs:{id:"构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[t._v("#")]),t._v(" 构建")]),t._v(" "),s("p",[t._v("先编译这个，还是先编译那个（即编译的安排），叫做"),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Software_build",target:"_blank",rel:"noopener noreferrer"}},[t._v("构建"),s("OutboundLink")],1),t._v("（build）。")]),t._v(" "),s("h2",{attrs:{id:"env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" env")]),t._v(" "),s("p",[t._v("环境，比如env文件就是环境变量文件，用于服务端进程。")]),t._v(" "),s("h2",{attrs:{id:"dapp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dapp"}},[t._v("#")]),t._v(" Dapp")]),t._v(" "),s("p",[t._v("去中心化应用，Dapp不一定需要在区块链网络上运行。普通的前端页面运作方式:"),s("code",[t._v("前端 > API > 数据库")]),t._v("，Dapp的网站："),s("code",[t._v("前端 > 智能合约 > 区块链")])]),t._v(" "),s("h2",{attrs:{id:"devops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#devops"}},[t._v("#")]),t._v(" DevOps")]),t._v(" "),s("p",[t._v("开发、运维")]),t._v(" "),s("h2",{attrs:{id:"monorepo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monorepo"}},[t._v("#")]),t._v(" monorepo")]),t._v(" "),s("p",[t._v("monorepo(monolithic repository)，与multirepo相对，分别是单代码仓库与多代码仓库（one-repository-per-module）")]),t._v(" "),s("h3",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("h3",{attrs:{id:"工作流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作流"}},[t._v("#")]),t._v(" 工作流")]),t._v(" "),s("h4",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("p",[t._v("eslint、babel、tsconfig等配置文件都放在根目录。子包如果有需要，可以通过"),s("code",[t._v("extend")]),t._v("引用：")]),t._v(" "),s("p",[t._v("​")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../.eslintrc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"scripty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scripty"}},[t._v("#")]),t._v(" scripty")]),t._v(" "),s("p",[t._v("统一命令脚本,通过将"),s("code",[t._v("scripts")]),t._v("定义在文件中，这样达到了复用脚本的目的和像写代码一样写脚本。")]),t._v(" "),s("p",[t._v("目录结构：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("├── package.json\n├── .eslintrc\n├── scirpts/ # 这里存放所有的脚本\n│   │   ├── packages/ # 包级别脚本\n│   │   │   ├── build.sh\n│   │   │   └── test.sh\n│   └───└── workspaces/ # 全局脚本\n│           ├── build.sh\n│           └── test.sh\n└── packages/\n    │   ├── tsconfig.settings.json\n    │   ├── .babelrc\n    ├── @mono/project_1/\n    │   ├── index.js\n    │   ├── .eslintrc\n    │   ├── .babelrc\n    │   ├── tsconfig.json\n    │   └── package.json\n    └── @mono/project_2/\n        ├── index.js\n        ├── .eslintrc\n        ├── .babelrc\n        ├── tsconfig.json\n        └── package.json\n")])])]),s("p",[t._v("子项目的"),s("code",[t._v("package.json")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripty"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripty"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripty"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripty"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../scripts/packages"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这里我们指定了 scripty 的路径")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"导入远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入远程仓库"}},[t._v("#")]),t._v(" 导入远程仓库")]),t._v(" "),s("p",[s("code",[t._v("lerna import")]),t._v("只会导入本地的项目，并且不支持导入项目的分支和标签。使用"),s("code",[t._v("tomono")]),t._v("来解决这个问题")]),t._v(" "),s("h2",{attrs:{id:"ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssr"}},[t._v("#")]),t._v(" SSR")]),t._v(" "),s("p",[s("code",[t._v("Server Side Rendering")]),t._v("服务端渲染")]),t._v(" "),s("h3",{attrs:{id:"缺点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ol",[s("li",[t._v("需要一直占用服务,占用服务器资源")]),t._v(" "),s("li",[t._v("多个服务器时加载速度与cdn相比，比较慢。")]),t._v(" "),s("li",[t._v("较高的学习成本")]),t._v(" "),s("li",[t._v("部分生命周期不可用。")])]),t._v(" "),s("h3",{attrs:{id:"优点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ol",[s("li",[t._v("更好的seo")]),t._v(" "),s("li",[t._v("更快的首屏渲染")])]),t._v(" "),s("h2",{attrs:{id:"ssg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssg"}},[t._v("#")]),t._v(" SSG")]),t._v(" "),s("p",[s("code",[t._v("Static Site Generation")]),t._v("，静态网站生成")]),t._v(" "),s("h3",{attrs:{id:"缺点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("p",[t._v("1.渲染大量页面时比较耗时")]),t._v(" "),s("h3",{attrs:{id:"优点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-3"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ol",[s("li",[t._v("当有大量静态内容时，使用服务去生成相同的内容是很浪费的行为。使用ssg可以预先把静态内容生成，其他动态内容由客户端渲染，这样就减轻了服务端渲染的负担。")]),t._v(" "),s("li",[t._v("seo友好")]),t._v(" "),s("li",[t._v("用户始终通过cdn加载页面核心内容，加载速度快")]),t._v(" "),s("li",[t._v("由于每次都是全站渲染，所以网站的版本可以很好的与 Git 的版本对应上，甚至可以做到原子化发布和回滚。")])]),t._v(" "),s("h2",{attrs:{id:"isr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isr"}},[t._v("#")]),t._v(" ISR")]),t._v(" "),s("p",[t._v("Incremental Site Rendering，增量式的网站渲染，用于解决SSG全量预渲染的问题。")]),t._v(" "),s("p",[t._v("1、"),s("strong",[t._v("关键性的页面")]),t._v("（如网站首页、热点数据等）预渲染为静态页面，缓存至 CDN，保证最佳的访问性能；")]),t._v(" "),s("p",[t._v("2、"),s("strong",[t._v("非关键性的页面")]),t._v("（如流量很少的老旧内容）先响应 fallback 内容，然后浏览器渲染（CSR）为实际数据；同时对页面进行异步预渲染，之后缓存至 CDN，提升后续用户访问的性能。")]),t._v(" "),s("h3",{attrs:{id:"缺点-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-4"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ol",[s("li",[t._v("对于没有预渲染的页面，用户首次访问将会看到一个 fallback 页面，此时服务端才开始渲染页面，直到渲染完毕。这就导致用户"),s("strong",[t._v("体验上的不一致")]),t._v("。")]),t._v(" "),s("li",[t._v("对于已经被预渲染的页面，用户直接从 CDN 加载，"),s("strong",[t._v("但这些页面可能是已经过期的，甚至过期很久的")]),t._v("，只有在用户刷新一次，第二次访问之后，才能看到新的数据。对于电商这样的场景而言，是不可接受的（比如商品已经卖完了，但用户看到的过期数据上显示还有）。")])]),t._v(" "),s("h3",{attrs:{id:"优点-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-4"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ol",[s("li",[t._v("减少打包时间")])]),t._v(" "),s("h2",{attrs:{id:"dpr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dpr"}},[t._v("#")]),t._v(" DPR")]),t._v(" "),s("p",[t._v("Distributed Persistent Rendering，分布式的持续渲染。DPR 本质上讲，是对 ISR 的模型做了几处改动，并且搭配上 CDN 的能力：")]),t._v(" "),s("ol",[s("li",[t._v("去除了 fallback 行为，而是直接用 "),s("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.netlify.com/blog/2021/04/14/faster-builds-for-large-sites-on-netlify-with-on-demand-builders-now-in-early-access/",target:"_blank",rel:"noopener noreferrer"}},[t._v("On-demand Builder"),s("OutboundLink")],1),t._v("（按需构建器）来响应未经过预渲染的页面，然后将结果缓存至 CDN；")]),t._v(" "),s("li",[t._v("数据页面过期时，不再响应过期的缓存页面，而是 CDN 回源到 Builder 上，渲染出最新的数据；")]),t._v(" "),s("li",[t._v("每次发布新版本时，自动清除 CDN 的缓存数据。")])]),t._v(" "),s("h3",{attrs:{id:"缺点-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-5"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ol",[s("li",[t._v("新页面的访问可能会触发 On-demand Builder 同步渲染，导致当次请求的响应时间比较长；")]),t._v(" "),s("li",[t._v("比较难防御 DoS 攻击，因为攻击者可能会大量访问新页面，导致 Builder 被大量并行地运行，这里需要平台方实现 Builder 的归一化和串行运行。")])]),t._v(" "),s("h2",{attrs:{id:"lowcode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lowcode"}},[t._v("#")]),t._v(" lowcode")]),t._v(" "),s("p",[t._v("通过配置文件来编写页面或者拖拽方式完成页面的编写，结构推荐：")]),t._v(" "),s("ol",[s("li",[t._v("label，文本")]),t._v(" "),s("li",[t._v("props，底层组件属性")]),t._v(" "),s("li",[t._v("type，组件类型")]),t._v(" "),s("li",[t._v("on，组件事件")])]),t._v(" "),s("h3",{attrs:{id:"搭建方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建方案"}},[t._v("#")]),t._v(" 搭建方案")]),t._v(" "),s("p",[t._v("1 . 拆分显示组件和编辑的组件的逻辑，比如单独设置"),s("code",[t._v("view")]),t._v("、"),s("code",[t._v("edit")]),t._v("选项来处理数据。")]),t._v(" "),s("h2",{attrs:{id:"中台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中台"}},[t._v("#")]),t._v(" 中台")]),t._v(" "),s("p",[t._v("多个项目共用部分提取成中台，具体介绍：https://juejin.cn/post/6844903957693726727#comment")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/365113639?utm_medium=social&utm_oi=32383348768768",target:"_blank",rel:"noopener noreferrer"}},[t._v("新一代Web建站技术栈的演进：SSR、SSG、ISR、DPR都在做什么？"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);