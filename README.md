# stock

## 说明文档 产品库存

### 各大模块

    前台页面(web)

    理管页面(admin)

    小程序(app)

    后台(server)

    客户端接口(admin_api)

    服务端接口(server_api)

## command

    nest new server-api
    #生成server-api目录文件

    nest generate app admin_api
    #进入server-api目录后生成admin-api工作空间

    nest g lib db
    #生成数据库db改目录为@libs

    yarn add nestjs-typegoose @typegoose/typegoose
    #安装数据库模块

    yarn add mongoose @types/mongoose
    #安装数据库和提示
