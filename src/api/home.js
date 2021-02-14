/*
 * @Author: your name
 * @Date: 2021-02-09 11:02:01
 * @LastEditTime: 2021-02-09 11:49:13
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
