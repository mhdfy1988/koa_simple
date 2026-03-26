module.exports = function requestLogger() {
    return async (ctx, next) => {
        const startTime = Date.now()
        await next()

        if(process.env.NODE_ENV === "test"){
            return
        }

        const duration = Date.now() - startTime
        console.log(`[koa-simple] ${ctx.method} ${ctx.path} ${ctx.status} ${duration}ms`)
    }
}
