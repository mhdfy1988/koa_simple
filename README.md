# koa-simple

一个基于 Koa 的服务端起步模板，默认提供静态资源服务、常用安全/解析中间件、基础 API 和统一错误处理。

## 特性

- Node 直跑，不再依赖服务端 Webpack 打包
- Koa + Router 的基础接口组织方式
- JSON body 解析、CORS、Helmet、压缩和静态资源服务
- 开发态使用 `nodemon` 自动重启

## 使用

```bash
npm install
npm run dev
```

生产启动：

```bash
npm start
```

## 默认接口

- `GET /api/system/health`：健康检查
- `GET /api/demo`：模板信息示例
- `POST /api/demo/echo`：回显请求体

## 目录

```text
public/
  index.html
src/
  app.js
  config/
  controllers/
  middlewares/
  routes/
```

## 说明

- 模板仓库里的项目名为 `koa-simple`
- 通过 `ljw-cli` 生成项目时，脚手架会自动把项目名写入生成结果
