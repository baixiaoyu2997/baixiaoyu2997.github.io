(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{502:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("标题参考"),s("a",{attrs:{href:"https://roadmap.sh/frontend",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端技能路线系列"),s("OutboundLink")],1),s("br"),t._v("\n副标题参考 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"samesite-防止第三方-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#samesite-防止第三方-cookie"}},[t._v("#")]),t._v(" SameSite 防止第三方 Cookie")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("引用文章-Cookie 的 SameSite 属性"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("SameSite 需要通过后台设置 。第三方"),s("code",[t._v("Cookie")]),t._v("不仅可以用来 CSRF 攻击，还可以用于用户追踪，"),s("code",[t._v("Cookie")]),t._v("的"),s("code",[t._v("sameSite")]),t._v("属性用来限制第三方"),s("code",[t._v("Cookie")]),t._v(",从而减少安全风险。"),s("br"),t._v("\n它可以设置三个值:"),s("code",[t._v("strict、lax、None")]),t._v("."),s("br"),t._v("\nStrict 有些过于严格，可能会造成不好的用户体验，Lax 规则稍稍放宽，大多数情况也是不发送第三方 Cookie。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Set-Cookie: CookieName=CookieValue; SameSite=Lax;\n")])])]),s("h2",{attrs:{id:"webapi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webapi"}},[t._v("#")]),t._v(" WebApi")]),t._v(" "),s("p",[t._v("客户端 JavaScript 提供很多可用的 API，他们本身不是 JavaScript 语言的一部分，却建立在 JavaScript 语言核心的顶部，为使用 JavaScript 代码提供额外的超强能力。他们通常分为两类：")]),t._v(" "),s("p",[t._v("浏览器 API：内置于 Web 浏览器，可以从浏览器和电脑周围环境获取数据，并用于复杂的操作。例如 Geolocation API 提供了一些简单的 JavaScript 结构来获取位置数据，这种 API 通常抽象很多复杂逻辑，我们只要调用 API 即可。")]),t._v(" "),s("p",[t._v("第三方 API：缺省情况下不会内置于浏览器，而必须在 Wen 中某个地方获取代码和信息，例如 Twitter API 可以推送最新推文给我们，它提供一系列第三方 API 让我们获取 Twitter 的服务和信息。")]),t._v(" "),s("h3",{attrs:{id:"document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[t._v("#")]),t._v(" Document")]),t._v(" "),s("h4",{attrs:{id:"document-execcommand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-execcommand"}},[t._v("#")]),t._v(" document.execCommand")]),t._v(" "),s("p",[t._v("拷贝选定元素的文本")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("copyText")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" selection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSelection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清空selection对象")]),t._v("\n  selection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAllRanges")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个Range实例")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ele "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" range "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectNodeContents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// selection对象设置range实例")]),t._v("\n  selection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Copy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  selection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAllRanges")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" Window")]),t._v(" "),s("h4",{attrs:{id:"domcontentloaded"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domcontentloaded"}},[t._v("#")]),t._v(" DOMContentLoaded")]),t._v(" "),s("p",[t._v("浏览器DOM树形成之后马上就开始执行业务。")]),t._v(" "),s("p",[t._v("执行时机：DOMContentLoaded事件>readystatechange>load事件，")]),t._v(" "),s("h4",{attrs:{id:"load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[t._v("#")]),t._v(" load")]),t._v(" "),s("p",[t._v("所有元素加载完才执行")]),t._v(" "),s("h3",{attrs:{id:"windowbase64"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windowbase64"}},[t._v("#")]),t._v(" WindowBase64")]),t._v(" "),s("p",[t._v("解码："),s("code",[t._v("atob")]),t._v(",编码："),s("code",[t._v("btoa")])]),t._v(" "),s("h3",{attrs:{id:"web-workers-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-workers-api"}},[t._v("#")]),t._v(" Web Workers API")]),t._v(" "),s("p",[t._v("通过使用 Web Workers，Web 应用程序可以在独立于主线程的后台线程中，运行一个脚本操作。这样做的好处是可以在独立线程中执行费时的处理任务，从而允许主线程（通常是 UI 线程）不会因此被阻塞/放慢。")]),t._v(" "),s("h3",{attrs:{id:"service-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[t._v("#")]),t._v(" Service Worker")]),t._v(" "),s("p",[t._v("由于 Service Worker 设计为完全异步，同步 API（如 XHR 和 localStorage）不能在 Service Worker 中使用")]),t._v(" "),s("h3",{attrs:{id:"element"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element"}},[t._v("#")]),t._v(" Element")]),t._v(" "),s("ol",[s("li",[t._v("Element.getBoundingClientRect() 1.1 方法返回元素的大小及其相对于视口的位置。")])]),t._v(" "),s("h3",{attrs:{id:"node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" Node")]),t._v(" "),s("h4",{attrs:{id:"textcontent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textcontent"}},[t._v("#")]),t._v(" textContent")]),t._v(" "),s("p",[t._v("表示一个节点及其后代的文本内容，与"),s("code",[t._v("innerText")]),t._v("不同的是：")]),t._v(" "),s("ol",[s("li",[t._v("会获取所有机诶安中的每一个元素。相反，"),s("code",[t._v("innerText")]),t._v("不会获取隐藏的文本。")]),t._v(" "),s("li",[t._v("textContent会返回所有元素内容，包括"),s("code",[t._v("script")]),t._v("和"),s("code",[t._v("style")]),t._v("元素内容")])]),t._v(" "),s("h3",{attrs:{id:"parentnode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parentnode"}},[t._v("#")]),t._v(" ParentNode")]),t._v(" "),s("p",[t._v("ParentNode.children 是一个只读属性，返回 一个 Node 的子 elements ，是一个动态更新的 HTMLCollection。"),s("br"),t._v("\n可以使用 ParentNode.children.length 获取直接子元素的数量")]),t._v(" "),s("p",[t._v("📚 参考："),s("a",{attrs:{href:"https://github.com/hax/360-w3c/blob/master/articles/20191104_%E5%AD%90%E5%85%83%E7%B4%A0%E6%95%B0%E9%87%8F%E5%92%8C%E9%81%8D%E5%8E%86%E5%AD%90%E5%85%83%E7%B4%A0.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("子元素数量和遍历子元素 "),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console"}},[t._v("#")]),t._v(" console")]),t._v(" "),s("h4",{attrs:{id:"console-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console-log"}},[t._v("#")]),t._v(" console.log")]),t._v(" "),s("p",[t._v("支持使用格式说明符:"),s("code",[t._v("console.log('String: %s, Int: %d,Float: %f, Object: %o', str, ints, floats, obj)")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("%s 会格式化变量为字符串\n%d 会格式化变量为数字\n%i 会格式化变量为其整数部分\n%o 会格式化变量为对象\n%f 浮点数\n")])])]),s("h4",{attrs:{id:"console-clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console-clear"}},[t._v("#")]),t._v(" console.clear")]),t._v(" "),s("h4",{attrs:{id:"console-count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console-count"}},[t._v("#")]),t._v(" console.count")]),t._v(" "),s("p",[t._v("会对打印的字符串的次数进行计数，并在其旁边打印计数")]),t._v(" "),s("h4",{attrs:{id:"console-trace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console-trace"}},[t._v("#")]),t._v(" console.trace")]),t._v(" "),s("p",[t._v("打印堆栈踪迹")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("function2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("function1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("function2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("function1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"console-time和timeend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console-time和timeend"}},[t._v("#")]),t._v(" console.time和timeEnd")]),t._v(" "),s("p",[t._v("计算执行时间,参数为新计时器的名字。 用来标记这个计时器，作为参数调用 console.timeEnd()可以停止计时并将经过的时间在终端中打印出来.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("doSomething")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'测试'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("measureDoingSomething")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//做点事，并测量所需的时间。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeEnd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("measureDoingSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"console-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console-error"}},[t._v("#")]),t._v(" console.error")]),t._v(" "),s("p",[t._v("错误日志")]),t._v(" "),s("h3",{attrs:{id:"url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),s("blockquote",[s("p",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/API/URL")])]),t._v(" "),s("p",[t._v("解析链接，返回host、href、searchParams等")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../cats'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.example.com/dogs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "www.example.com"')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "/cats"')]),t._v("\n")])])]),s("h3",{attrs:{id:"urlsearchparams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urlsearchparams"}},[t._v("#")]),t._v(" URLSearchParams")]),t._v(" "),s("blockquote",[s("p",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams")])]),t._v(" "),s("p",[s("code",[t._v("URLSearchParams")]),t._v("接口定义了一些实用的方法来处理 URL 的查询字符串。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" paramsString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"q=URLUtils.searchParams&topic=api"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" searchParams "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLSearchParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("paramsString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nsearchParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("h2",{attrs:{id:"附加组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附加组件"}},[t._v("#")]),t._v(" 附加组件")]),t._v(" "),s("h3",{attrs:{id:"opensearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opensearch"}},[t._v("#")]),t._v(" OpenSearch")]),t._v(" "),s("p",[t._v("为浏览器添加网站的搜索引擎."),s("br"),t._v("\n首先服务器根目录下添加添加 xml 描述文件：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- opensearch.xml --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OpenSearchDescription")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://a9.com/-/spec/opensearch/1.1/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                       "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("moz")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.mozilla.org/2006/browser/search/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ShortName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("niuyan"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ShortName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("搜索牛眼"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("InputEncoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("InputEncoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image/x-icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://web.pre.niuyan.com/favicon.ico"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://web.pre.niuyan.com/zh/search/{searchTerms}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("OpenSearchDescription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后在 html 中添加引用,"),s("code",[t._v("title")]),t._v("字段要和"),s("code",[t._v("xml")]),t._v("文件中的"),s("code",[t._v("ShortName")]),t._v("一致：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("application/opensearchdescription+xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("opensearch.xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("niuyan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("search"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("👽 差异："),s("br"),t._v("\n在 firefox 中访问页面后需要在搜索框中添加 opensearch，而在 chrome 中访问项目的主页就会自动添加，主页地址必须是"),s("code",[t._v("www.test.com")]),t._v("，而不能是"),s("code",[t._v("www.test.com/zh")]),t._v(" ⚠️ 注意：")]),t._v(" "),s("ol",[s("li",[t._v("如果 opensearch 如果没有生效，试试清除 xml 文件的缓存")]),t._v(" "),s("li",[t._v("opensearch 不能自定义触发关键词")])]),t._v(" "),s("p",[t._v("📚 引用："),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#OpenSearch_1.1_parameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("opensearch-1-1-draft-6"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"sessions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessions"}},[t._v("#")]),t._v(" sessions")]),t._v(" "),s("p",[t._v("session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上。")]),t._v(" "),s("h4",{attrs:{id:"工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),s("p",[t._v("浏览器访问服务器并发送第一次请求时，服务器端会创建一个session对象，生成一个类似与key，value的键值对，然后将key（cookie）返回到浏览器（客户）端，浏览器下次再访问时，携带key（cookie），找到对应的session（value）。客户的信息都保存在session中。")]),t._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("h3",{attrs:{id:"如何在开发者工具中查看placeholder样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何在开发者工具中查看placeholder样式"}},[t._v("#")]),t._v(" 如何在开发者工具中查看placeholder样式？")]),t._v(" "),s("p",[t._v("在chrome中：")]),t._v(" "),s("ul",[s("li",[t._v("进入开发者工具界面")]),t._v(" "),s("li",[t._v("点击小齿轮设置")]),t._v(" "),s("li",[t._v("勾选"),s("code",[t._v("Elements")]),t._v("中的"),s("code",[t._v("Show user agent shadow DOM")])]),t._v(" "),s("li",[t._v("刷新页面，查看input元素下边多了个placeholder shadow dom,点击就可以查看placeholder的样式了")])]),t._v(" "),s("h3",{attrs:{id:"浏览器显示的-json-对象顺序与实际不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器显示的-json-对象顺序与实际不同"}},[t._v("#")]),t._v(" 浏览器显示的 json 对象顺序与实际不同？")]),t._v(" "),s("p",[t._v("本身对象属性是没有顺序的，但是 chrome 按照 ASCll 码顺序进行了排序显示。")]),t._v(" "),s("h3",{attrs:{id:"对同一个-url-提出多个同一个请求-会延迟完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对同一个-url-提出多个同一个请求-会延迟完成"}},[t._v("#")]),t._v(" 对同一个 URL 提出多个同一个请求，会延迟完成？")]),t._v(" "),s("p",[t._v("谷歌浏览器同时只能对同一个 URL 提出一个请求，如果有更多的请求的话，则会串行执行。如果请求阻塞，后续相同请求也会阻塞。")]),t._v(" "),s("h3",{attrs:{id:"元素全屏后并没有占满全屏幕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素全屏后并没有占满全屏幕"}},[t._v("#")]),t._v(" 元素全屏后并没有占满全屏幕？")]),t._v(" "),s("p",[t._v("WebKit 浏览器 会让全屏的元素以原始尺寸居中到屏幕中央，其余部分变为黑色（没有为该元素设置 background style 时）。要在 WebKit 浏览器中获得正常的全屏行为，您需要添加全屏时的样式，例如：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#test:-webkit-full-screen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"serviceworkers-webworkers-websockets-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serviceworkers-webworkers-websockets-的区别"}},[t._v("#")]),t._v(" ServiceWorkers/WebWorkers/WebSockets 的区别")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/wopelo/article/details/78607879",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceWorkers/WebWorkers/WebSockets 的区别"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"web-安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-安全"}},[t._v("#")]),t._v(" web 安全")]),t._v(" "),s("h3",{attrs:{id:"同源策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),s("p",[t._v("跨域的 9 种方式:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("jsonp，原理：利用 "),s("code",[t._v("<script>")]),t._v(" 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP 请求一定需要对方的服务器做支持才可以。")])]),t._v(" "),s("li",[s("p",[t._v("cors")])]),t._v(" "),s("li",[s("p",[t._v("postMessage")])]),t._v(" "),s("li",[s("p",[t._v("websocket")])]),t._v(" "),s("li",[s("p",[t._v("node 中间件，原理：同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略。")])]),t._v(" "),s("li",[s("p",[t._v("nginx 反向代理，原理：类似于 Node 中间件代理，需要你搭建一个中转 nginx 服务器，用于转发请求。")])]),t._v(" "),s("li",[s("p",[t._v("window.name + iframe")])]),t._v(" "),s("li",[s("p",[t._v("location.hash + iframe")])]),t._v(" "),s("li",[s("p",[t._v("document.domain + iframe")]),t._v(" "),s("blockquote",[s("p",[t._v("引用 "),s("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/55",target:"_blank",rel:"noopener noreferrer"}},[t._v("九种跨域方式实现原理"),s("OutboundLink")],1)])])])]),t._v(" "),s("h2",{attrs:{id:"最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),s("h3",{attrs:{id:"获取某个元素相对于视窗的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取某个元素相对于视窗的位置"}},[t._v("#")]),t._v(" 获取某个元素相对于视窗的位置")]),t._v(" "),s("p",[t._v("Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。")]),t._v(" "),s("h3",{attrs:{id:"获取元素所有子孙元素数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取元素所有子孙元素数量"}},[t._v("#")]),t._v(" 获取元素所有子孙元素数量")]),t._v(" "),s("p",[s("code",[t._v('document.getElementsByTagName("*").length')])]),t._v(" "),s("h3",{attrs:{id:"获取url参数对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取url参数对象"}},[t._v("#")]),t._v(" 获取url参数对象")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/search?name=zhangsan&age=19'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" query "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromEntries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("searchParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("entries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[t._v("#")]),t._v(" 兼容性")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills",target:"_blank",rel:"noopener noreferrer"}},[t._v("html 和 css 各种补全垫片库"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://polyfill.io/v3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("js 和 dom 补全"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);