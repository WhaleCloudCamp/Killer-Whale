import styles from "./left.less";
import logo from "assets/web/logo.png";

const LeftTitle = ({ sourceData = [] }) => {
  return (
    <div className={styles.tip}>
      <img src={logo} className={styles.classify} alt="" />
    </div>
  );
};
export default LeftTitle;
