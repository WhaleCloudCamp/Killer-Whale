import comjson from "../assets/components-description.json";
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
    type: "Button",

    data: [
      {
        id: 5344321,
        type: "Button",
        state: 1, //1:代表基础组件 2：代表组成组件
        props: { type: "ghost", children: "确定" },
        propTypes: {
          type: ["primary", "ghost", "warning"],
          pressIn: "bool",
          disabled: "bool",
          loading: "bool"
        },
        defaultProps: {
          type: "ghost",
          children: "确定",
          pressIn: false,
          disabled: false,
          loading: false
        },
        style: {}
      },
      {
        id: 5344332,
        type: "Button",
        state: 1,

        props: { type: "warning", children: "确定" },
        propTypes: {
          type: ["primary", "ghost", "warning"],
          pressIn: "bool",
          disabled: "bool",
          loading: "bool"
        },
        defaultProps: {
          type: "ghost",
          children: "确定",
          pressIn: false,
          disabled: false,
          loading: false
        },
        style: {}
      },
      {
        id: 5344333,
        type: "Button",
        state: 1,

        props: { type: "primary", children: "确定" },
        propTypes: {
          type: ["primary", "ghost", "warning"],
          pressIn: "bool",
          disabled: "bool",
          loading: "bool"
        },
        defaultProps: {
          type: "primary",
          children: "确定",
          pressIn: false,
          disabled: false,
          loading: false
        },
        style: {}
      },
      {
        id: 5344334,
        type: "Button",
        state: 1,

        props: {
          type: "primary",
          children: "确定",
          disabled: true
        },
        propTypes: {
          type: ["primary", "ghost", "warning"],
          pressIn: "bool",
          disabled: "bool",
          loading: "bool"
        },
        defaultProps: {
          type: "primary",
          children: "确定",
          pressIn: false,
          disabled: false,
          loading: false
        },
        style: {}
      },
      {
        id: 5344335,
        type: "Button",
        state: 1,
        props: {
          type: "primary",
          children: "确定",
          loading: true
        },
        propTypes: {
          type: ["primary", "ghost", "warning"],
          pressIn: "bool",
          disabled: "bool",
          loading: "bool"
        },
        defaultProps: {
          type: "primary",
          children: "确定",
          pressIn: false,
          disabled: false,
          loading: false
        },
        style: {}
      }
    ]
  },
  {
    type: "Switch",
    data: [
      {
        id: 5344341,
        type: "Switch",
        state: 1,
        props: {
          checked: true,
          disabled: false
        },
        propTypes: {
          checked: "bool",
          disabled: "bool"
        },
        defaultProps: {
          checked: true,
          disabled: false
        },
        style: { margin: 5 }
      },
      {
        id: 5344342,
        type: "Switch",
        state: 1,
        props: {
          checked: true,
          disabled: true
        },
        propTypes: {
          checked: "bool",
          disabled: "bool"
        },
        defaultProps: {
          checked: true,
          checked: true,
          disabled: true
        },
        style: { margin: 5 }
      },
      {
        id: 5344343,
        type: "Switch",
        state: 1,
        props: {
          checked: false,
          disabled: false
        },
        propTypes: {
          checked: "bool",
          disabled: "bool"
        },
        defaultProps: {
          checked: false,
          disabled: false
        },
        style: { margin: 5 }
      }
    ]
  },

  {
    type: "Pagination",
    data: [
      {
        id: 5344361,
        type: "Pagination",
        state: 1,

        props: {
          mode: "pointer",
          current: 1,
          total: 4,
          simple: false,
          disabled: false
        },
        propTypes: {
          mode: ["button", "number", "pointer"],
          current: "number",
          total: "string",
          simple: "string",
          disabled: "bool"
        },
        defaultProps: {
          mode: "pointer",
          current: 1,
          total: 4,
          simple: false,
          disabled: false
        },
        style: { width: "100%" }
      },
      {
        id: 5344362,
        type: "Pagination",
        state: 1,
        props: {
          mode: "number",
          current: 1,
          total: 4,
          simple: false,
          disabled: false
        },
        propTypes: {
          mode: ["button", "number", "pointer"],
          current: "number",
          total: "string",
          simple: "string",
          disabled: "bool"
        },
        defaultProps: {
          mode: "pointer",
          current: 1,
          total: 4,
          simple: false,
          disabled: false
        },
        style: { width: "100%" }
      }
    ]
  },
  {
    type: "Tabs",
    data: [
      {
        id: 534437,
        type: "Tabs",
        state: 1,
        props: {
          tabs: [{ title: "首页" }, { title: "发现" }, { title: "我的" }],

          initialPage: 0,
          swipeable: true,
          animated: true,
          prerenderingSiblingsNumber: 1,
          tabBarBackgroundColor: "white",
          tabBarActiveTextColor: "green",
          tabBarInactiveTextColor: "gray",
          tabBarTextStyle: { fontSize: 16 }
        },
        propTypes: {
          tabs: "array",
          tabBarPosition: "string",
          initialPage: "number",
          swipeable: "bool",
          animated: "borderColor: #FFFFFF",
          prerenderingSiblingsNumber: "number",
          tabBarBackgroundColor: "string",
          tabBarActiveTextColor: "string",
          tabBarInactiveTextColor: "string",
          tabBarTextStyle: "string"
        },
        defaultProps: {
          tabs: [
            { title: "First Tab" },
            { title: "Second Tab" },
            { title: "Third Tab" }
          ],
          tabBarPosition: "bottom",
          initialPage: 0,
          swipeable: false,
          animated: true,
          prerenderingSiblingsNumber: 1,
          tabBarBackgroundColor: "white",
          tabBarActiveTextColor: "green",
          tabBarInactiveTextColor: "gray",
          tabBarTextStyle: { fontSize: 16 }
        },
        style: { width: "100%", height: 30 }
      }
    ]
  },

  {
    type: "Checkbox",
    data: [
      {
        id: 534440,
        type: "Checkbox",
        state: 1,

        props: {
          defaultChecked: false,
          checked: true,
          disabled: false,

          title: "单项选择"
        },
        propTypes: {
          defaultChecked: "bool",
          checked: "bool",
          disabled: "bool",
          title: "string"
        },
        defaultProps: {
          defaultChecked: false,
          checked: true,
          disabled: false,
          title: "单项选择"
        },
        style: { width: 28, height: 28, margin: 5 }
      }
    ]
  },

  {
    type: "Stepper",
    data: [
      {
        id: 534442,
        type: "Stepper",
        state: 1,

        props: {
          min: 1,
          max: 100,
          step: 1,
          value: 50,
          disabled: false,
          showNumber: true
        },
        propTypes: {
          min: "number",
          max: "number",
          step: "number",
          value: "number",
          disabled: "bool",
          showNumber: "bool"
        },
        defaultProps: {
          min: 1,
          max: 100,
          step: 1,
          value: 50,
          disabled: false,
          showNumber: true
        },
        style: { width: "100%", height: 30 }
      }
    ]
  },
  {
    type: "Progress",
    data: [
      {
        id: 534443,
        type: "Progress",
        state: 1,
        props: {
          percent: 10,
          position: "normal",
          unfilled: true,
          barStyle: {
            backgroundColor: "blue",
            margin: 5,
            borderWidth: 1,
            height: 10
          }
        },
        propTypes: {
          percent: "number",
          position: ["fixed", "normal"],
          unfilled: "bool",
          barStyle: "string"
        },
        defaultProps: {
          percent: 0,
          position: "normal",
          unfilled: true,
          barStyle: { backgroundColor: "blue", margin: 5 }
        },
        style: { width: "100%", height: 20, backgroundColor: "white" }
      }
    ]
  },

  {
    type: "SearchBar",
    data: [
      {
        id: 534445,
        type: "SearchBar",
        state: 1,
        props: {
          value: "张三",
          placeholder: "请输入关键字",
          showCancelButton: false,
          cancelText: "取消",
          disabled: false
        },
        propTypes: {
          value: "string",
          placeholder: "string",
          showCancelButton: "bool",
          cancelText: "string",
          disabled: "bool"
        },
        defaultProps: {
          value: "张三",
          placeholder: "请输入关键字",
          showCancelButton: false,
          cancelText: "取消",
          disabled: false
        },
        style: {}
      },
      {
        id: 534445111,
        type: "SearchBar",
        state: 1,
        props: {
          placeholder: "请输入关键字"
        },
        propTypes: {
          placeholder: "string"
        },
        defaultProps: {
          placeholder: "请输入关键字"
        },
        style: {}
      }
    ]
  },
  {
    type: "Badge",
    data: [
      {
        id: 5344461,
        type: "Badge",
        state: 1,
        props: {
          size: "large",
          text: "20",
          corner: false,
          dot: false,
          overflowCount: 99
        },
        propTypes: {
          size: ["large", "small"],
          text: "string",
          corner: "bool",
          dot: "bool",
          overflowCount: "number"
        },
        defaultProps: {
          size: "large",
          text: "15",
          corner: false,
          dot: false,
          overflowCount: 99
        },
        style: {}
      },
      {
        id: 5344462,
        type: "Badge",
        state: 1,
        props: {
          size: "small",
          text: "new",
          corner: false,
          dot: true
        },
        propTypes: {
          size: ["large", "small"],
          text: "string",
          corner: "bool"
        },
        defaultProps: {
          size: "small",
          text: "15",
          corner: false,
          dot: true
        },
        style: {}
      }
    ]
  },

  {
    type: "TextareaItem",
    data: [
      {
        id: 5344521,
        type: "TextareaItem",
        state: 1,
        props: {
          title: "标题",
          labelNumber: 3,
          rows: 4,
          placeholder: "固定行数、多行带计数、高度自适应",
          count: 100,
          autoHeight: true,
          editable: true,
          clear: false
        },
        propTypes: {
          rows: "number",
          placeholder: "string",
          count: "number",
          autoHeight: "bool",
          editable: "bool",
          clear: "bool",
          title: "string",
          labelNumber: "number"
        },
        defaultProps: {
          rows: 4,
          placeholder: "固定行数、多行带计数、高度自适应",
          count: 100,
          autoHeight: true,
          editable: true,
          clear: false,
          title: "标题",
          labelNumber: 3
        },
        style: {
          width: "100%",
          paddingVertical: 5,
          borderColor: "gray",
          borderWidth: 0.5
        }
      },
      {
        id: 5344522,
        type: "TextareaItem",
        state: 1,
        props: {
          rows: 4,
          placeholder: "固定行数、多行带计数、高度自适应",
          count: 100,
          autoHeight: true,
          editable: true,
          clear: false
        },
        propTypes: {
          rows: "number",
          placeholder: "string",
          count: "number",
          autoHeight: "bool",
          editable: "bool",
          clear: "bool"
        },
        defaultProps: {
          rows: 4,
          placeholder: "固定行数、多行带计数、高度自适应",
          count: 100,
          autoHeight: true,
          editable: true,
          clear: false
        },
        style: {
          width: "100%",
          paddingVertical: 5,
          borderColor: "gray",
          borderWidth: 0.5
        }
      }
    ]
  },

  {
    type: "ImagePicker",
    data: [
      {
        id: 534455,
        type: "ImagePicker",
        state: 1,
        props: {
          files: [
            {
              url:
                "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
              id: "2121"
            },
            {
              url:
                "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
              id: "2122"
            }
          ],
          selectable: true
        },
        propTypes: {
          files: "array",
          selectable: "bool"
        },
        defaultProps: {
          files: [
            {
              url:
                "https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png",
              id: "2121"
            },
            {
              url:
                "https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png",
              id: "2122"
            }
          ],
          selectable: true
        },
        style: {}
      }
    ]
  },
  {
    type: "PickerView",
    data: [
      {
        id: 534456,
        type: "PickerView",
        state: 1,
        props: {
          data: [
            [
              {
                label: "2013",
                value: "2013"
              },
              {
                label: "2014",
                value: "2014"
              }
            ],
            [
              {
                label: "春",
                value: "春"
              },
              {
                label: "夏",
                value: "夏"
              }
            ]
          ],
          cascade: false
        },
        propTypes: {
          data: "array",
          cascade: "bool"
        },
        defaultProps: {
          data: [
            [
              {
                label: "2013",
                value: "2013"
              },
              {
                label: "2014",
                value: "2014"
              }
            ],
            [
              {
                label: "春",
                value: "春"
              },
              {
                label: "夏",
                value: "夏"
              }
            ]
          ],
          cascade: false
        },
        style: { width: 200, height: 100 }
      }
    ]
  },

  {
    type: "Icon",
    data: [
      {
        id: 5344591,
        type: "Icon",
        state: 1,
        props: {
          type: "cross-circle-o",
          size: 55,
          color: "red"
        },
        propTypes: {
          type: "string",
          size: "number",
          color: "string"
        },
        defaultProps: {
          type: "down",
          size: 55,
          color: "red"
        },
        style: {}
      },
      {
        id: 5344592,
        type: "Icon",
        state: 1,
        props: {
          type: "ellipsis",
          size: 55,
          color: "blue"
        },
        propTypes: {
          type: "string",
          size: "number",
          color: "string"
        },
        defaultProps: {
          type: "down",
          size: 55,
          color: "blue"
        },
        style: {}
      },
      {
        id: 5344593,
        type: "Icon",
        state: 1,
        props: {
          type: "cross",
          size: 55,
          color: "blue"
        },
        propTypes: {
          type: "string",
          size: "number",
          color: "string"
        },
        defaultProps: {
          type: "cross-circle",
          size: 55,
          color: "blue"
        },
        style: {}
      }
    ]
  },

  {
    type: "SegmentedControl",
    data: [
      {
        id: 534463,
        type: "SegmentedControl",
        state: 1,
        props: {
          tintColor: "#2DB7F5",
          disabled: false,
          selectedIndex: 0,
          values: ["附近", "发现"]
        },
        propTypes: {
          tintColor: "string",
          disabled: "bool",
          selectedIndex: "number",
          values: "array"
        },
        defaultProps: {
          tintColor: "#2DB7F5",
          disabled: false,
          selectedIndex: 0,
          values: ["Segment1", "Segment2"]
        },
        style: {}
      }
    ]
  }
];

