import { Aorders ,Borders} from '../services/admin';

export default {
  namespace: 'orders',
  state: {
    products: []
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload};
    },
  },
  effects: {
    *loadData({ payload }, { call, put }) {
      // 参数payload是当前触发effects时传递的数据
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
