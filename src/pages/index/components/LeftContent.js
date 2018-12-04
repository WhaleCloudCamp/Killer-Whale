import * as Whale from "components";
import * as Whales from "combinations";
import { Collapse, Button, Row, Col } from "antd";
import styless from "./left.less";
const Panel = Collapse.Panel;
const DraggableContent = Whale.DraggableContentShow;
const LeftContent = ({ sourceData = [], viewsData, changeShowPage, showPage }) => {
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

  const pageCollapse = (views, page) => {
    return (
      <div className="ant-collapse" style={{ overflow: "auto", flex: "1 1 0%" }}>
        {views.map(view => (
          <div
            className={
              page && page.name === view.name
                ? "ant-collapse-item ant-collapse-item-active"
                : "ant-collapse-item"
            }
            onClick={() => changeShowPage(view)}
            key={view.name}
          >
            <div className="ant-collapse-header" role="button" tabIndex="0" aria-expanded="false">
              <i className="anticon anticon-right arrow">
                <svg
                  viewBox="64 64 896 896"
                  className=""
                  data-icon="right"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" />
                </svg>
              </i>
              {view.name}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
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
      </Collapse>
      {viewsData && viewsData.length > 0 && pageCollapse(viewsData, showPage)}
    </div>
  );
};
export default LeftContent;
