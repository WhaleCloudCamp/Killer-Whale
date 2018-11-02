import * as Whale from "components";
import styles from "./right.less";
import share from "assets/share.png";

const RightTitle = ({ gPage }) => {
  return (
    <div className={styles.tipRight}>
      <img src={share} className={styles.bell} alt="" onClick={gPage}/>
    </div>
  );
};
export default RightTitle;
