(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{275:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("p",[s._v("参看这篇文章："),a("a",{attrs:{href:"https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/26/theme-guide-zh.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("主题使用指南"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"推送博客到gh-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送博客到gh-pages","aria-hidden":"true"}},[s._v("#")]),s._v(" 推送博客到gh-pages")]),s._v(" "),a("p",[s._v("待完善")]),s._v(" "),a("h3",{attrs:{id:"编写deploy-sh脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写deploy-sh脚本","aria-hidden":"true"}},[s._v("#")]),s._v(" 编写deploy.sh脚本")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --all\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard origin/master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -df\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"初始化"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./dist\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config core.autocrlf "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@github.com:baixiaoyu2997/baixiaoyu2997.github.io.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --all\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard origin/master\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"子项目初始化"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf src/_posts/*\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rf "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"E:/Nutstore/private/博客/."')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/_posts/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"拷贝博客"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m copy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"上传blog源文件到github"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"编译生成静态文件"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rf "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build/."')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf build\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"静态文件拷贝到子项目"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./dist\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m deploy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master -f\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"上传博客"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"推送成功，按回车键退出"')]),s._v(" var\n\n")])])]),a("h3",{attrs:{id:"执行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本","aria-hidden":"true"}},[s._v("#")]),s._v(" 执行脚本")]),s._v(" "),a("p",[s._v("双击sh文件或者在npm script中加入指令，例：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deploy.sh"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("p",[s._v("执行"),a("code",[s._v("npm run deploy")])]),s._v(" "),a("h2",{attrs:{id:"seo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seo","aria-hidden":"true"}},[s._v("#")]),s._v(" SEO")]),s._v(" "),a("ol",[a("li",[s._v("具体SEO怎么做可以参考以下这篇文章："),a("a",{attrs:{href:"https://www.jianshu.com/p/f8ec422ebd52",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hexo博客提交百度和Google收录"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("vuepress中可以使用"),a("code",[s._v("vuepress-plugin-sitemap")]),s._v("来自动生成sitemap文件，以下是具体步骤")])]),s._v(" "),a("blockquote",[a("p",[s._v("因为百度不支持从github爬取数据，所以百度不能从sitemap中获取网址")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("yarn add vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sitemap "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// docs\\.vuepress\\config.js中添加如下代码")]),s._v("\nplugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sitemap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://xxxx.github.io/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//你的gh-pages地址")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("再次"),a("code",[s._v("build")]),s._v("之后就会自动在dist文件夹下生成"),a("code",[s._v("sitemap.xml")]),s._v("文件了")])])])},[],!1,null,null,null);t.default=e.exports}}]);