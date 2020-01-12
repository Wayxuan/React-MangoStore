import {list} from "../services/admin"

export default({
  namespace:"search",
  state:{
    products:[],
    loading:false,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload, loading: false };
    },
    showLoading(state, action) {
      return { ...state, loading: true };
    },
  },
  effects:{
    *loadData({payload},{call,put}){
      console.log('第一波data')
      yield put({ type: 'showLoading' });
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
