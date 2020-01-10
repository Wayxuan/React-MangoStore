import { Aorders ,Borders} from '../services/admin';

export default {
  namespace: 'orders',
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
      const result = yield call(Aorders);
      const ress=yield call(Borders)
      yield put({
        type: 'save',
        payload: {
          products: [...result.data,...ress.data],
        },
      });
    },
  },
};
