import { Detail,Category, ChangeDetail } from '../services/admin';

export default {
  namespace: 'editor',
  state: {
    id: {},
    product: {},
    menu:[]
  },
  reducers: {
    editor(state, { payload }) {
      return { ...state, ...payload };
    },
    menu(state, { payload }) {
        return { ...state, ...payload };
      },
      save(state, { payload }) {
        console.log('我gai好了', payload);
        return { ...state, ...payload };
      },
  },
  effects: {
    *detail({ payload }, { call, put }) {
      const result = yield call(Detail, payload.id);
      yield put({
        type: 'editor',
        payload: {
          product: result.data,
        },
      });
    },
    *category({ payload }, { call, put }) {
        yield put({ type: 'showLoading' });
        const result = yield call(Category);
        console.log(result)
        yield put({
          type: 'menu',
          payload: {
            menu: result.data,
          },
        });
      },
    *change({payload},{call,put}){
      const result=yield call(ChangeDetail,payload);
      console.log(result)
      yield put({
        type:'save',
        payload:{
          products:payload
        }
      })
    }
  },
};
