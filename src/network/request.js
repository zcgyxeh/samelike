import axios from "axios";

// 超时
const instance  =  axios.create({
  baseURL:'http://kumanxuan1.f3322.net:8001',
  timeout:5000
})

instance.interceptors.request.use(config=>{
  return config;
},err=>{
  console.log(err)
})


instance.interceptors.response.use(res=>{
  return res.data
},err=>{
  console.log(err);
})

export default instance;
