(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{477:function(t,e,s){"use strict";s.r(e);var o=s(2),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"模版仓库-template-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模版仓库-template-repository"}},[t._v("#")]),t._v(" 模版仓库（Template repository）")]),t._v(" "),s("p",[t._v("如果想以某仓库为模版快速创建一个新仓库，那么可以在这个仓库的"),s("code",[t._v("setting>options")]),t._v("中勾选"),s("code",[t._v("Template repository")]),t._v(" "),s("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/github%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97_2020-05-08-10-31-34.png",alt:"github使用指南_2020-05-08-10-31-34"}}),t._v('\n在代码（Code）里面找到按钮"Use this template"，点击后会进入生成新仓库的"Create a new repository from..."页面。\n'),s("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/github%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97_2020-05-08-10-31-59.png",alt:"github使用指南_2020-05-08-10-31-59"}}),t._v('\n在"Create a new repository..."页面输入新的'),s("code",[t._v("Repository")]),t._v('名称，点击按钮"Create repository from template"即可创建。\n'),s("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/github%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97_2020-05-08-10-32-54.png",alt:"github使用指南_2020-05-08-10-32-54"}}),t._v('\n注意，每个选中了"Template repository"的'),s("code",[t._v("repository")]),t._v("，在其URL的尾部加上"),s("code",[t._v("/generate")]),t._v('然后跳转，就会直接进入"Create a new repository from..."页面，就像点击了按钮"Use this template"。')]),t._v(" "),s("p",[t._v("这个"),s("code",[t._v("Template repository")]),t._v("的功能避免了创建源项目代码库分支的"),s("code",[t._v("fork")]),t._v("，即使不是开发者也能在所有项目中重用代码。这使得资源类的东西，比如文档啊，模板什么的，分享变得非常方便。")]),t._v(" "),s("h2",{attrs:{id:"组织"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组织"}},[t._v("#")]),t._v(" 组织")]),t._v(" "),s("ol",[s("li",[t._v("要想下载组织下的仓库，那么需要配置密钥，方法："),s("code",[t._v("组织>项目>settings>Deploy keys>Add deploy key")])])]),t._v(" "),s("h2",{attrs:{id:"github-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-packages"}},[t._v("#")]),t._v(" github packages")]),t._v(" "),s("p",[t._v("创建包和下载包都需要先创建一个带有读写权限的"),s("code",[t._v("token")]),t._v("\n然后进行登录验证"),s("code",[t._v("npm login --registry=https://npm.pkg.github.com")]),s("br"),t._v("\n登录过程中输入password时，输入的不是github的密码，而是你创建的token"),s("br"),t._v("\n上传和下载时"),s("code",[t._v("npm")]),t._v("的"),s("code",[t._v("registry")]),t._v("必须为"),s("code",[t._v("https://npm.pkg.github.com")])]),t._v(" "),s("h3",{attrs:{id:"组织邀请成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组织邀请成员"}},[t._v("#")]),t._v(" 组织邀请成员")]),t._v(" "),s("blockquote",[s("p",[t._v("如果其他人想要下载package，必须加入该包的组织：")])]),t._v(" "),s("ol",[s("li",[t._v("先用组织拥有者账号邀请成员：组织>setting>developer settings>github apps>邀请成员")]),t._v(" "),s("li",[t._v("成员本地npm设置包源为github："),s("code",[t._v("https://npm.pkg.github.com/")]),t._v(",输入"),s("code",[t._v("password")]),t._v("时，值为组织拥有者的"),s("code",[t._v("token")])]),t._v(" "),s("li",[t._v("成员接受邀请后，本地登录："),s("code",[t._v("npm login --registry=https://npm.pkg.github.com")])])]),t._v(" "),s("p",[t._v("完成以上步骤后组织成员就可以下载"),s("code",[t._v("github packages")]),t._v("了")]),t._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("h3",{attrs:{id:"如何在已推送的仓库中添加license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何在已推送的仓库中添加license"}},[t._v("#")]),t._v(" 如何在已推送的仓库中添加LICENSE？")]),t._v(" "),s("p",[t._v("项目主页选中"),s("code",[t._v("create new file")]),t._v(",在文件名中输入"),s("code",[t._v("LICENSE")]),t._v(",这时右侧会出现"),s("code",[t._v("choose a license template")]),t._v("按钮，然后选择一个LICENSE")])])}),[],!1,null,null,null);e.default=a.exports}}]);