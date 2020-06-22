# stock

## 说明文档 产品库存

### 各大模块

    前台页面(web)

    理管页面(admin)

    小程序(app)

    后台(server)

    客户端管理接口(admin_api)
        用户表：User[username,password]
        分类表：category[cate_name,cate_pic]
        产品表：product[cate_id,pro_name,pro_pic]

    服务端管理接口(server_api)

## command

    nest new server-api
    #生成server-api目录文件

    nest generate app admin_api
    #进入server-api目录后生成admin-api工作空间

    nest g lib db
    #生成数据库db，把默认目录改为@libs

    yarn add nestjs-typegoose @typegoose/typegoose
    #安装数据库模块

    yarn add mongoose @types/mongoose
    #安装数据库和提示

    nest g mo -p admin-api users
    nest g co -p admin-api users
    # 在admin-api子项目中添加users模块/控制器

    yarn add nestjs-mongoose-crud
    #安装nestjs增删改查模块

    yarn add @nestjs/swagger swagger-ui-express
    #安装swagger接口文件包

    nest g mo -p admin-api category
    nest g co -p admin-api category
    #安装 category 模块和控制器

    nest g mo -p admin-api product
    nest g co -p admin-api product
    #安装 category 模块和控制器
