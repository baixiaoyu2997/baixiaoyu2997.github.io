(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{264:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("prop")]),t._v("的类型不是字符串类型时，在jsx中必须用花括号"),s("code",[t._v("{}")]),t._v("把"),s("code",[t._v("prop")]),t._v("包住。")]),t._v(" "),s("h3",{attrs:{id:"jsx语法css样式编写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsx语法css样式编写","aria-hidden":"true"}},[t._v("#")]),t._v(" jsx语法css样式编写")]),t._v(" "),s("p",[t._v("jsx中编写css不能直接写成"),s("code",[t._v("html")]),t._v("或者"),s("code",[t._v("vue")]),t._v("那样的内联样式,例如：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("必须为对象格式：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<div style={{color:'blue'}}>test</div>\n")])])]),s("h3",{attrs:{id:"为什么代码中没出现react还要引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么代码中没出现react还要引用","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么代码中没出现React还要引用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import React,{ Component }  from 'react';\nclass ClickCounter extends Component {\n    constructor(props){\n        super(props);\n        this.onClickButton=this.onClickButton.bind(this);\n        this.state={count:0}\n    }\n    onClickButton(){\n        this.setState({count:this.state.count+1})\n    }\n    render(){\n        return (\n            <div>\n                <button onClick={this.onClickButton}>Click Me</button>\n                <div>Click Count:{this.state.count}</div>\n            </div>\n        )\n    }\n}\nexport default ClickCounter;\n")])])]),s("p",[t._v("在上面的代码中并没有引用React，在尝试去掉React后，系统会报错\n"),s("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/20200104120307.png",alt:"20200104120307.png"}}),t._v('\n这个错误信息的含义是："在使用JSX的范围内必须要有React"，也就是说在使用JSX的代码文件中，即使代码中并没有直接使用React,也一定要导入这个React，这是因为Babel 会把 JSX 转译成一个名为 React.createElement() 的函数调用。')]),t._v(" "),s("h3",{attrs:{id:"组件命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件命名规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件命名规范")]),t._v(" "),s("p",[t._v("组件名称必须以大写字母开头。\nReact 会将以小写字母开头的组件视为原生 DOM 标签。")]),t._v(" "),s("h3",{attrs:{id:"yarn-创建react项目时出现错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn-创建react项目时出现错误","aria-hidden":"true"}},[t._v("#")]),t._v(" yarn 创建react项目时出现错误")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("error Incorrect integrity when fetching from the cache\ninfo Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.\n")])])]),s("p",[t._v("或者")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("error Incorrect integrity when fetching from the cache\ninfo Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.\n\nAborting installation.\n  yarnpkg add --exact react react-dom react-scripts --cwd \n")])])]),s("p",[t._v("使用"),s("code",[t._v("yarn cache clean")]),t._v("清除缓存即可")])])},[],!1,null,null,null);a.default=n.exports}}]);