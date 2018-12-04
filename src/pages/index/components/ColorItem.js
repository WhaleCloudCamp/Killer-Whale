import React from "react";
import styles from "./rightItem.less";
import ColorPicker from "./ColorPicker";

export default class ColorItem extends React.Component {
  render() {
    let { type, parentId, color } = this.props;
    return (
      <div>
        <div className={styles.colorMain}>
          <span className={styles.colorText}> {type}</span>

          <div className={styles.colorContant}>{color}</div>
          <div className={styles.colorChoose}>
            <ColorPicker
              type={type}
              parentId={parentId}
              pickerType="sketch"
              small
              color={color}
              position="bottom"
              presetColors={[
                "#F5222D",
                "#FA541C",
                "#FA8C16",
                "#FAAD14",
                "#FADB14",
                "#A0D911",
                "#52C41A",
                "#13C2C2",
                "#1890FF",
                "#2F54EB",
                "#722ED1",
                "#EB2F96",
              ]}
              changeItemProp={this.props.changeItemProp}
            />
          </div>
        </div>
      </div>
    );
  }
}
