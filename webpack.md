webpack3.0版本的学习：
    在webpack中，除html的所有的东西（包括图片、文件等）都是模块，一切皆模块；
    webpack本身只能加载（读取）js和json文件模块，如果要读取这两种之外的文件，需要借助loader（加载器）帮助实现，在webpack1.0版本中，只能加载js文件，其他文件一概不能加载；
loader：
    loader本身是运行在node.js中的javascript模块，他本身是一个函数，接受要转换的文件为参数，返回转换的结果；loader一般以xxx-Loder来命名，xxx代表了这个loader要做的转换功能，比如json-loader；
配置文件：
    webpack-config.js:是node.js的一个模块。返回一个json格式的配置信息对象；
插件：
    插件可以完成loader不能完成的工作；
    插件的使用一般是在webpack的配置信息plugins选项中指定；
局部安装webpack：
    cnpm i webpack -D(-D为开发环境，-S为生产环境)
打包css和图片：
    需要使用插件（loader）；cnpm install css-loader style-loader -S （处理css文件）
                          cnpm install url-loader flie-loader -S   (处理样式中图片应用的插件)


