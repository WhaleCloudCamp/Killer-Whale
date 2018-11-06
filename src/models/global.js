import { gPage } from "services/api";
import { notification } from 'antd';

import {
  getTestSouData,
  getTestComData,
  getCombinationSouData,
  addComponent,
  moveComponent,
  deleteComponent
} from "utils/data_utils";


export default {
  namespace: "global",
  state: {
    cneterscale: 100,
    sourceData: getTestSouData(),
    combinationSouData:getCombinationSouData(),
    components: getTestComData(),
    showItemData: {}
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  },
  effects: {
    *changeScale({ payload }, { call, put, select }) {
      yield put({
        type: "save",
        payload: {
          cneterscale: payload
        }
      });
    },
    *delItem({ payload }, { call, put, select }) {
      const { sourceData, components } = yield select(state => state.global);
      const data = deleteComponent(components, payload.id);
      yield put({
        type: "save",
        payload: {
          components: data
        }
      });
    },
    *addItem({ payload }, { call, put, select }) {
      const { sourceData, components } = yield select(state => state.global);
      if (payload.index === "max") payload.index = components.length;
      const data = addComponent(
        sourceData,
        components,
        payload.item,
        payload.index
      );
      yield put({
        type: "save",
        payload: {
          sourceData: data.leftData,
          components: data.centerData
        }
      });
    },
    *moveItem({ payload }, { call, put, select }) {
      const { dragIndex, hoverIndex } = payload;
      const { components } = yield select(state => state.global);
      const data = moveComponent(components, dragIndex, hoverIndex);
      yield put({
        type: "save",
        payload: {
          components: data
        }
      });
    },
    *showItem({ payload }, { call, put }) {
      const data = Object.assign({},payload||{});
      yield put({
        type: "save",
        payload: {
          showItemData: data
        }
      });
    },
    *changeItem({ payload }, { call, put,select }) {
      if(!payload.id)return;
      const { components } = yield select(state => state.global);
      components.map(item=>{
        if(item.id===payload.id){
          item = Object.assign({},payload||{});
        }
      })
      yield put({
        type: "save",
        payload: {
          components: components
        }
      });
    },
    *changeItemProp({ payload }, { call, put,select }) {
      // payload={
      //   id:12,
      //   key:'sdsa',
      //   value:'121'
      // }
      if(!payload.id)return;

      const { components } = yield select(state => state.global);
      components.map(item=>{
        if(item.id===payload.id){
          item[payload.key] = payload.value;
        }
      })
      yield put({
        type: "save",
        payload: {
          components: components
        }
      });
    },
    *gPage({ payload }, { call, put, select }) {
      const { components } = yield select(state => state.global);
      console.log(components);
      const response = yield call(gPage, { components });
      console.log(response);
      if(response&&response.filePath){
        notification.success({
          message: "将在新页面中下载，请关闭弹窗拦截",
          description: "如果没有正确下载，请联系开发人员",
        });
        window.open(`http://localhost:3000/download/?filePath=${response.filePath}`); 
      }
      yield put({
        type: "save",
        payload: {
          text: response || "no data"
        }
      });
    },
    *throwError() {
      throw new Error("hi error");
    }
  }
};
