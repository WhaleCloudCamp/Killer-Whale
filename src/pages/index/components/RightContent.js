import FlexBox from "./FlexBox";
import Dimensions from "./Dimensions";
import styles from "./right.less";

const RightContent = ({ showItemData, changeItemProp }) => {
  const { id, component } = showItemData;
  const { type, props, propTypes } = component;

  return (
    <div>
      <div className={styles.dlEdpT}>
        <div className={styles.hNfACA}>
          <div className={styles.gxBwYJ}>类型:</div>
          <div className={styles.ggjvuQ}>{type}</div>
        </div>
        <div className={styles.line} />
      </div>

      {type !== "Flex" && (
        <Dimensions
          title="属性"
          data={props}
          types={propTypes}
          parentId={id}
          changeItemProp={changeItemProp}
        />
      )}

      {type === "Flex" && (
        <FlexBox data={props} types={propTypes} parentId={id} changeItemProp={changeItemProp} />
      )}
    </div>
  );
};
export default RightContent;
