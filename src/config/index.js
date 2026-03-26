const path = require("path")

const env = process.env.NODE_ENV || "development"

module.exports = {
    env,
    isProduction: env === "production",
    port: Number(process.env.PORT || 3000),
    serviceName: "koa-simple",
    staticDir: path.join(__dirname, "../../public")
}
