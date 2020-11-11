(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{476:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"umi基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#umi基础"}},[t._v("#")]),t._v(" Umi基础")]),t._v(" "),s("h3",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("ul",[s("li",[t._v("component\n"),s("ul",[s("li",[t._v("组件的路径如果是相对路径，会从src/pages开始找起，可以使用"),s("code",[t._v("@")]),t._v("指向"),s("code",[t._v("src")])])])]),t._v(" "),s("li",[t._v("wrappers\n"),s("ul",[s("li",[t._v("配置路由的高阶组件封装,相当于"),s("code",[t._v("react-router")]),t._v("中的"),s("code",[t._v("render")]),t._v(",重新渲染组件")])])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export default {\n  routes: [\n    { path: '/user', component: 'user',\n      wrappers: [\n        '@/wrappers/auth',\n      ],\n    },\n    { path: '/login', component: 'login' },\n  ]\n}\n// /wrappers/auth\nexport default (props) => {\n  const { isLogin } = useAuth();\n  if (isLogin) {\n    return <div>{ props.children }</div>;\n  } else {\n    redirectTo('/login');\n  }\n}\n")])])]),s("h3",{attrs:{id:"约定式路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约定式路由"}},[t._v("#")]),t._v(" 约定式路由")]),t._v(" "),s("p",[t._v("如果没有"),s("code",[t._v("routes")]),t._v("配置，Umi会进入约定路由模式，然后分析"),s("code",[t._v("src/pages")]),t._v("目录拿到路由配置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  └── pages\n    ├── index.tsx\n    └── users.tsx\n")])])]),s("p",[t._v("会得到：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[\n  { exact: true, path: '/', component: '@/pages/index' },\n  { exact: true, path: '/users', component: '@/pages/users' },\n]\n")])])]),s("p",[t._v("需要注意的是，满足以下任意规则的文件不会被注册为路由")]),t._v(" "),s("ul",[s("li",[t._v("以 . 或 _ 开头的文件或目录")]),t._v(" "),s("li",[t._v("以 d.ts 结尾的类型定义文件")]),t._v(" "),s("li",[t._v("以 test.ts、spec.ts、e2e.ts 结尾的测试文件（适用于 .js、.jsx 和 .tsx 文件）")]),t._v(" "),s("li",[t._v("components 和 component 目录")]),t._v(" "),s("li",[t._v("utils 和 util 目录")]),t._v(" "),s("li",[t._v("不是 .js、.jsx、.ts 或 .tsx 文件")]),t._v(" "),s("li",[t._v("文件内容不包含 JSX 元素")])]),t._v(" "),s("h2",{attrs:{id:"静态资源无法访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源无法访问"}},[t._v("#")]),t._v(" 静态资源无法访问")]),t._v(" "),s("p",[t._v("在开发模式下如果对"),s("code",[t._v("public")]),t._v("中的静态资源更改无效，那么尝试重新启动开发服务。")])])}),[],!1,null,null,null);e.default=n.exports}}]);