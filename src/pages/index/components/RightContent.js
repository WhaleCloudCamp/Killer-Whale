import FlexBox from "./FlexBox";
import Dimensions from "./Dimensions";
import styles from "./right.less";

const RightContent = ({ showItemData, changeItemProp }) => {
  const { id, component } = showItemData;
  const { type, props, style, propTypes } = component;

  return (
    <div>
      <div className={styles.dlEdpT}>
        <div className={styles.hNfACA}>
          <h3 className={styles.gxBwYJ}>类型</h3>
          <div className={styles.fzwgll}>
            <div className={styles.ggjvuQ}>{type}</div>
          </div>
        </div>
      </div>
      {type !== "Flex" && (
        <Dimensions
          data={props}
          types={propTypes}
          parentId={id}
          changeItemProp={changeItemProp}
        />
        
      )}
      {type === "Flex" && (
        <FlexBox data={props} parentId={id} changeItemProp={changeItemProp} />
      )}
    </div>
  );
};
export default RightContent;
