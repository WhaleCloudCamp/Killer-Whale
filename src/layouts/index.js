import { Row, Col, Menu } from "antd";
import Link from "umi/link";
import withRouter from "umi/withRouter";
import { connect } from "dva";
import styles from "./index.less";

const App = props => {
  const { global } = props;
  const { components } = global;

  return (
    <div className={styles.panel}>
      <Row className={styles.rowclass}>
        <Col span={8} className={styles.colclass}>
          <div className={styles.content}>
            <div
              style={{
                overflow: "auto"
              }}
            >
              {components.map((item, index) => {
                return (
                  <div className={styles.comlist} key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
        <Col span={8} className={styles.colclass}>
          展示和布局
        </Col>
        <Col span={8} className={styles.colclass}>
          属性
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(connect(({ global }) => ({ global }))(App));
