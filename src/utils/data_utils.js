import { DataComponet } from "./data_componet.js";

export function getTestSouData() {
  return DataComponet;
}

/**
 * 根据id取的数组项
 * @param {*} data
 * @param {*} id
 */
export function getItemById(data, id) {
  const newData = data.filter(item => item.id === id);
  return Object.assign({}, newData[0] || {});
}

function getAddData(item) {
  const data = {
    id: new Date().getTime(),
    component: JSON.parse(JSON.stringify(item)),
    childrenCom: []
  };
  return data;
}

export function addComponent(leftData, centerData, item, index) {
  const initData = Object.assign({}, getAddData(item));
  centerData.splice(index, 0, initData);
  return { leftData, centerData };
}

export function deleteComponent(centerData, id) {
  for (let key = centerData.length - 1; key >= 0; key--) {
    if (centerData[key].id === id) {
      centerData.splice(key, 1);
      break;
    } else if (
      centerData[key].childrenCom &&
      centerData[key].childrenCom.length > 0
    ) {
      centerData[key].childrenCom = deleteComponent(
        centerData[key].childrenCom,
        id
      );
    }
  }
  return centerData;
}

export function moveComponent(centerData, dragIndex, hoverIndex) {
  centerData = reorder(centerData, dragIndex, hoverIndex);
  return centerData;
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
