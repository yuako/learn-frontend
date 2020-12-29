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