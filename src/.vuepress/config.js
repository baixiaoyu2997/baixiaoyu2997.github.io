
module.exports = {
    // 网站 Title
    title: 'L.Rain的博客',
  
    // 网站描述
    description: 'L.Rain的博客',
  
    // 网站语言
    locales: {
      '/': {
        lang: 'zh-CN',
      },
    },
  
    // 使用的主题
    theme: require.resolve('vuepress-theme-meteorlxy/lib'),
  
    // 主题配置
    themeConfig: {
      lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
      // 个人信息（没有或不想设置的，删掉对应字段即可）
      personalInfo: {
        // 昵称
        nickname: 'L.Rain',
  
        // 个人简介
        description: '真实、自由、宽容',
  
        // 电子邮箱
        email: 'bxy2997@sina.com',
  
        // 所在地
        location: 'Tianjin City, China',
  
        // 组织
        organization: 'Tianjin A.Brain Technology',
  
        // 头像
        avatar: 'https://avatars3.githubusercontent.com/u/9149999?s=460&v=4',
  
        // 社交平台帐号信息
        sns: {
          // Github 帐号和链接
          github: {
            account: 'L.Rain',
            link: 'https://github.com/baixiaoyu2997',
          },
  
          // // Facebook 帐号和链接
          // facebook: {
          //   account: 'meteorlxy.cn',
          //   link: 'https://www.facebook.com/meteorlxy.cn',
          // },
  
          // // LinkedIn 帐号和链接
          // linkedin: {
          //   account: 'meteorlxy',
          //   link: 'http://www.linkedin.com/in/meteorlxy',
          // },
  
          // // Twitter 帐号和链接
          // twitter: {
          //   account: 'meteorlxy_cn',
          //   link: 'https://twitter.com/meteorlxy_cn',
          // },
  
          // 新浪微博 帐号和链接
          weibo: {
            account: '白晓宇V',
            link: 'https://weibo.com/1504398495',
          },
  
          // // 知乎 帐号和链接
          // zhihu: {
          //   account: 'meteorlxy.cn',
          //   link: 'https://www.zhihu.com/people/meteorlxy.cn',
          // },
  
          // // 豆瓣 帐号和链接
          // douban: {
          //   account: '159342708',
          //   link: 'https://www.douban.com/people/159342708',
          // },
        },
      },
  
      // 上方 header 的背景，可以使用图片，或者随机变化的图案
      headerBackground: {
        // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
        // url: '/assets/img/bg.jpg',
  
        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为纯色背景
        useGeo: true,
      },
  
      // 是否显示文章的最近更新时间
      lastUpdated: true,
  
      // 顶部导航栏内容
      nav: [
        { text: '主页', link: '/', exact: true },
        { text: '分类', link: '/posts/', exact: false },
        { text: 'Github', link: 'https://github.com/baixiaoyu2997', exact: false },
      ],
  
      // 评论配置，参考下方 [页面评论] 章节
      comments: {
        owner: 'baixiaoyu2997',
        repo: 'baixiaoyu2997.github.io',
        clientId: '24737c029e011c332923',
        clientSecret: '86f7d8925b5f8750c4e593a0277129e444636ad2',
      },
    },
    plugins: {
      'sitemap': {
        hostname: 'https://baixiaoyu2997.github.io/'
      },
    }
  }