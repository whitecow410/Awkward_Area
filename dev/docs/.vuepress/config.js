module.exports = {
    lang: 'zh-CN',
    title: '尬聊區 | Awkward',
    description: '一個給你自由的伺服器',

    themeConfig: {
        logo: '/images/awkward.png',
        smoothScroll: true,
        navbar:[
          {text: 'Discord', link: 'https://discord.gg/bn27V8fJsz'},
        ],
        sidebar: [
          '/',
          {
            text:'規則',
            link:'/server_rule/',
            children: [
              '/server_rule/rule.md',
              '/server_rule/admin.md',
              '/server_rule/penalty.md',
            ],
          },
        ],
      },
  }