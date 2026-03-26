exports.getDemoOverview = (ctx) => {
    ctx.body = {
        project: "koa-simple",
        description: "一个可直接扩展的 Koa 基础模板",
        features: [
            "统一错误处理",
            "请求日志",
            "静态资源服务",
            "示例 API"
        ]
    }
}

exports.echoPayload = (ctx) => {
    ctx.body = {
        receivedAt: new Date().toISOString(),
        payload: ctx.request.body || {}
    }
}
