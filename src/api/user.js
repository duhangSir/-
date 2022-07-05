import request from '../untils/request'
const getLogin = (data) => {
  console.log(data)
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}
const getToken = () => {
  return request({ url: '/captcha', method: 'GET' })
}

export default { getLogin, getToken }
