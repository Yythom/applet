export default defineAppConfig({
  pages: [
    'pages/test/index'
  ],
  subpackages: [{
    root: "subpackages/",
    pages: [
      "demo/index",
      "create/index",
    ]
  }],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
