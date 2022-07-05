import axios from 'axios'
const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVICE_URL
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    // 做一些请求错误的事情
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据执行操作
    if (response.data.code === 200) {
      return response.data
    }
    return response
  },
  function (error) {
    // 对响应错误执行操作
    return Promise.reject(error)
  }
)
const request = (data) => {
  if (data.method.toLowerCase() === 'get') {
    data.params = data.method || {}
  }
  return instance(data)
}
export default request
