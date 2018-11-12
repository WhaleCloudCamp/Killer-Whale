import { gPage } from "services/api";
import { notification, message } from "antd";

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
    views: [],
    showPage: 0,
    cneterscale: 100,
    sourceData: getTestSouData(),
    combinationSouData: getCombinationSouData(),
    components: [],
    showItemData: {}
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({
          type: "initComponents"
        });
      });
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  },
  effects: {
    *initComponents({ payload }, { call, put, select }) {
      const { views, showPage } = yield select(state => state.global);
      let pageIndex = showPage;
      if (
        !views ||
        views.length === 0 ||
        views.length < showPage ||
        !views[showPage].components
      ) {
        views.push({
          name: "home",
          components: []
        });
        pageIndex = 0;
      }
      yield put({
        type: "save",
        payload: {
          views: views,
          showPage: pageIndex
        }
      });
    },
    *changeScale({ payload }, { call, put, select }) {
      yield put({
        type: "save",
        payload: {
          cneterscale: payload
        }
      });
    },
    *delItem({ payload }, { call, put, select }) {
      const { sourceData, views, showPage } = yield select(
        state => state.global
      );
      const { components } = views[showPage];
      const data = deleteComponent(components, payload.id);
      yield put({
        type: "save",
        payload: {
          components: data
        }
      });
    },
    *addchildrenCom({ payload }, { call, put, select }) {
      console.log("addchildrenCom");

      const { sourceData, views, showPage } = yield select(
        state => state.global
      );
      const { components } = views[showPage];
      const { index, parentId, item } = payload;
      console.log(views);

      components.map(com => {
        if (com.id === parentId) {
          const childrenCom = com.childrenCom;
          let itemIndex = index === "max" ? childrenCom.length : index;
          const data = addComponent(sourceData, childrenCom, item, itemIndex);
          com.childrenCom = data.centerData;
        }
        return com;
      });
      console.log(views);

      yield put({
        type: "save",
        payload: {
          // sourceData: data.leftData,
          views: views
        }
      });
    },
    *addItem({ payload }, { call, put, select }) {
      const { sourceData, views, showPage } = yield select(
        state => state.global
      );
      const { components } = views[showPage];
      if (payload.index === "max") payload.index = components.length;
      const data = addComponent(
        sourceData,
        components,
        payload.item,
        payload.index
      );
      views[showPage].components = data.centerData;
      yield put({
        type: "save",
        payload: {
          // sourceData: data.leftData,
          views: views
        }
      });
    },
    *moveItem({ payload }, { call, put, select }) {
      const { dragIndex, hoverIndex } = payload;
      const { views, showPage } = yield select(state => state.global);
      const { components } = views[showPage];
      const data = moveComponent(components, dragIndex, hoverIndex);
      views[showPage].components = data;
      yield put({
        type: "save",
        payload: {
          views: views
        }
      });
    },
    *showItem({ payload }, { call, put }) {
      const data = Object.assign({}, payload || {});
      yield put({
        type: "save",
        payload: {
          showItemData: data
        }
      });
    },
    *changeItem({ payload }, { call, put, select }) {
      if (!payload.id) return;
      const { components } = yield select(state => state.global);
      components.map(item => {
        if (item.id === payload.id) {
          item = Object.assign({}, payload || {});
        }
      });
      yield put({
        type: "save",
        payload: {
          components: components
        }
      });
    },
    *changeItemProp({ payload }, { call, put, select }) {
      // payload={
      //   id:12,
      //   key:'sdsa',
      //   value:'121'
      // }
      
      if (!payload.id) return;
      const { views, showPage } = yield select(state => state.global);
      const { components } = views[showPage];
      components.map(item => {
        if (item.id === payload.id) {
          switch (item.component.propTypes[payload.key]) {
            case "bool":
              payload.value = payload.value === "true";
              break;
            case "number":
              payload.value = parseInt(payload.value);
              break;
            case "array":
              payload.value = JSON.parse(payload.value);
              break;
            default:
              break;
          }
          item.component.props[payload.key] = payload.value;
        }
      });
      yield put({
        type: "save",
        payload: {
          components: components
        }
      });
    },
    *gPage({ payload }, { call, put, select }) {
      const { views } = yield select(state => state.global);
      views.push(payload);
      yield put({
        type: "save",
        payload: {
          views: views
        }
      });
    },
    *dPage({ payload }, { call, put, select }) {
      const { views } = yield select(state => state.global);
      if (views.length === 1) return message.error("至少要保留一个页面");
      views.map((item, index) => {
        if (item.name === payload.name) {
          views.splice(index, 1);
        }
      });
      yield put({
        type: "save",
        payload: {
          views: views
        }
      });
    },
    *changeShowPage({ payload }, { call, put, select }) {
      const { views, showPage } = yield select(state => state.global);
      let showPageNew = showPage;
      views.map((item, index) => {
        if (item.name === payload.name) {
          showPageNew = index;
        }
      });
      yield put({
        type: "save",
        payload: {
          showPage: showPageNew
        }
      });
    },
    *downloadCode({ payload }, { call, put, select }) {
      const { views } = yield select(state => state.global);
      console.log(views);
      const response = yield call(gPage, { views });
      console.log(response);
      if (response && response.filePath) {
        notification.success({
          message: "将在新页面中下载，请关闭弹窗拦截",
          description: "如果没有正确下载，请联系开发人员"
        });
        window.open(
          `http://localhost:3000/download/?filePath=${response.filePath}`
        );
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
