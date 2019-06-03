const path = require('path');//node内置模块，用来设置路径
module.exports = {
    entry:'./src/js/entry.js',//入口文件名 要打包的文件
    output:{
        filename:'bundle.js',//出口文件名 打包之后的文件名
        path:path.resolve(__dirname,'dist/js')//出口文件位置 打包之后的文件放置的位置
    }
}
