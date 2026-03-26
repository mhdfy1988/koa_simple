module.exports = function errorHandler() {
    return async (ctx, next) => {
        try{
            await next()

            if(ctx.status === 404 && !ctx.body){
                ctx.status = 404
                ctx.body = {
                    code: "NOT_FOUND",
                    message: `Cannot ${ctx.method} ${ctx.path}`
                }
            }
        }catch(error){
            ctx.status = error.status || 500
            ctx.body = {
                code: ctx.status === 500 ? "INTERNAL_ERROR" : "REQUEST_ERROR",
                message: error.expose ? error.message : "服务器开小差了，请稍后再试"
            }

            if(process.env.NODE_ENV !== "production" && error.message){
                ctx.body.details = error.message
            }

            ctx.app.emit("error", error, ctx)
        }
    }
}
