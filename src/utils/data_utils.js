import comjson from '../assets/components-description.json';
import { string, bool, number, array } from 'prop-types';
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
  // {
  //   id: 12341232,
  //   component: {
  //     type: "Button",
  //     props: { title: "确定1232" },
  //     style: {
  //       height: 200,
  //       width: 100
  //     }
  //   },
  //   childrenCom: []
  // },
  // {
  //   id: 3535433,
  //   component: {
  //     type: "Button",
  //     props: { title: "确定" },
  //     style: {
  //       height: 200,
  //       width: 100
  //     }
  //   },
  //   childrenCom: []
  // }
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
    props: { type: 'ghost', children: '确定' },
    proTypes: {
      type: string,
      pressIn: bool,
      disabled: bool,
      activeStyle: "",
      loading: bool,
    },
    defaultProps: {
      pressIn: false,
      disabled: false,
      activeStyle: {},
      loading: false,
    },
    style: { width: 100, height: 30 }
  },
  {
    id: 534434,
    type: "Switch",
    props: {
      checked: true,
      disabled: false,
      color: '#4dd865'
    },
    proTypes: {
      checked: bool,
      disabled: bool,
      color: string,

    },
    defaultProps: {
      checked: true,
      checked: true,
      disabled: false,
      color: '#4dd865'
    },
    style: { width: 30, height: 30, margin: 5, }
  },
  {
    id: 534435,
    type: "Radio",
    props: {
      name: '性别',
      defaultChecked: true,
      checked: true,
      disabled: false,

    },
    proTypes: {
      name: string,
      defaultChecked: bool,
      checked: bool,
      disabled: bool,
    },
    defaultProps: {
      name: '性别',
      defaultChecked: true,
      checked: true,
      disabled: false,
    },
    style: { width: 25, height: 20, margin: 5, }

  },
  {
    id: 534436,
    type: "Pagination",
    props: {
      mode: 'pointer',
      current: 1,
      total: 4,
      simple: false,
      disabled: false,

    },
    proTypes: {
      mode: string,
      current: number,
      total: string,
      simple: string,
      disabled: bool,

    },
    defaultProps: {
      mode: 'pointer',
      current: 1,
      total: 4,
      simple: false,
      disabled: false,

    },
    style: { width: '100%' }

  },
  {
    id: 534437,
    type: "Tabs",
    props: {
      tabs: [
        { title: 'First Tab' },
        { title: 'Second Tab' },
        { title: 'Third Tab' },
      ],
      tabBarPosition: 'bottom',
      initialPage: 0,
      swipeable: true,
      animated: true,
      prerenderingSiblingsNumber: 1,
      tabBarBackgroundColor: 'white',
      tabBarActiveTextColor: 'green',
      tabBarInactiveTextColor: 'gray',
      tabBarTextStyle: { fontSize: 16 },

    },
    proTypes: {
      tabs: array,
      tabBarPosition: string,
      initialPage: number,
      swipeable: bool,
      animated: bool,
      prerenderingSiblingsNumber: number,
      tabBarBackgroundColor: string,
      tabBarActiveTextColor: string,
      tabBarInactiveTextColor: string,
      tabBarTextStyle: string,

    },
    defaultProps: {
      tabs: [
        { title: 'First Tab' },
        { title: 'Second Tab' },
        { title: 'Third Tab' },
      ],
      tabBarPosition: 'bottom',
      initialPage: 0,
      swipeable: false,
      animated: true,
      prerenderingSiblingsNumber: 1,
      tabBarBackgroundColor: 'white',
      tabBarActiveTextColor: 'green',
      tabBarInactiveTextColor: 'gray',
      tabBarTextStyle: { fontSize: 16 },

    },
    style: { width: '100%',height:30 }

  },

  // {
  //   id: 534438,
  //   type: "TabBar",
  //   props: {
  //     barTintColor:'white',
  //     tintColor:'#108ee9',
  //     unselectedTintColor:'#888',
  //     badge:2,
  //     selected:false,
  //     icon:require('../assets/bell.png'),
  //     selectedIcon:require('../assets/more.png'),
  //     title:'App',
  //     onPress:""
  //    },
  //   proTypes:{
  //     barTintColor:string,
  //     tintColor:string,
  //     unselectedTintColor:string,
  //     badge:number,
  //     selected:bool,
  //     icon:string,
  //     selectedIcon:string,
  //     title:string,
  //     onPress:func

  //   },
  //   defaultProps: {
  //     barTintColor:'white',
  //     tintColor:'#108ee9',
  //     unselectedTintColor:'#888',
  //     badge:2,
  //     selected:false,
  //     icon:require('../assets/bell.png'),
  //     selectedIcon:require('../assets/more.png'),
  //     title:'App',
  //     onPress:""
  //   },
  //   style: {width:28,height:28},

  // },
  {
    id: 534439,
    type: "Flex",
    props: {
      direction: 'row',
      wrap: 'wrap',
      justify: 'center',
      align: 'center'

    },
    proTypes: {
      direction: string,
      wrap: string,
      justify: string,
      align: string

    },
    defaultProps: {
      direction: 'row',
      wrap: 'wrap',
      justify: 'center',
      align: 'center'
    },
    style: { backgroundColor: 'black', width: '100%', height: 50 },

  },
  {
    id: 534440,
    type: "Checkbox",
    props: {
      defaultChecked: false,
      checked: true,
      disabled: false,

    },
    proTypes: {
      defaultChecked: false,
      checked: true,
      disabled: false,

    },
    defaultProps: {
      defaultChecked: bool,
      checked: bool,
      disabled: bool,

    },
    style: { width: 28, height: 28 },

  },
  {
    id: 534441,
    type: "Slider",
    props: {
      min: 0,
      max: 100,
      step: 1,
      value: 50,
      disabled: false,
      maximumTrackTintColor: 'blue'
    },
    proTypes: {
      min: number,
      max: number,
      step: number,
      value: number,
      disabled: bool,
      maximumTrackTintColor:string

    },
    defaultProps: {
      min: 0,
      max: 100,
      step: 1,
      value: 30,
      disabled: false,
      maximumTrackTintColor: 'blue'
    },
    style: { width: '100%', height: 20, backgroundColor: 'black', marginTop: 10 },

  },
  {
    id: 534442,
    type: "Stepper",
    props: {
      min: 0,
      max: 100,
      step: 1,
      value: 50,
      disabled: false,
      readOnly: true,

    },
    proTypes: {
      min: number,
      max: number,
      step: number,
      value: number,
      disabled: bool,
      readOnly: bool,

    },
    defaultProps: {
      min: 0,
      max: 100,
      step: 1,
      value: 3,
      disabled: false,

    },
    style: { width: '100%', height: 30 },

  },
  {
    id: 534443,
    type: "Progress",
    props: {
      percent: 10,
      position: 'normal',
      unfilled: true,
      barStyle: { backgroundColor: 'blue' }

    },
    proTypes: {
      percent: number,
      position: string,
      unfilled: bool,
      barStyle: string

    },
    defaultProps: {
      percent: 0,
      position: 'fixed',
      unfilled: true,
      barStyle: { backgroundColor: 'blue' }
    },
    style: { width: '100%', backgroundColor: 'white' },

  },
  {
    id: 534444,
    type: "Tag",
    props: {
      small: false,
      disabled: false,
      closable: true,
      selected: true,
    },
    proTypes: {
      small: bool,
      disabled: bool,
      closable: bool,
      selected: bool,

    },
    defaultProps: {
      small: false,
      disabled: false,
      closable: true,
      selected: true,

    },
    style: {},

  },
  // {
  //   id: 534445,
  //   type: "SearchBar",
  //   props: {

  //     value: '张三',
  //     placeholder: '请输入关键字',
  //     showCancelButton: false,
  //     cancelText: '取消',
  //     disabled: false,

  //   },
  //   proTypes: {

  //     value: string,
  //     placeholder: string,
  //     showCancelButton: bool,
  //     cancelText: string,
  //     disabled: bool,


  //   },
  //   defaultProps: {

  //     value: '张三',
  //     placeholder: '请输入关键字',
  //     showCancelButton: false,
  //     cancelText: '取消',
  //     disabled: false,

  //   },
  //   style: {},

  // },

  {
    id: 534446,
    type: "Badge",
    props: {
      size: 'large',
      text: '20',
      corner: false,
      dot: false,
      overflowCount: 99
    },
    proTypes: {
      size: string,
      text: string,
      corner: bool,
      dot: bool,
      overflowCount: number
    },
    defaultProps: {
      size: 'large',
      text: '15',
      corner: false,
      dot: false,
      overflowCount: 99
    },
    style: {},

  },
  {
    id: 534447,
    type: "ActivityIndicator",
    props: {
      animating: true,
      size: 'small',
      toast: false,
      text: '加载中',
      color: 'gray'
    },
    proTypes: {
      animating: bool,
      size: string,
      toast: bool,
      text: string,
      color: string
    },
    defaultProps: {
      animating: true,
      size: 'small',
      toast: false,
      text: '加载中',
      color: 'gray'
    },
    style: { backgroundColor: 'gray', height: 50, width: 50 },

  },

  {
    id: 534448,
    type: "Grid",
    props: {
     data:[{icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'Name1'},{icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'Name2'}],
     columnNum:2,
     hasLine:true,
     isCarousel:false,
     carouselMaxRow:2,
     itemStyle:{backgroundColor:'red',width:60,height:50}
    },
    proTypes: {
      data:array,
      columnNum:number,
      hasLine:bool,
      isCarousel:bool,
      carouselMaxRow:number,
      itemStyle:string
    },
    defaultProps: {
      data:[{icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'Name1'},{icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'Name2'}],
      columnNum:2,
      hasLine:true,
      isCarousel:false,
      carouselMaxRow:2,
      itemStyle:{backgroundColor:'red',width:60,height:50}
    },
    style: { width:10 },

  },
  
  {
    id: 534449,
    type: "InputItem",
    props: {
      type:'text',
      clear:true,
      error:true,
      value:'',
      extra:'元',
      placeholder:'有标签'
      
    },
    proTypes: {
      type:string,
      value:string,
      placeholder:string,
      clear:bool,
      error:bool,
      extra:string,
    },
    defaultProps: {
      type:'text',
      clear:true,
      error:true,
      value:'',
      extra:'元',
      placeholder:'有标签'
      
    },
    style: { width:'100%' },

  },

  
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
