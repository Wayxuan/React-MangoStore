import {list} from "../services/admin"

export default({
  namespace:"search",
  state:{
    products:[],
    product:{}
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload, loading: false };
    }
  },
  effects:{
    *loadData({payload},{call,put}){
      const result =yield call(list);
      console.log(result,result.data)
      yield put({
        type: 'save',
        payload: {
          products: result.data,
        },
      });
    }
  }
})
