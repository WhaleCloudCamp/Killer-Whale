import * as Whale from "components";
import * as Whales from "combinations";
import styles from "./center.less";

const DroppableContent = Whale.DroppableContent;
const DraggableContent = Whale.DraggableContent;
const RederComponents = (components, clickDrag, onDropAction) => {
  return (
    <div>
      {components.map((item, index) => {
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
        if (component.type === "Flex") {
          component.props.parentId = id;
          component.props.onDropAction = onDropAction;
        }

        if (childrenCom && childrenCom.length > 0) {
          const childDom = RederComponents(
            childrenCom,
            clickDrag,
            onDropAction
          );
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
                  {...component.props}
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
                  {...component.props}
                  style={component.style}
                  key={`centerPanel${component.type}${id}`}
                />
              )}
            </DraggableContent>
          );
        }
      })}
    </div>
  );
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
