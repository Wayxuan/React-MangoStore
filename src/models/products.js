import { list,Dele,Detail } from '../services/admin';

export default {
  namespace: 'products',
  state: {
    products: [],
    loading: false,
    _id:{},
    product:[]
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload, loading: false };
    },
    showLoading(state, action) {
      return { ...state, loading: true };
    },
    editor(state,{payload}){
      console.log("我准备好了",payload)
        return {...state,...payload}
    }
  },
  effects: {
    *loadData({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });
      const result = yield call(list);
      yield put({
        type: 'save',
        payload: {
          products: result.data,
        },
      });
    },
    *delete({payload},{call,put}){
      yield call(Dele,payload)
      yield put({
      type: 'loadData'
    })
    },
    *detail({payload},{call,put}){
      const result=yield call(Detail,payload.id)
      yield put({
        type:'editor',
        payload:{
          product:result.data
        }
      })
    }
  },
};
