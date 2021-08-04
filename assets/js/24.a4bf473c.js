(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{459:function(a,t,s){"use strict";s.r(t);var v=s(2),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[a._v("#")]),a._v(" 指令")]),a._v(" "),s("h3",{attrs:{id:"alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alias"}},[a._v("#")]),a._v(" alias")]),a._v(" "),s("p",[a._v("用户可利用 alias,自定指令的别名，单独使用可以查看所有的别名设置。alias 的效力仅及于该次登入的操作。若要每次登入是即自动设好别名,可在.profile 或.cshrc 中设定指令的别名。")]),a._v(" "),s("p",[s("code",[a._v("alias[别名]=[指令名称]")])]),a._v(" "),s("h3",{attrs:{id:"cat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[a._v("#")]),a._v(" cat")]),a._v(" "),s("p",[a._v("cat（英文全拼：concatenate）命令用于连接文件并打印到标准输出设备上。")]),a._v(" "),s("h3",{attrs:{id:"curl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#curl"}},[a._v("#")]),a._v(" curl")]),a._v(" "),s("p",[a._v("文件传输。常被用来抓取网页和监控 Web 服务器状态。"),s("code",[a._v("curl [options] [url]")])]),a._v(" "),s("ol",[s("li",[s("code",[a._v("-o")]),a._v(" 把输出写到该文件中,"),s("code",[a._v("curl -o outputfilename url")])]),a._v(" "),s("li",[s("code",[a._v("-I")]),a._v("：仅仅返回头部信息")])]),a._v(" "),s("p",[a._v("curl可以做很多事情，常见的比如：")]),a._v(" "),s("ol",[s("li",[a._v("调试请求")]),a._v(" "),s("li",[a._v("查看头部信息")])]),a._v(" "),s("h3",{attrs:{id:"cp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cp"}},[a._v("#")]),a._v(" cp")]),a._v(" "),s("p",[a._v("复制文件/目录：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" dest\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". directory\n")])])]),s("p",[a._v("参数：")]),a._v(" "),s("ol",[s("li",[a._v("-f：覆盖已存在的目标文件而不提示")]),a._v(" "),s("li",[a._v("-r：递归操作")])]),a._v(" "),s("h3",{attrs:{id:"clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[a._v("#")]),a._v(" clear")]),a._v(" "),s("p",[a._v("清除屏幕")]),a._v(" "),s("h3",{attrs:{id:"export"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[a._v("#")]),a._v(" export")]),a._v(" "),s("p",[a._v("用于导出环境变量或者展示环境变量")]),a._v(" "),s("h3",{attrs:{id:"kill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kill"}},[a._v("#")]),a._v(" kill")]),a._v(" "),s("p",[a._v("关闭进程，"),s("code",[a._v("kill [-s <信息名称或编号>][程序]　或　kill [-l <信息编号>]")])]),a._v(" "),s("p",[a._v("常用的是使用"),s("code",[a._v("kill -9 xxx")])]),a._v(" "),s("h3",{attrs:{id:"find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[a._v("#")]),a._v(" find")]),a._v(" "),s("p",[a._v("查找文件或目录。"),s("code",[a._v("find path -option [ -print ] [ -exec -ok command ] {} \\;")])]),a._v(" "),s("h3",{attrs:{id:"grep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[a._v("#")]),a._v(" grep")]),a._v(" "),s("p",[a._v("Linux grep 命令用于查找文件里符合条件的字符串。"),s("code",[a._v("grep 内容 文件")])]),a._v(" "),s("h3",{attrs:{id:"ls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[a._v("#")]),a._v(" ls")]),a._v(" "),s("p",[a._v("显示指定目录的文件:"),s("code",[a._v("ls [-alrtAFR] [name...]")]),a._v("，默认不展示隐藏文件和"),s("code",[a._v(".")]),a._v("开头文件。参数：")]),a._v(" "),s("ol",[s("li",[a._v("-a：显示所有文件和目录包括隐藏文件和"),s("code",[a._v(".")]),a._v("开头文件")]),a._v(" "),s("li",[a._v("-A：同"),s("code",[a._v("-a")]),a._v("，但不现实当前目录"),s("code",[a._v(".")]),a._v("和父目录"),s("code",[a._v("..")])]),a._v(" "),s("li",[a._v("-R：若目录下有子文件夹，则递归显示")]),a._v(" "),s("li",[a._v("-l：显示档案的时间记录，重命名不会导致该时间改变")])]),a._v(" "),s("h3",{attrs:{id:"makdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#makdir"}},[a._v("#")]),a._v(" makdir")]),a._v(" "),s("p",[a._v("创建目录，"),s("code",[a._v("mkdir [-p] dirName")]),a._v(",参数：")]),a._v(" "),s("ol",[s("li",[a._v("-p：创建目录时,如果目录不存在，则创建，同样适用于多级目录。有相同文件夹时，添加该参数不会报错。")])]),a._v(" "),s("h3",{attrs:{id:"mv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mv"}},[a._v("#")]),a._v(" mv")]),a._v(" "),s("p",[a._v("文件移动或者重命名")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" dest\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". directory\n\n")])])]),s("p",[a._v("参数：")]),a._v(" "),s("ol",[s("li",[a._v("-i：弱者丁目录已有同名文件，则先询问是否覆盖旧文件")]),a._v(" "),s("li",[a._v("-f：在mv操作要覆盖某已有的目标文件时不给任何指示")])]),a._v(" "),s("h3",{attrs:{id:"ping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ping"}},[a._v("#")]),a._v(" ping")]),a._v(" "),s("p",[a._v("检测主机，参数：")]),a._v(" "),s("ol",[s("li",[a._v("-c：设置完成要求回应的次数,达到次数不再请求。")])]),a._v(" "),s("h3",{attrs:{id:"pipe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipe"}},[a._v("#")]),a._v(" pipe")]),a._v(" "),s("p",[a._v("管道符，用于执行多条命令。管道是一种通信机制，通常用于进程间的通信（也可通过 socket 进行网络通信），它表现出来的形式将前面每一个进程的输出（stdout）直接作为下一个进程的输入（stdin）。")]),a._v(" "),s("ol",[s("li",[a._v("只能处理前一条指令的正确输出，不能处理错误输出。")]),a._v(" "),s("li",[a._v("管道命令必须要能够接收来自前一个命令的数据成为standard input继续处理才行。")])]),a._v(" "),s("h3",{attrs:{id:"pwd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwd"}},[a._v("#")]),a._v(" pwd")]),a._v(" "),s("p",[a._v("查看当前目录位置")]),a._v(" "),s("h3",{attrs:{id:"ps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[a._v("#")]),a._v(" ps")]),a._v(" "),s("p",[a._v("查看当前进程状态，"),s("code",[a._v("ps [options]")]),a._v(",参数：")]),a._v(" "),s("ol",[s("li",[a._v("-e：显示所有进程")]),a._v(" "),s("li",[a._v("-f：全格式，显示更多字段")])]),a._v(" "),s("h3",{attrs:{id:"read"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read"}},[a._v("#")]),a._v(" read")]),a._v(" "),s("p",[a._v("用于从标准输入读取数值")]),a._v(" "),s("h3",{attrs:{id:"rm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rm"}},[a._v("#")]),a._v(" rm")]),a._v(" "),s("p",[a._v("删除文件或者文件夹："),s("code",[a._v("rm [options] [name...]")]),a._v(",参数：")]),a._v(" "),s("ol",[s("li",[a._v("-i：删除前逐一确认")]),a._v(" "),s("li",[a._v("-r或者-R：递归处理子文件")]),a._v(" "),s("li",[a._v("-f：强制删除文件或目录")])]),a._v(" "),s("h3",{attrs:{id:"rmdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rmdir"}},[a._v("#")]),a._v(" rmdir")]),a._v(" "),s("p",[a._v("删除空的目录，"),s("code",[a._v("rmdir [-p] dirName")]),a._v(";参数：")]),a._v(" "),s("ol",[s("li",[a._v("-p：是当子目录被删除后如果该目录也为空的话一起删除。")])]),a._v(" "),s("h3",{attrs:{id:"usr-bin-time指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usr-bin-time指令"}},[a._v("#")]),a._v(" /usr/bin/time指令")]),a._v(" "),s("p",[a._v("这个指令比内置的time更加详细一些，使用的时候需要用绝对路径，而且要加上参数"),s("code",[a._v("-v")]),a._v("，"),s("code",[a._v("/usr/bin/time -v go run test2.go")])]),a._v(" "),s("h3",{attrs:{id:"scp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[a._v("#")]),a._v(" scp")]),a._v(" "),s("p",[a._v("scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令。比如，从本地复制到远端：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" local_file remote_username@remote_ip:remote_file \n")])])]),s("h3",{attrs:{id:"ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[a._v("#")]),a._v(" ssh")]),a._v(" "),s("p",[a._v("用于链接远程计算机，简单使用"),s("code",[a._v("ssh [user]@[hostname]")])]),a._v(" "),s("h4",{attrs:{id:"使用其他端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用其他端口"}},[a._v("#")]),a._v(" 使用其他端口")]),a._v(" "),s("p",[s("code",[a._v("ssh -p 10022 user@hostname")])]),a._v(" "),s("h4",{attrs:{id:"生成密钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成密钥"}},[a._v("#")]),a._v(" 生成密钥")]),a._v(" "),s("p",[s("code",[a._v('ssh-keygen -t rsa -C "bxy2997@sina.com"')])]),a._v(" "),s("h4",{attrs:{id:"校验是否成功配置密钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#校验是否成功配置密钥"}},[a._v("#")]),a._v(" 校验是否成功配置密钥")]),a._v(" "),s("p",[s("code",[a._v("ssh -T git@github.com")])]),a._v(" "),s("h3",{attrs:{id:"tar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[a._v("#")]),a._v(" tar")]),a._v(" "),s("p",[a._v("用于备份文件")]),a._v(" "),s("h4",{attrs:{id:"解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[a._v("#")]),a._v(" 解压")]),a._v(" "),s("p",[s("code",[a._v("tar -zxvf xxx")])]),a._v(" "),s("h3",{attrs:{id:"tail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[a._v("#")]),a._v(" tail")]),a._v(" "),s("p",[a._v("查看文件的尾部内容："),s("code",[a._v("tail [options][file]")]),a._v(",参数：")]),a._v(" "),s("ol",[s("li",[a._v("-f,循环读取，常用于查看日志")])]),a._v(" "),s("h3",{attrs:{id:"telnet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#telnet"}},[a._v("#")]),a._v(" telnet")]),a._v(" "),s("p",[a._v("远程登入，还可以用来检测某个远端主机端口是否可以访问，"),s("code",[a._v("telnet [主机名称或IP地址] [端口\t]")])]),a._v(" "),s("h3",{attrs:{id:"time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#time"}},[a._v("#")]),a._v(" time")]),a._v(" "),s("p",[a._v("在执行程序前添加time，程序结束后，显示执行时长等信息")]),a._v(" "),s("h3",{attrs:{id:"touch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#touch"}},[a._v("#")]),a._v(" touch")]),a._v(" "),s("p",[a._v("新建文件")]),a._v(" "),s("h3",{attrs:{id:"top"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[a._v("#")]),a._v(" top")]),a._v(" "),s("p",[a._v("实时显示进程动态，"),s("code",[a._v("top")]),a._v("，参数：")]),a._v(" "),s("ol",[s("li",[a._v("-pid,指定进程id")])]),a._v(" "),s("h3",{attrs:{id:"vi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vi"}},[a._v("#")]),a._v(" vi")]),a._v(" "),s("p",[a._v("进入vi编辑器模式")]),a._v(" "),s("ol",[s("li",[s("code",[a._v(":w")]),a._v("，保存")]),a._v(" "),s("li",[s("code",[a._v(":q")]),a._v("，退出")]),a._v(" "),s("li",[s("code",[a._v("i")]),a._v("，进入输入模式")]),a._v(" "),s("li",[s("code",[a._v("ctrl+c")]),a._v("，退出输入模式")])]),a._v(" "),s("h3",{attrs:{id:"here-document-内嵌文档-嵌入文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-document-内嵌文档-嵌入文档"}},[a._v("#")]),a._v(" Here Document（内嵌文档/嵌入文档）")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("END\n    document\nEND")]),a._v("\n")])])]),s("p",[s("code",[a._v("command")]),a._v("是 Shell 命令，"),s("code",[a._v("<<END")]),a._v("是开始标志，"),s("code",[a._v("END")]),a._v("是结束标志，"),s("code",[a._v("document")]),a._v("是输入的文档（也就是一行一行的字符串）。")]),a._v(" "),s("p",[a._v("这种写法告诉 Shell 把 document 部分作为命令需要处理的数据，直到遇见终止符"),s("code",[a._v("END")]),a._v("为止（终止符"),s("code",[a._v("END")]),a._v("不会被读取）。")]),a._v(" "),s("p",[a._v("分界符（终止符）可以是任意的字符串，由用户自己定义，比如 END、MARKER 等。分界符可以出现在正常的数据流中，只要它不是顶格写的独立的一行，就不会被作为结束标志。")]),a._v(" "),s("h3",{attrs:{id:"which"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#which"}},[a._v("#")]),a._v(" which")]),a._v(" "),s("p",[a._v("which 指令会在环境变量$PATH 设置的目录里查找符合条件的文件。")]),a._v(" "),s("p",[s("code",[a._v("which [file...]")])])])}),[],!1,null,null,null);t.default=_.exports}}]);