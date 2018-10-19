import { Row, Col, Menu } from "antd";
import Link from "umi/link";
import withRouter from "umi/withRouter";
import { connect } from "dva";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableContent from "components/DroppableContent";
import DraggableContent from "components/DraggableContent";
import FromList from "components/FromList";
import styles from "./index.less";
import WhaleRn from "whale-rn";
import { getItemById } from "utils/data_utils";

const App = ({ global, dispatch }) => {
  const { sourceData, components, showItemId } = global;
  const onDragEnd = result => {
    console.log(result);
    dispatch({ type: "global/dndAction", payload: result });
  };
  const clickDrag = item => {
    dispatch({ type: "global/showItem", payload: item });
  };
  const onSubmit = data=>{
    console.log(data);
    
    dispatch({ type: "global/changeItem", payload: data });
  }

  const showItem = getItemById(components, showItemId);
  console.log(sourceData);
  console.log(showItem);
  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.panel}>
        <Row className={styles.rowclass}>
          <Col span={8} className={styles.colclass}>
            <DroppableContent droppableId="leftPanel">
              {sourceData.map((item, index) => {
                const Com = WhaleRn[item.type];

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
                const Com = WhaleRn[component.type];
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
                    {Com && <Com {...component.props} style={component.style} />}
                  </DraggableContent>
                );
              })}
            </DroppableContent>
          </Col>
          <Col span={8} className={styles.colclass}>
          <div style={{
            padding:'20px'
          }}>
          {showItem&&<FromList data={showItem} onSubmit={onSubmit}/>}
          </div>
          </Col>
        </Row>
      </div>
    </DragDropContext>
  );
};

export default withRouter(connect(({ global }) => ({ global }))(App));
