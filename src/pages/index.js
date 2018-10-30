import { Row, Col, Button as AntdButton } from "antd";
import withRouter from "umi/withRouter";
import { connect } from "dva";
import { DragDropContext } from "react-beautiful-dnd";
import * as Whale from "components";
import styles from "./index.less";
import { getItemById } from "utils/data_utils";

const { DroppableContent, DraggableContent, FromList } = Whale;
const App = ({ global, dispatch }) => {
  const { sourceData, components, showItemId } = global;
  const onDragEnd = result => {
    console.log(result);
    dispatch({ type: "global/dndAction", payload: result });
  };
  const clickDrag = item => {
    dispatch({ type: "global/showItem", payload: item });
  };
  const onSubmit = data => {
    console.log(data);

    dispatch({ type: "global/changeItem", payload: data });
  };
  const gPage = () => {
    dispatch({ type: "global/gPage" });
  };
  const showItem = getItemById(components, showItemId);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.panel}>
        <Row className={styles.rowclass}>
          <Col span={8} className={styles.colclass}>
            <DroppableContent droppableId="leftPanel">
              {sourceData.map((item, index) => {
                const Com = Whale[item.type];

                if (!item.props) {
                  item.props = {};
                }
                return (
                  <DraggableContent
                    draggableId={item.id}
                    key={"leftPanel" + item.id}
                    index={index}
                  >
                    {Com && <Com {...item.props} style={item.style} />}
                  </DraggableContent>
                );
              })}
            </DroppableContent>
          </Col>
          <Col span={8} className={styles.colclass}>
            <DroppableContent droppableId="centerPanel" dropStyle={{}}>
              {components.map((item, index) => {
                const { component, id } = item;
                const Com = Whale[component.type];
                if (!component.props) {
                  component.props = {};
                }

                return (
                  <DraggableContent
                    draggableId={id}
                    key={"centerPanel" + id}
                    index={index}
                    onClick={() => clickDrag(item)}
                  >
                    {Com && (
                      <Com
                        {...component.props}
                        title="确定1232"
                        style={component.style}
                      />
                    )}
                  </DraggableContent>
                );
              })}
            </DroppableContent>
          </Col>
          <Col span={8} className={styles.colclass}>
            <div
              style={{
                padding: "20px"
              }}
            >
              {showItem && <FromList data={showItem} onSubmit={onSubmit} />}
              <AntdButton onClick={gPage}>保存</AntdButton>
            </div>
          </Col>
        </Row>
      </div>
    </DragDropContext>
  );
};

export default withRouter(connect(({ global }) => ({ global }))(App));
