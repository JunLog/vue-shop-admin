# vue-shop-admin

Vue 实战项目：电商管理系统（Element-UI）
[项目视频](https://www.bilibili.com/video/BV1EE411B7SU "哔哩哔哩视频")

## 运行项目

#### 启动后端接口

0. 启动数据库 `sudo service mysql start`
1. 先将根目录下的 `mysql.sql` 导入数据库
2. 将路径切换到 `vue_api_server` 文件夹路径
3. 运行 `npm install` 安装依赖
4. 修改 `vue_api_server/congfig/default.json` 的数据库信息
5. 运行 `node app.js` 启动项目

#### 启动前端项目

1. 将路径切换到 `vue_shop` 文件夹
2. 运行 `vue ui` 启动可视化项目管理
3. 点击左菜单栏 _“任务”_
4. 选择 _“serve”_
5. 点击 _“运行”_
6. 待编译成功后，即可点击 _“启动 app”_

---

---

## 依赖警告

项目上传到 `Github` 后，隔一段时间就提示依赖警告，需要将依赖版本更新
前言
经常会遇到 package.json 中的库有更新，但是太多一个一个的来很费事，幸好有个工具 npm-check-updates 可以帮助我们检查版本是否有变化

安装

```bash
npm install -g npm-check-updates
```

`npm-check-updates -u`仅修改 package.json 文件。

运行`npm install` 以更新已安装的软件包和 package-lock.json

---

### 优化策略

- 生成打包报告
- 第三方库启用 CDN
- elementUI 按需加载
- 路由懒加载
- 首页内容定制

插件 babel-plugin-transform-remove-console 去除 `console语句` 的操作,在 babel.config.js 文件 添加 transform-remove-console

#### 打包报告

1. 通过 vue-cli 命令选项 `vue-cli-service build --report`
2. 通过可视化 UI 面板查看，控制台和分析

#### 不同配置打包

详见 vue.config.js

#### 加载 CDN 资源

import 语法引进的第三方依赖包，最终打包合并在一个文件里，体积过大
通过 webpack 的 externals 节点，配置并加载 外部 CDN 资源

#### 路由的懒加载

打包后，JavaScript 包变得很大，影响页面加载。把不同的路由对应的组件分割成不同的代码块。对应的路由加载对应的组件

1. 安装 @babel/plugin-syntax-dynamic-import 包
2. 在 babel.congfig.js 配置文件中声明该插件
3. 将路由改为按需加载形式

### 通过 node 创建 web 服务器

1. 新建 vue_shop_server 文件夹
2. npm init -y 初始化
3. npm i express -S

#### PM2

1. 在服务器中安装 pm2： npm i pm2 -g
2. 启动项目： pm2 start 脚本 --name 自定义名称
3. 查看运行项目： pm2 ls
4. 重启项目： pm2 restart 自定义名称
5. 停止项目： pm2 stop 自定义名称
6. 删除项目： pm2 delete 自定义名称
