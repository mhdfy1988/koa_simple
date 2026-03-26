const cors = require("@koa/cors")
const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const compress = require("koa-compress")
const helmet = require("koa-helmet")
const serve = require("koa-static")

const config = require("./config")
const errorHandler = require("./middlewares/errorHandler")
const requestLogger = require("./middlewares/requestLogger")
const createRouter = require("./routes")

function createApp() {
    const app = new Koa()

    app.proxy = true
    app.context.config = config

    app.use(errorHandler())
    app.use(requestLogger())
    app.use(helmet())
    app.use(cors())
    app.use(bodyParser())
    app.use(compress())
    app.use(serve(config.staticDir, { index: "index.html" }))

    const router = createRouter()
    app.use(router.routes())
    app.use(router.allowedMethods())

    app.on("error", (error, ctx) => {
        if(config.env === "test"){
            return
        }

        console.error(`[koa-simple] ${ctx.method} ${ctx.path} -> ${error.message}`)
    })

    return app
}

function startServer(port = config.port) {
    const app = createApp()
    const server = app.listen(port, () => {
        console.log(`[koa-simple] server running at http://127.0.0.1:${port}`)
    })

    return server
}

if(require.main === module){
    startServer()
}

module.exports = {
    createApp,
    startServer
}
