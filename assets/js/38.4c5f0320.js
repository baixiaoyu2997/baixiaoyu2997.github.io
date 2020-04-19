(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{305:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"umi基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#umi基础","aria-hidden":"true"}},[e._v("#")]),e._v(" Umi基础")]),e._v(" "),s("h3",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由","aria-hidden":"true"}},[e._v("#")]),e._v(" 路由")]),e._v(" "),s("ul",[s("li",[e._v("component\n"),s("ul",[s("li",[e._v("组件的路径如果是相对路径，会从src/pages开始找起，可以使用"),s("code",[e._v("@")]),e._v("指向"),s("code",[e._v("src")])])])]),e._v(" "),s("li",[e._v("wrappers\n"),s("ul",[s("li",[e._v("配置路由的高阶组件封装,相当于"),s("code",[e._v("react-router")]),e._v("中的"),s("code",[e._v("render")]),e._v(",重新渲染组件")])])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("export default {\n  routes: [\n    { path: '/user', component: 'user',\n      wrappers: [\n        '@/wrappers/auth',\n      ],\n    },\n    { path: '/login', component: 'login' },\n  ]\n}\n// /wrappers/auth\nexport default (props) => {\n  const { isLogin } = useAuth();\n  if (isLogin) {\n    return <div>{ props.children }</div>;\n  } else {\n    redirectTo('/login');\n  }\n}\n")])])]),s("h3",{attrs:{id:"约定式路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约定式路由","aria-hidden":"true"}},[e._v("#")]),e._v(" 约定式路由")]),e._v(" "),s("p",[e._v("如果没有"),s("code",[e._v("routes")]),e._v("配置，Umi会进入约定路由模式，然后分析"),s("code",[e._v("src/pages")]),e._v("目录拿到路由配置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  └── pages\n    ├── index.tsx\n    └── users.tsx\n")])])]),s("p",[e._v("会得到：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[\n  { exact: true, path: '/', component: '@/pages/index' },\n  { exact: true, path: '/users', component: '@/pages/users' },\n]\n")])])]),s("p",[e._v("需要注意的是，满足以下任意规则的文件不会被注册为路由")]),e._v(" "),s("ul",[s("li",[e._v("以 . 或 _ 开头的文件或目录")]),e._v(" "),s("li",[e._v("以 d.ts 结尾的类型定义文件")]),e._v(" "),s("li",[e._v("以 test.ts、spec.ts、e2e.ts 结尾的测试文件（适用于 .js、.jsx 和 .tsx 文件）")]),e._v(" "),s("li",[e._v("components 和 component 目录")]),e._v(" "),s("li",[e._v("utils 和 util 目录")]),e._v(" "),s("li",[e._v("不是 .js、.jsx、.ts 或 .tsx 文件")]),e._v(" "),s("li",[e._v("文件内容不包含 JSX 元素")])])])},[],!1,null,null,null);t.default=n.exports}}]);