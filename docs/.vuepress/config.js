const path = require('path');
module.exports = {
    // 标题
    title: 'Haven UI',
    // 描述
    description: '基于Vue打造UI组件库文档',
    // baseUrl
    base: '/haven-ui/',
    // 注入到当前页面的HTML <head> 标签
    head: [],
    // 端口
    port: 8080,
    //主题配置
    themeConfig: {
        // 顶部导航栏
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Components', link: 'views/'},
            { text: 'Github', link: 'https://github.com/Jarhowe/Haven-UI/'}
        ],
        // 这里使用的是多个侧边栏设置
        sidebar: [
            {
                title: '开发指南',
                collapsable: true,
                children: [
                    'views/guide/install.md'
                ]
            },
            {
                title: '基本组件',
                collapsable: false,
                children: [
                    '/views/components/basic/button'
                ]
            }
        ]
    },
    sass: {
        indentedSyntax: true
    }
}