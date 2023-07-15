import axios from 'axios'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const axiosInstance = axios.create({
  withCredentials: true
})

axiosInstance.defaults.baseURL = import.meta.env.VITE_API_URL
axiosInstance.interceptors.request.use((request) => {
  request.url = request.url?.replace('/api', '')
  return request
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const origin = error.config
    if (error.response.status === 401 && !origin._retry) {
      origin._retry = true
      await useAuthStore().reissue(origin)
      return axiosInstance(origin)
    }
    return Promise.reject(error)
  }
)

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: useStorage('isLoggedIn', false)
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const res = await axiosInstance.post('/api/auth/login', {
          username,
          password
        })
        axiosInstance.defaults.headers.common.authorization =
          res.headers.authorization
        this.isLoggedIn = true
      } catch (error: any) {
        this.isLoggedIn = false
        throw error
      }
    },

    async register(
      username: string,
      password: string,
      email: string,
      realname: string,
      inviteCode: string
    ) {
      try {
        const registerDTO = {
          username,
          password,
          email,
          realname,
          inviteCode
        }
        const res = await axiosInstance.post('/api/auth/register', registerDTO)
        axiosInstance.defaults.headers.common.authorization =
          res.headers.authorization
        this.isLoggedIn = true
      } catch (error: any) {
        this.isLoggedIn = false
        throw error
      }
    },

    async logout() {
      try {
        await axiosInstance.post('/api/auth/logout')
        delete axiosInstance.defaults.headers.common.authorization
        this.isLoggedIn = false
      } catch (e) {
        delete axiosInstance.defaults.headers.common.authorization
        this.isLoggedIn = false
        throw new Error('Logout failed')
      }
    },

    async reissue(origin: any) {
      try {
        const res = await axiosInstance.get('/api/auth/reissue')
        origin.headers.authorization = res.headers.authorization
        axiosInstance.defaults.headers.common.authorization =
          res.headers.authorization
        this.isLoggedIn = true
      } catch (e) {
        this.isLoggedIn = false
      }
    },

    async getRole() {
      try {
        if (!this.isLoggedIn) return 'Public'
        const res = await axiosInstance.get('/api/auth/role')
        return res.data.role
      } catch (e) {
        this.isLoggedIn = false
        return 'Public'
      }
    }
  }
})
