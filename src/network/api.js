import request from "./request";

// 请求首页数据
export const  getHomeDate =()=> request.get('/index/index')

export const  getPopupDate =()=> request.get('/search/index')
//搜索信息
// export const  getSearch =(params)=> request.get('/goods/list',{params})

// export const goLogin = params => request.post('/login', params)

