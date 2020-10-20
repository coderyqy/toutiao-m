// 用户请求模块

import request from '@/utils/request'
// 在非组件模块中获取store，必须单独加载store
// import store from '@/store/'


// 注册登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data //请求需要的参数
  })
}

// 获取登录用户的信息
export const getCurrentUser = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user',
    // headers: {
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
  })
}