var root = 'https://cnodejs.org/api/v1'
var axios = require('axios')

function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios(method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  }).then(function (res) {
    if (res.data.success === true) {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      } else {
        window.alert('error:' + JSON.stringfly(res.data))
      }
    }
  }).catch(function (err) {
    let res = err.response
    if (err) {
      window.alert('api error,HTTP CODE:' + res.status)
    }
  })
}

export default{
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },

}