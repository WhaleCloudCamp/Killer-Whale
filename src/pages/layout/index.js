import { Row, Col, Menu, Button } from "antd";
import Link from "umi/link";
import withRouter from "umi/withRouter";
import { connect } from "dva";
import { DragDropContext } from "react-beautiful-dnd";
import {DraggableContent,DroppableContent,FromList,Button as MobileBtn} from "components";
import styles from "./index.less";
import WhaleRn from "whale-rn";
import { getItemById } from "utils/data_utils";
import classNames from 'classnames/bind';
import classify from '../../assets/classify.png';
import triangle from "../../assets/triangle.png";
import share from "../../assets/share.png";
import bell from "../../assets/bell.png";

let cx = classNames.bind(styles);
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
          <Col span={7} className={styles.colclass}>
            <div className={styles.tip}>
              <img src={classify} className={styles.classify} alt=""/>
            </div>
            <DroppableContent droppableId="leftPanel">
    <MobileBtn type="primary" size="large">123</MobileBtn>

              {
              //   sourceData.map((item, index) => {
              //   const Com = WhaleRn[item.type];
              //   if (!item.props) {
              //     item.props = {};
              //   }
              //   return (
              //     <DraggableContent
              //       draggableId={item.id}
              //       key={"leftPanel" + item.id}
              //       index={index}
              //     >
              //       {Com && <Com {...item.props} style={item.style} />}
              //     </DraggableContent>
              //   );
              // })
            }
            </DroppableContent>
          </Col>
          <Col span={8} className={cx({
            colclass: true,
            centerContent: false,
          })}>
            <div className={styles.tip}>
              <div className={styles.circle}>

              </div>
              <div className={styles.tipSelect}>
                {/*<div className={styles.selectItemOne}>*/}
                  {/*<span className={styles.tipText}>Theme</span>*/}
                {/*</div>*/}
                <div className={styles.selectCenter}>
                  <span className={styles.tipText}>Editor</span>
                </div>
                {/*<div className={styles.selectItemThird}>*/}
                  {/*<span className={styles.tipText}>Composer</span>*/}
                  {/*<img src={triangle} className={styles.triangle} alt=""/>*/}
                {/*</div>*/}
              </div>
              <div>
                <img src={share} className={styles.share} alt=""/>
              </div>
            </div>
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
                    {Com && (
                      <Com {...component.props} style={component.style} />
                    )}
                  </DraggableContent>
                );
              })}
            </DroppableContent>
          </Col>
          <Col span={9} className={styles.colclass}>
            <div className={styles.tipRight}>
              <img src={bell} className={styles.bell} alt=""/>
              <div className={styles.blueCircle}>

              </div>
            </div>
            <div
              style={{
                padding: "0px 20px 20px 20px"
              }}
            >
              {showItem && <FromList data={showItem} onSubmit={onSubmit} />}
              <Button onClick={gPage}>保存</Button>
            </div>
          </Col>
        </Row>
      </div>
    </DragDropContext>
  );
};

export default withRouter(connect(({ global }) => ({ global }))(App));
