import {Add,Category} from "../services/admin"

export default({
  namespace:"adde",
  state:{
    product:{},
    menu:[]
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload, };
    },
    menu(state, { payload }) {
        return { ...state, ...payload };
      }
  },
  effects:{
    *addData({payload},{call,put}){
      console.log(payload)
      const result =yield call(Add,payload);
      console.log(result)
      yield put({
        type: 'save',
        payload: {
          product: result.data,
        },
      });
    },
    *category({ payload }, { call, put }) {
      const result = yield call(Category);
      console.log(result)
      yield put({
        type: 'menu',
        payload: {
          menu: result.data,
        },
      });
    },
  }
})
