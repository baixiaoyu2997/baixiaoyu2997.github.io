(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{450:function(e,t,a){"use strict";a.r(t);var s=a(2),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"file-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-system"}},[e._v("#")]),e._v(" File System")]),e._v(" "),a("h3",{attrs:{id:"fs-mkdirsync-path-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fs-mkdirsync-path-options"}},[e._v("#")]),e._v(" fs.mkdirSync(path[, options])")]),e._v(" "),a("p",[e._v("同步地创建目录。 返回 undefined，或创建的第一个目录的路径（如果 recursive 为 true）。 这是 fs.mkdir() 的同步版本。")]),e._v(" "),a("h3",{attrs:{id:"fs-writefilesync-file-data-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fs-writefilesync-file-data-options"}},[e._v("#")]),e._v(" fs.writeFileSync(file, data[, options])")]),e._v(" "),a("p",[e._v("当 file 是文件名时，则异步地写入数据到文件（如果文件已存在，则覆盖文件）。 data 可以是字符串或 buffer。")]),e._v(" "),a("p",[e._v("当 file 是文件描述符时，则其行为类似于直接调用 fs.write()（建议使用）。 参见以下关于使用文件描述符的说明。")]),e._v(" "),a("p",[e._v("如果 data 是 buffer，则 encoding 选项会被忽略。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const data = new Uint8Array(Buffer.from('Node.js 中文网'));\nfs.writeFile('文件.txt', data, (err) => {\n  if (err) throw err;\n  console.log('文件已被保存');\n});\n")])])]),a("p",[e._v("返回 undefined。")]),e._v(" "),a("h2",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),a("h3",{attrs:{id:"path-join-paths"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-join-paths"}},[e._v("#")]),e._v(" path.join([...paths])")]),e._v(" "),a("p",[e._v("path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。\n零长度的 path 片段会被忽略。 如果连接的路径字符串是零长度的字符串，则返回 '.'，表示当前工作目录。")]),e._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),a("h3",{attrs:{id:"node中启用import？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node中启用import？"}},[e._v("#")]),e._v(" node中启用import？")]),e._v(" "),a("blockquote",[a("p",[e._v("前置条件: "),a("code",[e._v("node")]),e._v("命令后添加"),a("code",[e._v("--experimental-modules")]),e._v("参数，例如："),a("code",[e._v("node --experimental-modules test.js")])])]),e._v(" "),a("p",[e._v("在"),a("code",[e._v("node v12")]),e._v("中有三种方法：")]),e._v(" "),a("ol",[a("li",[e._v("文件以"),a("code",[e._v(".ejs")]),e._v("结尾")]),e._v(" "),a("li",[e._v("最近的"),a("code",[e._v("package.json")]),e._v("中添加"),a("code",[e._v("'type':'module'")])]),e._v(" "),a("li",[e._v("Strings passed in as an argument to --eval or --print, or piped to node via STDIN, with the flag --input-type=module.")])]),e._v(" "),a("p",[e._v("我使用的是第二种方法")]),e._v(" "),a("h3",{attrs:{id:"当type-module-时，就不能再使用require？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当type-module-时，就不能再使用require？"}},[e._v("#")]),e._v(" 当type=‘module’时，就不能再使用require？")]),e._v(" "),a("p",[e._v("可以使用 module.createRequire()替代，更多关于ES Modules 和 CommonJS的用法区别，可以查看：https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs")])])}),[],!1,null,null,null);t.default=r.exports}}]);