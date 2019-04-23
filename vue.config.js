module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100, // rem = px/100,（JSON文件中不加注释，此行注释及下行注释均删除）
            selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
          })
        ]
      }
    }
  }
};
