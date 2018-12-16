/**
 * Created by superman on 17/2/16.
 * http配置
 */
'use strict'

import axios from 'axios'
import utils from './utils.js'
import {
  Indicator,Toast,
  MessageBox
} from 'mint-ui'
import router from '../../router/index'


axios.defaults.baseURL = window.location.protocol + "//" + window.location.host + '/';
// axios.defaults.baseURL = "http://118.190.0.86/"
// console.log(window.location);
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.method = "POST";
// axios 配置
axios.defaults.timeout = 5000;//5000


// http request 拦截器
axios.interceptors.request.use(
  config => {
    // Do something before request is sents
    // console.log(utils.getToken);
    // if (utils.getToken) {
    //   config.headers.token = utils.getToken;
    // }
    // console.log(window.localStorage.token);
    // if (window.localStorage.token) {
    //   config.headers['X-Auth-Token'] = window.localStorage.token;
    // }

    Open();
    return config;
  },
  err => {
    return Promise.reject(err);
  });



axios.interceptors.response.use(
  response => {
    Close();
    //会话过期跳登录页
    if (response.data.code == '401') {
      Toast("会话过期，请重新登录!");
      utils.login();

      // router.replace({
      //   name: 'login'
      // })
      // throw new Error()
    }else if(response.data.code == '1000'||response.data.code == '500'){
      Toast(response.data.errMsg);
    }

    return response;
  },function(error){
    Close();
    //console.log(JSON.stringify(error));
    if(error.code == 'ECONNABORTED'){
      Toast("抱歉，加载失败～");
      return Promise.reject(error)
    }
  }
);



let count = 0;

export function Open() {
  Indicator.open();
  count++;
}

export function Close() {
  if (count > 0) {
    count--;
  }

  if (count <= 0) Indicator.close();
}

export default axios;
