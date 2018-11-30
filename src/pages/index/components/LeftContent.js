import * as Whale from "components";
import * as Whales from "combinations";
import { Collapse, Button, Row, Col, Popconfirm } from "antd";
import styless from "./left.less";
const Panel = Collapse.Panel;
const DraggableContent = Whale.DraggableContentShow;
const LeftContent = ({ sourceData = [], viewsData, gPage, dPage, changeShowPage }) => {
  const confirm = item => {
    dPage && dPage(item);
  };
  const createPage = (item = []) => {
    const name = prompt("请输入新页面英文名");
    if (name) gPage && gPage({ name: name, components: JSON.parse(JSON.stringify(item)) });
  };
  const typeName = {
    Flex: "弹性布局",
    Line: "线条",
    WhiteSpace: "上下留白",
    WingBlank: "两翼留白",
    BaseText: "文本",
    BaseImg: "图片",
    Icon: "图标",
    SearchBar: "搜索栏",
    Button: "按钮",
    Switch: "开关",
    Carousel: "走马灯",
    NoticeBar: "消息栏",
    Slider: "滑动输入条",
    Pagination: "分页器",
    CheckboxItem: "复选框",
    RadioItem: "单选框",
    Picker: "数据选择器",
    SegmentedControl: "分段器",
    Tabs: "选择卡",
    Result: "结果",
    QuickEntry: "快速入口",
    HomeBar: "首页头部",
    ItemTypeOne: "套餐项",
    SwitchItem: "开关项",
    InputItem: "输入项",
    List: "列表项",
    TextareaItem: "多行输入",
    StepperItem: "计步器",
  };

  return (
    <Collapse
      style={{
        overflow: "auto",
        flex: 1,
      }}
    >
      {sourceData.length > 0 &&
        sourceData.map((item, index) => {
          return (
            <Panel header={item.type + "（" + item.data.length + "）"} key={item.type}>
              <Row>
                {item.data.map((items, index) => {
                  let Com = null;
                  if (items.state === 1) {
                    Com = Whale[items.type];
                  } else {
                    Com = Whales[items.type];
                  }

                  if (!items.props) {
                    items.props = {};
                  }
                  return (
                    <Col
                      span={12}
                      style={{
                        textAlign: "center",
                        position: "relative",
                      }}
                      key={"leftPanel" + items.id}
                    >
                      <DraggableContent
                        itemData={items}
                        // key={"leftPanel" + items.id}
                      >
                        <div className={styless.com}>
                          <div>
                            <div
                              style={{
                                width: "375px",
                                transform: "scale(0.35)",
                              }}
                            >
                              {Com && (
                                <Com
                                  style={{
                                    borderStyle: items.isLayout ? "dashed" : "none",
                                    borderWidth: items.isLayout ? "1px" : "0",
                                    ...items.style,
                                  }}
                                  {...items.props}
                                />
                              )}
                            </div>
                          </div>
                        </div>

                        <div
                          style={{
                            color: "#7E869F",
                            fontSize: "12px",
                          }}
                        >
                          {typeName[items.type] || items.type}
                        </div>
                      </DraggableContent>
                    </Col>
                  );
                })}
              </Row>
            </Panel>
          );
        })}
      {viewsData &&
        viewsData.length > 0 &&
        viewsData.map((item, index) => {
          return (
            <Panel header={item.name} key={item.name}>
              <Row type="flex" justify="space-around">
                <Col>
                  <Button type="primary" onClick={() => changeShowPage(item)}>
                    切换
                  </Button>
                </Col>
                <Col>
                  <Button onClick={() => createPage(item.components)}>复制</Button>
                </Col>
                <Col>
                  <Popconfirm
                    title="确定删除这个页面吗?"
                    onConfirm={() => confirm(item)}
                    okText="确定"
                    cancelText="取消"
                  >
                    <Button type="danger">删除</Button>
                  </Popconfirm>
                </Col>
              </Row>
            </Panel>
          );
        })}
      {viewsData && (
        <Panel header="新增页面" key="newpagebjsdbasb">
          <Button onClick={() => createPage()}>新增</Button>
        </Panel>
      )}
    </Collapse>
  );
};
export default LeftContent;
