const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081, // 前端端口
    proxy: {
      '/api': { // 代理标识（可自定义）
        target: 'http://localhost:8080', // 后端地址
        changeOrigin: true,
        pathRewrite: { '^/api': '' } // 
      }
    }
  }
})
