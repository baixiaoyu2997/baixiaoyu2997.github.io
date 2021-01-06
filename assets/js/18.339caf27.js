(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{447:function(t,a,v){"use strict";v.r(a);var _=v(2),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"docker-是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-是什么"}},[t._v("#")]),t._v(" Docker 是什么？")]),t._v(" "),v("p",[t._v("Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。它是目前最流行的 Linux 容器解决方案。")]),t._v(" "),v("p",[t._v("Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样。有了 Docker，就不用担心环境问题。")]),t._v(" "),v("p",[t._v("总体来说，Docker 的接口相当简单，用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。")]),t._v(" "),v("h2",{attrs:{id:"为什么要用-docker"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用-docker"}},[t._v("#")]),t._v(" 为什么要用 docker？")]),t._v(" "),v("p",[t._v("用户计算机的环境都不相同，软件必须保证两件事：操作系统的设置，各种库和组件的安装，只有它们都正确，软件才能运行。"),v("br"),t._v("\n环境配置如此麻烦，换一台机器，就要重来一次，旷日费时，所以产生了 docker。")]),t._v(" "),v("h2",{attrs:{id:"docker-中的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-中的概念"}},[t._v("#")]),t._v(" docker 中的概念")]),t._v(" "),v("h3",{attrs:{id:"registry"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#registry"}},[t._v("#")]),t._v(" Registry")]),t._v(" "),v("p",[t._v("镜像仓库，存储大量镜像，可以从镜像仓库拉取和推送镜像。")]),t._v(" "),v("h3",{attrs:{id:"docker-镜像"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像"}},[t._v("#")]),t._v(" Docker 镜像")]),t._v(" "),v("p",[t._v("类似虚拟机快照，从仓库拉取，或者在现有工具镜像上创建新镜像。通过镜像可以启动容器。"),v("br"),t._v("\n关于镜像的一些概念：")]),t._v(" "),v("ul",[v("li",[t._v("虚悬镜像：强制删除一个已经运行容器的镜像，或者使用 docker pull 命令更新镜像时，镜像的名称和标签会转移到新镜像中，旧的镜像就会变成虚悬镜像，另外，在使用 docker build 构建镜像的时候，如果构建失败也会产生虚悬镜像。一般来说虚悬镜像已经没有实际用处，可以随意删除。")])]),t._v(" "),v("h3",{attrs:{id:"docker-容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器"}},[t._v("#")]),t._v(" Docker 容器")]),t._v(" "),v("p",[t._v("从镜像中创建应用环境，以单进程的方式运行。对外公开服务。是一种短暂的和一次性的环境。")]),t._v(" "),v("h3",{attrs:{id:"docker-数据卷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-数据卷"}},[t._v("#")]),t._v(" Docker 数据卷")]),t._v(" "),v("p",[t._v("数据卷可以完成数据持久化，数据卷是一个可供一个或多个容器使用的特殊目录，它绕过 UFS，可以提供很多有用的特性：")]),t._v(" "),v("ul",[v("li",[t._v("数据卷可以在容器之间共享和重用")]),t._v(" "),v("li",[t._v("对数据卷的修改会立马生效")]),t._v(" "),v("li",[t._v("对数据卷的更新，不会影响镜像")]),t._v(" "),v("li",[t._v("卷会一直存在，直到没有容器使用")])]),t._v(" "),v("h3",{attrs:{id:"docker-网络"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-网络"}},[t._v("#")]),t._v(" Docker 网络")]),t._v(" "),v("p",[t._v("Docker 容器之间的网络交互，可以使用端口映射的方式，其他容器可以直接通过端口实现。除该方式外还有一个容器连接（linking）系统也可以达到容器交互。（本文中 node 连接 mongodb 使用的是端口映射的方式）")]),t._v(" "),v("h3",{attrs:{id:"host-宿主机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#host-宿主机"}},[t._v("#")]),t._v(" Host 宿主机")]),t._v(" "),v("p",[t._v("指的是当前使用的真实操作系统")]),t._v(" "),v("h2",{attrs:{id:"docker-操作指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-操作指令"}},[t._v("#")]),t._v(" docker 操作指令")]),t._v(" "),v("h3",{attrs:{id:"pull"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[t._v("#")]),t._v(" pull")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("pull")]),t._v(" "),v("td",[t._v("拉取镜像")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"images"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#images"}},[t._v("#")]),t._v(" images")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("images")]),t._v(" "),v("td",[t._v("查看当前所有本地镜像")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("images")]),t._v(" "),v("td",[t._v("查看当前所有本地镜像+中间层镜像")]),t._v(" "),v("td",[t._v("-a")])]),t._v(" "),v("tr",[v("td",[t._v("rmi")]),t._v(" "),v("td",[t._v("删除镜像")]),t._v(" "),v("td",[v("code",[t._v("<image name>")])])]),t._v(" "),v("tr",[v("td",[t._v("rmi")]),t._v(" "),v("td",[t._v("强制删除镜像")]),t._v(" "),v("td",[t._v("-f "),v("code",[t._v("<image name>")])])]),t._v(" "),v("tr",[v("td",[t._v("image")]),t._v(" "),v("td",[t._v("删除虚悬镜像")]),t._v(" "),v("td",[t._v("prune")])]),t._v(" "),v("tr",[v("td",[t._v("image")]),t._v(" "),v("td",[t._v("创建镜像，并定义镜像名")]),t._v(" "),v("td",[t._v("build -t <镜像名> <路径>")])])])]),t._v(" "),v("h3",{attrs:{id:"save"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#save"}},[t._v("#")]),t._v(" save")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("save")]),t._v(" "),v("td",[t._v("导出镜像")]),t._v(" "),v("td",[t._v("-o <输出文件名.tar> <待导出镜像名>")])])])]),t._v(" "),v("h3",{attrs:{id:"load"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[t._v("#")]),t._v(" load")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("load")]),t._v(" "),v("td",[t._v("导入镜像")]),t._v(" "),v("td",[t._v("-i <镜像.tar>")])])])]),t._v(" "),v("h3",{attrs:{id:"tag"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[t._v("#")]),t._v(" tag")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("tag")]),t._v(" "),v("td",[t._v("修改镜像名称和标签")]),t._v(" "),v("td",[t._v("<原镜像名：原标签> <镜像名：标签>")])])])]),t._v(" "),v("h3",{attrs:{id:"run"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[t._v("#")]),t._v(" run")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("run")]),t._v(" "),v("td",[t._v("新建并启动容器，设置容器名称")]),t._v(" "),v("td",[t._v("--name <容器名> <镜像名>")])]),t._v(" "),v("tr",[v("td",[t._v("run")]),t._v(" "),v("td",[t._v("新建并启动容器，"),v("code",[t._v("-t")]),t._v("配置一个伪终端，并绑定到容器的输入上，"),v("code",[t._v("-i")]),t._v("能让容器的标准输入保持打开状态，"),v("code",[t._v("-d")]),t._v("则可以让容器在后台保持运行，这三个参数可以合并为"),v("code",[t._v("-dit")]),t._v("，其顺序没有影响")]),t._v(" "),v("td",[t._v("-dit <镜像名>")])]),t._v(" "),v("tr",[v("td",[t._v("run")]),t._v(" "),v("td",[t._v("容器停止后自动删除")]),t._v(" "),v("td",[t._v("--rm")])])])]),t._v(" "),v("h3",{attrs:{id:"ps"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[t._v("#")]),t._v(" ps")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ps")]),t._v(" "),v("td",[t._v("查看所有容器及其状态")]),t._v(" "),v("td",[t._v("-a")])])])]),t._v(" "),v("h3",{attrs:{id:"exec"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#exec"}},[t._v("#")]),t._v(" exec")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("exec")]),t._v(" "),v("td",[t._v("进入容器,如果只是想执行容器中的命令，可以不输入"),v("code",[t._v("bash")]),t._v("，替换成命令名，退出容器，输入"),v("code",[t._v("exit")])]),t._v(" "),v("td",[t._v("-it <容器名字｜容器 id> bash")])])])]),t._v(" "),v("h3",{attrs:{id:"start"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" start")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("start")]),t._v(" "),v("td",[t._v("启动容器")]),t._v(" "),v("td",[t._v("<容器名>")])])])]),t._v(" "),v("h3",{attrs:{id:"stop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[t._v("#")]),t._v(" stop")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("stop")]),t._v(" "),v("td",[t._v("停止容器")]),t._v(" "),v("td",[t._v("<容器名>")])])])]),t._v(" "),v("h3",{attrs:{id:"rm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rm"}},[t._v("#")]),t._v(" rm")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("rm")]),t._v(" "),v("td",[t._v("删除容器")]),t._v(" "),v("td",[t._v("<容器名>")])]),t._v(" "),v("tr",[v("td",[t._v("rm")]),t._v(" "),v("td",[t._v("强制删除容器")]),t._v(" "),v("td",[t._v("-f <容器名>")])])])]),t._v(" "),v("h3",{attrs:{id:"container"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[t._v("#")]),t._v(" container")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("container")]),t._v(" "),v("td",[t._v("清空所有已停止容器")]),t._v(" "),v("td",[t._v("prune")])])])]),t._v(" "),v("h2",{attrs:{id:"dockerfile"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("# Dockerfile文件\nFROM ubuntu:16.04\nENV WORK_DIR=/workspace\nWORKDIR ${WORK_DIR}\nCOPY . ${WORK_DIR}\nRUN npm start\n\n")])])]),v("p",[t._v("Dockerfile 是一个文本文件，包含了镜像构建的所有命令，通过修改 Dockerfile 中的命令，就能定制化自己想要的镜像。Dockerfile 里面每一个指令都会构建一层镜像，层层叠加最终得到定制化镜像。")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("FROM")]),t._v("指令代表基于哪个镜像进行修改，第一条指令必须是 FROM 指令，若我们不想基于任何镜像，可以写 FROM scratch 即可完全从零开始构建镜像。")]),t._v(" "),v("li",[v("code",[t._v("ENV")]),t._v("设置环境变量，定义了环境变量，那么在后续的指令中，就可以使用这个环境变量。它有俩种写法：")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("ENV <key> <value>\nENV <key1>=<value1> <key2>=<value2>\n")])])]),v("ul",[v("li",[v("code",[t._v("COPY")]),t._v("指令可以将宿主机中的文件在构建镜像时复制到镜像存储中。"),v("code",[t._v(".dockerignore")]),t._v(" 指定的文件不会拷贝")]),t._v(" "),v("li",[v("code",[t._v("WORKDIR")]),t._v("为"),v("code",[t._v("RUN、CMD、ENTRYPOINT")]),t._v(" 指令配置工作目录。在刚进入容器时，系统会自动转到工作目录，默认的工作目录是根目录/。"),v("br"),t._v("\n可以使用多个 WORKDIR 指令，后续命令如果参数是相对路径，则会基于之前命令指定的路径。例如:")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("WORKDIR /a\n\nWORKDIR b\n\nWORKDIR c\n\nRUN pwd\n# 则最终路径为 /a/b/c 。\n")])])]),v("ul",[v("li",[v("code",[t._v("RUN")]),t._v("指令就是用来执行命令的指令，由于一条指令就会创建一层镜像，而镜像层数是有限制的，一般是 127 层，当我们需要执行多条命令时，一般都用&&连接多条命令，从而节省镜像层数。执行时机是在容器启动之前。")]),t._v(" "),v("li",[v("code",[t._v("ADD")]),t._v(" ADD 指令和 COPY 类似，但包含更多功能，比如可以从一个网址下载文件到目标目录中（下载后文件默认权限是 600），另外一个常用的功能是自动解压，支持 gzip、bzip2 和 xz 压缩格式，比如 ADD file.tar /会将压缩包解压到目标路径中。由于 ADD 指令语义不够清晰，除了需要自动解压的情况，我们一般都不推荐使用 ADD 指令。")]),t._v(" "),v("li",[v("code",[t._v("CMD")]),t._v(' 运行格式：CMD ["可执行文件", "参数 1", "参数 2"...]。CMD 指令可以用来指定容器默认的运行命令,执行时机是在容器启动后。')]),t._v(" "),v("li",[v("code",[t._v("EXPOSE")]),t._v(" 声明将容器内的某个端口导出供外部访问，并没有实际功能，导出端口还是需要在命令行中添加"),v("code",[t._v("-p")])])]),t._v(" "),v("h3",{attrs:{id:"copy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[t._v("#")]),t._v(" COPY")]),t._v(" "),v("p",[t._v("COPY命令在拷贝文件夹时，目的地址应该加上该文件夹名，例如："),v("code",[t._v("COPY logs /root/logs")]),t._v("\nCOPY命令可以一次拷贝多个文件：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[t._v("COPY README.md package.json gulpfile.js __BUILD_NUMBER ./\n// 或者\nCOPY "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__BUILD_NUMBER"')]),t._v(", "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"README.md"')]),t._v(", "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gulpfile"')]),t._v(", "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"another_file"')]),t._v(", "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),v("p",[t._v("但是这种写法对文件夹无效，如果你写"),v("code",[t._v("COPY dir1 dir2 ./")]),t._v(",实际上等于："),v("code",[t._v("COPY dir1/* dir2/* ./")])]),t._v(" "),v("h2",{attrs:{id:"docker-部署流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署流程"}},[t._v("#")]),t._v(" docker 部署流程")]),t._v(" "),v("ol",[v("li",[t._v("首先在项目根目录下创建"),v("code",[t._v(".dockerignore")]),t._v("文件，防止打包不必要的文件：")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v(".git\nnode_modules\n")])])]),v("ol",{attrs:{start:"2"}},[v("li",[t._v("项目根目录中创建"),v("code",[t._v("Dockerfile")]),t._v("文件：")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("FROM node:10.0\n\n# 在容器中创建一个目录\nRUN mkdir -p /usr/src/nodejs/\n\n# 定位到容器的工作目录\nWORKDIR /usr/src/nodejs/\n\n# RUN/COPY 是分层的，package.json 提前，只要没修改，就不会重新安装包\nCOPY package.json /usr/src/app/package.json\nRUN cd /usr/src/app/\nRUN npm i\n\n# 把当前目录下的所有文件拷贝到 Image 的 /usr/src/nodejs/ 目录下\nCOPY . /usr/src/nodejs/\n\n\nEXPOSE 3000\nCMD npm start\n")])])]),v("ol",{attrs:{start:"3"}},[v("li",[t._v("构建镜像")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("docker build -t ubuntu_demo:latest .\n")])])]),v("h2",{attrs:{id:"最佳实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),v("ol",[v("li",[t._v("减少 Docker 的层数。"),v("br"),t._v("\nCOPY、ADD 和 RUN 会向镜像中添加新层，Docker 的层就像是 git 的提交一样，Docker 的层用于保存镜像的上一版本和当前版本之间的差异。当你向注册表请求镜像时，只是下载你尚未拥有的层。"),v("br"),t._v("\n层会占用空间，拥有的层越多，最终的镜像就越大")])]),t._v(" "),v("h2",{attrs:{id:"问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),v("h3",{attrs:{id:"删除所有-images"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#删除所有-images"}},[t._v("#")]),t._v(" 删除所有 images")]),t._v(" "),v("p",[v("code",[t._v("docker rmi --force $(docker images -q)")])]),t._v(" "),v("h3",{attrs:{id:"删除名称中包韩某个字符串的镜像"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#删除名称中包韩某个字符串的镜像"}},[t._v("#")]),t._v(" 删除名称中包韩某个字符串的镜像")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("# 例如删除包含“some”的镜像\ndocker rmi --force $(docker images | grep some | awk '{print $3}')\n\n")])])]),v("h3",{attrs:{id:"删除所有的镜像"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#删除所有的镜像"}},[t._v("#")]),t._v(" 删除所有的镜像")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("docker rmi $(docker images -q)\n")])])]),v("h2",{attrs:{id:"引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.cnblogs.com/ryanyangcs/p/12558727.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("两个奇技淫巧，将 Docker 镜像体积减小 99%"),v("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);