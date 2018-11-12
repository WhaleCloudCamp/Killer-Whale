import * as Whale from "components";
import * as Whales from "combinations";
import styles from "./center.less";

const DroppableContent = Whale.DroppableContent;
const DraggableContent = Whale.DraggableContent;
const RederComponents = (components, clickDrag, onDropAction) => {
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
    if (component.type === "Flex") {
      otherProps.parentId = id;
      otherProps.onDropAction = onDropAction;
    }
    const comProps = Object.assign({}, component.props, otherProps);
    if (childrenCom && childrenCom.length > 0) {
      const childDom = RederComponents(childrenCom, clickDrag, onDropAction);
      return (
        <DraggableContent
          itemData={item}
          key={"centerPanel" + id}
          index={index}
          onDropAction={onDropAction}
          onClick={() => clickDrag(item)}
        >
          {Com && (
            <Com
              {...comProps}
              style={component.style}
              key={`centerPanel${component.type}${id}`}
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
          onClick={() => clickDrag(item)}
        >
          {Com && (
            <Com
              {...comProps}
              style={component.style}
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
          {RederComponents(components, clickDrag, onDropAction)}
        </DroppableContent>
      </div>
    </div>
  );
};
export default CenterContent;
