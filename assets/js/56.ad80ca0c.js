(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{475:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"quill-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quill-介绍"}},[t._v("#")]),t._v(" quill 介绍")]),t._v(" "),s("p",[t._v("一款跨平台的富文本编辑器")]),t._v(" "),s("h2",{attrs:{id:"主题-themes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题-themes"}},[t._v("#")]),t._v(" 主题（themes）")]),t._v(" "),s("p",[t._v("Quill 官方提供两个有特色的主题：Snow and Bubble。如果都不想使用那么可以不设置，并设置使用"),s("code",[t._v("quill.core.css")]),t._v("样式")]),t._v(" "),s("h2",{attrs:{id:"模块-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块-modules"}},[t._v("#")]),t._v(" 模块（modules）")]),t._v(" "),s("p",[t._v("需要引入模块的集合及它们各自的选项。")]),t._v(" "),s("h2",{attrs:{id:"formats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formats"}},[t._v("#")]),t._v(" formats")]),t._v(" "),s("p",[t._v("支持的格式设置有如下")]),t._v(" "),s("h3",{attrs:{id:"inline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline"}},[t._v("#")]),t._v(" Inline")]),t._v(" "),s("p",[t._v("背景颜色 - background 加粗字体 - bold 字体颜色 - color 字体 - font 内联代码 - code 斜体 - italic 链接 - link 字体大小 - size，有效值['small','large','huge'] 删除线 - strike 上标/下标 - script 下划线 - underline")]),t._v(" "),s("h3",{attrs:{id:"块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块"}},[t._v("#")]),t._v(" 块")]),t._v(" "),s("p",[t._v("引用 - blockquote 标题 - header 缩进 - indent 列表 - list 文本对齐方式 - align 文本方向 - direction 代码块 - code-block")]),t._v(" "),s("h3",{attrs:{id:"嵌入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌入"}},[t._v("#")]),t._v(" 嵌入")]),t._v(" "),s("p",[t._v("公式 - formula 图片 - image 视频 - video")]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("api 中的名词讲解：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Source")]),t._v("：表示来源，有可能是从"),s("code",[t._v("user")]),t._v("，或者"),s("code",[t._v("api")]),t._v(",或者"),s("code",[t._v("silent")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"getlength"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getlength"}},[t._v("#")]),t._v(" getLength")]),t._v(" "),s("p",[t._v("返回编辑器内容的长度。注意，当 Quill 为空时，仍然包含一个由'\\n'解析成的空行，所以 getLength 将返回 1。")]),t._v(" "),s("h3",{attrs:{id:"gettext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gettext"}},[t._v("#")]),t._v(" getText")]),t._v(" "),s("p",[t._v("返回编辑器的字符串内容。非字符串内容会被忽略掉")]),t._v(" "),s("h3",{attrs:{id:"setcontents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setcontents"}},[t._v("#")]),t._v(" setContents")]),t._v(" "),s("p",[t._v("覆盖编辑器 contents，末尾会自动插入"),s("code",[t._v("{ insert: '\\n' }")])]),t._v(" "),s("h3",{attrs:{id:"settext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settext"}},[t._v("#")]),t._v(" setText")]),t._v(" "),s("p",[t._v("用给定的文本设置为编辑器的内容，返回代表对应变化的 Delta 数据。注意，Quill 文档必须以换行符结尾，如果没有则会自动添加。")]),t._v(" "),s("h3",{attrs:{id:"updatecontents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updatecontents"}},[t._v("#")]),t._v(" updateContents")]),t._v(" "),s("p",[t._v("让编辑器内容执行 Delta 数据方法，返回代表对应变化的 Delta 数据。如果给定的 Delta 没有无效的操作，返回值和传入的值相同。")]),t._v(" "),s("h3",{attrs:{id:"setselection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setselection"}},[t._v("#")]),t._v(" setSelection")]),t._v(" "),s("p",[t._v("给定范围设置用户的选区，同时焦点在编辑器上。作为选区传入 null，将会使编辑器失去焦点。")]),t._v(" "),s("h2",{attrs:{id:"格式化-formattting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式化-formattting"}},[t._v("#")]),t._v(" 格式化(formattting)")]),t._v(" "),s("h3",{attrs:{id:"format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" format")]),t._v(" "),s("p",[t._v("格式化选中或者光标之后的内容")]),t._v(" "),s("h2",{attrs:{id:"增量-delta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增量-delta"}},[t._v("#")]),t._v(" 增量(delta)")]),t._v(" "),s("p",[t._v("Delta 的指令总是从文档开头开始。因为有简单的 retain ，所以我们不需要再为 delete 或 insert 操作定义一个 index 值。")]),t._v(" "),s("h3",{attrs:{id:"行格式编排"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行格式编排"}},[t._v("#")]),t._v(" 行格式编排")]),t._v(" "),s("p",[t._v("带有换行符的内容对应属性是描述一行的格式。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n  ops: [\n    { insert: 'The Two Towers' },\n    { insert: '\\n', attributes: { header: 1 } },\n    { insert: 'Aragorn sped on up the hill.\\n' }\n  ]\n}\n//表示的内容：<h1>The Two Towers</h1><p>Aragorn sped on up the hill.</p>\n\n")])])]),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("h3",{attrs:{id:"怎么动态修改-placeholder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么动态修改-placeholder"}},[t._v("#")]),t._v(" 怎么动态修改 placeholder？")]),t._v(" "),s("p",[t._v("placeholder 是通过 css 实现的：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ql-editor::before")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data-placeholder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("所以可以通过元素的"),s("code",[t._v("data-placeholder")]),t._v("修改：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("quill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("placeholder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your new placeholder"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"quill-clipboard-convert会产生多余的新行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quill-clipboard-convert会产生多余的新行"}},[t._v("#")]),t._v(" quill.clipboard.convert会产生多余的新行？")]),t._v(" "),s("p",[t._v("这个问题是当组件内部将html转换为文本时，任何段落都将转换为文本，并在末尾添加新行。因此，组件再次将内部文本转换为html，然后将任何文本放入段落中\n这个")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("html\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<p><br><\\/p>/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<br>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<p>/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<\\/p>/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<br>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("参考：https://github.com/KillerCodeMonkey/ngx-quill/issues/357#issuecomment-606641746")])]),t._v(" "),s("h3",{attrs:{id:"dangerouslypastehtml失去焦点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dangerouslypastehtml失去焦点"}},[t._v("#")]),t._v(" dangerouslyPasteHTML失去焦点？")]),t._v(" "),s("p",[t._v("使用其他方法替代：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" html "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p>Set HTML content <i>without</i> changing focus</p>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" delta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clipboard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("convert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nquill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);