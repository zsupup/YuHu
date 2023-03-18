const path = require('path');
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    "style-resources-loader": {
        preProcessor: "less",
        patterns: [
           // 存放less变量文件的路径
            path.resolve(__dirname, "./src/assets/less/parameter.less")
        ]
    }
},
css: {
    loaderOptions: {
        less: {
            lessOptions: {
                modifyVars: {
                    'primary-color': '#ec6800'
                },
                javascriptEnabled: true,
            },
        },
    },
}
}