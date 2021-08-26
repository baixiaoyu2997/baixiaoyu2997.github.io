(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{520:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("副标题参考"),s("a",{attrs:{href:"https://alienzhou.github.io/fe-performance-journey/#%E6%97%85%E9%80%94%E7%9A%84%E8%A1%8C%E7%A8%8B%E8%B7%AF%E7%BA%BF",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 前端性能优化之旅"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"性能测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能测试"}},[t._v("#")]),t._v(" 性能测试")]),t._v(" "),s("ol",[s("li",[t._v("Network分析：禁用缓存、启用网络限速（4g/3g） 模拟移动端弱网情况下的加载情况")]),t._v(" "),s("li",[t._v("Performance分析：移动端处理性能比pc差，将cpu设置为4x slowdown或6x slowdown")]),t._v(" "),s("li",[t._v("Lighthouse分析")])]),t._v(" "),s("h2",{attrs:{id:"缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),s("h2",{attrs:{id:"发送请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送请求"}},[t._v("#")]),t._v(" 发送请求")]),t._v(" "),s("h3",{attrs:{id:"mtu-策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mtu-策略"}},[t._v("#")]),t._v(" MTU 策略")]),t._v(" "),s("p",[t._v("通常情况下，我们认为 TCP 网络传输的最大传输单元（Maximum Transmission Unit，MTU）为 1500B，即网络一个 RTT（Round-Trip Time，网络请求往返时间）时间内可以传输的数据量最大为 1500 字节。因此，在前后端分离的开发模式中，尽量保证页面的 HTML 内容在 1KB 以内，这样整个 HTML 的内容请求就可以在一个 RTT 时间内请求完成，最大限度地提高 HTML 载入速度。")]),t._v(" "),s("h3",{attrs:{id:"dns-预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-预解析"}},[t._v("#")]),t._v(" DNS 预解析")]),t._v(" "),s("p",[t._v("dns 预解析技术。浏览器中默认开启，可以对页面中出现的链接和当前域名进行预解析，当用户点击时加快跳转速度，相同域名不要预加载，因为已经有缓存了。也可以显示的指定没有出现的链接进行预加载")]),t._v(" "),s("h3",{attrs:{id:"使用-cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-cdn"}},[t._v("#")]),t._v(" 使用 CDN")]),t._v(" "),s("p",[t._v("使用 cdn 的好处:多域名加载资源、有可能被加载过浏览器有缓存、效率高、分布式数据中心、数据统计、网站安全 ​​​​")]),t._v(" "),s("h2",{attrs:{id:"服务端响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端响应"}},[t._v("#")]),t._v(" 服务端响应")]),t._v(" "),s("ol",[s("li",[t._v("浏览器在同一时刻向同一域名请求文件的并行下载数是有限的，，因此可以利用多个域名主机来存放不同的静态资源。")]),t._v(" "),s("li",[t._v("网关和直出服务机房部署不在同一区域，导致延时。")])]),t._v(" "),s("h2",{attrs:{id:"页面解析与处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面解析与处理"}},[t._v("#")]),t._v(" 页面解析与处理")]),t._v(" "),s("p",[t._v("可以通过 chrome Coverage 查看代码覆盖率，然后通过 tree shaking 和懒加载代码解决首页代码体积")]),t._v(" "),s("h3",{attrs:{id:"iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iframe")]),t._v(" "),s("p",[t._v("加载 iframe 有可能会对页面的加载产生严重的影响，在 onload 之前加载会阻塞 onload 事件触发，从而阻塞 loading。可以将加载iframe的时机放到onload之后。并使用setTimeout触发异步加载iframe，可避免iframe带来的loading影响。")]),t._v(" "),s("h3",{attrs:{id:"布局抖动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局抖动"}},[t._v("#")]),t._v(" 布局抖动")]),t._v(" "),s("p",[t._v("图标缺失、背景图缺失、字体大小改变导致页面抖动、出现非预期页面元素导致页面抖动会影响用户体验。")]),t._v(" "),s("p",[t._v("主要优化内容：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("确定直出页面元素出现位置，根据直出数据做好布局")])]),t._v(" "),s("li",[s("strong",[t._v("页面小图可以通过base64处理，页面解析的时候就会立即展示")])]),t._v(" "),s("li",[s("strong",[t._v("减少动态内容对页面布局的影响，使用脱离文档流的方式或定好宽高")])])]),t._v(" "),s("h3",{attrs:{id:"骨架屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏"}},[t._v("#")]),t._v(" 骨架屏")]),t._v(" "),s("p",[t._v("非直出页面加载数据时，提供骨架屏优化体验。")]),t._v(" "),s("h2",{attrs:{id:"页面静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面静态资源"}},[t._v("#")]),t._v(" 页面静态资源")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844903545016156174#heading-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源加载顺序"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" html")]),t._v(" "),s("p",[t._v("不要缓存html，防止更新html后导致请求资源404的问题，方法：")]),t._v(" "),s("ol",[s("li",[t._v("增加如下头")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<meta http-equiv="Expires" content="0">\n<meta http-equiv="Pragma" content="no-cache">\n<meta http-equiv="Cache-control" content="no-cache">\n<meta http-equiv="Cache" content="no-cache">\n')])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("使用地址+?随机数")])]),t._v(" "),s("h3",{attrs:{id:"css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),s("ol",[s("li",[t._v("带有 3D 属性优先使用 3D 的属性，会调用 GPU 加速。在移动端开发中，直接使用 transition 动画会让页面变慢，甚至变卡顿，所以我们通常添加 transform:translate3D(0，0，0)或 transform:translateZ(0)来开启移动端动画的 gpu 加速，让动画过程更流畅。 ​​​​")]),t._v(" "),s("li",[t._v("css不会阻塞页面解析，但是会阻塞页面渲染。如果CSS文件较大或弱网情况，会影响到页面渲染时间，影响用户体验。")])]),t._v(" "),s("h3",{attrs:{id:"图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[t._v("#")]),t._v(" 图片")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("优化请求数")]),t._v(" "),s("ol",[s("li",[t._v("在页面中图片较少，并且图片大小不超过 2kb 时可以使用 base64 内嵌图片，可以减少请求次数。")]),t._v(" "),s("li",[t._v("避免 href 和 src 为空，即使为空浏览器还是会加载，这样会阻塞页面中其他资源的加载。 ​​​​")])])]),t._v(" "),s("li",[s("p",[t._v("预加载")])]),t._v(" "),s("li",[s("p",[t._v("懒加载,为什么要懒加载？减少不必要的请求，把网络资源让出来")])]),t._v(" "),s("li",[s("p",[t._v("图片加载顺序，优先级hight加载完毕之后才开始low的加载")])]),t._v(" "),s("li",[s("p",[t._v("尺寸优化：使用CDN 图床尺寸大小压缩功能，根据不同的设备渲染不同大小的图片调整图片格式，根据网络情况，渲染不同清晰度的图。配合使用 "),s("code",[t._v("img")]),t._v(" 标签 "),s("code",[t._v("srcset/sizes")]),t._v(" 属性和 "),s("code",[t._v("picutre")]),t._v(" 标签实现响应式图片")])]),t._v(" "),s("li",[s("p",[t._v("gif体积过大，使用video替换,优先使用"),s("code",[t._v("webm")]),t._v(",备用"),s("code",[t._v("mp4")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<video autoplay loop muted playsinline>\n    <source src="video.webm" type="video/webm">\n    <source src="video.mp4" type="video/mp4">\n</video>\n')])])]),s("p",[t._v("参考：https://juejin.cn/post/6844903893143388168")])]),t._v(" "),s("li",[s("p",[t._v("响应式图片，不同分辨率的设备显示不同大小的图片，常用的方式是媒体查询。此外，还可以使用 HTML5 的 picture 属性进行响应式处理。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("picture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("src/img/l.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(min-width: 1200px)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("src/img/2.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(min-width: 992px)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("src/img/4.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(min-width: 768px)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("src/img/4.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("picture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"svg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svg"}},[t._v("#")]),t._v(" svg")]),t._v(" "),s("p",[s("code",[t._v("svg")]),t._v("可以通过"),s("code",[t._v("npm")]),t._v("包"),s("code",[t._v("svgo")]),t._v("或者线上服务"),s("a",{attrs:{href:"https://jakearchibald.github.io/svgomg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("svgomg"),s("OutboundLink")],1),t._v("来压缩")]),t._v(" "),s("h3",{attrs:{id:"字体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字体"}},[t._v("#")]),t._v(" 字体")]),t._v(" "),s("ol",[s("li",[t._v("使用网络字体时，下载字体会耗费一些时间，而使用"),s("code",[t._v("font-display")]),t._v("可以控制字体下载完成之前的渲染行为")]),t._v(" "),s("li",[t._v("当字体文件比较大的时候，也会影响到页面的加载和渲染，可以使用 fontmin 将字体资源进行压缩")])]),t._v(" "),s("h2",{attrs:{id:"运行时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行时"}},[t._v("#")]),t._v(" 运行时")]),t._v(" "),s("h3",{attrs:{id:"重排和重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重排和重绘"}},[t._v("#")]),t._v(" 重排和重绘")]),t._v(" "),s("p",[t._v("页面生成后，如果页面元素位置发生变化，就要从布局阶段开始重新渲染，也就是页面重排，所以页面重排一定会进行后续重绘；如果页面元素只是显示样式改变而布局不变，那么页面内容改变将从绘制阶段开始，称为页面重绘。重排通常会导致页面元素几何大小位置发生变化且伴随着重新渲染的巨大代价，因此我们要尽可能避免页面的重排，并减少页面元素的重绘。")]),t._v(" "),s("h3",{attrs:{id:"节流-throttle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节流-throttle"}},[t._v("#")]),t._v(" 节流（throttle）")]),t._v(" "),s("p",[t._v("节流指的是某个函数在一定时间间隔内（例如 3 秒）只执行一次，在这 3 秒内 无视后来产生的函数调用请求，也不会延长时间间隔。3 秒间隔结束后第一次遇到新的函数调用会触发执行，然后在这新的 3 秒内依旧无视后来产生的函数调用请求，以此类推。"),s("br"),t._v("\n实现方式有两种：")]),t._v(" "),s("ol",[s("li",[t._v("第一种是用时间戳来判断是否已到执行时间，记录上次执行的时间戳，然后每次触发事件执行回调，回调中判断当前时间戳距离上次执行时间戳的间隔是否已经达到时间差（Xms） ，如果是则执行，并更新上次执行的时间戳，如此循环。")]),t._v(" "),s("li",[t._v("第二种方法是使用定时器，比如当 scroll 事件刚触发时，设置个 1000ms 的定时器，此后每次触发 scroll 事件触发回调，如果已经存在定时器，则回调不执行方法，直到定时器触发，handler 被清除，然后重新设置定时器。"),s("br"),t._v("\n第三方实现：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Lodash.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("jQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scroll"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updatePosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"防抖-debounce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防抖-debounce"}},[t._v("#")]),t._v(" 防抖（debounce）")]),t._v(" "),s("p",[t._v("指定时间内只执行一次回调函数，如果在指定的时间内又触发了该事件，则回调函数的执行时间会基于此刻重新开始计算。原生实现：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("第三方实现：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Lodash.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("jQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("calculateLayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"requestanimationframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[t._v("#")]),t._v(" requestAnimationFrame")]),t._v(" "),s("p",[t._v("如果我们不考虑兼容性，追求精度比较高的页面效果，可以考虑试试 html5 提供的 API--requestAnimationFrame。")]),t._v(" "),s("p",[t._v("与 setTimeout 相比，requestAnimationFrame 的时间间隔是有系统来决定，保证屏幕刷新一次，回调函数只会执行一次，比如屏幕的刷新频率是 60HZ，即间隔 1000ms/60 会执行一次回调。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("throttle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delayTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上述代码的基本功能就是保证在屏幕刷新的时候（对于大多数的屏幕来说，大约 16.67ms），可以执行一次回调函数 fn。使用这种方式也存在一种比较明显的缺点，时间间隔只能跟随系统变化，我们无法修改，但是准确性会比 setTimeout 高一些。")]),t._v(" "),s("h3",{attrs:{id:"事件代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件代理"}},[t._v("#")]),t._v(" 事件代理")]),t._v(" "),s("p",[t._v("页面元素尽量使用事件代理而不是事件绑定，可以避免每个元素都进行绑定，并且可以避免内存泄露及动态生成元素的事件绑定问题 ​​​​")]),t._v(" "),s("h2",{attrs:{id:"预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预加载"}},[t._v("#")]),t._v(" 预加载")]),t._v(" "),s("h3",{attrs:{id:"preload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preload"}},[t._v("#")]),t._v(" preload")]),t._v(" "),s("p",[t._v("当前页面优先级高的加载。哪些元素支持preloads？")]),t._v(" "),s("ul",[s("li",[t._v("audio")]),t._v(" "),s("li",[t._v("document")]),t._v(" "),s("li",[t._v("embed")]),t._v(" "),s("li",[t._v("fetch")]),t._v(" "),s("li",[t._v("font")]),t._v(" "),s("li",[t._v("image")]),t._v(" "),s("li",[t._v("object")]),t._v(" "),s("li",[t._v("script")]),t._v(" "),s("li",[t._v("style")]),t._v(" "),s("li",[t._v("track")]),t._v(" "),s("li",[t._v("worker")]),t._v(" "),s("li",[t._v("video")])]),t._v(" "),s("h3",{attrs:{id:"prefetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefetch"}},[t._v("#")]),t._v(" prefetch")]),t._v(" "),s("p",[t._v("下一个页面有可能会用到的资源，预先加载")]),t._v(" "),s("h2",{attrs:{id:"性能指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能指标"}},[t._v("#")]),t._v(" 性能指标")]),t._v(" "),s("blockquote",[s("p",[t._v("参考： "),s("a",{attrs:{href:"https://www.cnblogs.com/libinfs/p/11045384.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("用 Webpack 解决应用性能问题"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("该参考值考虑到了移动端与国外等多种访问环境：")]),t._v(" "),s("ul",[s("li",[t._v("页面初载时，所有未压缩的 JavaScript 脚本大小：<=200KB；")]),t._v(" "),s("li",[t._v("页面初载时，所有未压缩的 CSS 资源大小：<=100KB；")]),t._v(" "),s("li",[t._v("HTTP 协议下，请求资源数：<=6 个；")]),t._v(" "),s("li",[t._v("HTTP/2 协议下，请求资源数：<=20 个 ；")]),t._v(" "),s("li",[t._v("90%的代码利用率（也就是说，仅允许 10% 的未使用代码）；")])]),t._v(" "),s("h2",{attrs:{id:"懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("lazysizes")]),t._v("，支持img和iframe。大部分情况下所有图片都应该使用lazyload，这样即使改变滚动位置后刷新也可以保障顶部和其他区域图片的懒加载。")]),t._v(" "),s("h3",{attrs:{id:"秒开率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#秒开率"}},[t._v("#")]),t._v(" 秒开率")]),t._v(" "),s("p",[t._v("页面的加载时长是页面性能的一个重要指标。有一个指标叫秒开率，关于秒开率，有一个  1 秒钟法则的说法：2G 网络  1 秒进入页面，3G 网络  1 秒首屏，4G 网络  1 秒页面加载完毕。")]),t._v(" "),s("h3",{attrs:{id:"web-vitals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-vitals"}},[t._v("#")]),t._v(" Web Vitals")]),t._v(" "),s("p",[t._v("https://mp.weixin.qq.com/s/BDnlY0sVpKDFdb1_dk2dVQ")]),t._v(" "),s("h2",{attrs:{id:"性能监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能监控"}},[t._v("#")]),t._v(" 性能监控")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://tiffanysbear.github.io/2019/08/14/%E9%A1%B5%E9%9D%A2%E6%80%A7%E8%83%BD%E7%9B%91%E6%B5%8B%E4%B9%8Bperformance/",target:"_blank",rel:"noopener noreferrer"}},[t._v("页面性能监测之performance"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"埋点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#埋点"}},[t._v("#")]),t._v(" 埋点")]),t._v(" "),s("p",[t._v("埋点的方式有以下几种：")]),t._v(" "),s("ol",[s("li",[t._v("ajax")]),t._v(" "),s("li",[t._v("img")]),t._v(" "),s("li",[t._v("Navigator.sendBeacon()")])]),t._v(" "),s("h2",{attrs:{id:"seo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seo"}},[t._v("#")]),t._v(" SEO")]),t._v(" "),s("h3",{attrs:{id:"google"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google"}},[t._v("#")]),t._v(" google")]),t._v(" "),s("h4",{attrs:{id:"搜索摘要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索摘要"}},[t._v("#")]),t._v(" 搜索摘要")]),t._v(" "),s("p",[t._v("搜索的摘要由网页内容或者meta内容生成")]),t._v(" "),s("p",[t._v("多媒体摘要，需要手动编写：https://developers.google.com/search/docs/advanced/structured-data/search-gallery")]),t._v(" "),s("h4",{attrs:{id:"title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),s("ol",[s("li",[t._v("不要使用关键字堆砌，如"),s("code",[t._v("Foobar, foo bar, foobars, foo bars")])])]),t._v(" "),s("h4",{attrs:{id:"meta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),s("ol",[s("li",[t._v("keyword")]),t._v(" "),s("li",[t._v("description")])]),t._v(" "),s("h3",{attrs:{id:"html-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-标签"}},[t._v("#")]),t._v(" html 标签")]),t._v(" "),s("p",[t._v("img 标签中的 alt 有利于 SEO ​​​​")]),t._v(" "),s("h3",{attrs:{id:"title-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title-2"}},[t._v("#")]),t._v(" title")]),t._v(" "),s("ol",[s("li",[t._v("百度更容易搜索到"),s("em",[t._v("符号，首页:网站名称")]),t._v("介绍，列表页:列表名称"),s("em",[t._v("网站名称。文章页:文章标题")]),t._v("文章分类_网站名称 ​​​​")])]),t._v(" "),s("p",[t._v("2")]),t._v(" "),s("h3",{attrs:{id:"meta-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meta-2"}},[t._v("#")]),t._v(" meta")]),t._v(" "),s("h4",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("p",[t._v("描述网站内容")]),t._v(" "),s("h3",{attrs:{id:"百度-seo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#百度-seo"}},[t._v("#")]),t._v(" 百度 SEO")]),t._v(" "),s("p",[t._v("白杨算法：")]),t._v(" "),s("p",[t._v("算法内容：针对移动站点有地域属性，加上地理位置标识，即有机会获得优先排名。如，酒店服务类型网站，会分不同城市，网站加上地理位置标识，用户在移动端搜索 地域+酒店，则会比没加标识的站点来得有利些。"),s("br"),t._v("\n实操说明："),s("br"),t._v("\n在地域优化的的过程中，站长通过在 META 标签中添加地理位置信来完成。"),s("br"),t._v("\n以下是白杨算法 META 地理位置信息的格式、添加方式和提交：")]),t._v(" "),s("p",[t._v("（1）、Meta 声明格式")]),t._v(" "),s("p",[t._v("Name 属性的值是 location，Content 的值为 province=北京；city=北京；coord=116.306522891,40.0555055968")]),t._v(" "),s("p",[t._v("解说：province 为省份简称，city 为城市简称，coord 是页面信息的经纬度坐标，采用的是 bd09ll 坐标")]),t._v(" "),s("p",[t._v("另外可以查看 "),s("a",{attrs:{href:"https://ziyuan.baidu.com/college/courseinfo?id=193&page=3",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度搜索引擎优化指南 2.0"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://ziyuan.baidu.com/college#/type=4&cate=rules",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度算法"),s("OutboundLink")],1),t._v("获取更多百度 seo 帮助")]),t._v(" "),s("h2",{attrs:{id:"文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章"}},[t._v("#")]),t._v(" 文章")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/vAP24RkjAVEUkn0QAZfI3A",target:"_blank",rel:"noopener noreferrer"}},[t._v("提高Web页面渲染速度的7个技巧"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/1BLJrI1htmKmjpuFCW_BJg",target:"_blank",rel:"noopener noreferrer"}},[t._v("性能优化相关API"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);