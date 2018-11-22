import React, { Fragment } from "react";
import { Row, Col } from "antd";
import styles from "./rightItem.less";
import StyleInputItem from "./StyleInputItem";
import { Accordion } from "antd-mobile";
import ColorPicker from "./ColorPicker";

class RightStyle extends React.Component {
  changeStyleItemProp = data => {
    for (var keys in this.props.value) {
      if (keys === data.key && data.id == this.props.type) {
        this.props.value[data.key] = data.value;
      }
    }
    this.props.changeItemProp({
      id: this.props.parentId,
      key: this.props.type,
      value: this.props.value,
    });
  };

  render() {
    const { value, type } = this.props;

    return (
      <Accordion>
        <Accordion.Panel header={<div className={styles.myaccordion}>{type}</div>}>
          {Object.keys(value).map(items => {
            //增加判断，属性名包含color且值为正确的颜色,几个常用的颜色单词和所有的#开头色值
            if (
              (items.includes("Color") || items.includes("color")) &&
              (["white", "red", "blue", "gray"].includes(value[items]) ||
                value[items].includes("rgb") ||
                /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value[items]))
            ) {
              return (
                <div>
                  <div className={styles.fqvwjTs}>
                    <span className={styles.ikRssvds}>{items}</span>

                    <div className={styles.ffgvpT}>
                      <div className={styles.ggjvuQss}>
                        <div className={styles.iqAZmK}> {value[items]}</div>
                      </div>
                    </div>
                    <div className={styles.col}>
                      <ColorPicker
                        key={items}
                        type={items}
                        parentId={type}
                        pickerType="sketch"
                        small
                        color={value[items]}
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
                        changeItemProp={this.changeStyleItemProp}
                      />
                    </div>
                  </div>
                  <div className={styles.line} />
                </div>
              );
            } else if (typeof value[items] == "string") {
              return (
                <StyleInputItem
                  typeId={type}
                  type={items}
                  value={value[items]}
                  key={items}
                  changeStyleItemProp={this.changeStyleItemProp}
                  isNumber={false}
                />
              );
            } else if (typeof value[items] == "number") {
              return (
                <StyleInputItem
                  typeId={type}
                  type={items}
                  value={value[items]}
                  key={items}
                  changeStyleItemProp={this.changeStyleItemProp}
                  isNumber={true}
                />
              );
            }
          })}
        </Accordion.Panel>
      </Accordion>
    );
  }
}

export default RightStyle;
