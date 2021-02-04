/*
 * @Author: your name
 * @Date: 2021-02-02 17:36:33
 * @LastEditTime: 2021-02-05 00:21:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

// 路由懒加载
const Home = () => import("@/views/Home/Home.vue");
const Category = () => import("@/views/Category/Category.vue");
const Cart = () => import("@/views/Cart/Cart.vue");
const Profile = () => import("@/views/Profile/Profile.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
