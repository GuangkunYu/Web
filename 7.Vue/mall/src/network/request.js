import axios from "axios";

export function request(config){
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 2. 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
  })

  // 3. 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error);
  })

  // 4. 发送真正请求
  return instance(config)
}
