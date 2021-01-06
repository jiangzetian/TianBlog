import {instance as axios,base} from '@/api/http'

const linksAPI = {
  //获取联系方式数据
  getContact(params){
    return axios({
      method:'GET',
      url:`${base.baseurl}/index/links/index`,
      params:params,
    })
  },
};

export default linksAPI;
