import * as Whale from "components";
import styles from "./center.less";

const CenterContent = props => {
  const {cneterscale,handleChange} = props;
  return (
      <div
        className={styles.centerMain}
        style={{
          transform: `scale(${cneterscale / 100})`
        }}
      >
        <div className={styles.centerDiv}>1231232313313131323233</div>
      </div>
  );
};
export default CenterContent;
