
export default defineAppConfig({
    pages: [
        'pages/index/index',
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
