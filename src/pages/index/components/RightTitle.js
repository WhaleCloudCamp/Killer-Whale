import * as Whale from "components";
import styles from "./right.less";
import share from "../../../assets/web/download.png";

const RightTitle = ({ onAction }) => {
  return (
    <div className={styles.tipRight}>
      <img src={share} className={styles.bell} alt="" onClick={()=>onAction({ type: "global/downloadCode" })}/>
    </div>
  );
};
export default RightTitle;
