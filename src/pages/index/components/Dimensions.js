import React from "react";
import styles from "./rightItem.less";
import InputItem from "./InputItem";
import SelectItem from "./SelectItem";
import RightStyle from "./RightStyle";
import ColorItem from "./ColorItem";

const Dimensions = ({ title, data, types, parentId, changeItemProp }) => {
  return (
    <div className={styles.kpJPge}>
      <div className={styles.iAIceQ}>
        <h3 className={styles.bbDADm}>{title}</h3>
      </div>
      <div className={styles.line} />
      <div className={styles.gCSQPN}>
        <div>
          {Object.keys(data).map(item => {
            if (typeof types[item] === "string" || !types[item]) {
              //增加判断，属性名包含color且值为正确的颜色,几个常用的颜色单词和所有的#开头色值

              if (
                (item.includes("Color") || item.includes("color")) &&
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
                ].includes(data[item]) ||
                  data[item].includes("rgb") ||
                  /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(data[item]))
              ) {
                return (
                  <ColorItem
                    key={item}
                    type={item}
                    parentId={parentId}
                    color={data[item]}
                    changeItemProp={changeItemProp}
                  />
                );
              } else if (types[item] === "bool") {
                return (
                  <SelectItem
                    type={item}
                    value={data[item]}
                    parentId={parentId}
                    changeItemProp={changeItemProp}
                    optionsValue={["true", "false"]}
                    key={item}
                  />
                );
              } else if (types[item] === "style") {
                return (
                  <RightStyle
                    type={item}
                    key={item}
                    value={data[item]}
                    parentId={parentId}
                    changeItemProp={changeItemProp}
                  />
                );
              } else if (types[item] === "array") {
                return null;
              }
              return (
                <InputItem
                  type={item}
                  value={types[item] === "array" ? JSON.stringify(data[item]) : data[item]}
                  key={item}
                  parentId={parentId}
                  changeItemProp={changeItemProp}
                  isNumber={types[item] === "number"}
                />
              );
            } else {
              return (
                <SelectItem
                  type={item}
                  value={data[item]}
                  parentId={parentId}
                  changeItemProp={changeItemProp}
                  optionsValue={types[item]}
                  key={item}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default Dimensions;
