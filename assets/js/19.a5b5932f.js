(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{285:function(t,a,r){"use strict";r.r(a);var s=r(1),e=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"内置对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内置对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置对象")]),t._v(" "),r("h2",{attrs:{id:"语句和声明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语句和声明","aria-hidden":"true"}},[t._v("#")]),t._v(" 语句和声明")]),t._v(" "),r("h3",{attrs:{id:"var"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#var","aria-hidden":"true"}},[t._v("#")]),t._v(" var")]),t._v(" "),r("ul",[r("li",[t._v("通过var创建的全局变量（再任何函数体之外创建的变量）不能被删除。")]),t._v(" "),r("li",[t._v("没有用var创建的隐式全局变量（不考虑函数内的情况）可以被删除。")])]),t._v(" "),r("blockquote",[r("p",[t._v("在浏览器环境中，所有js代码都是在"),r("code",[t._v("window")]),t._v("作用域内的，所以在这种情况下，我们所说的全局变量其实都是"),r("code",[t._v("window")]),t._v("下的一个属性， 所以可以用"),r("code",[t._v("delete")]),t._v("删除，但在如\n"),r("code",[t._v("nodejs")]),t._v("或"),r("code",[t._v("gjs")]),t._v("等非浏览器环境下，显示生命的全局变量无法用"),r("code",[t._v("delete")]),t._v("删除")])]),t._v(" "),r("h3",{attrs:{id:"变量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),r("h2",{attrs:{id:"表达式和操作符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表达式和操作符","aria-hidden":"true"}},[t._v("#")]),t._v(" 表达式和操作符")]),t._v(" "),r("h2",{attrs:{id:"函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),r("h2",{attrs:{id:"继承和原型链"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#继承和原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 继承和原型链")]),t._v(" "),r("h3",{attrs:{id:"原型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原型","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),r("p",[t._v("原型是一个普通的对象，你所创建的每一个函数会自动带有"),r("code",[t._v("prototype")]),t._v("属性，这个属性指向一个空对象，这个空对象包含一个"),r("code",[t._v("constructor")]),t._v("属性，它指向你新建的函数而不是内置的"),r("code",[t._v("Object()")]),t._v("。")]),t._v(" "),r("ol",[r("li",[t._v("prototype\n"),r("ol",[r("li",[t._v("构造函数的"),r("code",[t._v("prototype")]),t._v("等于实例对象的"),r("code",[t._v("proto")]),t._v(",指向的就是原型对象")]),t._v(" "),r("li",[t._v("prototype只有函数才有")])])]),t._v(" "),r("li",[t._v("proto\n"),r("ol",[r("li",[t._v("一个对象的"),r("code",[t._v("__proto__")]),t._v("总是指向它的构造函数的prototype")]),t._v(" "),r("li",[r("code",[t._v("Object.prototype.__proto__===null")]),t._v(",继承链的终点等于"),r("code",[t._v("null")])])])]),t._v(" "),r("li",[t._v("constructor\n"),r("ol",[r("li",[t._v("原型对象的"),r("code",[t._v("constructor")]),t._v("指向构造函数")])])])]),t._v(" "),r("p",[t._v("用一张图来汇总他们之间的关系：\n"),r("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/JavaScript%E4%B9%8B%E6%97%85_2020-3-3-8-47-54.png",alt:"JavaScript之旅_2020-3-3-8-47-54.png"}})]),t._v(" "),r("blockquote",[r("p",[t._v("引用："),r("a",{attrs:{href:"https://www.jianshu.com/p/7d58f8f45557",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇文章看懂_proto_和prototype的关系及区别"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new","aria-hidden":"true"}},[t._v("#")]),t._v(" new")]),t._v(" "),r("p",[t._v("其实继承和原型这部分知识和new是强相关的。 我们有必要了解一下new的原理。")]),t._v(" "),r("p",[t._v("new 的原理很简单, 就是引擎内部新建一个空对象，然后将这个空对象的proto 指向构造函数的prototype.然后调用构造函数，去填充我们创建的空对象(如果有必要)。 最后将this指向我们刚刚创建的新对象。")]),t._v(" "),r("p",[t._v("如果用代码来表示，大概是这样的：")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("myNew")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("constructor"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  obj"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" constructor"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ret "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" ret "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" obj"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("blockquote",[r("p",[t._v("引用:"),r("a",{attrs:{href:"https://lucifer.ren/fe-interview/#/topics/js/prototype?id=new",target:"_blank",rel:"noopener noreferrer"}},[t._v("大前端面试宝典 - 图解前端"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),r("h3",{attrs:{id:"数字转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数字转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 数字转换")]),t._v(" "),r("ol",[r("li",[t._v('parseInt("08")')]),t._v(" "),r("li",[t._v("+'08'")]),t._v(" "),r("li",[t._v("Number('08')")])]),t._v(" "),r("blockquote",[r("p",[t._v("速度:1<2和3")])])])},[],!1,null,null,null);a.default=e.exports}}]);