(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{472:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"quill介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quill介绍"}},[t._v("#")]),t._v(" quill介绍")]),t._v(" "),a("p",[t._v("一款跨平台的富文本编辑器")]),t._v(" "),a("h2",{attrs:{id:"主题-themes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题-themes"}},[t._v("#")]),t._v(" 主题（themes）")]),t._v(" "),a("p",[t._v("Quill官方提供两个有特色的主题：Snow and Bubble。如果都不想使用那么可以不设置，并设置使用"),a("code",[t._v("quill.core.css")]),t._v("样式")]),t._v(" "),a("h2",{attrs:{id:"模块-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块-modules"}},[t._v("#")]),t._v(" 模块（modules）")]),t._v(" "),a("p",[t._v("需要引入模块的集合及它们各自的选项。")]),t._v(" "),a("h2",{attrs:{id:"formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formats"}},[t._v("#")]),t._v(" formats")]),t._v(" "),a("p",[t._v("支持的格式设置有如下")]),t._v(" "),a("h3",{attrs:{id:"inline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inline"}},[t._v("#")]),t._v(" Inline")]),t._v(" "),a("p",[t._v("背景颜色 - background\n加粗字体 - bold\n字体颜色 - color\n字体 - font\n内联代码 - code\n斜体 - italic\n链接 - link\n字体大小 - size，有效值['small','large','huge']\n删除线 - strike\n上标/下标 - script\n下划线 - underline")]),t._v(" "),a("h3",{attrs:{id:"块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块"}},[t._v("#")]),t._v(" 块")]),t._v(" "),a("p",[t._v("引用 - blockquote\n标题 - header\n缩进 - indent\n列表 - list\n文本对齐方式 - align\n文本方向 - direction\n代码块 - code-block")]),t._v(" "),a("h3",{attrs:{id:"嵌入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌入"}},[t._v("#")]),t._v(" 嵌入")]),t._v(" "),a("p",[t._v("公式 - formula\n图片 - image\n视频 - video")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("api中的名词讲解：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Source")]),t._v("：表示来源，有可能是从"),a("code",[t._v("user")]),t._v("，或者"),a("code",[t._v("api")]),t._v(",或者"),a("code",[t._v("silent")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"getlength"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getlength"}},[t._v("#")]),t._v(" getLength")]),t._v(" "),a("p",[t._v("返回编辑器内容的长度。注意，当Quill为空时，仍然包含一个由'\\n'解析成的空行，所以getLength将返回1。")]),t._v(" "),a("h3",{attrs:{id:"gettext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gettext"}},[t._v("#")]),t._v(" getText")]),t._v(" "),a("p",[t._v("返回编辑器的字符串内容。非字符串内容会被忽略掉")]),t._v(" "),a("h3",{attrs:{id:"setcontents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setcontents"}},[t._v("#")]),t._v(" setContents")]),t._v(" "),a("p",[t._v("覆盖编辑器contents，末尾会自动插入"),a("code",[t._v("{ insert: '\\n' }")])]),t._v(" "),a("h3",{attrs:{id:"settext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settext"}},[t._v("#")]),t._v(" setText")]),t._v(" "),a("p",[t._v("用给定的文本设置为编辑器的内容，返回代表对应变化的 Delta数据。注意，Quill文档必须以换行符结尾，如果没有则会自动添加。")]),t._v(" "),a("h3",{attrs:{id:"updatecontents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updatecontents"}},[t._v("#")]),t._v(" updateContents")]),t._v(" "),a("p",[t._v("让编辑器内容执行Delta数据方法，返回代表对应变化的 Delta数据。如果给定的Delta没有无效的操作，返回值和传入的值相同。")]),t._v(" "),a("h3",{attrs:{id:"setselection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setselection"}},[t._v("#")]),t._v(" setSelection")]),t._v(" "),a("p",[t._v("给定范围设置用户的选区，同时焦点在编辑器上。作为选区传入 null，将会使编辑器失去焦点。")]),t._v(" "),a("h2",{attrs:{id:"格式化-formattting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化-formattting"}},[t._v("#")]),t._v(" 格式化(formattting)")]),t._v(" "),a("h3",{attrs:{id:"format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" format")]),t._v(" "),a("p",[t._v("格式化选中或者光标之后的内容")]),t._v(" "),a("h2",{attrs:{id:"增量-delta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增量-delta"}},[t._v("#")]),t._v(" 增量(delta)")]),t._v(" "),a("p",[t._v("Delta的指令总是从文档开头开始。因为有简单的retain ，所以我们不需要再为delete 或 insert 操作定义一个index值。")]),t._v(" "),a("h3",{attrs:{id:"行格式编排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行格式编排"}},[t._v("#")]),t._v(" 行格式编排")]),t._v(" "),a("p",[t._v("带有换行符的内容对应属性是描述一行的格式。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("{\n  ops: [\n    { insert: 'The Two Towers' },\n    { insert: '\\n', attributes: { header: 1 } },\n    { insert: 'Aragorn sped on up the hill.\\n' }\n  ]\n}\n//表示的内容：<h1>The Two Towers</h1><p>Aragorn sped on up the hill.</p>\n\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);