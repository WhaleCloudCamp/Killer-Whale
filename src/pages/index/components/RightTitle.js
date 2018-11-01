import * as Whale from "components";
import styles from "./right.less";
import share from "assets/share.png";

const RightTitle = ({ sourceData = [] }) => {
  return (
    <div className={styles.tipRight}>
      <img src={share} className={styles.bell} alt="" />
    </div>
  );
};
export default RightTitle;
