import { Aorders } from '../services/admin';

export default {
  namespace: 'Aorders',
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
      // 参数payload是当前触发effects时传递的数据，调用list方法参数传页码
      const result = yield call(Aorders);
      console.log(result);
      yield put({
        type: 'save',
        payload: {
          products: result.data,
        },
      });
    },
  },
};
