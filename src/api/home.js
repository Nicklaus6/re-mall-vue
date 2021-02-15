/*
 * @Author: your name
 * @Date: 2021-02-09 11:02:01
 * @LastEditTime: 2021-02-14 20:31:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\api\home.js
 */
import request from "./request";

export const BANNER = "banner";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}
