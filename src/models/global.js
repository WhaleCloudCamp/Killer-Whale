import { routerRedux } from "dva/router";
const sourceData = getTestSouData();
const components = getTestComData();
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
    *changeItem({ payload }, { call, put }) {
      const { showItemId, components } = yield select(state => state.global);
      const showItem = getItemById(components, showItemId);
    },
    *throwError() {
      throw new Error("hi error");
    }
  }
};
