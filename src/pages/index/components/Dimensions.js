import styles from "./rightItem.less";
import InputItem from "./InputItem";
import SelectItem from "./SelectItem";
const Dimensions = ({ data }) => {
  return (
    <div className={styles.kpJPge}>
      <div className={styles.iAIceQ}>
        <h3 className={styles.bbDADm}>属性</h3>
      </div>
      <div className={styles.gCSQPN}>
        <div>
          {Object.keys(data).map(item => {
            return <InputItem type={item} value={data[item]} key={item} />;
          })}
          <SelectItem type='type' value='1'/>
        </div>
      </div>
    </div>
  );
};
export default Dimensions;
