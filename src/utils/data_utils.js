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
    type:'Button',
    data:[
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
          type: 'ghost',
          children: '确定',
          pressIn: false,
          disabled: false,
          activeStyle: {},
          loading: false,
        },
        style: {  }
      },
      {
        id: 534434,
        type: "Button",
        props: { type: 'warning', children: '确定' },
        proTypes: {
          type: string,
          pressIn: bool,
          disabled: bool,
          activeStyle: "",
          loading: bool,
        },
        defaultProps: {
          type: 'ghost',
          children: '确定',
          pressIn: false,
          disabled: false,
          activeStyle: {},
          loading: false,
        },
        style: {  }
      },
    ]
  },
  {
    type:'Switch',
    data:[{
      id: 534434,
      type: "Switch",
      props: {
        checked: true,
        disabled: false,
  
      },
      proTypes: {
        checked: bool,
        disabled: bool,
      },
      defaultProps: {
        checked: true,
        checked: true,
        disabled: false,
  
      },
      style: {   margin: 5, }
    },]
  },
  // {
  //   id: 534435,
  //   type: "Radio",
  //   props: {
  //     title: '协议',
  //     defaultChecked: true,
  //     checked: true,
  //     disabled: false,

  //   },
  //   proTypes: {
  //     title: string,
  //     defaultChecked: bool,
  //     checked: bool,
  //     disabled: bool,
  //   },
  //   defaultProps: {
  //     title: '协议',
  //     defaultChecked: true,
  //     checked: true,
  //     disabled: false,
  //   },
  //   style: { width: 25, height: 20, margin: 5, }

  // },
  // {
  //   id: 534436,
  //   type: "Pagination",
  //   props: {
  //     mode: 'pointer',
  //     current: 1,
  //     total: 4,
  //     simple: false,
  //     disabled: false,

  //   },
  //   proTypes: {
  //     mode: string,
  //     current: number,
  //     total: string,
  //     simple: string,
  //     disabled: bool,

  //   },
  //   defaultProps: {
  //     mode: 'pointer',
  //     current: 1,
  //     total: 4,
  //     simple: false,
  //     disabled: false,

  //   },
  //   style: { width: '100%' }

  // },
  // {
  //   id: 534437,
  //   type: "Tabs",
  //   props: {
  //     tabs: [
  //       { title: 'First Tab' },
  //       { title: 'Second Tab' },
  //       { title: 'Third Tab' },
  //     ],
  //     tabBarPosition: 'bottom',
  //     initialPage: 0,
  //     swipeable: true,
  //     animated: true,
  //     prerenderingSiblingsNumber: 1,
  //     tabBarBackgroundColor: 'white',
  //     tabBarActiveTextColor: 'green',
  //     tabBarInactiveTextColor: 'gray',
  //     tabBarTextStyle: { fontSize: 16 },

  //   },
  //   proTypes: {
  //     tabs: array,
  //     tabBarPosition: string,
  //     initialPage: number,
  //     swipeable: bool,
  //     animated: bool,
  //     prerenderingSiblingsNumber: number,
  //     tabBarBackgroundColor: string,
  //     tabBarActiveTextColor: string,
  //     tabBarInactiveTextColor: string,
  //     tabBarTextStyle: string,

  //   },
  //   defaultProps: {
  //     tabs: [
  //       { title: 'First Tab' },
  //       { title: 'Second Tab' },
  //       { title: 'Third Tab' },
  //     ],
  //     tabBarPosition: 'bottom',
  //     initialPage: 0,
  //     swipeable: false,
  //     animated: true,
  //     prerenderingSiblingsNumber: 1,
  //     tabBarBackgroundColor: 'white',
  //     tabBarActiveTextColor: 'green',
  //     tabBarInactiveTextColor: 'gray',
  //     tabBarTextStyle: { fontSize: 16 },

  //   },
  //   style: { width: '100%', height: 30 }

  // },

  // // {
  // //   id: 534438,
  // //   type: "TabBar",
  // //   props: {
  // //     barTintColor:'white',
  // //     tintColor:'#108ee9',
  // //     unselectedTintColor:'#888',
  // //     badge:2,
  // //     selected:false,
  // //     icon:require('../assets/bell.png'),
  // //     selectedIcon:require('../assets/more.png'),
  // //     title:'App',
  // //     onPress:""
  // //    },
  // //   proTypes:{
  // //     barTintColor:string,
  // //     tintColor:string,
  // //     unselectedTintColor:string,
  // //     badge:number,
  // //     selected:bool,
  // //     icon:string,
  // //     selectedIcon:string,
  // //     title:string,
  // //     onPress:func

  // //   },
  // //   defaultProps: {
  // //     barTintColor:'white',
  // //     tintColor:'#108ee9',
  // //     unselectedTintColor:'#888',
  // //     badge:2,
  // //     selected:false,
  // //     icon:require('../assets/bell.png'),
  // //     selectedIcon:require('../assets/more.png'),
  // //     title:'App',
  // //     onPress:""
  // //   },
  // //   style: {width:28,height:28},

  // // },
  // {
  //   id: 534439,
  //   type: "Flex",
  //   props: {
  //     direction: 'row',
  //     wrap: 'wrap',
  //     justify: 'center',
  //     align: 'center'

  //   },
  //   proTypes: {
  //     direction: string,
  //     wrap: string,
  //     justify: string,
  //     align: string

  //   },
  //   defaultProps: {
  //     direction: 'row',
  //     wrap: 'wrap',
  //     justify: 'center',
  //     align: 'center'
  //   },
  //   style: { backgroundColor: 'black', width: '100%', height: 50 },

  // },
  // {
  //   id: 534440,
  //   type: "Checkbox",
  //   props: {
  //     defaultChecked: false,
  //     checked: true,
  //     disabled: false,

  //   },
  //   proTypes: {
  //     defaultChecked: false,
  //     checked: true,
  //     disabled: false,

  //   },
  //   defaultProps: {
  //     defaultChecked: bool,
  //     checked: bool,
  //     disabled: bool,

  //   },
  //   style: { width: 28, height: 28 },

  // },
  // {
  //   id: 534441,
  //   type: "Slider",
  //   props: {
  //     min: 0,
  //     max: 100,
  //     step: 1,
  //     value: 50,
  //     disabled: false,
  //     maximumTrackTintColor: 'blue'
  //   },
  //   proTypes: {
  //     min: number,
  //     max: number,
  //     step: number,
  //     value: number,
  //     disabled: bool,
  //     maximumTrackTintColor: string

  //   },
  //   defaultProps: {
  //     min: 0,
  //     max: 100,
  //     step: 1,
  //     value: 30,
  //     disabled: false,
  //     maximumTrackTintColor: 'blue'
  //   },
  //   style: { width: '100%', height: 10,  },

  // },
  // {
  //   id: 534442,
  //   type: "Stepper",
  //   props: {
  //     min: 1,
  //     max: 100,
  //     step: 1,
  //     value: 50,
  //     disabled: false,
  //     showNumber:true,
    
  //   },
  //   proTypes: {
  //     min: number,
  //     max: number,
  //     step: number,
  //     value: number,
  //     disabled: bool,
  //     showNumber:bool,

  //   },
  //   defaultProps: {
  //     min: 1,
  //     max: 100,
  //     step: 1,
  //     value: 50,
  //     disabled: false,
  //     showNumber:true,
  //   },
  //   style: { width:'100%', height: 30 },

  // },
  // {
  //   id: 534443,
  //   type: "Progress",
  //   props: {
  //     percent: 10,
  //     position: 'normal',
  //     unfilled: true,
  //     barStyle: { backgroundColor: 'blue' }

  //   },
  //   proTypes: {
  //     percent: number,
  //     position: string,
  //     unfilled: bool,
  //     barStyle: string

  //   },
  //   defaultProps: {
  //     percent: 0,
  //     position: 'fixed',
  //     unfilled: true,
  //     barStyle: { backgroundColor: 'blue' }
  //   },
  //   style: { width: '100%', backgroundColor: 'white' },

  // },
  // {
  //   id: 534444,
  //   type: "Tag",
  //   props: {
  //     small: false,
  //     disabled: false,
  //     closable: true,
  //     selected: true,
  //     content:'美女'
  //   },
  //   proTypes: {
  //     small: bool,
  //     disabled: bool,
  //     closable: bool,
  //     selected: bool,
  //     content:string,

  //   },
  //   defaultProps: {
  //     small: false,
  //     disabled: false,
  //     closable: true,
  //     selected: true,
  //     content:'美女'  
  //   },
  //   style: {width:30,height:25},

  // },
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

  // {
  //   id: 534446,
  //   type: "Badge",
  //   props: {
  //     size: 'large',
  //     text: '20',
  //     corner: false,
  //     dot: false,
  //     overflowCount: 99
  //   },
  //   proTypes: {
  //     size: string,
  //     text: string,
  //     corner: bool,
  //     dot: bool,
  //     overflowCount: number
  //   },
  //   defaultProps: {
  //     size: 'large',
  //     text: '15',
  //     corner: false,
  //     dot: false,
  //     overflowCount: 99
  //   },
  //   style: {},

  // },
  // {
  //   id: 534447,
  //   type: "ActivityIndicator",
  //   props: {
  //     animating: true,
  //     size: 'small',
  //     toast: false,
  //     text: '加载中',
  //     color: 'gray'
  //   },
  //   proTypes: {
  //     animating: bool,
  //     size: string,
  //     toast: bool,
  //     text: string,
  //     color: string
  //   },
  //   defaultProps: {
  //     animating: true,
  //     size: 'small',
  //     toast: false,
  //     text: '加载中',
  //     color: 'gray'
  //   },
  //   style: { backgroundColor: 'gray', height: 50, width: 50 },

  // },

  // {
  //   id: 534448,
  //   type: "Grid",
  //   props: {
  //     data: [{ icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png', text: 'Name1' }, { icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png', text: 'Name2' }],
  //     columnNum: 2,
  //     hasLine: true,
  //     isCarousel: false,
  //     carouselMaxRow: 2,
  //     itemStyle: { backgroundColor: 'red', }
  //   },
  //   proTypes: {
  //     data: array,
  //     columnNum: number,
  //     hasLine: bool,
  //     isCarousel: bool,
  //     carouselMaxRow: number,
  //     itemStyle: string
  //   },
  //   defaultProps: {
  //     data: [{ icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png', text: 'Name1' }, { icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png', text: 'Name2' }],
  //     columnNum: 2,
  //     hasLine: true,
  //     isCarousel: false,
  //     carouselMaxRow: 2,
  //     itemStyle: { backgroundColor: 'red' }
  //   },
  //   style: {width:'100%'},

  // },

  // {
  //   id: 534449,
  //   type: "InputItem",
  //   props: {
  //     type: 'text',
  //     clear: true,
  //     error: true,
  //     value: '',
  //     extra: '元',
  //     placeholder: '有标签',

  //   },
  //   proTypes: {
  //     type: string,
  //     value: string,
  //     placeholder: string,
  //     clear: bool,
  //     error: bool,
  //     extra: string,
  //   },
  //   defaultProps: {
  //     type: 'text',
  //     clear: true,
  //     error: true,
  //     value: '',
  //     extra: '元',
  //     placeholder: '有标签'

  //   },
  //   style: { width: '100%',},

  // },
  // {
  //   id: 534450,
  //   type: "Carousel",
  //   props: {
  //     autoplay: true,
  //     infinite: true,
  //     autoplayInterval: 3000,
  //     dots: true,
  //     vertical:false
  //   },
  //   proTypes: {
  //     autoplay: bool,
  //     infinite: bool,
  //     autoplayInterval: number,
  //     dots: bool,
  //     vertical:bool
  //   },
  //   defaultProps: {
  //     autoplay: true,
  //     infinite: true,
  //     autoplayInterval: 3000,
  //     dots: true,
  //     vertical:false
  //   },
  //   style: { width: '100%' },

  // },
  // {
  //   id: 534451,
  //   type: "NoticeBar",
  //   props: {
  //      mode:'closable',
  //      titles:'这是一个通知栏.........',
  //      marqueeProps:{ loop: true, style: { fontSize: 12, color: 'red' } },
  //   },
  //   proTypes: {
  //     mode:string,
  //     marqueeProps:string,
  //     titles:string

  //   },
  //   defaultProps: {
  //     mode:'closable',
  //     marqueeProps:{ loop: true, style: { fontSize: 12, color: 'red' } },
  //     title:'这是一个通知栏.........',
  //   },
  //   style: { width: '100%' },

  // },
  // {
  //   id: 534452,
  //   type: "TextareaItem",
  //   props: {
  //     rows:4,
  //     placeholder:'固定行数、多行带计数、高度自适应',
  //     count:100,
  //     autoHeight:true,
  //     editable:true,
  //     clear:false
  //   },
  //   proTypes: {
  //     rows:number,
  //     placeholder:string,
  //     count:number,
  //     autoHeight:bool,
  //     editable:bool,
  //     clear:bool

  //   },
  //   defaultProps: {
  //     rows:4,
  //     placeholder:'固定行数、多行带计数、高度自适应',
  //     count:100,
  //     autoHeight:true,
  //     editable:true,
  //     clear:false
  //   },
  //   style: { width: '100%', paddingVertical: 5,borderColor: 'gray',borderWidth: 0.5,  },

  // },
  // {
  //   id: 534453,
  //   type: "DatePicker",
  //   props: {
  //     mode:'date',
  //     minDate:new Date(2015, 7, 6),
  //     maxDate:new Date(2026, 11, 3),
  //     format:"YYYY-MM-DD"
  //   },
  //   proTypes: {
  //     mode:string,
  //     minDate:string,
  //     maxDate:string,
  //     format:string
  //   },
  //   defaultProps: {
  //     mode:'date',
  //     minDate:new Date(2015, 7, 6),
  //     maxDate:new Date(2026, 11, 3),
  //     format:"YYYY-MM-DD"
  //   },
  //   style: { width: '100%', paddingVertical: 5  },

  // },
  // {
  //   id: 534454,
  //   type: "DatePickerView",
  //   props: {
  //     mode:'date',
  //     minDate:new Date(2015, 7, 6),
  //     maxDate:new Date(2026, 11, 3),
  //     format:"YYYY-MM-DD",
  //     minuteStep:1,

  //   },
  //   proTypes: {
  //     mode:string,
  //     minDate:string,
  //     maxDate:string,
  //     format:string,
  //     minuteStep:number,
  //   },
  //   defaultProps: {
  //     mode:'date',
  //     minDate:new Date(2015, 7, 6),
  //     maxDate:new Date(2026, 11, 3),
  //     format:"YYYY-MM-DD",
  //     minuteStep:1,
  //   },
  //   style: { width: '100%' },
  // }, {
  //   id: 534455,
  //   type: "ImagePicker",
  //   props: {
  //     files:[{
  //       url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
  //       id: '2121',
  //     },{
  //         url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
  //         id: '2122',
  //       },],
  //     selectable:true
  //   },
  //   proTypes: {
  //     files:array,
  //     selectable:bool
  //   },
  //   defaultProps: {
  //     files:[{
  //       url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
  //       id: '2121',
  //     },{
  //         url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
  //         id: '2122',
  //       },],
  //     selectable:true
  //   },
  //   style: { width: '100%',height:50 },
  // },
  // {
  //   id: 534456,
  //   type: "PickerView",
  //   props: {
  //     data:[ [
  //       {
  //         label: '2013',
  //         value: '2013',
  //       },
  //       {
  //         label: '2014',
  //         value: '2014',
  //       },
  //     ],
  //     [
  //       {
  //         label: '春',
  //         value: '春',
  //       },
  //       {
  //         label: '夏',
  //         value: '夏',
  //       },
  //     ],],
  //     cascade:false,
    
  //   },
  //   proTypes: {
  //     data:array,
  //     cascade:bool
  //   },
  //   defaultProps: {
  //   data:[  [
  //     {
  //       label: '2013',
  //       value: '2013',
  //     },
  //     {
  //       label: '2014',
  //       value: '2014',
  //     },
  //   ],
  //   [
  //     {
  //       label: '春',
  //       value: '春',
  //     },
  //     {
  //       label: '夏',
  //       value: '夏',
  //     },
  //   ],],
  //     cascade:false,
  //   },
  //   style: { width: 200,height:100},
  // },
  // {
  //   id: 534457,
  //   type: "NavBar",
  //   props: {
  //     title:"标题",
  //     styleRightText:{ color: 'white' }, //右文本样式
  //     styleTitle:{ color: 'white' }, //标题样式
  //     isShowBk:true, //是否显示返回键
  //     isShowDel:true, //是否显示左边第二个图标
  //     isShowFirstRightIcon:true, //是否显示右边第一个图标
  //     isShowLastRightIcon:true, //是否显示右边第二个图标
  //     isShowRightText:true
    
  //   },
  //   proTypes: {
  //     title:string,
  //     styleRightText:string,
  //     styleTitle:string,
  //     isShowBk:bool, 
  //     isShowDel:bool, 
  //     isShowFirstRightIcon:bool,
  //     isShowLastRightIcon:bool,
  //     isShowRightText:bool
  //   },
  //   defaultProps: {
  //     title:"标题",
  //     styleRightText:{ color: 'white' }, //右文本样式
  //     styleTitle:{ color: 'white' }, //标题样式
  //     isShowBk:true, //是否显示返回键
  //     isShowDel:true, //是否显示左边第二个图标
  //     isShowFirstRightIcon:true, //是否显示右边第一个图标
  //     isShowLastRightIcon:true, //是否显示右边第二个图标
  //     isShowRightText:true
  //   },
  //   style:{ backgroundColor: '#0C83FF' },
  // },
  // {
  //   id: 534458,
  //   type: "List",
  //   props: {
     
  //   },
  //   proTypes: {
      
  //   },
  //   defaultProps: {
   
  //   },
  //   style:{ backgroundColor: '#0C83FF' },
  // },
  // {
  //   id: 534459,
  //   type: "Icon",
  //   props: {
  //     type:'cross-circle-o',
  //     size:55,
  //     color:'red',
  //   },
  //   proTypes: {
  //     type:string,
  //     size:number,
  //     color:string,
  //   },
  //   defaultProps: {
  //     type:'down',
  //     size:55,
  //     color:'red',
  //   },
  //   style:{ },
  // },
  // {
  //   id: 534460,
  //   type: "WhiteSpace",
  //   props: {
  //     size:'xs'
  //   },
  //   proTypes: {
  //     size:string
  //   },
  //   defaultProps: {
  //     size:'xs'
  //   },
  //   style:{ },
  // },
  // {
  //   id: 534461,
  //   type: "Result",
  //   props: {
      
  //     img:'https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg',
  //     title:"验证成功",
  //     message:"所提交内容已成功完成验证",
  //     buttonText:"完成",
  //     buttonType:"primary"
  //   },
  //   proTypes: {
  //     imgUrl:array,
  //     title:string,
  //     message:string,
  //     buttonText:string,
  //     buttonType:string
  //   },
  //   defaultProps: {
  //     img:'https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg',
  //     title:"验证成功",
  //     message:"所提交内容已成功完成验证",
  //     buttonText:"完成",
  //     buttonType:"primary"
  //   },
  //   style:{ },
  // },
  // {
  //   id: 534462,
  //   type: "Popover",
  //   props: {
  //     data:[1,2,3]
  //   },
  //   proTypes: {
   
  //   },
  //   defaultProps: {
  //     data:[1,2,3]
  //   },
  //   style:{ },
  // },
  // {
  //   id: 534463,
  //   type: "SegmentedControl",
  //   props: {
  //     tintColor:'#2DB7F5',
  //     disabled:false,
  //     selectedIndex:0,
  //     values:['Segment1', 'Segment2']
  //   },
  //   proTypes: {
  //     tintColor:string,
  //     disabled:bool,
  //     selectedIndex:number,
  //     values:array
  //   },
  //   defaultProps: {
  //     tintColor:'#2DB7F5',
  //     disabled:false,
  //     selectedIndex:0,
  //     values:['Segment1', 'Segment2']
  //   },
  //   style:{ },
  // },
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
  return Object.assign({},newData[0]||{});
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
export function addComponent(leftData, centerData, item,index) {
  const initData = getAddData(item);
  centerData.splice(index, 0, initData);
  return { leftData, centerData };
}
export function deleteComponent(centerData, id) {
  for (let key = centerData.length - 1; key >= 0; key--) {
    if (centerData[key].id === id) {
      centerData.splice(key, 1);
      break;
    }
  }
  return centerData;
}
export function moveComponent(centerData, dragIndex, hoverIndex){
  centerData = reorder(centerData, dragIndex, hoverIndex);
  return centerData ;
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
