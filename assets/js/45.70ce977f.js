(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{313:function(e,t,r){"use strict";r.r(t);var a=r(1),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("blockquote",[r("p",[e._v("标题参考"),r("a",{attrs:{href:"https://roadmap.sh/frontend",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端技能路线系列"),r("OutboundLink")],1),r("br"),e._v("\n副标题参考 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),r("OutboundLink")],1),r("br"),e._v("\n文章内容来源 "),r("a",{attrs:{href:"https://juejin.im/post/5dafa3d35188257b1549bad1#heading-12",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP 相关"),r("OutboundLink")],1)])]),e._v(" "),r("h1",{attrs:{id:"internet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#internet","aria-hidden":"true"}},[e._v("#")]),e._v(" Internet")]),e._v(" "),r("h2",{attrs:{id:"浏览器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器")]),e._v(" "),r("h3",{attrs:{id:"samesite防止第三方cookie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#samesite防止第三方cookie","aria-hidden":"true"}},[e._v("#")]),e._v(" SameSite防止第三方Cookie")]),e._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("引用文章-Cookie 的 SameSite 属性"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("SameSite需要通过后台设置 。第三方"),r("code",[e._v("Cookie")]),e._v("不仅可以用来CSRF攻击，还可以用于用户追踪，"),r("code",[e._v("Cookie")]),e._v("的"),r("code",[e._v("sameSite")]),e._v("属性用来限制第三方"),r("code",[e._v("Cookie")]),e._v(",从而减少安全风险。"),r("br"),e._v("\n它可以设置三个值:"),r("code",[e._v("strict、lax、None")]),e._v("."),r("br"),e._v("\nStrict有些过于严格，可能会造成不好的用户体验，Lax规则稍稍放宽，大多数情况也是不发送第三方 Cookie。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Set-Cookie: CookieName=CookieValue; SameSite=Lax;\n")])])]),r("h2",{attrs:{id:"http"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP")]),e._v(" "),r("h3",{attrs:{id:"缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存","aria-hidden":"true"}},[e._v("#")]),e._v(" 缓存")]),e._v(" "),r("p",[e._v("一、浏览器缓存"),r("br"),e._v("\nHttp缓存机制分为两种，客户端缓存和服务器端缓存，而服务端缓存又分为 代理服务器缓存（例：CDN 服务）和 反向代理服务器缓存（例：Nginx 反向代理服务）,强制缓存与对比缓存是可以同时存在的，并且强制缓存的优先级高于对比缓存。")]),e._v(" "),r("ul",[r("li",[e._v("服务端决策缓存：由服务端决定并告知客户端是否使用缓存。")]),e._v(" "),r("li",[e._v("客户端决策缓存：服务端告知客户端缓存时间后，由客户端判断并决定是否使用缓存。"),r("br"),e._v("\n对于这两种策略机制的区别，最明显的表象是：从 Chrome DevTool 中 Network 面板里看到缓存的请求，服务端决策缓存在 Status 一栏显示的是 304，而客户端决策缓存在 Status 一栏显示的是 200，不过在 Size 一栏会显示 from disk cache。")])]),e._v(" "),r("p",[e._v("浏览器第一次请求："),r("br"),e._v(" "),r("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%8A%80%E8%83%BD%E8%B7%AF%E7%BA%BF-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CHTTP_2020-3-13-14-2-23.png",alt:"前端技能路线-浏览器和HTTP_2020-3-13-14-2-23.png"}}),r("br"),e._v("\n浏览器再次请求时："),r("br"),e._v(" "),r("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%8A%80%E8%83%BD%E8%B7%AF%E7%BA%BF-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CHTTP_2020-3-13-14-2-54.png",alt:"前端技能路线-浏览器和HTTP_2020-3-13-14-2-54.png"}})]),e._v(" "),r("p",[e._v("二、缓存位置"),r("br"),e._v("\n从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络。")]),e._v(" "),r("ul",[r("li",[e._v("Service Worker")]),e._v(" "),r("li",[e._v("Memory Cache")]),e._v(" "),r("li",[e._v("Disk Cache")]),e._v(" "),r("li",[e._v("Push Cache")])]),e._v(" "),r("p",[e._v("三、浏览器缓存机制图\n"),r("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%8A%80%E8%83%BD%E8%B7%AF%E7%BA%BF-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CHTTP_2020-3-13-15-52-3.png",alt:"前端技能路线-浏览器和HTTP_2020-3-13-15-52-3.png"}}),r("br"),e._v("\n四、最佳实践"),r("br"),e._v("\n缓存的意义就在于减少请求，更多地使用本地的资源，给用户更好的体验的同时，也减轻服务器压力。所以，最佳实践，就应该是尽可能命中强缓存，同时，能在更新版本的时候让客户端的缓存失效。\n在更新版本之后，如何让用户第一时间使用最新的资源文件呢？在更新版本的时候，顺便把静态资源的路径改了，这样，就相当于第一次访问这些资源，就不会存在缓存的问题了。"),r("br"),e._v("\n在webpack中设置文件指纹：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("entry:{\n    main: path.join(__dirname,'./main.js'),\n    vendor: ['react', 'antd']\n},\noutput:{\n    path:path.join(__dirname,'./dist'),\n    publicPath: '/dist/',\n    filname: 'bundle.[contenthash].js'\n}\n")])])]),r("p",[e._v("综上所述，我们可以得出一个较为合理的缓存方案：")]),e._v(" "),r("ul",[r("li",[e._v("HTML：使用协商缓存。")]),e._v(" "),r("li",[e._v("CSS&JS&图片：使用强缓存，文件命名带上hash值。")])]),e._v(" "),r("p",[e._v("引用：")]),e._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP 缓存"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://e-lim.cn/20181010/",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入 Web 缓存策略"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://www.cnblogs.com/chenqf/p/6386163.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("彻底弄懂HTTP缓存机制及原理"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://juejin.im/post/5c136bd16fb9a049d37efc47#heading-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端缓存最佳实践"),r("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=n.exports}}]);