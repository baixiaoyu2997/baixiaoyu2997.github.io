(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{462:function(e,t,n){"use strict";n.r(t);var r=n(2),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),n("p",[e._v("Nginx是一个高性能的HTTP和反向代理web服务器，负责服务器的转发和请求处理、负载均衡。")]),e._v(" "),n("h3",{attrs:{id:"特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),n("p",[e._v("内存占用少，并发能力强，可以不间断服务的情况下进行软件版本的升级。由"),n("code",[e._v("c")]),e._v("语言编写")]),e._v(" "),n("h3",{attrs:{id:"负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[e._v("#")]),e._v(" 负载均衡")]),e._v(" "),n("p",[e._v("Nginx提供的负载均衡策略有2种：内置策略和扩展策略。")]),e._v(" "),n("p",[e._v("内置策略：轮询，加权轮询，ip hash。")]),e._v(" "),n("p",[e._v("扩展策略")]),e._v(" "),n("h3",{attrs:{id:"session共享"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#session共享"}},[e._v("#")]),e._v(" Session共享")]),e._v(" "),n("p",[e._v("推荐使用Redis来处理")]),e._v(" "),n("h3",{attrs:{id:"动静分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动静分离"}},[e._v("#")]),e._v(" 动静分离")]),e._v(" "),n("p",[e._v("静态文件直接放在Nginx服务器上做缓存，不需要下放到其他服务器")]),e._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),n("h3",{attrs:{id:"mac"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[e._v("#")]),e._v(" mac")]),e._v(" "),n("p",[n("code",[e._v("brew install nginx")])]),e._v(" "),n("h3",{attrs:{id:"debian"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debian"}},[e._v("#")]),e._v(" debian")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo apt-get update\nsudo apt-get install nginx\n")])])]),n("p",[e._v("安装完成后会自动运行服务，默认的nginx html位置在"),n("code",[e._v("/usr/share/nginx/html/index.html")])]),e._v(" "),n("h2",{attrs:{id:"命令行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[e._v("#")]),e._v(" 命令行")]),e._v(" "),n("ol",[n("li",[e._v("-s stop 停止")]),e._v(" "),n("li",[e._v("-s quit 安全退出")]),e._v(" "),n("li",[e._v("-s reload 重新加载配置文件")]),e._v(" "),n("li",[n("code",[e._v("ps aux|grep nginx")]),e._v(" 查看进程是否存在")])]),e._v(" "),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),n("p",[e._v("nginx的配置文件为"),n("code",[e._v("nginx.conf")]),e._v("， 每一个配置项以"),n("code",[e._v(";")]),e._v("结尾，修改完配置文件后，需要使用"),n("code",[e._v("reload")]),e._v("命令。")]),e._v(" "),n("h3",{attrs:{id:"全局配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[e._v("#")]),e._v(" 全局配置")]),e._v(" "),n("p",[n("code",[e._v("#")]),e._v("号开头的配置为全局配置")]),e._v(" "),n("h3",{attrs:{id:"导入子配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入子配置文件"}},[e._v("#")]),e._v(" 导入子配置文件")]),e._v(" "),n("p",[e._v("使用"),n("code",[e._v("include")]),e._v("可以导入其他配置文件")]),e._v(" "),n("h3",{attrs:{id:"特殊单位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊单位"}},[e._v("#")]),e._v(" 特殊单位")]),e._v(" "),n("h4",{attrs:{id:"字节单位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字节单位"}},[e._v("#")]),e._v(" 字节单位")]),e._v(" "),n("p",[n("code",[e._v("1024、8k、1m")])]),e._v(" "),n("h4",{attrs:{id:"时间单位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间单位"}},[e._v("#")]),e._v(" 时间单位")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ms milliseconds\ns\tseconds\nm\tminutes\nh\thours\nd\tdays\nw\tweeks\nM\tmonths, 30 days\ny\n")])])]),n("p",[e._v("值没有单位的表示秒。时间单位可以组合，例如"),n("code",[e._v("1h 30m")]),e._v("，使用空格分隔。")]),e._v(" "),n("p",[e._v("有些配置只能使用秒来指定。")]),e._v(" "),n("h3",{attrs:{id:"结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[e._v("#")]),e._v(" 结构")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("... #全局块\nevents { #events块\n...\n}\n\nhttp #http块\n{\n    ... #http全局块\n\n    server #server块\n    { \n        ... #server全局块\n        location [PATTERN] #location块\n        {\n            ...\n        }\n        location [PATTERN] \n        {\n            ...\n        }\n     }\n\n    server\n    {\n        ...\n    }\n\n    ... #http全局块\n}\n")])])]),n("h3",{attrs:{id:"变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[e._v("#")]),e._v(" 变量")]),e._v(" "),n("p",[e._v("使用"),n("code",[e._v("set")]),e._v("设置变量"),n("code",[e._v('set $geek_web_root "/Users/doing/IdeaProjects/backend-geek-web";')])]),e._v(" "),n("h4",{attrs:{id:"内置变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内置变量"}},[e._v("#")]),e._v(" 内置变量")]),e._v(" "),n("p",[e._v("除了手动设置变量，内部还提供了一些变量可以使用：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$args ：这个变量等于请求行中的参数，同$query_string\n$content_length ： 请求头中的Content-length字段。\n$content_type ： 请求头中的Content-Type字段。\n$document_root ： 当前请求在root指令中指定的值。\n$host ： 请求主机头字段，否则为服务器名称。\n$http_user_agent ： 客户端agent信息\n$http_cookie ： 客户端cookie信息\n$limit_rate ： 这个变量可以限制连接速率。\n$request_method ： 客户端请求的动作，通常为GET或POST。\n$remote_addr ： 客户端的IP地址。\n$remote_port ： 客户端的端口。\n$remote_user ： 已经经过Auth Basic Module验证的用户名。\n$request_filename ： 当前请求的文件路径，由root或alias指令与URI请求生成。\n$scheme ： HTTP方法（如http，https）。\n$server_protocol ： 请求使用的协议，通常是HTTP/1.0或HTTP/1.1。\n$server_addr ： 服务器地址，在完成一次系统调用后可以确定这个值。\n$server_name ： 服务器名称。\n$server_port ： 请求到达服务器的端口号。\n$request_uri ： 包含请求参数的原始URI，不包含主机名，如：”/foo/bar.php?arg=baz”。\n$uri ： 不带请求参数的当前URI，$uri不包含主机名，如”/foo/bar.html”。\n$document_uri ： 与$uri相同。\n")])])]),n("h3",{attrs:{id:"全局块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局块"}},[e._v("#")]),e._v(" 全局块")]),e._v(" "),n("p",[e._v("配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("#配置用户或者组，默认为nobody nobody。\n#user administrator administrators; \n#允许生成的进程数，默认为1\n#worker_processes 2; \n#指定nginx进程运行文件存放地址\n#pid /nginx/pid/nginx.pid; \n#制定错误日志路径，级别。这个设置可以放入全局块，http块，server块，级别依次为：debug|info|notice|warn|error|crit|alert|emerg\nerror_log log/error.log debug; \n\n")])])]),n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" events")]),e._v(" "),n("p",[e._v("配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("#工作模式及连接数上限\nevents {\n#设置网路连接序列化，防止惊群现象发生，默认为on\n   accept_mutex on; \n#设置一个进程是否同时接受多个网络连接，默认为off\n   multi_accept on; \n#事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport\n#use epoll; \n#单个work进程允许的最大连接数，默认为512\n   worker_connections 1024; \n}\n")])])]),n("h3",{attrs:{id:"http"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[e._v("#")]),e._v(" http")]),e._v(" "),n("p",[e._v("可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('#http服务器\nhttp {\ntcp_nopush on;\n#文件扩展名与文件类型映射表。设定mime类型(邮件支持类型),类型由mime.types文件定义\n#include /usr/local/etc/nginx/conf/mime.types;\n   include mime.types; \n#默认文件类型，默认为text/plain\n   default_type application/octet-stream;  // 默认未知类型\n\n#取消服务访问日志\n#access_log off;     \n#自定义日志格式\n   log_format myFormat \'$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for\'; \n#设置访问日志路径和格式。"log/"该路径为nginx日志的相对路径，mac下是/usr/local/var/log/。combined为日志格式的默认值\n   access_log log/access.log myFormat; \n   rewrite_log on;\n\n#允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。（sendfile系统调用不需要将数据拷贝或者映射到应用程序地址空间中去）\n   sendfile on; \n#每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。\n   sendfile_max_chunk 100k; \n\n#连接超时时间，默认为75s，可以在http，server，location块。\n   keepalive_timeout 65; \n\n#gzip压缩开关\n#gzip on;\n\n   tcp_nodelay on;\n\n#设定实际的服务器列表\n   upstream mysvr1 {   \n     server 127.0.0.1:7878;\n     server 192.168.10.121:3333 backup; #热备(其它所有的非backup机器down或者忙的时候，请求backup机器))\n   }\n   upstream mysvr2 {\n#weigth参数表示权值，权值越高被分配到的几率越大\n     server 192.168.1.11:80 weight=5;\n     server 192.168.1.12:80 weight=1;\n     server 192.168.1.13:80 weight=6;\n   }\n   upstream https-svr {\n#每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题\n     ip_hash;\n     server 192.168.1.11:90;\n     server 192.168.1.12:90;\n   }\n\n#error_page 404 https://www.baidu.com; #错误页\n\n#HTTP服务器\n\n# 静态资源一般放在nginx所在主机\n   server {\n       listen 80; #监听HTTP端口\n       server_name 127.0.0.1; #监听地址  \n       keepalive_requests 120; #单连接请求上限次数\n       set $doc_root_dir "/Users/doing/IdeaProjects/edu-front-2.0"; #设置server里全局变量\n       #index index.html;  #定义首页索引文件的名称\n       location ~*^.+$ { #请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。\n          root $doc_root_dir; #静态资源根目录\n          proxy_pass http://mysvr1; #请求转向“mysvr1”定义的服务器列表\n          #deny 127.0.0.1; #拒绝的ip\n          #allow 172.18.5.54; #允许的ip           \n       } \n   }\n\n#http\n   server {\n       listen 80;\n       server_name www.helloworld.com; #监听基于域名的虚拟主机。可有多个，可以使用正则表达式和通配符\n       charset utf-8; #编码格式\n       set $static_root_dir "/Users/doing/static";\n       location /app1 { #反向代理的路径（和upstream绑定），location后面设置映射的路径 \n           proxy_pass http://zp_server1;\n       } \n       location /app2 {  \n           proxy_pass http://zp_server2;\n       } \n       location ~ ^/(images|javascript|js|css|flash|media|static)/ {  #静态文件，nginx自己处理\n           root $static_root_dir;\n           expires 30d; #静态资源过时间30天\n       }\n       location ~ /\\.ht {  #禁止访问 .htxxx 文件\n           deny all;\n       }\n       location = /do_not_delete.html { #直接简单粗暴的返回状态码及内容文本\n           return 200 "hello.";\n       }\n\n# 指定某些路径使用https访问(使用正则表达式匹配路径+重写uri路径)\n       location ~* /http* { #路径匹配规则：如localhost/http、localhost/httpsss等等\n#rewrite只能对域名后边的除去传递的参数外的字符串起作用，例如www.c.com/proxy/html/api/msg?method=1&para=2只能对/proxy/html/api/msg重写。\n#rewrite 规则 定向路径 重写类型;\n#rewrite后面的参数是一个简单的正则。$1代表正则中的第一个()。\n#$host是nginx内置全局变量，代表请求的主机名\n#重写规则permanent表示返回301永久重定向\n           rewrite ^/(.*)$ https://$host/$1 permanent;\n       }\n\n#错误处理页面（可选择性配置）\n#error_page 404 /404.html;\n#error_page 500 502 503 504 /50x.html;\n\n#以下是一些反向代理的配置(可选择性配置)\n#proxy_redirect off;\n#proxy_set_header Host $host; #proxy_set_header用于设置发送到后端服务器的request的请求头\n#proxy_set_header X-Real-IP $remote_addr;\n#proxy_set_header X-Forwarded-For $remote_addr; #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP\n#proxy_connect_timeout 90; #nginx跟后端服务器连接超时时间(代理连接超时)\n#proxy_send_timeout 90; #后端服务器数据回传时间(代理发送超时)\n#proxy_read_timeout 90; #连接成功后，后端服务器响应时间(代理接收超时)\n#proxy_buffer_size 4k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小\n#proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的话，这样设置\n#proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）\n#proxy_temp_file_write_size 64k; #设定缓存文件夹大小，大于这个值，将从upstream服务器传\n\n#client_max_body_size 10m; #允许客户端请求的最大单文件字节数\n#client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数\n\n\n   }\n\n#https\n#(1)HTTPS的固定端口号是443，不同于HTTP的80端口；\n#(2)SSL标准需要引入安全证书，所以在 nginx.conf 中你需要指定证书和它对应的 key\n   server {\n     listen 443;\n     server_name  www.hellohttps1.com www.hellohttps2.com;\n     set $geek_web_root "/Users/doing/IdeaProjects/backend-geek-web";\n     ssl_certificate      /usr/local/etc/nginx/ssl-key/ssl.crt; #ssl证书文件位置(常见证书文件格式为：crt/pem)\n     ssl_certificate_key  /usr/local/etc/nginx/ssl-key/ssl.key; #ssl证书key位置\n     location /passport {\n       send_timeout 90;\n       proxy_connect_timeout 50;\n       proxy_send_timeout 90;\n       proxy_read_timeout 90;\n       proxy_pass http://https-svr;\n     }\n     location ~ ^/(res|lib)/ {\n        root $geek_web_root; \n        expires 7d;\n#add_header用于为后端服务器返回的response添加请求头，这里通过add_header实现CROS跨域请求服务器\n        add_header Access-Control-Allow-Origin *; \n     }\n#ssl配置参数（选择性配置）\n     ssl_session_cache shared:SSL:1m;\n     ssl_session_timeout 5m;\n   }\n\n#配置访问控制：每个IP一秒钟只处理一个请求，超出的请求会被delayed\n#语法：limit_req_zone  $session_variable  zone=name:size  rate=rate (为session会话状态分配一个大小为size的内存存储区，限制了每秒（分、小时）只接受rate个IP的频率)\n   limit_req_zone  $binary_remote_addr zone=req_one:10m   rate=1r/s nodelay;\n   location /pay {\n        proxy_set_header Host $http_host;\n        proxy_set_header X-Real_IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n#访问控制：limit_req zone=name [burst=number] [nodelay];\n        limit_req zone=req_one burst=5; #burst=5表示超出的请求(被delayed)如果超过5个，那些请求会被终止（默认返回503）\n        proxy_pass http://mysvr1;\n   }\n\n#可以把子配置文件放到/usr/local/etc/nginx/servers/路径下，通过include引入\n   include /usr/local/etc/nginx/servers/*.conf;\n\n} \n\n')])])]),n("h4",{attrs:{id:"server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[e._v("#")]),e._v(" server")]),e._v(" "),n("p",[e._v("配置虚拟主机的相关参数，一个http中可以有多个server。")]),e._v(" "),n("h4",{attrs:{id:"location"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[e._v("#")]),e._v(" location")]),e._v(" "),n("p",[e._v("配置请求的路由，以及各种页面的处理情况。")]),e._v(" "),n("h2",{attrs:{id:"问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),n("h3",{attrs:{id:"如何验证是本地提供的nginx服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何验证是本地提供的nginx服务"}},[e._v("#")]),e._v(" 如何验证是本地提供的nginx服务？")]),e._v(" "),n("p",[e._v("如何确定就是本地 nginx 提供的服务呢？有 2 个方法：")]),e._v(" "),n("ul",[n("li",[e._v("方法一："),n("strong",[e._v("PING")])])]),e._v(" "),n("p",[e._v("ping ip，看看是否解析到设置的url，比如"),n("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//baidu.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://baidu.com"),n("OutboundLink")],1),e._v("等")]),e._v(" "),n("ul",[n("li",[e._v("方法二："),n("strong",[e._v("观察访问日志")])])]),e._v(" "),n("p",[e._v("查看nginx 服务器的访问日志，看nginx 服务器是否能够正常提供服务。")])])}),[],!1,null,null,null);t.default=s.exports}}]);