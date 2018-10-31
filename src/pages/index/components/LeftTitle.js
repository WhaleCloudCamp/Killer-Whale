import * as Whale from "components";
import styles from "./left.less";
import classify from "assets/classify.png";

const LeftTitle = ({ sourceData = [] }) => {
  return (
    <div className={styles.tip}>
      <img src={classify} className={styles.classify} alt="" />
    </div>
  );
};
export default LeftTitle;
