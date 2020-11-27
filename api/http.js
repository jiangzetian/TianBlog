//引入相关模块
import axios from 'axios';
import { Message,Loading } from 'element-ui'

const base = {
  imgApiUrl:process.env.VUE_APP_API_BASE_URL,
  baseurl:process.env.VUE_APP_API_BASE_URL
};
//设置超时时间
const  instance = axios.create({
  timeout:1000*10
});

//设置公共路径 和 Content-Type
// instance.defaults.baseURL = base.baseurl;
instance.defaults.headers.common['Content-Type'] = 'application/json';

//发送请求拦截
instance.interceptors.request.use(config =>{
    //在此可加入Loading动画//
    //添加token至头部
    // if (localStorage.getItem('token')) {
    //   config.headers.Authorization = localStorage.getItem('token');
    //   config.headers.Accept = "application/json"
    // }
    //成功返回
    return config;
  },error => {
    //失败返回
    return error;
  }
);

//获取结果拦截 response
instance.interceptors.response.use(response=>{
    if(response.data.success){
      //在此关闭Loading动画//
      //正确返回
      return Promise.resolve(response.data);
    }else {
      //发生错误错误信息统一拦截显示
      Message({
        message: response.data.msg?response.data.msg:'请求错误!',
        type: 'error'
      });
      //在此关闭Loading动画//
      //错误返回
      return Promise.reject(response.data);
    }
  }, error=>{
    //请求错误错误信息统一拦截显示
    Message({
      message: error.response.data.msg?error.response.data.msg:'请求错误!',
      type: 'error'
    });
    //在此关闭Loading动画//
    //错误返回
    return Promise.reject(error.response)
  }
);

export default axios;
