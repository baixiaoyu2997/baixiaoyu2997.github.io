(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{512:function(t,e,a){"use strict";a.r(e);var r=a(2),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("标题参考"),a("a",{attrs:{href:"https://roadmap.sh/frontend",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端技能路线系列"),a("OutboundLink")],1),a("br"),t._v("\n副标题参考 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1),a("br"),t._v("\n文章内容来源 "),a("a",{attrs:{href:"https://juejin.im/post/5dafa3d35188257b1549bad1#heading-12",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 相关"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"http基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http基础"}},[t._v("#")]),t._v(" HTTP基础")]),t._v(" "),a("h3",{attrs:{id:"mime类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime类型"}},[t._v("#")]),t._v(" MIME类型")]),t._v(" "),a("p",[t._v("媒体类型或 MIME 类型是一种标准，用来表示文档、文件或字节流的性质和格式。")]),t._v(" "),a("p",[t._v("浏览器通常使用MIME类型（而不是文件扩展名）来确定如何处理URL，因此Web服务器在响应头中添加正确的MIME类型非常重要")]),t._v(" "),a("h4",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("p",[t._v("MIME的组成结构非常简单；由类型和子类型两个字符串中间用"),a("code",[t._v("/")]),t._v("分隔。MIME类型对大小写不敏感，但是传统写法都是小写。")]),t._v(" "),a("h4",{attrs:{id:"mime-嗅探"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime-嗅探"}},[t._v("#")]),t._v(" MIME 嗅探")]),t._v(" "),a("p",[t._v("在缺失 MIME 类型或客户端认为文件设置了错误的 MIME 类型时，浏览器可能会通过查看资源来进行MIME嗅探。每一个浏览器在不同的情况下会执行不同的操作。因为这个操作会有一些安全问题，有的 MIME 类型表示可执行内容而有些是不可执行内容。浏览器可以通过请求头 Content-Type 来设置 X-Content-Type-Options 以阻止MIME嗅探。")]),t._v(" "),a("h4",{attrs:{id:"默认类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认类型"}},[t._v("#")]),t._v(" 默认类型")]),t._v(" "),a("p",[t._v("有两种默认类型：")]),t._v(" "),a("ul",[a("li",[t._v("application/octet-stream")]),t._v(" "),a("li",[t._v("text/plain")])]),t._v(" "),a("p",[t._v("因为 Chrome 不能执行 application/octet-stream 格式的文件，默认操作是把它下载下来，（不同浏览器对待不能处理的文件执行的操作不一样，有些浏览器则会尝试去嗅探）。")]),t._v(" "),a("h4",{attrs:{id:"npm相关包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm相关包"}},[t._v("#")]),t._v(" npm相关包")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/mime",target:"_blank",rel:"noopener noreferrer"}},[t._v("mime"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"headers-消息头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-消息头"}},[t._v("#")]),t._v(" Headers（消息头）")]),t._v(" "),a("h3",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),a("p",[t._v("cookie是储存与访问者的计算机中的变量.可以让我们用同一个浏览器访问同一个域名的时候共享数据。"),a("br"),t._v("\nhttp是无状态协议，简单的说，当你浏览了一个页面，然后转到同一个网站的另一个页面，服务器无法认识到这是同一个浏览器在访问同一个网站，每一次的访问，都是没有任何关系的。")]),t._v(" "),a("p",[t._v("设置cookie：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("maxAge")]),t._v(" "),a("td",[t._v("一个数字表述从Date.now()得到的毫秒数")])]),t._v(" "),a("tr",[a("td",[t._v("expires")]),t._v(" "),a("td",[t._v("cookie过期的Date")])]),t._v(" "),a("tr",[a("td",[t._v("path")]),t._v(" "),a("td",[t._v("cookie路径，默认是'/'")])]),t._v(" "),a("tr",[a("td",[t._v("domain")]),t._v(" "),a("td",[t._v("cookie域名")])]),t._v(" "),a("tr",[a("td",[t._v("secure")]),t._v(" "),a("td",[t._v("安全cookie，默认false，设置成true表示只有https可以访问")])]),t._v(" "),a("tr",[a("td",[t._v("httpOnly")]),t._v(" "),a("td",[t._v("客户端和服务器是否可访问cookie，设置true则只有服务端可以获取，默认是true")])]),t._v(" "),a("tr",[a("td",[t._v("overwrite")]),t._v(" "),a("td",[t._v("一个布尔值，表示是否覆盖以前设置的同名的cookie（默认是false），如果是true，在同一个请求中设置相同名称的所有cookie（不管路径或域）是否在设置此cookie时从Set-Cookie标头中过滤掉。")])])])]),t._v(" "),a("p",[t._v("注意：cookie值不能为中文，需要先用"),a("code",[t._v("encodeURI")]),t._v("转换为utf-8格式，取值的时候再用"),a("code",[t._v("decodeURI")]),t._v("转换回来。或者转为base64格式")]),t._v(" "),a("h3",{attrs:{id:"content-security-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy"}},[t._v("#")]),t._v(" Content-Security-Policy")]),t._v(" "),a("p",[t._v("通过 csp 规则的约束，浏览器只可以加载指定可信的域名来源的内容 ​​​")]),t._v(" "),a("h3",{attrs:{id:"content-disposition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-disposition"}},[t._v("#")]),t._v(" Content-Disposition")]),t._v(" "),a("p",[t._v("Content-Disposition 响应头指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。可选值：")]),t._v(" "),a("ul",[a("li",[t._v("inline 默认值是"),a("code",[t._v("inline")]),t._v(",以内联形式展示")]),t._v(" "),a("li",[t._v("attachment 意味着消息体应该被下载到本地")]),t._v(" "),a("li",[t._v('attachment; filename="filename.jpg" 将 filename 的值预填为下载后的文件名，假如它存在的话。')])]),t._v(" "),a("h2",{attrs:{id:"缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),a("p",[t._v("一、浏览器缓存"),a("br"),t._v("\nHttp 缓存机制分为两种，客户端缓存和服务器端缓存，而服务端缓存又分为 代理服务器缓存（例：CDN 服务）和 反向代理服务器缓存（例：Nginx 反向代理服务）,强制缓存与对比缓存是可以同时存在的，并且强制缓存的优先级高于对比缓存。")]),t._v(" "),a("ul",[a("li",[t._v("服务端决策缓存：由服务端决定并告知客户端是否使用缓存。")]),t._v(" "),a("li",[t._v("客户端决策缓存：服务端告知客户端缓存时间后，由客户端判断并决定是否使用缓存。"),a("br"),t._v("\n对于这两种策略机制的区别，最明显的表象是：从 Chrome DevTool 中 Network 面板里看到缓存的请求，服务端决策缓存在 Status 一栏显示的是 304，而客户端决策缓存在 Status 一栏显示的是 200，不过在 Size 一栏会显示 from disk cache。")])]),t._v(" "),a("p",[t._v("浏览器第一次请求："),a("br"),t._v(" "),a("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%8A%80%E8%83%BD%E8%B7%AF%E7%BA%BF-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CHTTP_2020-3-13-14-2-23.png",alt:"前端技能路线-浏览器和HTTP_2020-3-13-14-2-23.png"}}),a("br"),t._v("\n浏览器再次请求时："),a("br"),t._v(" "),a("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%8A%80%E8%83%BD%E8%B7%AF%E7%BA%BF-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CHTTP_2020-3-13-14-2-54.png",alt:"前端技能路线-浏览器和HTTP_2020-3-13-14-2-54.png"}})]),t._v(" "),a("p",[t._v("二、缓存位置"),a("br"),t._v("\n从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络。")]),t._v(" "),a("ul",[a("li",[t._v("Service Worker")]),t._v(" "),a("li",[t._v("Memory Cache")]),t._v(" "),a("li",[t._v("Disk Cache")]),t._v(" "),a("li",[t._v("Push Cache")])]),t._v(" "),a("p",[t._v("三、浏览器缓存机制图 "),a("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%8A%80%E8%83%BD%E8%B7%AF%E7%BA%BF-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CHTTP_2020-3-13-15-52-3.png",alt:"前端技能路线-浏览器和HTTP_2020-3-13-15-52-3.png"}}),a("br"),t._v("\n四、最佳实践"),a("br"),t._v("\n缓存的意义就在于减少请求，更多地使用本地的资源，给用户更好的体验的同时，也减轻服务器压力。所以，最佳实践，就应该是尽可能命中强缓存，同时，能在更新版本的时候让客户端的缓存失效。在更新版本之后，如何让用户第一时间使用最新的资源文件呢？在更新版本的时候，顺便把静态资源的路径改了，这样，就相当于第一次访问这些资源，就不会存在缓存的问题了。"),a("br"),t._v("\n在 webpack 中设置文件指纹：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("entry:{\n    main: path.join(__dirname,'./main.js'),\n    vendor: ['react', 'antd']\n},\noutput:{\n    path:path.join(__dirname,'./dist'),\n    publicPath: '/dist/',\n    filname: 'bundle.[contenthash].js'\n}\n")])])]),a("p",[t._v("综上所述，我们可以得出一个较为合理的缓存方案：")]),t._v(" "),a("ul",[a("li",[t._v("HTML：使用协商缓存。")]),t._v(" "),a("li",[t._v("CSS&JS&图片：使用强缓存，文件命名带上 hash 值。")])]),t._v(" "),a("p",[t._v("引用：")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 缓存"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://e-lim.cn/20181010/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入 Web 缓存策略"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/chenqf/p/6386163.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底弄懂 HTTP 缓存机制及原理"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://juejin.im/post/5c136bd16fb9a049d37efc47#heading-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端缓存最佳实践"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844904034181070861",target:"_blank",rel:"noopener noreferrer"}},[t._v("傻傻分不清之 Cookie、Session、Token、JWT"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"http-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" HTTP/2")]),t._v(" "),a("p",[t._v("http 2 相对于之前的 http 协议有以下几个优点:1.http2 采用流式传输，同时对消息头采用 hpack 压缩传输，最大限度节省网络带宽。2.使用 tcp 多路复用。3.支持传输流的优先级和流量控制机制。4.支持服务端推送 ​​​​")]),t._v(" "),a("h2",{attrs:{id:"文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文章"}},[t._v("#")]),t._v(" 文章")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844904079974465544",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端需要了解的计算机网络知识， 这一篇就够了！"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("h3",{attrs:{id:"什么是网络劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是网络劫持"}},[t._v("#")]),t._v(" 什么是网络劫持？")]),t._v(" "),a("p",[t._v("网络劫持一般指网站资源请求在请求过程中因为人为的攻击导致没有加载到预期的资源内容，网络请求劫持分为 dns 劫持和 http 劫持 ​​​​")]),t._v(" "),a("h3",{attrs:{id:"下载文件的几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载文件的几种方式"}},[t._v("#")]),t._v(" 下载文件的几种方式？")]),t._v(" "),a("ol",[a("li",[t._v("访问资源时，服务端没设置contentType，并且被解析为默认的"),a("code",[t._v("application/octet-stream")]),t._v(",那么会下载该资源")]),t._v(" "),a("li",[t._v("Content-Disposition设置为"),a("code",[t._v("attachment")]),t._v("的资源")]),t._v(" "),a("li",[t._v("HTML5 a 标签增加的 download 属性："),a("code",[t._v('<a href="/images/xxx.jpg" download="panda.jpg" >My Panda</a>')])]),t._v(" "),a("li",[t._v("还有些场景，只能通过异步请求返回二进制内容再由前端下载。借助 download 属性，结合 Blob, Url.createObjectURL() 可以实现前端异步请求资源并导出文件")])])])}),[],!1,null,null,null);e.default=_.exports}}]);