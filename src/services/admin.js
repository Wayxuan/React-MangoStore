import * as instance from "../utils/authAxios"

//获取登录接口
export const log = (params)=>{
  return instance.POST('/api/customer/login',params)
}

//获取商品列表
export const list =()=>{
 /*  return new Promise((reslove, reject)=>{
    setTimeout(()=>{
      instance.GET('/api/detail')
      .then(res=>{
        reslove(res)
      })
    },10000)
  }) */
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

// 删除所选商品
export const Dele=(id)=>{
  console.log("ww")
  return instance.POST("/api/crud",id)
}

// 获取商品详情
export const Detail=(id)=>{
  return instance.GET("/api/crud/"+id)
}

// 获取商品分类
export const Category=(id)=>{
  return instance.GET("/api/category")
}

// 修改商品详情
export const ChangeDetail=(id)=>{
  return instance.PUT("/api/crud/change",id)
}

// 新增商品
export const Add=(product)=>{
  return instance.POST("/api/crud/add",product)
}

// 修改商品分类
export const Cate=(kind)=>{
    return instance.PUT("/api/type",kind)
}
