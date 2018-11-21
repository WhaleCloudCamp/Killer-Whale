import styles from "./rightItem.less";
import InputItem from "./InputItem";
import SelectItem from "./SelectItem";
import RightStyle from "./RightStyle"
const Dimensions = ({ title, data, types, parentId, changeItemProp }) => {
  return (
    <div className={styles.kpJPge}>
      <div className={styles.iAIceQ}>
        <h3 className={styles.bbDADm}>{title}</h3>
      </div>
      <div className={styles.gCSQPN}>
        <div>
          {Object.keys(data).map(item => {
           
            if (typeof types[item] === "string" || !types[item]) {
              if (types[item] === "bool") {
                return (
                  <SelectItem
                    type={item}
                    value={data[item]}
                    parentId={parentId}
                    changeItemProp={changeItemProp}
                    optionsValue={['true', 'false']}
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
                  ></RightStyle>
                )

              }else if(types[item] === "array"){
                    return(null)
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
