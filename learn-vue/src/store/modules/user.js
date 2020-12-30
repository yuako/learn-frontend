import { login, refresh } from '@/api/auth'
import { getToken, setToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, ticket) {
      return new Promise((resolve, reject) => {
        login(ticket).then(response => {
          const data = response.data
          const tokenStr = data.tokenHead + data.token
          setToken(tokenStr)
          commit('SET_TOKEN', tokenStr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    Refresh({ commit }) {
      return new Promise((resolve, reject) => {
        refresh().then(response => {
          const data = response.data
          const tokenStr = data.tokenHead + data.token
          setToken(tokenStr)
          commit('SET_TOKEN', tokenStr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user