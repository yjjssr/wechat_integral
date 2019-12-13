// const regeneratorRuntime = require('../lib/runtime.js')
import {domainPrefix} from './config.js'

function get(url, data, cb) {//如何cb返回一个Promise对象，那么then返回的Promise对象为cb返回的Promise对象否则为新建的Promise对象
  const intactURL = `${domainPrefix}${url}`
  return wxRequest("GET", intactURL, data)
    .then(res => cb(res))
    .catch(err => {
      wx.showToast({
        title: `请求失败`,
        icon: 'none',
        duration: 2000
      })
    })
}

function post(url, data, cb) {
  const intactURL = `${domainPrefix}${url}`
  return wxRequest("POST", intactURL, data)
    .then(res => cb(res))
    .catch(err =>{
      wx.showToast({
        title: `请求失败`,
        icon: 'none',
        duration: 2000
      })
    })
}

function wxRequest(method, url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url, 
      data: data,
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
      }

    })
  })

}
export {
  get,
  post

}