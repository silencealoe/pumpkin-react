const proxy = require('http-proxy-middleware')

module.exports = function(app){
  app.use(proxy('/users',{target:'http://10.34.187.205:3000',changeOrigin:true}))
  app.use(proxy('/index',{target:'http://10.34.187.205:3000',changeOrigin:true}))
}