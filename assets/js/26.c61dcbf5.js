(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{457:function(e,v,a){"use strict";a.r(v);var t=a(2),_=Object(t.a)({},(function(){var e=this,v=e.$createElement,a=e._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),a("p",[e._v("概念：https://zhuanlan.zhihu.com/p/29910215")]),e._v(" "),a("p",[e._v("尽管make工具链非常流行，但仅限于UNIX平台。")]),e._v(" "),a("p",[e._v("make指令需要有"),a("code",[e._v("makefile")]),e._v("文件，Makefile文件由一系列规则（rules）构成。每条规则的形式如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<target> : <prerequisites> \n[tab]  <commands>\n")])])]),a("p",[e._v('上面第一行冒号前面的部分，叫做"目标"（target），冒号后面的部分叫做"前置条件"（prerequisites）；第二行必须由一个tab键起首，后面跟着"命令"（commands）。')]),e._v(" "),a("p",[e._v('"目标"是必需的，不可省略；"前置条件"和"命令"都是可选的，但是两者之中必须至少存在一个。')]),e._v(" "),a("p",[e._v("每条规则就明确两件事：构建目标的前置条件是什么，以及如何构建。下面就详细讲解，每条规则的这三个组成部分。")]),e._v(" "),a("h2",{attrs:{id:"基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[e._v("#")]),e._v(" 基本语法")]),e._v(" "),a("ol",[a("li",[e._v("https://www.cnblogs.com/wang_yb/p/3990952.html")])]),e._v(" "),a("h2",{attrs:{id:"命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[e._v("#")]),e._v(" 命令行")]),e._v(" "),a("ol",[a("li",[e._v("-f ，指定makefile文件")])]),e._v(" "),a("h2",{attrs:{id:"makefile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#makefile"}},[e._v("#")]),e._v(" Makefile")]),e._v(" "),a("blockquote",[a("p",[e._v("makefile使用bash语法")])]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v(".PHONY")]),e._v("：伪目标，防止存在同名文件时不执行该指令")])]),e._v(" "),a("li",[a("p",[e._v("commands:多行命令间没有上下文关系。除非行尾添加换行符"),a("code",[e._v("\\")]),e._v(",可以通过添加"),a("code",[e._v(".ONESHELL:")]),e._v("支持。")]),e._v(" "),a("ol",[a("li",[e._v("在命令前添加"),a("code",[e._v("@")]),e._v("可以防止在控制台输出命令")])])]),e._v(" "),a("li",[a("p",[e._v("通配符："),a("code",[e._v("* 、？、...")])])]),e._v(" "),a("li",[a("p",[e._v("变量：")]),e._v(" "),a("ol",[a("li",[e._v("定义："),a("code",[e._v("text = Hello World")])]),e._v(" "),a("li",[e._v("使用:"),a("code",[e._v("$(text)")])])])]),e._v(" "),a("li",[a("p",[e._v("赋值运算符：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("VARIABLE = value\n# 在执行时扩展，允许递归扩展。\n\nVARIABLE := value\n# 在定义时扩展。\n\nVARIABLE ?= value\n# 只有在该变量为空时才设置值。\n\nVARIABLE += value\n# 将值追加到变量的尾端。\n\n")])])])]),e._v(" "),a("li",[a("p",[e._v("自动变量")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("$@")]),e._v(":指代当前目标")]),e._v(" "),a("li",[a("code",[e._v("$<")]),e._v("：指代第一个前置条件")]),e._v(" "),a("li",[a("code",[e._v("$?")]),e._v(":比目标更新的所有前置条件，之间以空格分隔。")]),e._v(" "),a("li",[a("code",[e._v("$^")]),e._v(":所有所有前置条件，空格分隔。")]),e._v(" "),a("li",[a("code",[e._v("$(@D)和$(@F)")]),e._v("：当前目标所在的目录和文件名。")])])]),e._v(" "),a("li",[a("p",[e._v("shell：使用shell函数来执行shell命令")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("subst 函数")]),e._v(":替换文本。"),a("code",[e._v("$(subst from,to,text)")])])]),e._v(" "),a("li",[a("p",[e._v("替换后缀名："),a("code",[e._v("min: $(OUTPUT:.js=.min.js)")]),e._v(",将遍历康OUTPUT中的后缀名"),a("code",[e._v(".js")]),e._v("全部替换成"),a("code",[e._v(".min.js")])])])]),e._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),a("h3",{attrs:{id:"如何一次性执行多个文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何一次性执行多个文件"}},[e._v("#")]),e._v(" 如何一次性执行多个文件？")]),e._v(" "),a("p",[a("code",[e._v("source: file1 file2 file3")]),e._v(",source是一个伪目标，有三个前置文件。")]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/02/make.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Make 命令教程"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=_.exports}}]);