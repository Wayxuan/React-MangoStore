import * as instance from "../utils/authAxios"

//获取登录接口
export const log = (params)=>{
  return instance.POST('/api/customer/login',params)
}
