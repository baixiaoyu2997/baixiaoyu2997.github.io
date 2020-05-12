(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{480:function(t,r,e){"use strict";e.r(r);var a=e(2),n=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("标题参考"),e("a",{attrs:{href:"https://roadmap.sh/frontend",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端技能路线系列"),e("OutboundLink")],1),e("br"),t._v("\n副标题参考 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),e("br"),t._v("\n文章内容来源 "),e("a",{attrs:{href:"https://juejin.im/post/5dafa3d35188257b1549bad1#heading-12",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 相关"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"headers（消息头）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headers（消息头）"}},[t._v("#")]),t._v(" Headers（消息头）")]),t._v(" "),e("h3",{attrs:{id:"content-security-policy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy"}},[t._v("#")]),t._v(" Content-Security-Policy")]),t._v(" "),e("p",[t._v("通过csp 规则的约束，浏览器只可以加载指定可信的域名来源的内容 ​​​")]),t._v(" "),e("h2",{attrs:{id:"缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),e("p",[t._v("一、浏览器缓存"),e("br"),t._v("\nHttp缓存机制分为两种，客户端缓存和服务器端缓存，而服务端缓存又分为 代理服务器缓存（例：CDN 服务）和 反向代理服务器缓存（例：Nginx 反向代理服务）,强制缓存与对比缓存是可以同时存在的，并且强制缓存的优先级高于对比缓存。")]),t._v(" "),e("ul",[e("li",[t._v("服务端决策缓存：由服务端决定并告知客户端是否使用缓存。")]),t._v(" "),e("li",[t._v("客户端决策缓存：服务端告知客户端缓存时间后，由客户端判断并决定是否使用缓存。"),e("br"),t._v("\n对于这两种策略机制的区别，最明显的表象是：从 Chrome DevTool 中 Network 面板里看到缓存的请求，服务端决策缓存在 Status 一栏显示的是 304，而客户端决策缓存在 Status 一栏显示的是 200，不过在 Size 一栏会显示 from disk cache。")])]),t._v(" "),e("p",[t._v("浏览器第一次请求："),e("br"),t._v(" "),e("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%8A%80%E8%83%BD%E8%B7%AF%E7%BA%BF-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CHTTP_2020-3-13-14-2-23.png",alt:"前端技能路线-浏览器和HTTP_2020-3-13-14-2-23.png"}}),e("br"),t._v("\n浏览器再次请求时："),e("br"),t._v(" "),e("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%8A%80%E8%83%BD%E8%B7%AF%E7%BA%BF-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CHTTP_2020-3-13-14-2-54.png",alt:"前端技能路线-浏览器和HTTP_2020-3-13-14-2-54.png"}})]),t._v(" "),e("p",[t._v("二、缓存位置"),e("br"),t._v("\n从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络。")]),t._v(" "),e("ul",[e("li",[t._v("Service Worker")]),t._v(" "),e("li",[t._v("Memory Cache")]),t._v(" "),e("li",[t._v("Disk Cache")]),t._v(" "),e("li",[t._v("Push Cache")])]),t._v(" "),e("p",[t._v("三、浏览器缓存机制图\n"),e("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%8A%80%E8%83%BD%E8%B7%AF%E7%BA%BF-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CHTTP_2020-3-13-15-52-3.png",alt:"前端技能路线-浏览器和HTTP_2020-3-13-15-52-3.png"}}),e("br"),t._v("\n四、最佳实践"),e("br"),t._v("\n缓存的意义就在于减少请求，更多地使用本地的资源，给用户更好的体验的同时，也减轻服务器压力。所以，最佳实践，就应该是尽可能命中强缓存，同时，能在更新版本的时候让客户端的缓存失效。\n在更新版本之后，如何让用户第一时间使用最新的资源文件呢？在更新版本的时候，顺便把静态资源的路径改了，这样，就相当于第一次访问这些资源，就不会存在缓存的问题了。"),e("br"),t._v("\n在webpack中设置文件指纹：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("entry:{\n    main: path.join(__dirname,'./main.js'),\n    vendor: ['react', 'antd']\n},\noutput:{\n    path:path.join(__dirname,'./dist'),\n    publicPath: '/dist/',\n    filname: 'bundle.[contenthash].js'\n}\n")])])]),e("p",[t._v("综上所述，我们可以得出一个较为合理的缓存方案：")]),t._v(" "),e("ul",[e("li",[t._v("HTML：使用协商缓存。")]),t._v(" "),e("li",[t._v("CSS&JS&图片：使用强缓存，文件命名带上hash值。")])]),t._v(" "),e("p",[t._v("引用：")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 缓存"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://e-lim.cn/20181010/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入 Web 缓存策略"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://www.cnblogs.com/chenqf/p/6386163.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底弄懂HTTP缓存机制及原理"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://juejin.im/post/5c136bd16fb9a049d37efc47#heading-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端缓存最佳实践"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"http-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" HTTP/2")]),t._v(" "),e("p",[t._v("http 2相对于之前的http协议有以下几个优点:1.http2采用流式传输，同时对消息头采用hpack压缩传输，最大限度节省网络带宽。2.使用tcp 多路复用。3.支持传输流的优先级和流量控制机制。4.支持服务端推送 ​​​​")]),t._v(" "),e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),e("h3",{attrs:{id:"什么是网络劫持？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是网络劫持？"}},[t._v("#")]),t._v(" 什么是网络劫持？")]),t._v(" "),e("p",[t._v("网络劫持一般指网站资源请求在请求过程中因为人为的攻击导致没有加载到预期的资源内容，网络请求劫持分为dns劫持和http 劫持 ​​​​")])])}),[],!1,null,null,null);r.default=n.exports}}]);