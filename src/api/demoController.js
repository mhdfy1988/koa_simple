/*
 * @Author: your name
 * @Date: 2020-07-26 21:34:23
 * @LastEditTime: 2020-07-27 22:29:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspace\koa_test\api\a.js
 */ 
class DemoController{
    constructor(){}
    async demo(ctx) {
        ctx.body = {
            msg: "this is demo"
        }
    }
}
 
export default new DemoController()