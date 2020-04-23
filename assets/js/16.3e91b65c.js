(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{410:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),e("h3",{attrs:{id:"var"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#var","aria-hidden":"true"}},[t._v("#")]),t._v(" var")]),t._v(" "),e("p",[t._v("在dart中可以使用var来替代具体类型的声明，会自动推导变量的类型，这是因为var并不是直接存储值，而是存储值的对象引用，所以var可以声明任何变量。"),e("br"),t._v("\n但是在使用var声明变量的时候，需要注意的是: 如果var声明的变量开始不初始化，不仅值可以改变它的类型也是可以被修改的，但是一旦开始初始化赋值后，它的类型就确定了，后续不能被改变。")]),t._v(" "),e("h2",{attrs:{id:"类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类","aria-hidden":"true"}},[t._v("#")]),t._v(" 类")]),t._v(" "),e("h3",{attrs:{id:"构造函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构造函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),e("p",[t._v("声明一个与类名一样的函数即可声明一个构造函数（对于命名式构造函数还可以添加额外的标识符）。大部分的构造函数形式是生成式构造函数，其用于创建一个类的实例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Point {\n  num x, y;\n\n  Point(num x, num y) {\n    // 还会有更好的方式来实现此逻辑，敬请期待。\n    this.x = x;\n    this.y = y;\n  }\n}\n")])])]),e("blockquote",[e("p",[t._v("使用 "),e("code",[t._v("this")]),t._v(" 关键字引用当前实例。")])]),t._v(" "),e("p",[t._v("对于大多数编程语言来说在构造函数中为实例变量赋值的过程都是类似的，而 Dart 则提供了一种特殊的语法糖来简化该步骤:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Point {\n  num x, y;\n\n  // 在构造函数体执行前用于设置 x 和 y 的语法糖。\n  Point(this.x, this.y);\n}\n")])])]),e("p",[t._v("如果父类没有匿名无参数构造函数，那么子类必须调用父类的其中一个构造函数，为子类的构造函数指定一个父类的构造函数只需在构造函数体前使用（:）指定。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class GalleryApp extends StatefulWidget {\n  const GalleryApp({\n    Key key,\n    this.updateUrlFetcher,\n    this.enablePerformanceOverlay = true,\n  }) : super(key: key); // 调用父类构造函数\n\n  final UpdateUrlFetcher updateUrlFetcher;\n  final bool enablePerformanceOverlay;\n}\n\n")])])]),e("h3",{attrs:{id:"new关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#new关键字","aria-hidden":"true"}},[t._v("#")]),t._v(" new关键字")]),t._v(" "),e("p",[t._v("在Dart2.0中"),e("code",[t._v("new")]),t._v("变成了可选项")]),t._v(" "),e("h2",{attrs:{id:"重要的概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重要的概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 重要的概念")]),t._v(" "),e("h3",{attrs:{id:"私有变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#私有变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 私有变量")]),t._v(" "),e("p",[t._v("dart语言中没有public、protected和private这些关键字。但是在dart里面，以下划线开头的变量自动识别为私有变量")]),t._v(" "),e("h2",{attrs:{id:"运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 运算符")]),t._v(" "),e("h3",{attrs:{id:"类型判定运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型判定运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型判定运算符")]),t._v(" "),e("p",[t._v("类型判定运算符\n"),e("code",[t._v("as")]),t._v("， "),e("code",[t._v("is")]),t._v("， 和 "),e("code",[t._v("is!")]),t._v(" 运算符用于在运行时处理类型检查：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Operator")]),t._v(" "),e("th",[t._v("Meaning")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("as")]),t._v(" "),e("td",[t._v("Typecast (也被用于指定库前缀)")])]),t._v(" "),e("tr",[e("td",[t._v("is")]),t._v(" "),e("td",[t._v("True if the object has the specified type")])]),t._v(" "),e("tr",[e("td",[t._v("is!")]),t._v(" "),e("td",[t._v("False if the object has the specified type")])])])]),t._v(" "),e("p",[t._v("例如， "),e("code",[t._v("obj is Object")]),t._v(" 总是 true。 但是只有 "),e("code",[t._v("obj")]),t._v(" 实现了 "),e("code",[t._v("T")]),t._v(" 的接口时， "),e("code",[t._v("obj is T")]),t._v(" 才是 true。")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("as")]),t._v(" 运算符将对象强制转换为特定类型。 通常，可以认为是 "),e("code",[t._v("is")]),t._v(" 类型判定后，被判定对象调用函数的一种缩写形式。 请考虑以下代码：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("emp is Person"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Type check")]),t._v("\n  emp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bob'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("使用 "),e("code",[t._v("as")]),t._v(" 运算符进行缩写：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("emp "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Person"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bob'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("提示： 以上代码并不是等价的。 如果 "),e("code",[t._v("emp")]),t._v(" 为 null 或者不是 Person 对象， 那么第一个 "),e("code",[t._v("is")]),t._v(" 的示例，后面将不回执行； 第二个 "),e("code",[t._v("as")]),t._v(" 的示例会抛出异常。")])]),t._v(" "),e("h3",{attrs:{id:"list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list","aria-hidden":"true"}},[t._v("#")]),t._v(" List")]),t._v(" "),e("p",[t._v("构造器")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("详情")]),t._v(" "),e("th",[t._v("参数")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("List.generate")]),t._v(" "),e("td",[t._v("创建一个长度为length的列表")]),t._v(" "),e("td",[t._v("(int length,E generator(int index), {bool growable: true)")])])])]),t._v(" "),e("h2",{attrs:{id:"libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#libraries","aria-hidden":"true"}},[t._v("#")]),t._v(" LIBRARIES")]),t._v(" "),e("h3",{attrs:{id:"dart-isolate（后台运行）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dart-isolate（后台运行）","aria-hidden":"true"}},[t._v("#")]),t._v(" dart:isolate（后台运行）")]),t._v(" "),e("p",[t._v("有时候你需要处理大量的数据，这会导致你的 UI 挂起。在 Flutter 中，使用 Isolate 来发挥多核心 CPU 的优势来处理那些长期运行或是计算密集型的任务。\nIsolate 是分离的运行线程，并且不和主线程的内存堆共享内存。这意味着你不能访问主线程中的变量，或者使用 setState() 来更新 UI。正如它们的名字一样，Isolate 不能共享内存。")]),t._v(" "),e("h3",{attrs:{id:"dart-convert-转换格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dart-convert-转换格式","aria-hidden":"true"}},[t._v("#")]),t._v(" dart:convert(转换格式)")]),t._v(" "),e("p",[t._v("引用："),e("code",[t._v("import 'dart:convert'")]),t._v(";")]),t._v(" "),e("p",[t._v("JSON"),e("br"),t._v("\n解码(JSON String->Object)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// NOTE: Be sure to use double quotes (\"),\n// not single quotes ('), inside the JSON string.\n// This string is JSON, not Dart.\nvar jsonString = '''\n  [\n    {\"score\": 40},\n    {\"score\": 80}\n  ]\n''';\n\nvar scores = jsonDecode(jsonString);\nassert(scores is List);\n\nvar firstScore = scores[0];\nassert(firstScore is Map);\nassert(firstScore['score'] == 40);\n")])])]),e("p",[t._v("编码(Object->JSON String)"),e("br"),t._v("\n支持int, double, String, bool, null, List, Map (with string keys)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var scores = [\n  {'score': 40},\n  {'score': 80},\n  {'score': 100, 'overtime': true, 'special_guest': null}\n];\n\nvar jsonText = jsonEncode(scores);\nassert(jsonText ==\n    '[{\"score\":40},{\"score\":80},'\n    '{\"score\":100,\"overtime\":true,'\n    '\"special_guest\":null}]');\n")])])]),e("p",[t._v("UTF-8"),e("br"),t._v("\n解码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("List<int> utf8Bytes = [\n  0xc3, 0x8e, 0xc3, 0xb1, 0xc5, 0xa3, 0xc3, 0xa9,\n  0x72, 0xc3, 0xb1, 0xc3, 0xa5, 0xc5, 0xa3, 0xc3,\n  0xae, 0xc3, 0xb6, 0xc3, 0xb1, 0xc3, 0xa5, 0xc4,\n  0xbc, 0xc3, 0xae, 0xc5, 0xbe, 0xc3, 0xa5, 0xc5,\n  0xa3, 0xc3, 0xae, 0xe1, 0xbb, 0x9d, 0xc3, 0xb1\n];\n\nvar funnyWord = utf8.decode(utf8Bytes);\n\nassert(funnyWord == 'Îñţérñåţîöñåļîžåţîờñ');\n\n")])])]),e("p",[t._v("解码stream")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var lines = inputStream\n    .transform(utf8.decoder)\n    .transform(LineSplitter());\ntry {\n  await for (var line in lines) {\n    print('Got ${line.length} characters from stream');\n  }\n  print('file is now closed');\n} catch (e) {\n  print(e);\n}\n")])])]),e("p",[t._v("编码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("List<int> encoded = utf8.encode('Îñţérñåţîöñåļîžåţîờñ');\n\nassert(encoded.length == utf8Bytes.length);\nfor (int i = 0; i < encoded.length; i++) {\n  assert(encoded[i] == utf8Bytes[i]);\n}\n\n")])])]),e("blockquote",[e("p",[t._v("引用自 "),e("a",{attrs:{href:"https://www.jianshu.com/p/0dbb26f58eb4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter学习笔记5-dart:convert"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"maps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maps","aria-hidden":"true"}},[t._v("#")]),t._v(" Maps")]),t._v(" "),e("p",[t._v("如果检索的 Key 不存在于 Map 中则会返回一个 null：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var gifts = {'first': 'partridge'};\nassert(gifts['fifth'] == null);\n")])])]),e("h3",{attrs:{id:"function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function","aria-hidden":"true"}},[t._v("#")]),t._v(" Function")]),t._v(" "),e("p",[t._v("箭头函数不能像js中那样用于多语句函数，只能在有一个表达式时，才能使用箭头函数")])])},[],!1,null,null,null);a.default=r.exports}}]);