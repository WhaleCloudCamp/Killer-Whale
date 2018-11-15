import * as Whale from "components";
import * as Whales from "combinations";
import styles from "./center.less";

const DroppableContent = Whale.DroppableContent;
const DraggableContent = Whale.DraggableContent;
const RederComponents = (components, clickDrag, onDropAction, parentId) => {
  return components.map((item, index) => {
    const { component, id, childrenCom } = item;
    let Com = null;
    if (component.state === 1) {
      Com = Whale[component.type];
    } else {
      Com = Whales[component.type];
    }

    if (!component.props) {
      component.props = {};
    }
    let otherProps = {};
    console.log(component.type);

    if (component.isLayout) {
      otherProps.parentId = id;
    }
    const comProps = Object.assign({}, component.props, otherProps);
    if (childrenCom && childrenCom.length > 0) {
      const childDom = RederComponents(
        childrenCom,
        clickDrag,
        onDropAction,
        id
      );
      return (
        <DraggableContent
          itemData={item}
          key={"centerPanel" + id}
          index={index}
          onDropAction={onDropAction}
          parentId={parentId}
          onClick={(e) => clickDrag(item,e)}
        >
          {Com && (
            <Com
              {...comProps}
              style={component.style}
              key={`centerPanel${component.type}${id}`}
              onClick={(e) => clickDrag(item,e)}
            >
              {childDom}
            </Com>
          )}
        </DraggableContent>
      );
    } else {
      return (
        <DraggableContent
          itemData={item}
          key={"centerPanel" + id}
          index={index}
          onDropAction={onDropAction}
          parentId={parentId}
          onClick={(e) => clickDrag(item,e)}
        >
          {Com && (
            <Com
              style={component.style}
              {...comProps}
              onClick={(e) => clickDrag(item,e)}
              key={`centerPanel${component.type}${id}`}
            />
          )}
        </DraggableContent>
      );
    }
  });
};
const CenterContent = props => {
  const { cneterscale, onDropAction, components, clickDrag } = props;
  return (
    <div
      className={styles.centerMain}
      style={{
        transform: `scale(${cneterscale / 100})`
      }}
    >
      <div className={styles.centerDiv}>
        <DroppableContent onDropAction={onDropAction}>
          {RederComponents(
            components,
            clickDrag,
            onDropAction,
            "whalemainroot"
          )}
        </DroppableContent>
      </div>
    </div>
  );
};
export default CenterContent;
