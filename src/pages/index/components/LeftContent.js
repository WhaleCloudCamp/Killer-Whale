import * as Whale from "components";
import * as Whales from "combinations";
import { Collapse, Button, Row, Col, Popconfirm } from "antd";
import styless from "./left.less";
const Panel = Collapse.Panel;
const DraggableContent = Whale.DraggableContent;
const LeftContent = ({
  sourceData = [],
  viewsData,
  gPage,
  dPage,
  changeShowPage
}) => {
  const confirm = item => {
    dPage && dPage(item);
  };
  const createPage = (item = []) => {
    const name = prompt("请输入新页面英文名");
    if (name)
      gPage &&
        gPage({ name: name, components: JSON.parse(JSON.stringify(item)) });
  };

  return (
    <Collapse
      // accordion
      style={{
        maxHeight: "600px",
        overflow: "auto",
        flex: 1
      }}
    >
      {sourceData.length > 0 &&
        sourceData.map((item, index) => {
          return (
            <Panel header={item.type} key={item.type}>
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
             
                  <DraggableContent
                    itemData={items}
                    key={"leftPanel" + items.id}
                  >
                  <div className ={styless.com}>
                  <div>{items.type}</div>
                    {Com && (
                      <Com
                        style={{
                          borderStyle: items.type==="Flex"? "dashed" : "none",
                          borderWidth:items.type==="Flex"? "1px" : "0",
                          ...items.style}}
                        {...items.props}
                        key={`leftPanel${items.type}${items.id}`}
                      />
                    )}
                    </div>
                  </DraggableContent>
                  
                );
              })}
            </Panel>
          );
        })}
      {viewsData&&viewsData.length > 0 &&
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
                  <Button onClick={() => createPage(item.components)}>
                    复制
                  </Button>
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
