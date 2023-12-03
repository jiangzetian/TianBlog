import {instance as axios,base} from '@/api/http'

const articleDetailsAPI = {
  //获取文章详情
  detail(params){
    return axios({
      method:'GET',
      url:`${base.baseurl}/index/article/detail`,
      params:params,
    })
  },
  //文章访问量增加
  addVisits(data){
    return axios({
      method:'PUT',
      url:`${base.baseurl}/index/article/addVisits`,
      data:data,
    })
  },
};

export default articleDetailsAPI;
