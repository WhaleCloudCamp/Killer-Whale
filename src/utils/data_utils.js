const testAction = {
  destination: {
    droppableId: "centerPanel",
    index: 3
  },
  draggableId: "leftPanel1",
  reason: "",
  source: {
    droppableId: "leftPanel",
    index: undefined
  },
  type: ""
};
const initComData = {
  id: "",
  component: {
    type: "",
    props: [],
    style: {}
  },
  childrenCom: []
};
const testComData = [
  {
    id: 12341232,
    component: {
      type: "Button",
      props: { title: "确定", onClick: e => console.log("1232") },
      style: {
        height: 200,
        width: 100
      }
    },
    childrenCom: []
  },
  {
    id: 3535433,
    component: {
      type: "Button",
      props: { title: "确定" },
      style: {
        height: 200,
        width: 100
      }
    },
    childrenCom: []
  }
];
const initSouData = {
  id: 12323213,
  type: "Button",
  props: {},
  style: {}
};
const testSouData = [
  {
    id: 534433,
    type: "Button",
    props: { title: "确定" },
    style: {}
  },
  {
    id: 53234433,
    type: "Label",
    props: { type: "default", size: "xl", text: "标题" },
    style: {
      height: 200,
      width: 100
    }
  }
];

export function getTestSouData() {
  return testSouData;
}
export function getTestComData() {
  return testComData;
}
/**
 * 根据id取的数组项
 * @param {*} data
 * @param {*} id
 */
export function getItemById(data, id) {
  const newData = data.filter(item => item.id === id);
  return newData[0];
}

function getAddData(item) {
  const data = {
    id: new Date().getTime(),
    component: {
      type: item.type,
      props: item.props,
      style: item.style
    },
    childrenCom: []
  };
  return data;
}
function addComponent(leftData, centerData, action) {
  const item = getItemById(leftData, action.draggableId);
  if (!item) return { leftData, centerData };
  const initData = getAddData(item);
  centerData.splice(action.destination.index, 0, initData);
  return { leftData, centerData };
}
function deleteComponent(leftData, centerData, action) {
  for (let key = centerData.length - 1; key >= 0; key--) {
    if (centerData[key].id === action.draggableId) {
      centerData.splice(key, 1);
      break;
    }
  }
  return { leftData, centerData };
}
function changeComponent(leftData, centerData, action) {
  const { destination, source } = action;
  console.log(action);

  centerData = reorder(centerData, source.index, destination.index);
  return { leftData, centerData };
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export function dndAction(leftData, centerData, action = testAction) {
  const { destination, source } = action;
  if (!destination) {
    if (source.droppableId === "centerPanel") {
      return deleteComponent(leftData, centerData, action);
    }
    return { leftData, centerData };
  }
  if (
    source.droppableId === "leftPanel" &&
    destination.droppableId === "centerPanel"
  ) {
    //从左边列表移到右边列表，添加
    return addComponent(leftData, centerData, action);
  } else if (
    source.droppableId === "centerPanel" &&
    destination.droppableId === "leftPanel"
  ) {
    //从右边移到左边，删除
    return deleteComponent(leftData, centerData, action);
  } else if (
    source.droppableId === "centerPanel" &&
    destination.droppableId === "centerPanel"
  ) {
    //从右边移到右边，交换位置
    return changeComponent(leftData, centerData, action);
  }
  return { leftData, centerData };
}
