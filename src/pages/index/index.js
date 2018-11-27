import { Row, Col } from "antd";
import { connect } from "dva";
import { Tabs } from "antd-mobile";
import styles from "./index.less";
import LeftContent from "./components/LeftContent";
import LeftTitle from "./components/LeftTitle";
import CenterContent from "./components/CenterContent";
import CenterTitle from "./components/CenterTitle";
import RightContent from "./components/RightContent";
import RightTitle from "./components/RightTitle";
import DeleteDroppable from "../../components/DeleteDroppable";

const App = ({ global, dispatch }) => {
  const { cneterscale = 100, sourceData, views, showPage, showItemData } = global;

  const { components = [], name = "" } = views[showPage];
  const handleChange = value => dispatch({ type: "global/changeScale", payload: value });

  const onAction = action => dispatch(action);

  const clickDrag = (item, e) => {
    e && e.stopPropagation && e.stopPropagation();
    dispatch({ type: "global/showItem", payload: item });
  };

  const changeItemProp = data => {
    dispatch({ type: "global/changeItemProp", payload: data });
  };

  const gPage = page => {
    dispatch({ type: "global/gPage", payload: page });
  };

  const dPage = page => {
    dispatch({ type: "global/dPage", payload: page });
  };
  const changeShowPage = page => {
    dispatch({ type: "global/changeShowPage", payload: page });
  };

  const tabs = [{ title: "组件库", sub: "1" }, { title: "页面库", sub: "2" }];

  return (
    <div className={styles.panel}>
      <Row className={styles.rowclass}>
        <Col span={6} className={styles.colclass}>
          <div>
            <LeftTitle />
            <Tabs tabs={tabs} initialPage={0}>
              <div style={{ display: "flex", backgroundColor: "#fff" }}>
                <LeftContent sourceData={sourceData} />
              </div>

              <div style={{ display: "flex", backgroundColor: "#fff" }}>
                <LeftContent
                  viewsData={views}
                  gPage={gPage}
                  dPage={dPage}
                  changeShowPage={changeShowPage}
                />
              </div>
            </Tabs>
            {/* <DeleteDroppable onDropAction={onAction} /> */}
          </div>
        </Col>
        <Col
          span={12}
          className={styles.colclass}
          style={{
            minWidth: "435px",
          }}
        >
          <CenterTitle handleChange={handleChange} pageName={name} />
          <CenterContent
            cneterscale={cneterscale}
            onDropAction={onAction}
            components={components}
            clickDrag={clickDrag}
          />
          <DeleteDroppable onDropAction={onAction} />
        </Col>
        <Col span={6} className={styles.colclass}>
          <RightTitle onAction={onAction} />
          {showItemData && showItemData.id && (
            <RightContent showItemData={showItemData} changeItemProp={changeItemProp} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default connect(({ global }) => ({ global }))(App);
