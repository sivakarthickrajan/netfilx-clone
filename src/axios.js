import axios from "axios"
export const api_key="91f1af983c0bd6bc34f5c10407cf7896";
const BASE_URL="https://api.themoviedb.org/3";
const api=axios.create({baseURL:BASE_URL});

// api.interceptors.request.use((config)=>{
//     config.params=config.params||{};
//     config.params["api_key"]=api_key;
//     return config;
// })



export default api;
