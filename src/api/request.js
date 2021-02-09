/*
 * @Author: your name
 * @Date: 2021-02-09 10:19:26
 * @LastEditTime: 2021-02-09 11:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\api\request.js
 */
import axios from "axios";
const request = axios.create({
  baseURL: "http://152.136.185.210:8000/api/w6",
  timeout: 5000
});

request.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    return Promise.reject(err);
  }
);

export default request;
