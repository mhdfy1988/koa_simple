exports.getHealthStatus = (ctx) => {
    ctx.body = {
        status: "ok",
        service: ctx.config.serviceName,
        env: ctx.config.env,
        timestamp: new Date().toISOString()
    }
}
