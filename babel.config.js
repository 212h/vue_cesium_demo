module.exports = {
  presets: [
    '@vue/app',
    ['@babel/preset-env', // 添加 babel-preset-env 配置
      {
        'modules': false
      }
    ]
  ],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui', // 按需引入的组件库
        'styleLibraryName': 'theme-chalk' // 按需引入的样式
      }
    ]
  ]
}