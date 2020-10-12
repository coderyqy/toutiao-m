// 用户请求模块

import request from '@/utils/request'

// 注册登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    data //请求需要的参数
  })
}