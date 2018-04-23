import axios from 'axios'
import _ from 'lodash'
import { SYSTEM_ACCOUNT_TOKEN } from '../configs/env.const'

// const apiUrls = '/'
const axiosInstance = axios.create({
  // baseURL: apiUrls,
  // timeout: 1000,
  withCredentials: true,
})

axiosInstance.defaults.headers.post['content-Type'] = 'application/json'
axiosInstance.defaults.headers.get['content-Type'] = 'application/json'

axiosInstance.interceptors.request.use(
  function(config) {
    let token = window.sessionStorage.getItem(SYSTEM_ACCOUNT_TOKEN)
    // Do something before request is sent
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error)
    //   if (error.response) {
    //     switch (error.response.status) {
    //       case 401:
    //         // 返回 401 清除token信息并跳转到登录页面
    //         store.commit(types.LOGOUT)
    //         router.replace({
    //           path: 'login',
    //           query: { redirect: router.currentRoute.fullPath },
    //         })
    //     }
    //   }
    //   return Promise.reject(error.response.data) // 返回接口返回的错误信息
  },
)

export default class {
  static getApiHost(name: string): ApiHost {
    return new ApiHost(name)
  }
}

class ApiHost {
  private _name: string
  constructor(name) {
    this._name = name
  }

  call(path, method, urlParams, bodyParams, options) {
    let configs: Object = {
      url: `/${this._name}${path}`,
      params: urlParams ? urlParams : '',
      // post: { headers: { 'content-type': 'application/json' } },
      method: method,
      data: bodyParams,
    }
    if (!_.isEmpty(options)) {
      configs = _.assignIn(configs, options)
    }
    return axiosInstance.request(configs).then(res => {
      if (res.data.Success) {
        return Promise.resolve(res.data.Data)
      } else {
        return Promise.reject(res.data.Error)
      }
    })
  }
  get(path, urlParams?, options?) {
    return this.call(path, 'get', urlParams, null, options)
  }
  post(path, bodyParams, options?) {
    return this.call(path, 'post', null, bodyParams, options)
  }
  put(path, bodyParams, options?) {
    return this.call(path, 'put', null, bodyParams, options)
  }
}
