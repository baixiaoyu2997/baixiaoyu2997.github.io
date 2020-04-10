(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{284:function(e,n,a){"use strict";a.r(n);var t=a(1),s=Object(t.a)({},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"gradle-sdk下载慢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle-sdk下载慢","aria-hidden":"true"}},[e._v("#")]),e._v(" Gradle SDK下载慢")]),e._v(" "),a("p",[e._v("一般情况下，新打开项目都会下载项目依赖Gradle对应版本，但是因为被墙的原因导致速度很慢，解决办法：")]),e._v(" "),a("ol",[a("li",[e._v("手动下载需要的Gradle版本 "),a("a",{attrs:{href:"https://gradle.org/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gradle.org/releases/"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("打开"),a("code",[e._v("Android Studio")]),e._v("设置，找到"),a("code",[e._v("Gradle")]),e._v("，指定本地Gradle位置,例如：\n"),a("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/Gradle%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93_2020-2-28-14-0-33.png",alt:"Gradle问题总结_2020-2-28-14-0-33.png"}})]),e._v(" "),a("li",[e._v("把下载好的"),a("code",[e._v("gradley.zip")]),e._v("移到第一步中指定的"),a("code",[e._v("/Applications/Android Studio.app/Contents/gradle/")]),e._v("下，不需要解压。")]),e._v(" "),a("li",[e._v("打开"),a("code",[e._v("Android Studio")]),e._v("，会进行解压操作，这样我们就不用等待漫长的下载了。")])]),e._v(" "),a("h2",{attrs:{id:"gradle-maven下载慢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle-maven下载慢","aria-hidden":"true"}},[e._v("#")]),e._v(" Gradle Maven下载慢")]),e._v(" "),a("p",[e._v("只是修改上一步还是会遇到下载maven包很慢的问题，因而我们需要一个国内maven仓库，把maven库地址改成阿里云的地址，找到根目录下的"),a("code",[e._v("build.gradle")]),e._v(",进行如下修改：")]),e._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[e._v("buildscript {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[e._v("    \n    repositories {\n")]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[e._v("+       maven{url 'http://maven.aliyun.com/nexus/content/groups/public/'}\n+       maven{url \"https://jitpack.io\" }\n")]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[e._v("        google()\n")]),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[e._v("-       // jcenter()\n-       // mavenCentral()\n")]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[e._v("    }\n")]),e._v("}\n\nallprojects {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[e._v("    repositories {\n")]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[e._v("+       maven{url 'http://maven.aliyun.com/nexus/content/groups/public/'}\n")]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[e._v("        google()\n")]),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[e._v("-       // jcenter()\n")]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[e._v("    }\n")]),e._v("}\n")])])])])},[],!1,null,null,null);n.default=s.exports}}]);