/*
 * @Author: your name
 * @Date: 2020-07-27 22:09:05
 * @LastEditTime: 2020-07-27 22:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspace\koa_simple\config\utils.js
 */ 
const path = require('path')

exports.resolve = function resolve(dir){
    return path.join(__dirname,'..',dir)
}

exports.APP_PATH = exports.resolve('src')
exports.DIST_PATH = exports.resolve('dist')