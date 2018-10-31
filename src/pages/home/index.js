import { Row, Col, Icon, Select, InputNumber,Button } from "antd";
import { connect } from "dva";
import styles from "./index.less";
import classify from "assets/classify.png";
import share from "assets/share.png";
import more from "assets/more.png";

// import classnames from "classnames";

// import phone from "assets/phone.png";
const Option = Select.Option;

const App = ({ global, dispatch }) => {
  const { cneterscale = 100,sourceData, components, showItemId } = global;
  const handleChange = value => {
    dispatch({ type: "global/changeScale", payload: value });
  };
  return (
    <div className={styles.panel}>
      <Row className={styles.rowclass}>
        <Col span={6} className={styles.colclass}>
          <div className={styles.tip}>
            <img src={classify} className={styles.classify} alt="" />
          </div>
          <div>
            <div className={styles.title}>
              <span className={styles.sizeTipText}>Button按钮</span>
              <div className={styles.itemIcon}>
                <img src={more} className={styles.more} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.itemContent}>
                <span className={styles.itemContentText}>大</span>
              </div>
              <div className={styles.itemContent}>
                <span className={styles.itemContentText}>小</span>
              </div>
            </div>
          </div>
        </Col>
        <Col
          span={12}
          className={styles.colclass}
          style={{
            minWidth: "435px"
          }}
        >
          <div className={styles.centerTip}>
            <Select defaultValue="iphone6" size="small" disabled>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <div>
              <InputNumber
                size="small"
                min={1}
                max={100000}
                defaultValue={375}
                disabled
              />
              X
              <InputNumber
                size="small"
                min={1}
                max={100000}
                defaultValue={667}
                disabled
              />
            </div>
            <Select defaultValue="100" size="small" onChange={handleChange}>
              <Option value="50">50%</Option>
              <Option value="75">75%</Option>
              <Option value="90">90%</Option>
              <Option value="100">100%</Option>
              <Option value="120">120%</Option>
              <Option value="150">150%</Option>
            </Select>
          </div>

          <div
            className={styles.centerMain}
            style={{
              transform: `scale(${cneterscale / 100})`
            }}
          >
            {
              // <img src={phone} className={styles.centerImg} />
            }
            <div className={styles.centerDiv}>1231232313313131323233
            </div>
          </div>
        </Col>
        <Col span={6} className={styles.colclass}>
          <div className={styles.tipRight}>
            <img src={share} className={styles.bell} alt="" />
          </div>
          <div
            style={{
              padding: "0px 20px 20px 20px"
            }}
          >
            <div>right</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default connect(({ global }) => ({ global }))(App);
