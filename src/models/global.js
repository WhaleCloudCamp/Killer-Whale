import { gPage } from 'services/api';

import {
  getTestSouData,
  getTestComData,
  dndAction,
  getItemById
} from "utils/data_utils";

export default {
  namespace: "global",
  state: {
    text: "hello umi+dva",
    login: false,
    sourceData: getTestSouData(),
    components: getTestComData(),
    showItemId: null
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  },
  effects: {
    *dndAction({ payload }, { call, put, select }) {
      const { sourceData, components } = yield select(state => state.global);
      const data = dndAction(sourceData, components, payload);
      yield put({
        type: "save",
        payload: {
          sourceData: data.leftData,
          components: data.centerData
        }
      });
    },
    *showItem({ payload }, { call, put }) {
      yield put({
        type: "save",
        payload: {
          showItemId: payload.id || null
        }
      });
    },
    *gPage({ payload }, { call, put ,select}) {
      const {components} = yield select(state=>state.global)
      console.log(components)
      const response = yield call(gPage,{components});
      yield put({
        type: "save",
        payload: {
          text: response||'no data'
        }
      });
    },
    *changeItem({ payload }, { call, put ,select}) {
      const { showItemId, components } = yield select(state => state.global);
     console.log(components);
     console.log(payload);
     
      const data = components.map(item=>{
        if(item.id === payload.id){
          console.log(payload);
          
          return payload;
        }else{
          return item;
        }
      })
     console.log(components);
     console.log(data);

      yield put({
        type: "save",
        payload: {
          components: components
        }
      });
    },
    *throwError() {
      throw new Error("hi error");
    }
  }
};
