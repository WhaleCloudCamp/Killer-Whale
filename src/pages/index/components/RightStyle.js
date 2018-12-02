import React from "react";
import styles from "./rightItem.less";
import StyleInputItem from "./StyleInputItem";
import { Accordion } from "antd-mobile";
import ColorItem from "./ColorItem";
class RightStyle extends React.Component {
  changeStyleItemProp = data => {
    for (var keys in this.props.value) {
      if (keys === data.key && data.id === this.props.type) {
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
              ([
                "white",
                "red",
                "blue",
                "gray",
                "yellow",
                "orange",
                "red",
                "pink",
                "black",
                "green",
              ].includes(value[items]) ||
                value[items].includes("rgb") ||
                /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value[items]))
            ) {
              return (
                <div className={styles.inputMains}>
                  <ColorItem
                    key={items}
                    type={items}
                    parentId={type}
                    color={value[items]}
                    changeItemProp={this.changeStyleItemProp}
                  />
                </div>
              );
            } else if (typeof value[items] === "number") {
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
            } else {
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
            }
          })}
        </Accordion.Panel>
      </Accordion>
    );
  }
}

export default RightStyle;
