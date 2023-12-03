import {instance as axios,base} from '@/api/http'

const appAPI = {
  //访问量
  addVisits(params){
    return axios({
      method:'PUT',
      url:`${base.baseurl}/index/index/addallvisits`,
      params:params,
    })
  },
};

export default appAPI;
