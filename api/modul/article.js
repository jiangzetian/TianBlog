import {instance as axios,base} from '@/api/http'

const articleAPI = {
  //获取文章列表
  list(params){
    return axios({
      method:'GET',
      url:`${base.baseurl}/index/article/page`,
      params:params,
    })
  },
  //获取分类
  category(params){
    return axios({
      method:'GET',
      url:`${base.baseurl}/index/category/index`,
      params:params,
    })
  },
};

export default articleAPI;
