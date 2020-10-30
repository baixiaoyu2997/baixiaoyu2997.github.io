(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{452:function(e,t,s){"use strict";s.r(t);var a=s(2),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"file-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-system"}},[e._v("#")]),e._v(" File System")]),e._v(" "),s("h3",{attrs:{id:"fs-mkdirsync-path-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-mkdirsync-path-options"}},[e._v("#")]),e._v(" fs.mkdirSync(path[, options])")]),e._v(" "),s("p",[e._v("同步地创建目录。 返回 undefined，或创建的第一个目录的路径（如果 recursive 为 true）。 这是 fs.mkdir() 的同步版本。")]),e._v(" "),s("h3",{attrs:{id:"fs-writefilesync-file-data-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-writefilesync-file-data-options"}},[e._v("#")]),e._v(" fs.writeFileSync(file, data[, options])")]),e._v(" "),s("p",[e._v("当 file 是文件名时，则异步地写入数据到文件（如果文件已存在，则覆盖文件）。 data 可以是字符串或 buffer。")]),e._v(" "),s("p",[e._v("当 file 是文件描述符时，则其行为类似于直接调用 fs.write()（建议使用）。 参见以下关于使用文件描述符的说明。")]),e._v(" "),s("p",[e._v("如果 data 是 buffer，则 encoding 选项会被忽略。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const data = new Uint8Array(Buffer.from('Node.js 中文网'));\nfs.writeFile('文件.txt', data, (err) => {\n  if (err) throw err;\n  console.log('文件已被保存');\n});\n")])])]),s("p",[e._v("返回 undefined。")]),e._v(" "),s("h2",{attrs:{id:"modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" Modules")]),e._v(" "),s("h3",{attrs:{id:"module-paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-paths"}},[e._v("#")]),e._v(" module.paths")]),e._v(" "),s("p",[e._v("模块的搜索路径")]),e._v(" "),s("h2",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),s("h3",{attrs:{id:"path-join-paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-join-paths"}},[e._v("#")]),e._v(" path.join([...paths])")]),e._v(" "),s("p",[e._v("path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。\n零长度的 path 片段会被忽略。 如果连接的路径字符串是零长度的字符串，则返回 '.'，表示当前工作目录。")]),e._v(" "),s("h2",{attrs:{id:"process-进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-进程"}},[e._v("#")]),e._v(" process(进程)")]),e._v(" "),s("p",[s("code",[e._v("process")]),e._v(" 对象是一个全局变量，提供了有关当前 "),s("code",[e._v("Node.js")]),e._v(" 进程的信息并对其进行控制。 作为全局变量，它始终可供 "),s("code",[e._v("Node.js")]),e._v(" 应用程序使用，无需使用 "),s("code",[e._v("require()")]),e._v("。 它也可以使用"),s("code",[e._v("require()")]),e._v(" 显式地访问：")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" process "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'process'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h3",{attrs:{id:"process-argv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-argv"}},[e._v("#")]),e._v(" process.argv")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("<string[]>")])])]),e._v(" "),s("p",[s("code",[e._v("process.argv")]),e._v(" 属性会返回一个数组，其中包含当 "),s("code",[e._v("Node.js")]),e._v(" 进程被启动时传入的命令行参数。 第一个元素是 "),s("code",[e._v("process.execPath")]),e._v("。 第二个元素是正被执行的 "),s("code",[e._v("JavaScript")]),e._v(" 文件的路径。 其余的元素是任何额外的命令行参数。所有参数都为字符串")]),e._v(" "),s("h2",{attrs:{id:"require"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[e._v("#")]),e._v(" require")]),e._v(" "),s("h3",{attrs:{id:"require-extentions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-extentions"}},[e._v("#")]),e._v(" require.extentions")]),e._v(" "),s("p",[e._v("系统中已有的扩展加载方式，正常情况是"),s("code",[e._v(".js、.json、.node")]),e._v(",得到的结果：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{ '.js': [Function], '.json': [Function], '.node': [Function] }\n")])])]),s("h3",{attrs:{id:"require-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-cache"}},[e._v("#")]),e._v(" require.cache")]),e._v(" "),s("p",[e._v("加载模块的缓存路径映射，加速下一次加载")]),e._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),s("h3",{attrs:{id:"node中启用import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node中启用import"}},[e._v("#")]),e._v(" node中启用import？")]),e._v(" "),s("blockquote",[s("p",[e._v("前置条件: "),s("code",[e._v("node")]),e._v("命令后添加"),s("code",[e._v("--experimental-modules")]),e._v("参数，例如："),s("code",[e._v("node --experimental-modules test.js")])])]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("node v12")]),e._v("中有三种方法：")]),e._v(" "),s("ol",[s("li",[e._v("文件以"),s("code",[e._v(".ejs")]),e._v("结尾")]),e._v(" "),s("li",[e._v("最近的"),s("code",[e._v("package.json")]),e._v("中添加"),s("code",[e._v("'type':'module'")])]),e._v(" "),s("li",[e._v("Strings passed in as an argument to --eval or --print, or piped to node via STDIN, with the flag --input-type=module.")])]),e._v(" "),s("p",[e._v("我使用的是第二种方法")]),e._v(" "),s("h3",{attrs:{id:"当type-module-时-就不能再使用require"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当type-module-时-就不能再使用require"}},[e._v("#")]),e._v(" 当type=‘module’时，就不能再使用require？")]),e._v(" "),s("p",[e._v("可以使用 module.createRequire()替代，更多关于ES Modules 和 CommonJS的用法区别，可以查看：https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs")])])}),[],!1,null,null,null);t.default=r.exports}}]);