import styles from "./left.less";
import logo from "assets/web/logo.png";

const LeftTitle = ({ sourceData = [] }) => {
  return (
    <div className={styles.tip}>
      <img src={logo} className={styles.classify} alt="" />
      <span
        style={{
          paddingLeft: "10px",
        }}
      >
        RN可视化构建工具
      </span>
    </div>
  );
};
export default LeftTitle;
