import { gPage } from "services/api";
import { notification, message } from "antd";
import key from "keymaster";

import { getTestSouData, addComponent, moveComponent, deleteComponent } from "utils/data_utils";

export default {
  namespace: "global",
  state: {
    views: [],
    showPage: 0,
    cneterscale: 100,
    sourceData: getTestSouData(),
    hidevalue: "true",
    components: [],
    showItemData: {},
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({
          type: "initComponents",
        });
      });
    },
    keyEvent({ dispatch }) {
      key("up", () => {
        dispatch({
          type: "keyMoveItem",
          payload: {
            type: "up",
          },
        });
      });
      key("down", () => {
        dispatch({
          type: "keyMoveItem",
          payload: {
            type: "down",
          },
        });
      });
      key("backspace,del,delete", () => {
        dispatch({
          type: "keyDeleteItem",
        });
      });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *keyDeleteItem({ payload }, { call, put, select }) {
      const { showItemData } = yield select(state => state.global);
      if (showItemData && showItemData.id) {
        yield put({
          type: "delItem",
          payload: {
            id: showItemData.id,
          },
        });
      }
    },
    *keyMoveItem({ payload }, { call, put, select }) {
      const { showItemData } = yield select(state => state.global);
      const { type } = payload;
      if (showItemData && showItemData.id) {
        let nextIndex = "";
        if (type === "up" && showItemData.index !== 0) {
          nextIndex = showItemData.index - 1 < 0 ? 0 : showItemData.index - 1;
        } else if (type === "down" && showItemData.index !== showItemData.maxLength - 1) {
          nextIndex = showItemData.index + 1;
        }
        if (!nextIndex && nextIndex !== 0) return;
        yield put({
          type: "moveItem",
          payload: {
            dragIndex: showItemData.index,
            hoverIndex: nextIndex,
            parentId: showItemData.parentId,
          },
        });
        yield put({
          type: "save",
          payload: {
            showItemData: { ...showItemData, index: nextIndex },
          },
        });

        // yield put({
        //   type: "delItem",
        //   payload: {
        //     id: showItemData.id,
        //   },
        // });
      }
    },
    *initComponents({ payload }, { call, put, select }) {
      const { views, showPage } = yield select(state => state.global);
      let pageIndex = showPage;
      if (!views || views.length === 0 || views.length < showPage || !views[showPage].components) {
        views.push({
          name: "Home",
          components: [],
        });
        pageIndex = 0;
      }
      yield put({
        type: "save",
        payload: {
          views: views,
          showPage: pageIndex,
        },
      });
    },
    *changeScale({ payload }, { call, put, select }) {
      yield put({
        type: "save",
        payload: {
          cneterscale: payload,
        },
      });
    },
    *changeHide({ payload }, { call, put, select }) {
      yield put({
        type: "save",
        payload: {
          hidevalue: payload,
        },
      });
    },
    *delItem({ payload }, { call, put, select }) {
      const { views, showPage, showItemData } = yield select(state => state.global);
      const { components } = views[showPage];
      const data = deleteComponent(components, payload.id);
      if (showItemData && showItemData.id === payload.id) {
        yield put({
          type: "save",
          payload: {
            components: data,
            showItemData: {},
          },
        });
      } else {
        yield put({
          type: "save",
          payload: {
            components: data,
          },
        });
      }
    },
    *addchildrenCom({ payload }, { call, put, select }) {
      const { sourceData, views, showPage } = yield select(state => state.global);
      let { components } = views[showPage];
      const { index, parentId, item } = payload;

      function findComAndAddComponent(arrs, parentId, item) {
        arrs.map(arr => {
          const childrenCom = arr.childrenCom;
          if (arr.id === parentId) {
            let itemIndex = index === "max" ? childrenCom.length : index;
            const data = addComponent(sourceData, childrenCom, item, itemIndex);
            arr.childrenCom = data.centerData;
          } else if (childrenCom && childrenCom.length > 0) {
            arr.childrenCom = findComAndAddComponent(childrenCom, parentId, item);
          }
          return arr;
        });
        return arrs;
      }
      components = findComAndAddComponent(components, parentId, item);
      views[showPage].components = components;
      yield put({
        type: "save",
        payload: {
          views: views,
        },
      });
    },
    *addItem({ payload }, { call, put, select }) {
      let { parentId, item, index } = payload;
      if (parentId && parentId !== "whalemainroot") {
        yield put({
          type: "addchildrenCom",
          payload,
        });
        return;
      }
      const { sourceData, views, showPage } = yield select(state => state.global);
      const { components } = views[showPage];
      if (index === "max") index = components.length;
      const data = addComponent(sourceData, components, item, index);
      views[showPage].components = data.centerData;
      yield put({
        type: "save",
        payload: {
          views: views,
        },
      });
    },
    *moveItem({ payload }, { call, put, select }) {
      const { dragIndex, hoverIndex, parentId } = payload;
      const { views, showPage } = yield select(state => state.global);
      let { components } = views[showPage];
      function findComMobeItem(arrs, parentId, dragIndex, hoverIndex) {
        if (parentId !== "whalemainroot") {
          arrs.map(item => {
            const childrenCom = item.childrenCom;
            if (item.id === parentId) {
              const data = moveComponent(item.childrenCom, dragIndex, hoverIndex);
              item.childrenCom = data;
            } else if (childrenCom && childrenCom.length > 0) {
              item.childrenCom = findComMobeItem(childrenCom, parentId, dragIndex, hoverIndex);
            }
            return item;
          });
          return arrs;
        } else {
          const data = moveComponent(arrs, dragIndex, hoverIndex);
          return data;
        }
      }
      views[showPage].components = findComMobeItem(components, parentId, dragIndex, hoverIndex);
      yield put({
        type: "save",
        payload: {
          views: views,
        },
      });
    },
    *showItem({ payload }, { call, put }) {
      const data = Object.assign({}, payload || {});
      yield put({
        type: "save",
        payload: {
          showItemData: data,
        },
      });
    },
    *changeItemProp({ payload }, { call, put, select }) {
      const { id, key, value } = payload;
      if (!id) return;
      const { views, showPage } = yield select(state => state.global);
      let { components } = views[showPage];
      function findComAndChangeProp(arrs, id, key, value) {
        arrs.map(item => {
          const childrenCom = item.childrenCom;
          if (item.id === payload.id) {
            switch (item.component.propTypes[payload.key]) {
              case "bool":
                payload.value = payload.value === "true";
                break;
              case "number":
                payload.value = parseInt(payload.value, 10);
                break;
              case "array":
                payload.value = JSON.parse(payload.value);
                break;
              default:
                break;
            }
            item.component.props[payload.key] = payload.value;
          } else if (childrenCom && childrenCom.length > 0) {
            item.childrenCom = findComAndChangeProp(childrenCom, id, key, value);
          }
          return item;
        });
        return arrs;
      }
      components = findComAndChangeProp(components, id, key, value);
      yield put({
        type: "save",
        payload: {
          components: components,
        },
      });
    },
    *gPage({ payload }, { call, put, select }) {
      console.log("gPage");

      const { views } = yield select(state => state.global);
      views.push(payload);
      yield put({
        type: "save",
        payload: {
          views: views,
        },
      });
    },
    *dPage({ payload }, { call, put, select }) {
      console.log("dPage");

      const { views } = yield select(state => state.global);
      if (views.length === 1) return message.error("至少要保留一个页面");
      const newViews = [];
      views.map(item => {
        if (item.name !== payload.name) {
          newViews.push(item);
        }
        return item;
      });
      yield put({
        type: "save",
        payload: {
          views: newViews,
        },
      });
    },
    *changeShowPage({ payload }, { call, put, select }) {
      console.log("changeShowPage");

      const { views, showPage } = yield select(state => state.global);
      let showPageNew = showPage;
      views.map((item, index) => {
        if (item.name === payload.name) {
          showPageNew = index;
        }
        return item;
      });
      yield put({
        type: "save",
        payload: {
          showPage: showPageNew,
        },
      });
    },
    *downloadCode({ payload }, { call, put, select }) {
      console.log("downloadCode");

      const { views } = yield select(state => state.global);
      console.log(views);
      const response = yield call(gPage, { views });
      console.log(response);
      if (response && response.filePath) {
        notification.success({
          message: "将在新页面中下载，请关闭弹窗拦截",
          description: "如果没有正确下载，请联系开发人员",
        });
        window.open(`http://localhost:3000/download/?filePath=${response.filePath}`);
      }
      yield put({
        type: "save",
        payload: {
          text: response || "no data",
        },
      });
    },
    *throwError() {
      throw new Error("hi error");
    },
  },
};
