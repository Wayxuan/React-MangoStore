import * as instance from "../utils/authAxios"

//获取登录接口
export const log = (params)=>{
  return instance.POST('/api/customer/login',params)
}

//获取商品列表
export const list =()=>{
  return instance.GET('/api/detail')
}

//获取用户列表
export const users =()=>{
  return instance.GET('/api/customer/cus')
}

//获取分类列表
export const categories =()=>{
  return instance.GET('/api/category')
}

//获取已售订单列表
export const Aorders =()=>{
  return instance.GET('/api/order/allO')
}
//获取已售订单列表
export const Borders =()=>{
  return instance.GET('/api/cart/allC')
}
