import FlexBox from "./FlexBox";
import Dimensions from "./Dimensions";
import styles from "./right.less";

const RightContent = ({ showItemData, onSubmit }) => {
  const {id,component} = showItemData;
  const {type,props,style} = component;
  const as+12371263872362343342
  return (
    <div>
      <div className={styles.dlEdpT}>
        <div className={styles.hNfACA}>
          <h3 className={styles.gxBwYJ}>类型</h3>
          <div className={styles.fzwgll}>
            <div className={styles.ggjvuQ}>
            {type}
            </div>
          </div>
        </div>
      </div>
      <Dimensions data={props}/>
      {type==='Flex'&&<FlexBox />}
    </div>
  )
};
export default RightContent;
