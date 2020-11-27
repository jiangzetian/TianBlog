import axios from '@/api/http'
const articleAPI = {
  //获取相关信息 GET
  list(params){
    return axios({
      method:'GET',
      url:`http://jsonplaceholder.typicode.com/users`,
      params:params,
    })
  },
  //获取相关信息 POST
  // getData2(data){
  //   return axios({
  //     method:'POST',
  //     url:`api/user/info`,
  //     data:data,
  //   })
  // }
};

export default articleAPI;
