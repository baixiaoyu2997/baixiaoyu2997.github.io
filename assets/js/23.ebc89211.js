(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{455:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("facebook出品")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("h3",{attrs:{id:"schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[t._v("#")]),t._v(" schema")]),t._v(" "),s("p",[t._v("定义要传给服务的数据结构，如果客户端定义了服务端不存在的属性，则返回"),s("code",[t._v("null")]),t._v(",如果想强制字段类型不能为空，则添加"),s("code",[t._v("!")]),t._v(",例如："),s("code",[t._v("foo:string!")]),t._v("。当设置"),s("code",[t._v("!")]),t._v("后表示后端返回值也不能为空，如果为空则报错。")]),t._v(" "),s("p",[t._v("对于数组，可以在字段定义时在后边加入"),s("code",[t._v("!")]),t._v("表示该数组不能为空:"),s("code",[t._v("list:[String]!")])]),t._v(" "),s("p",[t._v("如果数组中的元素也不能为空，则"),s("code",[t._v("list:[String!]!")]),t._v(",该表达式的返回值可以为"),s("code",[t._v("[]")])]),t._v(" "),s("p",[t._v("语句最外层默认执行Query查询：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n\tuser\n}\n# 与以下相等\nquery {\n\tuser\n}\n")])])]),s("p",[t._v("使用其他内置类型时需要指定,例如： "),s("code",[t._v("mutation createArticle {}")])]),t._v(" "),s("h3",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),s("p",[t._v("默认的对象类型都是返回所有值，查找单个数据时，需要配置函数类型：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("type Query{\n\tarticle(id:ID!): Article // 该函数，id必填，Article为返回类型\n}\n")])])]),s("p",[t._v("当没有查询到结果时返回"),s("code",[t._v("null")])]),t._v(" "),s("h4",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("p",[t._v("函数中使用where来进行条件查询")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n  markets(where: {borrowRate: 15}) {\n    id\n    name\n    symbol\n    borrowRate\n    supplyRate\n  }\n}\n\n")])])]),s("p",[t._v("除了where还支持：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("id：指定 id 查询\norderBy：指定排序的字段\norderDirection：排序方向，asc | desc\nfirst：查询条数，比如设为 10，则最多只查出 10 条记录\nskip：跳过不查询的条数\nblock：指定区块查询，可以指定区块 number 或 hash\ntext：全文检索\n")])])]),s("h4",{attrs:{id:"后缀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后缀"}},[t._v("#")]),t._v(" 后缀")]),t._v(" "),s("p",[t._v("查询某个值大于特定值,在参数后加上"),s("code",[t._v("_gt")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n  markets(where: {borrowRate_gt: 15}) {\n    id\n    name\n    symbol\n    borrowRate\n    supplyRate\n  }\n}\n\n")])])]),s("p",[t._v("GraphQL提供了多个后缀：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("_not\n_gt\n_lt\n_gte\n_lte\n_in\n_not_in\n_contains\n_not_contains\n_starts_with\n_ends_with\n_not_starts_with\n_not_ends_with\n")])])]),s("h3",{attrs:{id:"type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("type")]),t._v("定义类型。")]),t._v(" "),s("p",[t._v("gql自带一组默认标量类型：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Int")])]),t._v(" "),s("li",[s("p",[t._v("Float")])]),t._v(" "),s("li",[s("p",[t._v("String")])]),t._v(" "),s("li",[s("p",[t._v("Boolean")])]),t._v(" "),s("li",[s("p",[t._v("ID，返回字符串")])])]),t._v(" "),s("p",[t._v("类型转换，就像js的隐式类型转换，如果可以转换为有效的类型，则可以使用")]),t._v(" "),s("h4",{attrs:{id:"query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" Query")]),t._v(" "),s("p",[t._v("内置对象类型，用来查找其他对象 ，比需要有Query类型，并且只能有一个。")]),t._v(" "),s("p",[t._v("写查询的schema时，如果该类型为对象类型，则一定要写其内部的属性。数组和普通类型写法一样，但是如果数组内值类型为对象，那么需要按照对象类型编写")]),t._v(" "),s("h4",{attrs:{id:"mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutation"}},[t._v("#")]),t._v(" Mutation")]),t._v(" "),s("p",[t._v("内置对象类型，用来修改数据")]),t._v(" "),s("h3",{attrs:{id:"input"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" input")]),t._v(" "),s("p",[t._v("输入参数类型。当函数的参数过多时，应该使用input定义的类型去接收参数：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("input CreateArticleInput{\n\ttitle: String!\n\tbody: String!\n\ttagList:[String!]\n} \ntype Mutation {\n\tcreateArticle(article: CreateArticleInput):Article\n}\n")])])]),s("h3",{attrs:{id:"客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),s("p",[t._v("客户端发起请求时，需要拼写大量的字符串，可以通过传入变量简化操作：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tquery"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n\tquery getUser($id: ID!){ // 变量使用")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("$"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("号声明使用\n\t\tuser(id:$id)\n\t}\n\t")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tvariables"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"vue3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3"}},[t._v("#")]),t._v(" vue3")]),t._v(" "),s("p",[t._v("与vue一起使用时，可以使用"),s("code",[t._v("@vue/apollo-composable")]),t._v("配合"),s("code",[t._v("graphql-tag")]),t._v("快速编写请求")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useQuery "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/apollo-composable'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" gql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'graphql-tag'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("result "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gql"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n\tquery AllBlogs {\n\t\tblogs {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcontent\n\t\t}\n\t}\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);