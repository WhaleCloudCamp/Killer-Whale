import { Row, Col } from "antd";
import { connect } from "dva";
import styles from "./index.less";
import * as Whale from "components";
import LeftContent from "./components/LeftContent";
import LeftTitle from "./components/LeftTitle";
import CenterContent from "./components/CenterContent";
import CenterTitle from "./components/CenterTitle";
import RightContent from "./components/RightContent";
import RightTitle from "./components/RightTitle";
import DeleteDroppable from "../../components/DeleteDroppable";
// import classnames from "classnames";

// import phone from "assets/phone.png";

const App = ({ global, dispatch }) => {
  const { cneterscale = 100, sourceData, components, showItemData } = global;
  const handleChange = value =>
    dispatch({ type: "global/changeScale", payload: value });

  const onDropAction = action => dispatch(action);
  const clickDrag = item => {
    dispatch({ type: "global/showItem", payload: item });
  };
  const onSubmit = data => {
    dispatch({ type: "global/changeItem", payload: data });
  };
  return (
    <div className={styles.panel}>
      <Row className={styles.rowclass}>
        <Col span={6} className={styles.colclass}>
          <LeftTitle />
          <LeftContent sourceData={sourceData} />
          <DeleteDroppable onDropAction={onDropAction} />
        </Col>
        <Col
          span={12}
          className={styles.colclass}
          style={{
            minWidth: "435px"
          }}
        >
          <CenterTitle handleChange={handleChange} />
          <CenterContent
            cneterscale={cneterscale}
            onDropAction={onDropAction}
            components={components}
            clickDrag={clickDrag}
          />
        </Col>
        <Col span={6} className={styles.colclass}>
          <RightTitle />
          <RightContent showItemData={showItemData} onSubmit={onSubmit}/>
        </Col>
      </Row>
    </div>
  );
};

export default connect(({ global }) => ({ global }))(App);
