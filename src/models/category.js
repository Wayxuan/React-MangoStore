import { categories,Cate } from '../services/admin';

export default {
  namespace: 'category',
  state: {
    data: [],
    name:[]
  },
  reducers: {
    save({ state }, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *loadData({ payload }, { call, put }) {
      const result = yield call(categories);
      yield put({
        type: 'save',
        payload: {
          category: result.data,
        },
      });
    },
    *cate({payload},{call,put}){
      console.log(payload)
      const result=yield call(Cate,payload);
      console.log(result)
      yield put({
        type: 'save'
      });
    }
  },
};
