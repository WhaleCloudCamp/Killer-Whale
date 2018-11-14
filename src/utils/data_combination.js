export const DataCombination = [
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
          isShowRightText: false,
          style: { backgroundColor: "#0C83FF" }

        },
        propTypes: {
          title: "string",
          styleRightText: "style",
          styleTitle: "style",
          isShowBk: "bool",
          isShowDel: "bool",
          isShowFirstRightIcon: "bool",
          isShowLastRightIcon: "bool",
          isShowRightText: "bool",
          style: 'style'
        },
        defaultProps: {
          title: "标题",
          styleRightText: { color: "white" }, //右文本样式
          styleTitle: { color: "white" }, //标题样式
          isShowBk: false, //是否显示返回键
          isShowDel: false, //是否显示左边第二个图标
          isShowFirstRightIcon: false, //是否显示右边第一个图标
          isShowLastRightIcon: false, //是否显示右边第二个图标
          isShowRightText: false,
        },
        style: {}
      },
      {
        id: 6344652,
        type: "NavBar",
        state: 2,
        props: {
          title: "标题",
          styleRightText: { color: "white", width: 20 }, //右文本样式
          styleTitle: { color: "white" }, //标题样式
          isShowBk: true, //是否显示返回键
          isShowDel: true, //是否显示左边第二个图标
          isShowFirstRightIcon: true, //是否显示右边第一个图标
          isShowLastRightIcon: true, //是否显示右边第二个图标
          isShowRightText: false,
          style: { backgroundColor: "green" }
        },
        propTypes: {
          title: "string",
          styleRightText: "style",
          styleTitle: "style",
          isShowBk: "bool",
          isShowDel: "bool",
          isShowFirstRightIcon: "bool",
          isShowLastRightIcon: "bool",
          isShowRightText: "bool",
          style: "style"
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
        style: {}

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
          isShowRightText: true,
          style: { backgroundColor: "pink" }

        },
        propTypes: {
          title: "string",
          styleRightText: "style",
          styleTitle: "style",
          isShowBk: "bool",
          isShowDel: "bool",
          isShowFirstRightIcon: "bool",
          isShowLastRightIcon: "bool",
          isShowRightText: "bool",
          style: 'style'
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
        style: {}
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
          showType: true,
          title: "单项选择标签",
          textStyle: {
            marginLeft: 10,
            fontSize: 15,
            color: 'black'
          }
        },
        propTypes: {
          checked: "bool",
          disabled: "bool",
          showType: "bool",
          title: "string"
        },
        defaultProps: {
          checked: true,
          disabled: false,
          showType: true,

          title: "单项选择标签",
          textStyle: 'style'
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
          showType: false,
          title: "单项选择标签",
          textStyle: {
            marginLeft: 10,
            fontSize: 15,
            color: 'black'
          }
        },
        propTypes: {
          checked: "bool",
          disabled: "bool",
          showType: "bool",
          title: "string",
          textStyle: "style"
        },
        defaultProps: {
          checked: true,
          disabled: false,
          showType: false,
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

          title: "计步器值",
          textStyle: {
            fontSize: 15,
            color: 'black'
          }
        },
        propTypes: {
          min: "number",
          max: "number",
          step: "number",
          value: "number",
          disabled: "bool",
          showNumber: "bool",
          title: "string",
          textStyle: "style"
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
          showtype: '1',
          labelNumber: 2,
          titlestyle: {
            fontSize: 15,
            color: 'black',
          },

        },
        propTypes: {
          type: ['text', 'bankCard', 'phone', 'password', 'number', 'digit'],
          value: "string",
          placeholder: "string",
          clear: "bool",
          error: "bool",
          extra: "string",
          title: "string",
          showtype: ['1', '2'],
          labelNumber: "number",
          titlestyle: "style",

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
          showtype: '2',
          labelNumber: 2,

        },
        propTypes: {
          type: ['text', 'bankCard', 'phone', 'password', 'number', 'digit'],
          value: "string",
          placeholder: "string",
          editable: "bool",
          extra: "string",
          imgurl: "string",
          showtype: ['1', '2'],
          labelNumber: "number",

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
          showtype: '1',
          title: "标签",
          labelNumber: 2,

        },
        propTypes: {
          type: ['text', 'bankCard', 'phone', 'password', 'number', 'digit'],
          value: "string",
          placeholder: "string",
          editable: "bool",
          extra: "string",
          showtype: ['1', '2'],
          title: "string",
          labelNumber: "number",

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
          dataItem: [{ url: 'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png' }, { url: 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png' }],
          selectedIndex: 0,
          autoplay: true,
          infinite: true,
          autoplayInterval: 3000,
          dots: true,
          vertical: false,
          imgStyle: {
            height: 150
          },

        },
        propTypes: {
          dataItem: 'array',
          selectedIndex: 'number',
          autoplay: 'bool',
          infinite: 'bool',
          autoplayInterval: 'number',
          dots: 'bool',
          vertical: 'bool',
          imgStyle: 'style',

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
          dataItem: [{ url: 'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png' }, { url: 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png' },],
          autoplay: true,
          infinite: true,
          autoplayInterval: 3000,
          dots: false,
          vertical: true
        },
        propTypes: {
          dataItem: 'array',
          autoplay: 'bool',
          infinite: 'bool',
          autoplayInterval: 'number',
          dots: 'bool',
          vertical: 'bool'
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
          marqueeProps: "array",
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
          marqueeProps: "array",
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
          title: '标题'
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
          mode: ['date', 'time', 'datetime', 'year', 'month'],
          minDate: 'object',
          maxDate: 'object',
          format: 'string',
          timeValue: 'string',
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
          data: [1, 2, 3],
          title: '菜单',
          mask: true,
          textStyle: {
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            textAlignVertical: 'center',
          }
        },
        propTypes: {
          data: "array",
          title: 'string',
          mask: 'bool',
          textStyle: 'style'
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

          AlipayImg: require('../assets/bell.png'),
          title: "验证成功",
          message: "所提交内容已成功完成验证",
          buttonText: "完成",
          buttonType: "primary"
        },
        propTypes: {
          imgUrl: 'string',
          title: 'string',
          message: 'string',
          buttonText: 'string',
          buttonType: ['primary', 'ghost', 'warning'],
        },
        defaultProps: {

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
          columnNum: 4,
          showType: 1,

        },
        propTypes: {
          title: 'string',
          data: 'array',
          columnNum: 'bool',
          hasLine: 'bool',
          showType: 'number',
          columnNum: 'number'
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
          textOne: '身份扫描',
          textTwo: '更多',
          textCenter: '定位客户',
          mainStyle: {
            backgroundColor: '#02C558',
          },
          imgStyle: {
            width: 25,
            height: 25,
            margin: 5
          },
          textCenterStyle: {
            color: 'gray',
            fontSize: 10
          },
          textStyle: {
            color: 'white',
            fontSize: 15
          }
        },
        propTypes: {
          textOne: "string",
          textTwo: "string",
          textCenter: "string",
          imgStyle: "style",
          textCenterStyle: "style",
          textStyle: "style",
          mainStyle: "style",
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
          title: '2018-08-城市固定本地畅打18元套餐',
          tagTitle: '查看详情',
          rightText: '立即处理',
          dataItem: [{ title: '3张手机卡' }, { title: '200M宽带免费' }, { title: '20K高清ITV' }],
          priceName: '预存款',
          price: '200',
          secondaryStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            margin: 5
          },
          imgStyle: {
            width: 20,
            height: 20,
            margin: 5
          },
          tagStyle: {
            borderWidth: 1,
            borderColor: '#FFC76F',
            borderRadius: 5,
            margin: 5,
          },
          tagTitleStyle: {
            color: '#FFC76F',
            padding: 3,
            fontSize: 12,
            height: 20
          },
          centertag: {
            borderWidth: 1,
            borderColor: '#02C558',
            borderRadius: 10,
            margin: 3
          },
          centertagTitleStyle: {
            color: '#02C558',
            padding: 3,
            fontSize: 8,
            height: 20
          },
          priceNameStyle: {
            fontSize: 10,
            marginLeft: 10
          },
          priceStyle: {
            fontSize: 10,
            color: 'red',
            margin: 5
          },
          rightStyle: {
            position: 'absolute',
            right: 0,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            backgroundColor: '#02C558'
          },
          rightTextStyle: {
            color: 'white',
            fontSize: 10,
            padding: 5
          }
        },
        propTypes: {
          title: 'string',
          tagTitle: 'string',
          dataItem: 'array',
          priceName: 'string',
          price: 'string',
          secondaryStyle: 'style',
          imgStyle: 'style',
          tagStyle: 'style',
          tagTitleStyle: 'style',
          centertag: 'style',
          centertagTitleStyle: 'style',
          priceNameStyle: 'style',
          priceStyle: 'style',
          rightStyle: 'style',
          rightTextStyle: 'style',

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
          showType: 'lg'

        },
        propTypes: {
          showType: ['sm', 'lg']
        },
        defaultProps: {

        },
        style: {}
      }
    ]
  },

  {
    type: "DialogOne",
    data: [
      {
        id: 634483,
        type: "DialogOne",
        state: 2,
        props: {
          title: '重置密码错误',
          btnSureText: '确定',
          btnCancelText:'取消',
          showCancel:true,
          mainStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: '#00BFFF',
            width: 200,
            height: 200,
          },
          imgStyle: {
            width: 50,
            height: 50,
            margin: 10,
          },
          contentStyle: {
            color: 'black',
            fontSize: 15,
            margin: 10
          },
          btnCancelStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'gray',
            borderRadius: 10,
            width: 80,
            height: 30,
            margin:5
          },
          btnCancelTextStyle: {
            color: 'white',
            fontSize: 15,
          },
          btnSureStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#02C558',
            borderRadius: 10,
            width: 80,
            height: 30,
            margin:5
          },
          btnSureTextStyle: {
            color: 'white',
            fontSize: 15,
          }

        },
        propTypes: {
          title: 'string',
          btnText: 'string',
          showCancel:'bool',
          mainStyle: 'style',
          imgStyle: 'style',
          contentStyle: 'style',
          btnSureStyle: 'style',
          btnSureTextStyle: 'style',
          btnCancelStyle: 'style',
          btnCancelTextStyle: 'style',
        },
        defaultProps: {

        },
        style: {}
      }
    ]
  },
  {
    type: "DialogTwo",
    data: [
      {
        id: 634484,
        type: "DialogTwo",
        state: 2,
        props: {
          title:'天翼乐享套餐128元-聊天版',
          contentText:'1.月使用费用1.月使用费用1.月使用费用1.月使用费用,1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用1.月使用费用',
  
          mainStyle:{
    
            borderRadius: 8,
            backgroundColor: '#00BFFF',
            width: 300,
            height: 200,
            margin:10
          },
          secondStyle:{
            alignItems:'center',
            backgroundColor:'#02C558',
            borderTopLeftRadius:8,
            borderTopRightRadius: 8,
          },
          titleStyle:{
               color:'white',
               fontSize:15,
               flex:1,
              textAlign: 'center'
          },
          imgStyle:{
            width:20,
            height:20,
            margin:10
          },
          contentStyle:{
            color:'black',
            padding:10,
            fontSize:15,
            height:'100%'
          
          }

        },
        propTypes: {
          title:'string',
          contentText:'string',
          mainStyle:'style',
          secondStyle:'style',
          titleStyle:'style',
          imgStyle:'style',
contentStyle:'style'

       
        },
        defaultProps: {

        },
        style: {}
      }
    ]
  },
];

