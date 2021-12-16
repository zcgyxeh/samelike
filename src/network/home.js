import {request} from "./request";
// 增加一个层
export  function getHomeMultidata(){
  return request({
    url:'/home/Multidata'
  })
}

export function getHomeGoods(type,page){
    return request({
      url:'/home/data',
      params:{
        type,
        page
      }
    })
}


