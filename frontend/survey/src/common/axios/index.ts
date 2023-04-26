import axios from 'axios'

export const axiosInstance = axios.create({
  withCredentials: true
})

axiosInstance.defaults.baseURL = import.meta.env.VITE_API_URL
axiosInstance.interceptors.request.use((request) => {
  request.url = request.url?.replace('/api', '')
  return request
})
