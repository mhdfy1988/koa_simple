const Router = require("@koa/router")

const demoController = require("../controllers/demoController")
const systemController = require("../controllers/systemController")

module.exports = function createRouter() {
    const router = new Router()

    router.get("/api/system/health", systemController.getHealthStatus)
    router.get("/api/demo", demoController.getDemoOverview)
    router.post("/api/demo/echo", demoController.echoPayload)

    return router
}
