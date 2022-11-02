export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subpackages: [{
    root: "subpackages/",
    pages: [
      "demo/index"
    ]
  }],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
