(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{280:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[s._v("#")]),s._v(" windows")]),s._v(" "),t("ol",[t("li",[s._v("删除文件夹 rd /S /Q <文件夹>")])]),s._v(" "),t("h2",{attrs:{id:"shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell","aria-hidden":"true"}},[s._v("#")]),s._v(" Shell")]),s._v(" "),t("h3",{attrs:{id:"脚本暂停"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本暂停","aria-hidden":"true"}},[s._v("#")]),s._v(" 脚本暂停")]),s._v(" "),t("p",[t("code",[s._v('read -p "Press any key to continue." var')])]),s._v(" "),t("h3",{attrs:{id:"shell传递参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell传递参数","aria-hidden":"true"}},[s._v("#")]),s._v(" Shell传递参数")]),s._v(" "),t("ul",[t("li",[s._v("脚本内获取参数的格式为：$n。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推,其中 $0 为执行的文件名")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("deploy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh first\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// deploy.sh")]),s._v("\n$"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("first\n")])])]),t("h3",{attrs:{id:"if-else"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-else","aria-hidden":"true"}},[s._v("#")]),s._v(" if  else")]),s._v(" "),t("ul",[t("li",[s._v("if else写法")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# if与[ ]有空格，"["  、 "]"与字符都有空格')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a is equal to b"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a is not equal to b"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("ul",[t("li",[s._v("if … elif … fi 语句可以对多个条件进行判断")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a is equal to b"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" -gt "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a is greater than b"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" -lt "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a is less than b"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"None of the condition met"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("h3",{attrs:{id:"查询占用指定端口进程的pid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询占用指定端口进程的pid","aria-hidden":"true"}},[s._v("#")]),s._v(" 查询占用指定端口进程的PID")]),s._v(" "),t("p",[s._v("打开cmd命令行，输入netstat -ano|findstr 8080(指定端口号)")]),s._v(" "),t("p",[s._v("最后一列即为占用该端口的进程的PID")]),s._v(" "),t("h3",{attrs:{id:"kill指定pid的进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kill指定pid的进程","aria-hidden":"true"}},[s._v("#")]),s._v(" KILL指定PID的进程")]),s._v(" "),t("p",[s._v("紧接着在命令行输入taskkill /pid 21172（PID参数） -f")])])},[],!1,null,null,null);a.default=n.exports}}]);