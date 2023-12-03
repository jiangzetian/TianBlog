import {instance as axios,base} from '@/api/http'

const indexAPI = {
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
