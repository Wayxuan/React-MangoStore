import {log} from "../services/admin"
import { message } from "antd";
import {login,isLogined} from "../utils/authLocal"
import { routerRedux } from 'dva'

export default {
  namespace:"login",
  state:{
    name:'',
    password:''
  },
  effects:{
    *login({payload},{call,put}){
      const result=yield call(log,payload)
      if(result.data.code===1){
        if(isLogined()) {
          message.success(
                `${payload.name}欢迎您~`
              );
              yield put(routerRedux.replace("/"))
        } else {
          login(result.data._id)
          message.success(
                `${payload.name}欢迎您~`
              );
              yield put(routerRedux.replace("/"))
        }
      }else{
        message.success(
          `${result.data.info}`
        );
      }
    }
  }
}
