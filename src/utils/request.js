// 请求模块
import axios from 'axios'
import store from '@/store/'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' //基础路径
})

// 请求拦截
// Add a request interceptor
// axios.interceptors.request.use(function (config) {
request.interceptors.request.use(function (config) {
  const { user } = store.state
  // 如果用户已登录，统一为请求头设置token
  if(user){
    config.headers.Authorization = `Bearer ${user.token}`
  }
  
  

  return config;
}, function (error) {
  
  return Promise.reject(error);
})

// 响应拦截

// 导出
export default request