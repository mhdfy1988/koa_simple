import Router from "koa-router"
import demoCtrl from "../api/demoController"

const router = new Router()
router.get('/demo',demoCtrl.demo)

export default router