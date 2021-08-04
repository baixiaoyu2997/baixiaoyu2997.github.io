(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{500:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),a("h3",{attrs:{id:"指定文件扩展名为特定语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定文件扩展名为特定语言"}},[t._v("#")]),t._v(" 指定文件扩展名为特定语言")]),t._v(" "),a("p",[a("code",[t._v("F1>change language mode")])]),t._v(" "),a("h2",{attrs:{id:"snippets代码段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snippets代码段"}},[t._v("#")]),t._v(" snippets代码段")]),t._v(" "),a("ol",[a("li",[t._v("如果想要智能提示中代码段排在最上面，需要设置"),a("code",[t._v('"editor.snippetSuggestions": "top"')])]),t._v(" "),a("li",[t._v("输入特殊字符时需要使用"),a("code",[t._v("\\\\")]),t._v("转义")]),t._v(" "),a("li",[t._v("换行"),a("code",[t._v("\\n")])]),t._v(" "),a("li",[t._v("tab键制表符："),a("code",[t._v("\\t")])]),t._v(" "),a("li",[t._v("如果想光标选中字符则"),a("code",[t._v("${1:test}")])])]),t._v(" "),a("h2",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),a("h3",{attrs:{id:"autostash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autostash"}},[t._v("#")]),t._v(" autostash")]),t._v(" "),a("p",[t._v("设置git pull之前先stash，pull之后再pop掉。开启方法："),a("code",[t._v("设置>扩展>git>勾选Auto Stash")])]),t._v(" "),a("blockquote",[a("p",[t._v("注意，需求git版本在"),a("code",[t._v("2.9")]),t._v("以上，在内置终端执行"),a("code",[t._v("git pull")]),t._v("是无效的，只能通过vscode的命令才能生效")])]),t._v(" "),a("h3",{attrs:{id:"代码段变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码段变量"}},[t._v("#")]),t._v(" 代码段变量")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("Variables"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"命令行工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行工具"}},[t._v("#")]),t._v(" 命令行工具")]),t._v(" "),a("h3",{attrs:{id:"用vscode新窗口打开当前文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用vscode新窗口打开当前文件夹"}},[t._v("#")]),t._v(" 用vscode新窗口打开当前文件夹")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("code "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("h3",{attrs:{id:"用当前vscode窗口打开文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用当前vscode窗口打开文件夹"}},[t._v("#")]),t._v(" 用当前vscode窗口打开文件夹")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("code "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -r\n")])])]),a("h3",{attrs:{id:"配置假名路径的智能提示和跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置假名路径的智能提示和跳转"}},[t._v("#")]),t._v(" 配置假名路径的智能提示和跳转")]),t._v(" "),a("p",[t._v("把"),a("code",[t._v("jsconfig.json")]),t._v("文件放到根目录下，记得添加到"),a("code",[t._v(".gitignore")]),t._v("上")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// jsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["src/*"]\n    },\n    "target": "ES6",\n    "module": "commonjs",\n    "allowSyntheticDefaultImports": true\n  },\n  "include": ["src/**/*"],\n  "exclude": ["node_modules"]\n}\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);