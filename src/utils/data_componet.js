export const DataComponet =[
    {
      type: "ActivityIndicator",
      data: [
        {
          id: 534431,
          type: "ActivityIndicator",
          state: 1,
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
      type: "Button",
  
      data: [
        {
          id: 5344321,
          type: "Button",
          state: 1, //1:代表基础组件 2：代表组成组件
          props: {
            type: "ghost", children: "确定", size: 'large',
  
          },
          propTypes: {
            type: ["primary", "ghost", "warning"],
            pressIn: "bool",
            disabled: "bool",
            loading: "bool",
            size: ['large', 'small']
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
  
          props: {
            type: "warning", children: "确定",
            size: 'large',
          },
          propTypes: {
            type: ["primary", "ghost", "warning"],
            pressIn: "bool",
            disabled: "bool",
            loading: "bool",
            size: ['large', 'small']
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
            type: ['primary', 'ghost', 'warning'],
            pressIn: 'bool',
            disabled: 'bool',
            loading: 'bool',
  
  
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
            simple: "bool",
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
            simple: "bool",
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
            tabs: 'array',
            tabBarPosition: 'string',
            initialPage: 'number',
            swipeable: 'bool',
            animated: 'bool',
            prerenderingSiblingsNumber: 'number',
            tabBarBackgroundColor: 'string',
            tabBarActiveTextColor: 'string',
            tabBarInactiveTextColor: 'string',
            tabBarTextStyle: 'style',
  
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
            percent: 'number',
            position: ['fixed', 'normal'],
            unfilled: 'bool',
            barStyle: 'style'
  
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
            disabled: false,
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
          style: {},
        },
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