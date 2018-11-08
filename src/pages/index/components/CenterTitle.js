import { Select, InputNumber } from "antd";
import styles from "./center.less";
const Option = Select.Option;

const CenterTitle = ({ handleChange ,pageName}) => {
  return (
    <div className={styles.centerTip}>
    <div style={{marginRight:'5px'}}>{pageName}</div>
        <Select defaultValue="iphone6" size="small" disabled>
          <Option value="6">Iphone6</Option>
        </Select>
        <div className={styles.containerSize}>
          <InputNumber
            size="small"
            min={1}
            max={100000}
            defaultValue={375}
            disabled
          />
          x
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
  );
};
export default CenterTitle;
