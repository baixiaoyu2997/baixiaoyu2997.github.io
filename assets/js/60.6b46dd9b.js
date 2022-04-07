(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{491:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),a("p",[t._v("官方线上的文档不会展示所有版本，如果需要特定版本可以下载离线的docker镜像查看，https://docs.gitlab.com/archives/")]),t._v(" "),a("h3",{attrs:{id:"查看历史重要改动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看历史重要改动"}},[t._v("#")]),t._v(" 查看历史重要改动")]),t._v(" "),a("p",[t._v("https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/?tab=features")]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("h3",{attrs:{id:"发布gitlab-npm报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布gitlab-npm报错"}},[t._v("#")]),t._v(" 发布gitlab npm报错？")]),t._v(" "),a("ol",[a("li",[t._v("首先公司使用的是12.9版本，而gitlab是在至少"),a("code",[t._v("13.3")]),t._v("才免费提供"),a("code",[t._v("packages")]),t._v("给企业版")]),t._v(" "),a("li",[a("code",[t._v("13.5")]),t._v("版本之前，想要"),a("code",[t._v("npm publish")]),t._v("，必须手动编写"),a("code",[t._v(".npmrc")]),t._v("文件，添加发布地址,参考官方issue：https://gitlab.com/gitlab-org/gitlab/-/issues/220985")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitlab.com/gitlab-org/gitlab/-/issues/12936",target:"_blank",rel:"noopener noreferrer"}},[t._v("I have the exact same issue, if the project is more than 1 group level deep (foor/bar/test) it will fail."),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("启用包功能后，默认情况下，所有新项目都可以使用存储库。要为现有项目启用它，用户必须在项目的设置中明确这样做:http://localhost:4000/13.5/ee/administration/packages/index.html#enabling-the-packages-feature")]),t._v(" "),a("li",[t._v("我测试的是gitlab 13.5，至少在这个版本要想发布npm包，scope必须是顶级目录才行，无法在group下的project中发布包,这个问题在13.10中修复，https://gitlab.com/gitlab-org/gitlab/-/issues/215043")])]),t._v(" "),a("h3",{attrs:{id:"如何解除不能强制推送master的权限问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解除不能强制推送master的权限问题"}},[t._v("#")]),t._v(" 如何解除不能强制推送master的权限问题？")]),t._v(" "),a("p",[t._v("项目设置中选择"),a("code",[t._v("仓库>Protected Branches>master分支上选择Unprotect")]),t._v(",推送完毕后再开启protect即可。")]),t._v(" "),a("h2",{attrs:{id:"设置企业级别scoped-npm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置企业级别scoped-npm包"}},[t._v("#")]),t._v(" 设置企业级别scoped npm包")]),t._v(" "),a("p",[a("code",[t._v("gitlab package")]),t._v("区分"),a("code",[t._v("project-level")]),t._v("和"),a("code",[t._v("instance-level")]),t._v(",想要"),a("code",[t._v("publish")]),t._v("只能使用project-level`，所以下面只写项目级的使用方式")]),t._v(" "),a("h3",{attrs:{id:"gitlab设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab设置"}},[t._v("#")]),t._v(" gitlab设置")]),t._v(" "),a("p",[t._v("gitlab为私有库时需要设置以下之一的访问权限:")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("personal access token")])]),t._v(" "),a("li",[a("code",[t._v("deploy token")])]),t._v(" "),a("li",[a("code",[t._v("CI job token")])]),t._v(" "),a("li",[t._v("npm包name必须格式为"),a("code",[t._v("@scope/package-name")])])]),t._v(" "),a("p",[t._v("设置代码：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("// 设置registry\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" @xxx:registry https://git.xxx.io/api/v4/projects/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your_project_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/packages/npm/\n// 设置密钥\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -- "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//git.xxx.io/api/v4/projects/<your_project_id>/packages/npm/:_authToken'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your_token>"')]),t._v("\n\n")])])]),a("p",[t._v("这里推荐使用deploy token，因为这个是跟库相关联的，以后走人了也方便交接。")]),t._v(" "),a("h3",{attrs:{id:"下载npm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载npm包"}},[t._v("#")]),t._v(" 下载npm包")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// gitlab下载npm包需要设置scoped registry \nnpm config set @foo:registry https://gitlab.example.com/api/v4/projects/<your_project_id>/packages/npm/\n\n// 设置personal access token 或者 deploy token以提供下载能力\nnpm config set -- '//git.yeeyun.io/api/v4/projects/94/packages/npm/:_authToken' \"hzxxMeZYNsCcyZ5hk3EF\" -g\n\n// 如果需要上传包，那么还需要设置\nnpm config set '//gitlab.com/api/v4/projects/<your_project_id>/packages/npm/:_authToken' \"<your_token>\"\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);