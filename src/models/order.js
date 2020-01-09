import { Aorders ,Borders} from '../services/admin';

export default {
  namespace: 'orders',
  state: {
    products: []
  },
  reducers: {
    save(state, { payload }) {
      console.log(state);
      console.log(payload);
      return { ...state, ...payload};
    },
  },
  effects: {
    *loadData({ payload }, { call, put }) {
      // 参数payload是当前触发effects时传递的数据
      const result = yield call(Aorders);
      console.log(result);
      const ress=yield call(Borders)
      console.log(ress)
      yield put({
        type: 'save',
        payload: {
          products: [...result.data,...ress.data],
        },
      });
    },
  },
};
