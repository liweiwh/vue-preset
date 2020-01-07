module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    // 扩展生产依赖
    dependencies: {
      "axios": "^0.19.0",
      "dayjs": "^1.8.19",
      "lodash": "^4.17.15",
      "uuid": "^3.3.3",
    },
  })

  if (options.element) {
    api.extendPackage({
      dependencies: {
        "element-ui": "^2.14.0",
      },
    })
  }

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('./template')

  if (options.foo) {
    // 有条件地生成文件
  }
}