/*
 * @Author: your name
 * @Date: 2021-02-02 21:47:08
 * @LastEditTime: 2021-02-02 22:04:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\vue.config.js
 */
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 向所有 Sass/样式传入共享的全局变量和混入
        prependData: `
        @import "~@/assets/style/variables.scss";
        @import "~@/assets/style/mixin.scss";
        `
      }
    }
  }
};
