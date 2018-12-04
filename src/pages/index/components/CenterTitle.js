import { Select, InputNumber } from "antd";
import styles from "./center.less";
const Option = Select.Option;

const CenterTitle = ({ handleHide, handleChange, showPage, views, changeShowPage, hidevalue }) => {
  return (
    <div className={styles.centerTipMain}>
      <div className={styles.centerTip}>
        <div
          style={{
            marginRight: "5px",
            fontWeight: "bold",
            fontFamily: "Arial-BoldMT",
            color: "#333333",
            fontSize: "18px",
          }}
        >
          <Select
            className={styles.selectStyle}
            value={showPage}
            size="small"
            onChange={value => changeShowPage(views[value])}
          >
            {views.map((item, index) => (
              <Option value={index} key={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
        </div>
        {
          // <Select defaultValue="iphone6" size="small" disabled>
          //   <Option value="6">Iphone6</Option>
          // </Select>
          <div className={styles.containerSize}>
            <InputNumber size="small" min={1} max={100000} defaultValue={375} disabled />
            ×
            <InputNumber size="small" min={1} max={100000} defaultValue={667} disabled />
          </div>
        }
        <Select value={hidevalue} size="small" onChange={handleHide}>
          <Option value="true">显示背景</Option>
          <Option value="false">隐藏背景</Option>
        </Select>
      </div>
      <div className={styles.selectMain}>
        <Select
          className={styles.selectStyle}
          defaultValue="75"
          size="small"
          onChange={handleChange}
        >
          <Option value="50">50%</Option>
          <Option value="75">75%</Option>
          <Option value="90">90%</Option>
          <Option value="100">100%</Option>
          <Option value="120">120%</Option>
          <Option value="150">150%</Option>
        </Select>
      </div>
    </div>
  );
};
export default CenterTitle;
