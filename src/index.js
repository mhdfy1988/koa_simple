/*
 * @Author: your name
 * @Date: 2020-07-26 21:44:01
 * @LastEditTime: 2020-07-27 22:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspace\koa_simple\index.js
 */ 
import koa from "koa"
import routes from "./routes/routes"
import cors from "@koa/cors"
import koaBody from "koa-body"
import json from "koa-json"
import helmet from "koa-helmet"
import path from "path"
import statics from "koa-static"
import compose from "koa-compose"
import compress from "koa-compress"

const app = new koa()

const isDevMode = process.env.NODE_ENV === 'production' ? false : true

// app.use(koaBody()).use(cors())
// app.use(json({ pretty:false ,param:'pretty'}))
// app.use(helmet())
// app.use(statics(path.join(__dirname,"../public")))
// app.use(routes())

/**
 * 使用koa-compose
 */
const middleware =compose([
    koaBody(),
    cors(),
    json({ pretty:false ,param:'pretty'}),
    helmet(),
    statics(path.join(__dirname,"../public"))
])

if(!isDevMode){
    app.use(compress())
}

app.use(middleware)
app.use(routes())

app.listen(3000)