(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{418:function(r,e,a){"use strict";a.r(e);var t=a(1),n=Object(t.a)({},function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h2",{attrs:{id:"国际化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#国际化","aria-hidden":"true"}},[r._v("#")]),r._v(" 国际化")]),r._v(" "),a("p",[r._v("通过在组件外添加"),a("code",[r._v("ConfigProvider")]),r._v("组件，并设置"),a("code",[r._v("locale={zhCN}")])]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('import React from "react";\n\nimport { render } from "react-dom";\nimport { ConfigProvider } from "antd";\nimport zhCN from \'antd/es/locale/zh_CN\';\nimport App from "./App";\n\nrender(\n  <ConfigProvider locale={zhCN}>\n    <App />\n  </ConfigProvider>,\n  document.getElementById("root")\n);\n\n')])])]),a("h2",{attrs:{id:"定制主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定制主题","aria-hidden":"true"}},[r._v("#")]),r._v(" 定制主题")]),r._v(" "),a("h3",{attrs:{id:"自定义主题颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义主题颜色","aria-hidden":"true"}},[r._v("#")]),r._v(" 自定义主题颜色")]),r._v(" "),a("p",[r._v("在"),a("code",[r._v("create-react-app")]),r._v("中，要想使用自定义颜色功能需要手动更改配置，首先下载")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("yarn add react-app-rewired customize-cra  -D\n")])])]),a("p",[r._v("然后新增或者修改"),a("code",[r._v("config-overrides.js")]),r._v("文件")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("const { override, fixBabelImports, addLessLoader } = require('customize-cra');\n\nmodule.exports = override(\n  fixBabelImports('import', {\n    libraryName: 'antd',\n    libraryDirectory: 'es',\n    style: true,\n  }),\n  addLessLoader({\n    javascriptEnabled: true,\n    modifyVars: { '@primary-color': '#1DA57A' },\n  }),\n);\n")])])]),a("p",[r._v("这里利用了 less-loader 的 modifyVars 来进行主题配置，变量和其他配置方式可以参考"),a("a",{attrs:{href:"https://ant.design/docs/react/customize-theme-cn",target:"_blank",rel:"noopener noreferrer"}},[r._v("定制主题"),a("OutboundLink")],1),r._v(" 文档。")]),r._v(" "),a("h3",{attrs:{id:"设置统一样式前缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置统一样式前缀","aria-hidden":"true"}},[r._v("#")]),r._v(" 设置统一样式前缀")]),r._v(" "),a("p",[r._v("通过在组件外添加"),a("code",[r._v("ConfigProvider")]),r._v("组件，并设置"),a("code",[r._v("prefixCls")])]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('import React from "react";\n\nimport { render } from "react-dom";\nimport { ConfigProvider } from "antd";\nimport App from "./App";\n\nrender(\n  <ConfigProvider prefixCls="fantuan">\n    <App />\n  </ConfigProvider>,\n  document.getElementById("root")\n);\n\n')])])])])},[],!1,null,null,null);e.default=n.exports}}]);