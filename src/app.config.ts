
export default defineAppConfig({
    pages: [
        'pages/index/index',
        'pages/user/index',
        'pages/test/index'
    ],
    subpackages: [{
        root: "sub-pages/",
        pages: [
            "demo/index",
            "create/index",
        ]
    }],
    tabBar: {
        custom: true,
        list: [
            {
                pagePath: 'pages/index/index',
                text: '首页'
            },
            {
                pagePath: 'pages/test/index',
                text: '测试'
            },
            {
                pagePath: 'pages/user/index',
                text: '我的'
            }
        ]
    },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    }
})
