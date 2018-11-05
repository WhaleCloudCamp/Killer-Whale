import { Row, Col } from "antd";
import { connect } from "dva";
import { Tabs } from 'antd-mobile'
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
  const { cneterscale = 100, sourceData,combinationSouData, components, showItemData } = global;
  const handleChange = value =>
    dispatch({ type: "global/changeScale", payload: value });

  const onDropAction = action => dispatch(action);
  const clickDrag = item => {
    dispatch({ type: "global/showItem", payload: item });
  };
  const onSubmit = data => {
    dispatch({ type: "global/changeItem", payload: data });
  };

  const tabs = [
    { title: '基础组件', sub: '1' },
    { title: '组成组件', sub: '2' },
    { title: '页面', sub: '3' },
  ];
  return (
    <div className={styles.panel}>
      <Row className={styles.rowclass}>
        <Col span={6} className={styles.colclass}>
          <div >
            <Tabs tabs={tabs}
              initialPage={0}
              onChange={(tab, index) => { console.log('onChange', index, tab); }}
              onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
              <div style={{ display: 'flex', backgroundColor: '#fff' }}>

                <LeftContent sourceData={sourceData} />

              </div>
              <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                <LeftContent sourceData={combinationSouData} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                {'页面'}
              </div>

            </Tabs>
            <DeleteDroppable onDropAction={onDropAction} />
          </div>

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
          <RightContent showItemData={showItemData} onSubmit={onSubmit} />
        </Col>
      </Row>
    </div>
  );
};

export default connect(({ global }) => ({ global }))(App);
