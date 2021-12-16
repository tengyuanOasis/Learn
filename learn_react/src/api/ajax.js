import axios from 'axios';
import fs from 'fs';
export default function ajax(url = '', params = {}, type = 'GET') {
  let promise;
  return new Promise(((resolve, reject) => {
    type = type.toUpperCase()
    if (type === 'GET') {
      let str = '';
      Object.keys(params).forEach((value, index) => {
        if (index + 1 === Object.keys(params).length) {
          str += value + '=' + params[value];
        } else {
          str += value + '=' + params[value] + '&';
        }
      });
      url += '?' + str;
      promise = axios.get(url);
    } else if (type === 'POST') {
      promise = axios.post(url, params);
    }

    //2.返回请求结果
    promise.then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  }))
}
