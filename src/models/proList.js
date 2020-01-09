import { list } from '../services/admin';

export default {
  namespace: 'product',
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
      // 参数payload是当前触发effects时传递的数据，调用list方法参数传页码
      const result = yield call(list);
      yield put({
        type: 'save',
        payload: {
          products: result.data,
        },
      });
    },
  },
};
