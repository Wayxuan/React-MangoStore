import { categories } from '../services/admin';

export default {
  namespace: 'category',
  state: {
    category: []
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
  },
};
