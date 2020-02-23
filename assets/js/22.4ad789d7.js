(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{254:function(e,r,n){"use strict";n.r(r);var t=n(1),o=Object(t.a)({},function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("blockquote",[n("p",[n("a",{attrs:{href:"https://blog.csdn.net/walkeryudev/article/details/80360422",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文链接"),n("OutboundLink")],1)])]),e._v(" "),n("h1",{attrs:{id:"设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置")]),e._v(" "),n("p",[e._v("更改studio的VM大小"),n("br"),e._v("\nAndroid Studio限制了Java虚拟机启动的内存大小，限制了最大堆内存，当Android Studio运行越久，内存越不足的时候，就会频繁的触发GC，Android Studio就自然会卡起来了，严重的直接黑屏，所以，我们把对应的所需内存都配置大一些，32位的系统打开studio.exe.vmoptions文件，如果是64位的话打开studio64.exe.vmoptions，改动以下配置，根据各自配置适当调节。")]),e._v(" "),n("blockquote",[n("p",[e._v("-Xms1024m"),n("br"),e._v("\n-Xmx4096m"),n("br"),e._v("\n-XX:MaxPermSize=2048m"),n("br"),e._v("\n-XX:ReservedCodeCacheSize=1024m")])]),e._v(" "),n("h1",{attrs:{id:"优化配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 优化配置:")]),e._v(" "),n("p",[e._v("1、gradle运行相关的配置 (gradle.properties文件中)")]),e._v(" "),n("blockquote",[n("h1",{attrs:{id:"the-gradle-daemon-aims-to-improve-the-startup-and-execution-time-of-gradle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-gradle-daemon-aims-to-improve-the-startup-and-execution-time-of-gradle","aria-hidden":"true"}},[e._v("#")]),e._v(" The Gradle daemon aims to improve the startup and execution time of Gradle.")]),e._v(" "),n("p",[e._v("# When set to true the Gradle daemon is to run the build."),n("br"),e._v("\n# TODO: disable daemon on CI, since builds should be clean and reliable on servers"),n("br"),e._v("\norg.gradle.daemon=true"),n("br"),e._v("\n# Specifies the JVM arguments used for the daemon process."),n("br"),e._v("\n# The setting is particularly useful for tweaking memory settings."),n("br"),e._v("\n# Default value: -Xmx10248m -XX:MaxPermSize=256m"),n("br"),e._v("\norg.gradle.jvmargs=-Xms1024m -Xmx2048m -XX:MaxPermSize=768m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8"),n("br"),e._v("\n# When configured, Gradle will run in incubating parallel mode."),n("br"),e._v("\n# This option should only be used with decoupled projects. More details, visit"),n("br"),e._v("\n# "),n("a",{attrs:{href:"http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects"),n("OutboundLink")],1),n("br"),e._v("\norg.gradle.parallel=true"),n("br"),e._v("\n# Enables new incubating mode that makes Gradle selective when configuring projects."),n("br"),e._v("\n# Only relevant projects are configured which results in faster builds for large multi-projects."),n("br"),e._v("\n# "),n("a",{attrs:{href:"http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:configuration_on_demand",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:configuration_on_demand"),n("OutboundLink")],1),n("br"),e._v("\norg.gradle.configureondemand=true")])]),e._v(" "),n("p",[e._v("2、启用新一代Dex编译器D8 (gradle.properties文件中)")]),e._v(" "),n("blockquote",[n("p",[e._v("android.enableD8=true")])]),e._v(" "),n("p",[e._v("3、启用新一代资源编译器aapt2 (增量资源处理) (gradle.properties文件中)")]),e._v(" "),n("blockquote",[n("p",[e._v("android.enableAapt2=true")])]),e._v(" "),n("p",[e._v("4、启用构建缓存 (gradle.properties文件中)【如果工程是从2.2之前的版本升级上来的】")]),e._v(" "),n("blockquote",[n("p",[e._v("Build Cache: 2.2版本的时候，加入了编译缓存的功能。但是2.3正式版之前都是默认关闭的。你可以通过 android.enableBuildCache = true 来开启这个功能。"),n("br"),e._v("\n2.3正式版开始将此功能转成默认开启的状态。")])]),e._v(" "),n("p",[e._v("为了不受版本更替的影响, 直接在项目根目录下的gradle.properties文件中添加下列配置:")]),e._v(" "),n("pre",[n("code",[e._v("#启用并设置 构建缓存 的目录 (使用 `./gradlew cleanBuildCache` 指令清除cache内容)\nandroid.enableBuildCache=true\nandroid.buildCacheDir=buildCacheDir/\n")])]),e._v(" "),n("p",[e._v("Build Cache默认的存储目录~/.android/build-cache. 为了方便管理(如, 缓存过多时手动清除), 上述配置的第二行就自己指定了缓存的存储目录"),n("br"),e._v("\n关于更多Build Cache的内容请参考官方说明: "),n("a",{attrs:{href:"https://developer.android.com/studio/build/build-cache.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.android.com/studio/build/build-cache.html"),n("OutboundLink")],1),n("br"),e._v("\n如果无法访问请看这里: "),n("a",{attrs:{href:"https://developer.android.google.cn/studio/build/build-cache.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.android.google.cn/studio/build/build-cache.html"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("5、启用gradle缓存 (gradle.properties文件中)")]),e._v(" "),n("pre",[n("code",[e._v(" org.gradle.caching=true\n")])]),e._v(" "),n("p",[e._v("6、禁用PNG图片优化处理 (禁止Png Cruncher优化)"),n("br"),e._v("\na. 在Root Project的build.gradle文件中添加下面一个函数, 来判断是否是打debug包, 如下:")]),e._v(" "),n("pre",[n("code",[e._v('//是否是执行Debug相关task (通用函数, 可供子module调用)\ndef isDebug() {\n     def taskNames = gradle.startParameter.taskNames\n     for (tn in taskNames) {\n         if( (tn.contains("install") || tn.contains("assemble")) && tn.contains("Debug")) {\n             return true\n         }\n     }\n     return false\n }\n')])]),e._v(" "),n("p",[e._v("b. 在主module的build.gradle文件中的android {}块中添加下面配置:")]),e._v(" "),n("pre",[n("code",[e._v('android {\n\n        // 其他配置省略 ...\n\n        //如果是构建debug包, 则禁用 "png cruncher" (默认cruncherEnabled=true, 禁用以加速构建)\n        def enableCruncher = { ->\n            return !isDebug()\n        }\n\n        aaptOptions { //禁用cruncher, 以加速编译\n            cruncherEnabled = enableCruncher()\n            cruncherProcesses = 0\n        }\n\n    }\n')])]),e._v(" "),n("p",[e._v("7、Dex配置项优化"),n("br"),e._v("\n在主module的build.gradle的android {}语句块中添加下面配置项目:")]),e._v(" "),n("pre",[n("code",[e._v('android {\n\n     // 其他配置省略 ...\n\n      dexOptions { //优化dex配置\n         dexInProcess true\n         preDexLibraries true\n         javaMaxHeapSize "2g"\n     }\n }\n')])]),e._v(" "),n("p",[e._v("8、其他配置项"),n("br"),e._v("\n在主module中的buildg.gradle文件中添加如下配置:")]),e._v(" "),n("pre",[n("code",[e._v("android {\n     compileOptions {\n         incremental = true  //开启增量编译\n         //其他代码省略 ...\n     }\n\n     buildTypes {\n         debug {\n             crunchPngs false //关闭crunchPng优化, 以加快构建\n             //其他代码省略 ...\n         }\n     }\n\n     //其他代码省略 ...\n }\n")])]),e._v(" "),n("p",[e._v("9、跳过Tests和Lint相关的Task"),n("br"),e._v("\n在主module的build.gradle文件中的android {}代码块中添加下面代码:")]),e._v(" "),n("pre",[n("code",[e._v('android {\n     //其他代码省略 ...\n\n\n     //跳过Lint和Test相关的task, 以加速编译\n     if (isDebug()) {\n         gradle.taskGraph.whenReady {\n             tasks.each { task ->\n                 if (task.name.contains("Test") || task.name.contains("Lint")) {\n                     task.enabled = false\n                 }\n             }\n         }\n     }\n }\n')])]),e._v(" "),n("p",[e._v("10、Dex的merge过程优化 (API Level 21, 即安卓5.0的优化配置)"),n("br"),e._v("\n随着代码的日益积累, 我们安卓项目中的方法数目很容易就超过64K了, 这时候就需要分包, 即MultDex操作 (为什么方法数不能超过64K呢? 什么又是MultDex? 这些就说来话长了, 如果你还不了解这些, 请移步此处: "),n("a",{attrs:{href:"https://developer.android.com/studio/build/multidex.html#about",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.android.com/studio/build/multidex.html#about"),n("OutboundLink")],1),e._v(")")]),e._v(" "),n("p",[e._v("MultiDex主要是为了解决64K限制. Google给出的MultiDex解决方案分为两个阶段:"),n("br"),e._v("\na. Android 5.0之前使用 Dalvik可执行文件分包支持库 来支持分包"),n("br"),e._v("\nb. Android 5.0即Android 5.0之后的版本内置支持MultiDex操作 (因此就不需要额外的支持库啦, 只需要在gradle中简单的配置一下)")]),e._v(" "),n("p",[e._v("两种方法都会把dex分成多个, 但是前一分的dex更少, 内置的分包分的dex非常多. 下面是两种分包方式打的包的dex切分情况:")]),e._v(" "),n("p",[e._v("minSdkVersion小于21时构建出来的apk包的dex切分情况如下:"),n("br"),e._v(" "),n("img",{attrs:{src:"https://img-blog.csdn.net/2018051810050984?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dhbGtlcnl1ZGV2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),e._v(" "),n("p",[e._v("minSdkVersion大于等于21时构建出来的apk包的dex切分情况如下:"),n("br"),e._v(" "),n("img",{attrs:{src:"https://img-blog.csdn.net/2018051810055344?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dhbGtlcnl1ZGV2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}}),n("br"),e._v("\n具体优化逻辑就是:"),n("br"),e._v("\n如果不需要进行优, 则把minSdkVersion配成正常的支持版本(如14, 15 等); 而如果需要优化, 则把minSdkVersion配置成21(或大于21)")]),e._v(" "),n("p",[e._v("具体配置如下:")]),e._v(" "),n("pre",[n("code",[e._v('/**\n * 默认构建会进行优化, 如果不需要优化, 则运行下列命令: \n * ./gradlew assembleDebug -Pso=1\n * 或者 (构建并安装)\n * ./gradlew installDebug -Pso=1\n */\ndef getMinSdkVersion() {\n    int is_skip_optimize = hasProperty("so") ? Integer.parseInt(so) : 0\n\n    //如果跳过优化 或 Release版本, 则minSdkVersion使用15; 否则使用21以便加快构建速度\n    if(is_skip_optimize == 1 || !isDebug()) {\n        return 15\n    } else {\n        return 21\n    }\n}\n\nandroid {\n    defaultConfig {\n        applicationId "com.stone.xxx"\n        minSdkVersion getMinSdkVersion() //此处的设置导致: 根据打包时传入的参数决定是否进行优化\n        //其他配置省略 ...\n    }\n}\n')])]),e._v(" "),n("p",[e._v("两种分包方式的具体配置请参考: "),n("a",{attrs:{href:"https://developer.android.com/studio/build/multidex.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.android.com/studio/build/multidex.html"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("11、Fabric相关优化"),n("br"),e._v("\n在Main Module的build.gradle中添加下面Fabric相关的代码来优化Fabric配置:")]),e._v(" "),n("pre",[n("code",[e._v('def getMinSdkVersion() {\nint is_skip_optimize = hasProperty("so") ? Integer.parseInt(so) : 0\n//如果跳过优化 或 Release版本, 则minSdkVersion使用15; 否则使用21以便加快构建速度\nif(is_skip_optimize == 1 || !isDebug()) {\n    return 15\n} else {\n    return 21\n}\n}\n\n\n\n\nandroid {\n    buildTypes {\n    debug {\n        crunchPngs false //关闭crunchPng优化, 以加快构建\n        ext.alwaysUpdateBuildId = false\n\n        // enableCrashlytics = true 会影响编译速度 (enableCrashlytics默认值为true)\n        // https://developer.android.com/studio/build/optimize-your-build.html#profile\n        if (getMinSdkVersion() == 21) {\n            ext.enableCrashlytics = false\n            buildConfigField "boolean", "USER_FABRIC", "false" //此变量用于是否初始化或调用Fabric\n        } else {\n            buildConfigField "boolean", "USER_FABRIC", "true" //此变量用于是否初始化或调用Fabric\n        }\n    }\n}\n\n//其他配置省略 ...\n')])]),e._v(" "),n("p",[e._v("}"),n("br"),e._v("\nandroid官网给出的优化Fabric的配置如下:"),n("br"),e._v(" "),n("img",{attrs:{src:"https://img-blog.csdn.net/20180518100350128?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dhbGtlcnl1ZGV2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),e._v(" "),n("p",[e._v("官网优化相关配置:"),n("br"),e._v(" "),n("a",{attrs:{href:"https://developer.android.com/studio/build/optimize-your-build.html#profile",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.android.com/studio/build/optimize-your-build.html#profile"),n("OutboundLink")],1),n("br"),e._v("\nReferences"),n("br"),e._v(" "),n("a",{attrs:{href:"https://docs.fabric.io/android/crashlytics/build-tools.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.fabric.io/android/crashlytics/build-tools.html"),n("OutboundLink")],1),n("br"),e._v(" "),n("a",{attrs:{href:"https://developer.android.com/studio/build/optimize-your-build.html#profile",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.android.com/studio/build/optimize-your-build.html#profile"),n("OutboundLink")],1),n("br"),e._v(" "),n("a",{attrs:{href:"https://developer.android.com/studio/build/multidex.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.android.com/studio/build/multidex.html"),n("OutboundLink")],1),n("br"),e._v(" "),n("a",{attrs:{href:"https://developer.android.google.cn/studio/build/build-cache.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.android.google.cn/studio/build/build-cache.html"),n("OutboundLink")],1),n("br"),e._v(" "),n("a",{attrs:{href:"https://docs.gradle.org/current/userguide/build_environment.html#sec:gradle_configuration_properties",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.gradle.org/current/userguide/build_environment.html#sec:gradle_configuration_properties"),n("OutboundLink")],1),n("br"),e._v(" "),n("a",{attrs:{href:"https://developer.android.google.cn/studio/releases/index.html#preview-the-new-d8-dex-compiler",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.android.google.cn/studio/releases/index.html#preview-the-new-d8-dex-compiler"),n("OutboundLink")],1),n("br"),e._v(" "),n("a",{attrs:{href:"https://developer.android.com/studio/releases/gradle-plugin.html#optimizations",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.android.com/studio/releases/gradle-plugin.html#optimizations"),n("OutboundLink")],1),n("br"),e._v(" "),n("a",{attrs:{href:"http://blog.csdn.net/ahence/article/details/73603326",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://blog.csdn.net/ahence/article/details/73603326"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("配置到这里，我的Android Studio编译速度从原来的4分钟缩短到了10秒。希望你也可以通过设置提高工作效率.")]),e._v(" "),n("p",[e._v("最后,加速Android Studio另一个最简单的方法就是:")]),e._v(" "),n("p",[n("strong",[e._v("升级你的电脑配置！！")])])])},[],!1,null,null,null);r.default=o.exports}}]);