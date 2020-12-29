import request from '@/utils/request'

export function login(ticket) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      ticket
    }
  })
}