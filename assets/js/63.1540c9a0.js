(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{484:function(t,s,p){"use strict";p.r(s);var e=p(2),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,p=t._self._c||s;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("h2",{attrs:{id:"设置终端代理"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#设置终端代理"}},[t._v("#")]),t._v(" 设置终端代理")]),t._v(" "),p("p",[t._v("mac环境+clashX设置终端代理，修改"),p("code",[t._v(".zshrc")]),t._v("文件，添加以下内容：")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v('export https_proxy=http://127.0.0.1:7890\nexport http_proxy=http://127.0.0.1:7890\nexport all_proxy=socks5://127.0.0.1:7891\n##上面的三行命令表示,每次新建一个终端会话时,默认让终端去走代理,这样就不需要每次都复制拷贝一下了,很方便,同时,代理程序去智能分流(国内 IP 直连,国外走代理)，避免了连接国内 IP 地址时“绕远”.\n\n\nalias setproxy="export https_proxy=http://127.0.0.1:7890;export http_proxy=http://127.0.0.1:7890;export all_proxy=socks5://127.0.0.1:7891;echo \\"Set proxy successfully\\" "\nalias unsetproxy="unset http_proxy;unset https_proxy;unset all_proxy;echo \\"Unset proxy successfully\\" " \nalias ipcn="curl myip.ipip.net"\nalias ip="curl ip.sb"\n\n\n## 上面这几个 alias 是自定义的命令\n## unsetproxy 取消代理\n## setproxy 设置代理\n## ip & ipcn 查看 终端IP & 实际IP\n')])])]),p("p",[t._v("可以通过"),p("code",[t._v("curl -vv https://www.google.com")]),t._v("测试是否代理成功")])])}),[],!1,null,null,null);s.default=r.exports}}]);