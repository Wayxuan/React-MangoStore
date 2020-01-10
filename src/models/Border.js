import { Borders } from '../services/admin';

export default {
  namespace: 'Borders',
  state: {
    products: []
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload,loading:false};
    },
    showLoading(state,action){
      return{...state,loading:true}
    }
  },
  effects: {
    *loadData({ payload }, { call, put }) {
      yield put({type:'showLoading'})
      const result = yield call(Borders);
      yield put({
        type: 'save',
        payload: {
          products: result.data,
        },
      });
    },
  },
};
