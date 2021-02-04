/*
 * @Author: your name
 * @Date: 2021-02-04 19:59:07
 * @LastEditTime: 2021-02-04 20:15:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\index.js
 */
import Vue from "vue";

const context = require.context("./", true, /\.vue$/);

context.keys().forEach(filePath => {
  const componentModule = context(filePath);
  const component = componentModule.default || componentModule;
  Vue.component(component.name, component);
});
