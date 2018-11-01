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
// import classnames from "classnames";

// import phone from "assets/phone.png";

const App = ({ global, dispatch }) => {
  const { cneterscale = 100, sourceData, components, showItemId } = global;
  const handleChange = value => {
    dispatch({ type: "global/changeScale", payload: value });
  };
  return (
    <div className={styles.panel}>
      <Row className={styles.rowclass}>
        <Col span={6} className={styles.colclass}>
          <LeftTitle />
          <LeftContent sourceData={sourceData} />
        </Col>
        <Col
          span={12}
          className={styles.colclass}
          style={{
            minWidth: "435px"
          }}
        >
          <CenterTitle handleChange={handleChange} />
          <CenterContent cneterscale={cneterscale} />
        </Col>
        <Col span={6} className={styles.colclass}>
          <RightTitle />
          <RightContent />
        </Col>
      </Row>
    </div>
  );
};

export default connect(({ global }) => ({ global }))(App);
