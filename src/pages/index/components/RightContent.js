import * as Whale from "components";
import FromList from "../../../components/FromList";
import FlexBox from "./FlexBox";
import Dimensions from "./Dimensions";
import styles from "./right.less";

const RightContent = ({ showItemData, onSubmit }) => {
  const {id,component} = showItemData;
  const {type,props,style} = component;
  
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
