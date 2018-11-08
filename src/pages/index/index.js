import { Row, Col } from "antd";
import { connect } from "dva";
import { Tabs } from "antd-mobile";
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
  const {
    cneterscale = 100,
    sourceData,
    combinationSouData,
    views,
    showPage,
    showItemData
  } = global;
  console.log(views);

  const { components = [],name="" } = views[showPage];
  const handleChange = value =>
    dispatch({ type: "global/changeScale", payload: value });

  const onAction = action => dispatch(action);

  const clickDrag = item => {
    dispatch({ type: "global/showItem", payload: item });
  };

  const onSubmit = data => {
    dispatch({ type: "global/changeItem", payload: data });
  };

  const gPage = page => {
    dispatch({ type: "global/gPage", payload: page });
  };

  const dPage = page => {
    dispatch({ type: "global/dPage", payload: page });

  };
const changeShowPage = page=>{
  dispatch({ type: "global/changeShowPage", payload: page });
}

  const tabs = [
    { title: "基础组件", sub: "1" },
    { title: "组合组件", sub: "2" },
    { title: "页面", sub: "3" }
  ];

  return (
    <div className={styles.panel}>
      <Row className={styles.rowclass}>
        <Col span={6} className={styles.colclass}>
          <div>
            <Tabs
              tabs={tabs}
              initialPage={0}
            >
              <div style={{ display: "flex", backgroundColor: "#fff" }}>
                <LeftContent
                  sourceData={sourceData}
                  gPage={gPage}
                  dPage={dPage}
                />
              </div>
              <div style={{ display: "flex", backgroundColor: "#fff" }}>
                <LeftContent
                  sourceData={combinationSouData}
                  gPage={gPage}
                  dPage={dPage}
                />
              </div>
              <div style={{ display: "flex", backgroundColor: "#fff" }}>
                <LeftContent viewsData={views} gPage={gPage} dPage={dPage} changeShowPage={changeShowPage}/>
              </div>
            </Tabs>
            <DeleteDroppable onDropAction={onAction} />
          </div>
        </Col>
        <Col
          span={12}
          className={styles.colclass}
          style={{
            minWidth: "435px"
          }}
        >
          <CenterTitle handleChange={handleChange} pageName={name}/>
          <CenterContent
            cneterscale={cneterscale}
            onDropAction={onAction}
            components={components}
            clickDrag={clickDrag}
          />
        </Col>
        <Col span={6} className={styles.colclass}>
          <RightTitle onAction={onAction} />
          {showItemData &&
            showItemData.id && (
              <RightContent showItemData={showItemData} onSubmit={onSubmit} />
            )}
        </Col>
      </Row>
    </div>
  );
};

export default connect(({ global }) => ({ global }))(App);
