import {users} from "../services/admin"

export default({
  namespace:"users",
  state:{
    users:[]
  },
  reducers:{
    save({state},{payload}){
      return {...state,...payload}
    }
  },
  effects:{
    *loadData({payload},{call,put}){
      const result=yield call(users)
      yield put({
        type:"save",
        payload:{
          products:result.data
        }
      })
    }
  }
})
