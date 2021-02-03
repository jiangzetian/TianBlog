import {instance as axios,base} from '@/api/http'

const aboutAPI = {
  //获取雷达图数据
  getRadar(params){
    return axios({
      method:'GET',
      url:`${base.baseurl}/index/charts/index`,
      params:params,
    })
  },
  //获取简历数据
  getResume(params){
    return axios({
      method:'GET',
      url:`${base.baseurl}/index/resume/index`,
      params:params,
    })
  },
};

export default aboutAPI;