const combinationSouData = [
  {
    type: "SwitchItem",
    data: [
      {
        id: 634463,
        type: "SwitchItem",
        state: 2,
        props: {
          checked: true,
          disabled: false,
          title: "标签"
        },
        propTypes: {
          checked: "bool",
          disabled: "bool",
          title: "string"
        },
        defaultProps: {
          checked: true,
          disabled: false,
          title: "标签"
        },
        style: { margin: 5 }
      }
    ]
  },
  {
    type: "Flex",
    data: [
      {
        id: 1232111112321,
        type: "Flex",
        state: 2,
        props: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "center",
          align: "around"
        },
        propTypes: {
          direction: ["row", "column", "row-reverse", "column-reverse"],
          wrap: ["nowrap", "wrap", "wrap-reverse"],
          alignItems: ["start", "end", "center", "stretch", "baseline"],
          align: ["start", "end", "center", "between", "around"]
        },
        defaultProps: {},
        style: {}
      }
    ]
  },
  {
    type: "NavBar",
    data: [
      {
        id: 6344651,
        type: "NavBar",
        state: 2,
        props: {
          title: "标题",
          styleRightText: { color: "white" }, //右文本样式
          styleTitle: { color: "white" }, //标题样式
          isShowBk: true, //是否显示返回键
          isShowDel: false, //是否显示左边第二个图标
          isShowFirstRightIcon: false, //是否显示右边第一个图标
          isShowLastRightIcon: false, //是否显示右边第二个图标
          isShowRightText: false
        },
        propTypes: {
          title: "string",
          styleRightText: "style",
          styleTitle: "style",
          isShowBk: "bool",
          isShowDel: "bool",
          isShowFirstRightIcon: "bool",
          isShowLastRightIcon: "bool",
          isShowRightText: "bool"
        },
        defaultProps: {
          title: "标题",
          styleRightText: { color: "white" }, //右文本样式
          styleTitle: { color: "white" }, //标题样式
          isShowBk: false, //是否显示返回键
          isShowDel: false, //是否显示左边第二个图标
          isShowFirstRightIcon: false, //是否显示右边第一个图标
          isShowLastRightIcon: false, //是否显示右边第二个图标
          isShowRightText: false
        },
        style: { backgroundColor: "#0C83FF" }
      },
      {
        id: 6344652,
        type: "NavBar",
        state: 2,
        props: {
          title: "标题",
          styleRightText: { color: "white" }, //右文本样式
          styleTitle: { color: "white" }, //标题样式
          isShowBk: true, //是否显示返回键
          isShowDel: true, //是否显示左边第二个图标
          isShowFirstRightIcon: true, //是否显示右边第一个图标
          isShowLastRightIcon: true, //是否显示右边第二个图标
          isShowRightText: false
        },
        propTypes: {
          title: "string",
          styleRightText: "style",
          styleTitle: "style",
          isShowBk: "bool",
          isShowDel: "bool",
          isShowFirstRightIcon: "bool",
          isShowLastRightIcon: "bool",
          isShowRightText: "bool"
        },
        defaultProps: {
          title: "标题",
          styleRightText: { color: "white" }, //右文本样式
          styleTitle: { color: "white" }, //标题样式
          isShowBk: true, //是否显示返回键
          isShowDel: true, //是否显示左边第二个图标
          isShowFirstRightIcon: true, //是否显示右边第一个图标
          isShowLastRightIcon: true, //是否显示右边第二个图标
          isShowRightText: false
        },
        style: { backgroundColor: "green" }
      },
      ,
      {
        id: 6344653,
        type: "NavBar",
        state: 2,
        props: {
          title: "标题",
          styleRightText: { color: "white" }, //右文本样式
          styleTitle: { color: "white" }, //标题样式
          isShowBk: true, //是否显示返回键
          isShowDel: false, //是否显示左边第二个图标
          isShowFirstRightIcon: false, //是否显示右边第一个图标
          isShowLastRightIcon: false, //是否显示右边第二个图标
          isShowRightText: true
        },
        propTypes: {
          title: "string",
          styleRightText: "style",
          styleTitle: "style",
          isShowBk: "bool",
          isShowDel: "bool",
          isShowFirstRightIcon: "bool",
          isShowLastRightIcon: "bool",
          isShowRightText: "bool"
        },
        defaultProps: {
          title: "标题",
          styleRightText: { color: "white" }, //右文本样式
          styleTitle: { color: "white" }, //标题样式
          isShowBk: true, //是否显示返回键
          isShowDel: false, //是否显示左边第二个图标
          isShowFirstRightIcon: false, //是否显示右边第一个图标
          isShowLastRightIcon: false, //是否显示右边第二个图标
          isShowRightText: true
        },
        style: { backgroundColor: "pink" }
      }
    ]
  },
  {
    type: "CheckboxItem",
    data: [
      {
        id: 634466,
        type: "CheckboxItem",
        state: 2,
        props: {
          defaultChecked: false,
          checked: true,
          disabled: false,
          title: "单项选择"
        },
        propTypes: {
          defaultChecked: "bool",
          checked: "bool",
          disabled: "bool",
          title: "string"
        },
        defaultProps: {
          defaultChecked: false,
          checked: true,
          disabled: false,
          title: "单项选择"
        },
        style: { margin: 5 }
      }
    ]
  },
  {
    type: "RadioItem",
    data: [
      {
        id: 6344661,
        type: "RadioItem",
        state: 2,
        props: {
          checked: true,
          disabled: false,
          showImg: true,
          title: "单项选择标签"
        },
        propTypes: {
          checked: "bool",
          disabled: "bool",
          showImg: "bool",
          title: "string"
        },
        defaultProps: {
          checked: true,
          disabled: false,
          showImg: true,

          title: "单项选择标签"
        },
        style: { margin: 5 }
      },
      {
        id: 6344662,
        type: "RadioItem",
        state: 2,
        props: {
          checked: true,
          disabled: false,
          showImg: false,

          title: "单项选择标签"
        },
        propTypes: {
          checked: "bool",
          disabled: "bool",
          showImg: "bool",
          title: "string"
        },
        defaultProps: {
          checked: true,
          disabled: false,
          showImg: false,

          title: "单项选择标签"
        },
        style: { margin: 5 }
      }
    ]
  },
  {
    type: "StepperItem",

    data: [
      {
        id: 634467,
        type: "StepperItem",
        state: 2,
        props: {
          min: 1,
          max: 100,
          step: 1,
          value: 50,
          disabled: false,
          showNumber: true,

          title: "计步器值"
        },
        propTypes: {
          min: "number",
          max: "number",
          step: "number",
          value: "number",
          disabled: "bool",
          showNumber: "bool",
          title: "string"
        },
        defaultProps: {
          min: 1,
          max: 100,
          step: 1,
          value: 50,
          disabled: false,
          showNumber: true,

          title: "计步器值"
        },
        style: {}
      }
    ]
  },
  {
    type: "InputItem",

    data: [
      {
        id: 6344681,
        type: "InputItem",
        state: 2,
        props: {
          type: "text",
          clear: true,
          error: true,

          extra: "元",
          placeholder: "有标签",
          title: "标签",

          showtype: 1,
          labelNumber: 2
        },
        propTypes: {
          type: "string",
          value: "string",
          placeholder: "string",
          clear: "bool",
          error: "bool",
          extra: "string",
          title: "string",
          showtype: "number",
          labelNumber: "number"
        },
        defaultProps: {
          clear: true,
          error: false,
          extra: "",
          type: "text",
          placeholder: "",
          title: "标签",
          labelNumber: 2
        },
        style: { width: "100%", fontSize: 15, color: "black" }
      },
      {
        id: 6344682,
        type: "InputItem",
        state: 2,
        props: {
          type: "text",
          editable: false,
          value: "不可编辑",
          extra: "元",
          placeholder: "不可编辑",
          showtype: 2,

          labelNumber: 2
        },
        propTypes: {
          type: "string",
          value: "string",
          placeholder: "string",
          editable: "bool",
          extra: "string",
          imgurl: "string",
          showtype: "number",
          labelNumber: "number"
        },
        defaultProps: {
          clear: true,
          error: false,
          extra: "",
          type: "text",
          placeholder: "",
          title: "标签",
          labelNumber: 2
        },
        style: { width: "100%", fontSize: 15 }
      },
      {
        id: 6344683,
        type: "InputItem",
        state: 2,
        props: {
          clear: true,
          type: "text",
          placeholder: "可编辑",
          showtype: 1,
          title: "标签",
          labelNumber: 2
        },
        propTypes: {
          type: "string",
          value: "string",
          placeholder: "string",
          editable: "bool",
          extra: "string",
          showtype: "number",

          title: "string",
          labelNumber: "number"
        },
        defaultProps: {
          clear: true,
          error: false,
          extra: "",
          type: "text",
          placeholder: "",
          title: "标签",
          labelNumber: 2
        },
        style: { width: "100%", fontSize: 15 }
      }
    ]
  },

  {
    type: "Carousel",
    data: [
      {
        id: 6344691,
        type: "Carousel",
        state: 2,
        props: {
          autoplay: true,
          infinite: true,
          autoplayInterval: 3000,
          dots: true,
          vertical: false
        },
        propTypes: {
          autoplay: "bool",
          infinite: "bool",
          autoplayInterval: "number",
          dots: "bool",
          vertical: "bool"
        },
        defaultProps: {
          autoplay: true,
          infinite: true,
          autoplayInterval: 3000,
          dots: true,
          vertical: false
        },
        style: { width: "100%" }
      },
      {
        id: 6344692,
        state: 2,
        type: "Carousel",
        props: {
          autoplay: true,
          infinite: true,
          autoplayInterval: 3000,
          dots: false,
          vertical: true
        },
        propTypes: {
          autoplay: "bool",
          infinite: "bool",
          autoplayInterval: "number",
          dots: "bool",
          vertical: "bool"
        },
        defaultProps: {
          autoplay: true,
          infinite: true,
          autoplayInterval: 3000,
          dots: false,
          vertical: true
        },
        style: { width: "100%" }
      }
    ]
  },
  {
    type: "Tag",
    data: [
      {
        id: 6344701,
        type: "Tag",
        state: 2,
        props: {
          small: false,
          disabled: false,
          closable: true,
          selected: true,
          content: "美女"
        },
        propTypes: {
          small: "bool",
          disabled: "bool",
          closable: "bool",
          selected: "bool",
          content: "string"
        },
        defaultProps: {
          small: false,
          disabled: false,
          closable: true,
          selected: true,
          content: "美女"
        },
        style: { width: 30, height: 25, margin: 5 }
      },
      {
        id: 6344702,
        type: "Tag",
        state: 2,
        props: {
          small: false,
          disabled: true,
          closable: false,
          selected: true,
          content: "帅哥"
        },
        propTypes: {
          small: "bool",
          disabled: "bool",
          closable: "bool",
          selected: "bool",
          content: "string"
        },
        defaultProps: {
          small: false,
          disabled: true,
          closable: false,
          selected: true,
          content: "帅哥"
        },
        style: { width: 30, height: 25, margin: 5 }
      },
      {
        id: 6344703,
        state: 2,
        type: "Tag",
        props: {
          small: true,
          disabled: false,
          closable: false,
          selected: true,
          content: "美女"
        },
        propTypes: {
          small: "bool",
          disabled: "bool",
          closable: "bool",
          selected: "bool",
          content: "string"
        },
        defaultProps: {
          small: false,
          disabled: false,
          closable: false,
          selected: true,
          content: "美女"
        },
        style: { width: 30, height: 25, margin: 5 }
      }
    ]
  },
  {
    type: "ActivityIndicator",
    data: [
      {
        id: 634471,
        type: "ActivityIndicator",
        state: 2,
        props: {
          animating: true,
          size: "small",
          toast: false,
          text: "加载中",
          color: "gray"
        },
        propTypes: {
          animating: "bool",
          size: ["small", "large"],
          toast: "bool",
          text: "string",
          color: "string"
        },
        defaultProps: {
          animating: true,
          size: "small",
          toast: false,
          text: "加载中",
          color: "gray"
        },
        style: { backgroundColor: "gray", height: 50, width: 50 }
      }
    ]
  },

  {
    type: "NoticeBar",
    data: [
      {
        id: 634472,
        type: "NoticeBar",
        state: 2,
        props: {
          mode: "closable",
          titles:
            "这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，........",
          marqueeProps: { loop: true, style: { fontSize: 12, color: "red" } }
        },
        propTypes: {
          mode: ["closable", "link"],
          marqueeProps: "string",
          titles: "string"
        },
        defaultProps: {
          mode: "closable",
          marqueeProps: { loop: true, style: { fontSize: 12, color: "red" } },
          title: "这是一个通知栏........."
        },
        style: { width: "100%" }
      },
      {
        id: 634473,
        type: "NoticeBar",
        state: 2,
        props: {
          mode: "link",
          titles: "这是一个通知栏.........",
          marqueeProps: { loop: true, style: { fontSize: 12, color: "red" } }
        },
        propTypes: {
          mode: ["closable", "link"],
          marqueeProps: "string",
          titles: "string"
        },
        defaultProps: {
          mode: "closable",
          marqueeProps: { loop: true, style: { fontSize: 12, color: "red" } },
          title: "这是一个通知栏........."
        },
        style: { width: "100%" }
      }
    ]
  },
  {
    type: "List",
    data: [
      {
        id: 6344741,
        type: "List",
        state: 2,
        props: {
          title: "这是不换行item,这是不换行item,这是不换行item"
        },
        propTypes: {
          title: "string"
        },
        defaultProps: {
          title: ""
        },
        style: {}
      },
      {
        id: 6344742,
        type: "List",
        state: 2,
        props: {
          wrap: true,
          title: "这是自动换行item,这是自动换行item,这是自动换行item"
        },
        propTypes: {
          wrap: "bool",
          title: "string"
        },
        defaultProps: {
          wrap: true,
          title: ""
        },
        style: {}
      },
      {
        id: 6344743,
        type: "List",
        state: 2,
        props: {
          disabled: true,
          extra: "箭头向右",
          arrow: "horizontal",
          title: "标题"
        },
        propTypes: {
          disabled: "bool",
          extra: "string",
          arrow: ["horizontal", "up", "down", "empty"],
          title: "string"
        },
        defaultProps: {
          disabled: true,
          extra: "箭头向右",
          arrow: "horizontal",
          title: "标题"
        },
        style: {}
      },
      {
        id: 6344744,
        type: "List",
        state: 2,
        props: {
          extra: "箭头向下",
          arrow: "down",
          title: "标题"
        },
        propTypes: {
          extra: "string",
          arrow: ["horizontal", "up", "down", "empty"],
          title: "string"
        },
        defaultProps: {
          extra: "箭头向下",
          arrow: "down",
          title: "标题"
        },
        style: {}
      },
      {
        id: 6344745,
        type: "List",
        state: 2,
        props: {
          extra: "箭头向上",
          arrow: "up",
          title: "标题"
        },
        propTypes: {
          extra: "string",
          arrow: ["horizontal", "up", "down", "empty"],
          title: "string"
        },
        defaultProps: {
          extra: "箭头向上",
          arrow: "up",
          title: "标题"
        },
        style: {}
      },
      {
        id: 6344746,
        type: "List",

        state: 2,
        props: {
          extra: "没有箭头",
          arrow: "empty",
          title: "标题"
        },
        propTypes: {
          extra: "string",
          arrow: ["horizontal", "up", "down", "empty"],
          title: "string"
        },
        defaultProps: {
          extra: "没有箭头",
          arrow: "empty",
          title: "标题"
        },
        style: {}
      },

      {
        id: 6344747,
        type: "List",

        state: 2,
        props: {
          thumb: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png",
          arrow: "horizontal",
          title: "标题"
        },
        propTypes: {
          thumb: "string",
          arrow: ["horizontal", "up", "down", "empty"],
          title: "string"
        },
        defaultProps: {
          thumb: "",
          arrow: "horizontal",
          title: "标题"
        },
        style: {}
      }
    ]
  },
  {
    type: "DatePicker",
    data: [
      {
        id: 634475,
        type: "DatePicker",
        state: 2,
        props: {
          mode: "date",
          minDate: new Date(2015, 7, 6),
          maxDate: new Date(2026, 11, 3),
          format: "YYYY-MM-DD",
          timeValue: "时间选择"
        },
        propTypes: {
          mode: ["date", "time", "datetime", "year", "month"],
          minDate: "string",
          maxDate: "string",
          format: "string",
          timeValue: "string"
        },
        defaultProps: {
          mode: "date",
          minDate: new Date(2015, 7, 6),
          maxDate: new Date(2026, 11, 3),
          format: "YYYY-MM-DD",
          timeValue: "时间选择"
        },
        style: { width: "100%", paddingVertical: 5 }
      }
    ]
  },

  {
    type: "Popover",
    data: [
      {
        id: 634476,
        type: "Popover",
        state: 2,
        props: {
          data: [1, 2, 3]
        },
        propTypes: {
          data: "array"
        },
        defaultProps: {
          data: [1, 2, 3]
        },
        style: {}
      }
    ]
  },
  {
    type: "Result",
    data: [
      {
        id: 634477,
        type: "Result",
        state: 2,
        props: {
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg",
          title: "验证成功",
          message: "所提交内容已成功完成验证",
          buttonText: "完成",
          buttonType: "primary"
        },
        propTypes: {
          imgUrl: "array",
          title: "string",
          message: "string",
          buttonText: "string",
          buttonType: ["primary", "ghost", "warning"]
        },
        defaultProps: {
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg",
          title: "验证成功",
          message: "所提交内容已成功完成验证",
          buttonText: "完成",
          buttonType: "primary"
        },
        style: {}
      }
    ]
  },
  {
    type: "Slider",
    data: [
      {
        id: 634478,
        type: "Slider",

        state: 2,
        props: {
          min: 0,
          max: 100,
          step: 1,
          value: 50,
          disabled: true,

          maximumTrackTintColor: "blue"
        },
        propTypes: {
          min: "number",
          max: "number",
          step: "number",
          value: "number",
          disabled: "bool",
          maximumTrackTintColor: "string"
        },
        defaultProps: {
          min: 0,
          max: 100,
          step: 1,
          value: 30,
          disabled: false,
          maximumTrackTintColor: "blue"
        },
        style: { width: "100%", height: 10, margin: 10 }
      }
    ]
  },
  {
    type: "QuickEntry",
    data: [
      {
        id: 634479,
        type: "QuickEntry",
        state: 2,
        props: {
          title: "快速入口",
          data: [
            {
              icon:
                "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
              text: "手机安装"
            },
            {
              icon:
                "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
              text: "手机安装"
            },
            {
              icon:
                "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
              text: "手机安装"
            },
            {
              icon:
                "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
              text: "手机安装"
            }
          ],
          columnNum: 4,
          hasLine: false,
          showType: 1
        },
        propTypes: {
          title: "string",
          data: "array",
          columnNum: "bool",
          hasLine: "bool",
          showType: "number"
        },
        defaultProps: {
          title: "快速入口"
        },
        style: {}
      }
    ]
  },
  {
    type: "HomeBar",
    data: [
      {
        id: 634480,
        type: "HomeBar",
        state: 2,
        props: {
          textOne: "身份扫描",
          textTwo: "更多",
          textCenter: "定位客户"
        },
        propTypes: {
          textOne: "string",
          textTwo: "string",
          textCenter: "string"
        },
        defaultProps: {},
        style: {}
      }
    ]
  },
  {
    type: "ItemTypeOne",
    data: [
      {
        id: 634481,
        type: "ItemTypeOne",
        state: 2,
        props: {
          title: "2018-08-城市固定本地畅打18元套餐",
          tagTitle: "查看详情",
          rightText: "立即处理",
          dataItem: [
            { title: "3张手机卡" },
            { title: "200M宽带免费" },
            { title: "20K高清ITV" }
          ]
        },
        propTypes: {
          title: "string",
          tagTitle: "string",
          dataItem: "array"
        },
        defaultProps: {},
        style: {}
      }
    ]
  },
  {
    type: "Line",
    data: [
      {
        id: 634482,
        type: "Line",
        state: 2,
        props: {
          showType: "lg"
        },
        propTypes: {
          showType: ["sm", "lg"]
        },
        defaultProps: {},
        style: {}
      }
    ]
  }
];

export function getCombinationSouData() {
  return combinationSouData;
}
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
    }
  }
  return centerData;
}
export function moveComponent(centerData, dragIndex, hoverIndex) {
  centerData = reorder(centerData, dragIndex, hoverIndex);
  return centerData;
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
