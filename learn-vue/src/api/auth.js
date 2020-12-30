import request from '@/utils/request'

export function login(ticket) {
  return request({
    url: '/auth/cas',
    method: 'post',
    data: {
      ticket
    }
  })
}

export function refresh() {
  return request({
    url: '/auth/refreshToken',
    method: 'get'
  })
}