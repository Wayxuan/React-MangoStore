import { list } from '../services/admin';

export default {
  namespace: 'products',
  state: {
    products: [],
    loading: false,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload, loading: false };
    },
    showLoading(state, action) {
      return { ...state, loading: true };
    },
  },
  effects: {
    *loadData({ payload }, { call, put }) {
      console.log("haha")
      yield put({ type: 'showLoading' });
      const result = yield call(list);
      console.log("haha")
      console.log(result)
      yield put({
        type: 'save',
        payload: {
          products: result.data,
        },
      });
    },
  },
};
