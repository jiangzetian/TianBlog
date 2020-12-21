import {instance as axios,base} from '@/api/http'

const indexAPI = {
  //获取文章列表
  getRadar(params){
    return axios({
      method:'GET',
      url:`${base.baseurl}/index/charts/index`,
      params:params,
    })
  },
  //获取联系方式数据
  getContact(params){
    return axios({
      method:'GET',
      url:`${base.baseurl}/index/contact/index`,
      params:params,
    })
  },
};

export default indexAPI;
