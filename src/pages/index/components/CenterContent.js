import * as Whale from "components";
import * as Whales from "combinations";
import styles from "./center.less";
import iphone from "../../../assets/bkiphone.png";

const DroppableContent = Whale.DroppableContent;
const DraggableContent = Whale.DraggableContent;
const RederComponents = (components, clickDrag, onDropAction, parentId, showItemData) => {
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

    if (component.isLayout) {
      otherProps.parentId = id;
    }
    const comProps = Object.assign({}, component.props, otherProps);
    if (childrenCom && childrenCom.length > 0) {
      const childDom = RederComponents(childrenCom, clickDrag, onDropAction, id, showItemData);
      return (
        <DraggableContent
          itemData={item}
          key={"centerPanel" + id}
          index={index}
          onDropAction={onDropAction}
          parentId={parentId}
          showItemData={showItemData}
          onClick={e =>
            clickDrag(
              { ...item, parentId: parentId, index: index, maxLength: components.length },
              e
            )
          }
        >
          {Com && (
            <Com
              style={component.style}
              {...comProps}
              key={`centerPanel${component.type}${id}`}
              onClick={e =>
                clickDrag(
                  { ...item, parentId: parentId, index: index, maxLength: components.length },
                  e
                )
              }
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
          showItemData={showItemData}
          onClick={e =>
            clickDrag(
              { ...item, parentId: parentId, index: index, maxLength: components.length },
              e
            )
          }
        >
          {Com && (
            <Com
              style={component.style}
              {...comProps}
              onClick={e =>
                clickDrag(
                  { ...item, parentId: parentId, index: index, maxLength: components.length },
                  e
                )
              }
              key={`centerPanel${component.type}${id}`}
            />
          )}
        </DraggableContent>
      );
    }
  });
};
const CenterContent = props => {
  const { hidevalue, cneterscale, onDropAction, components, clickDrag, showItemData } = props;

  return (
    <div
      style={{
        height: "100%",
        background: "#EDF0F5",
        boxShadow: "0 6px 18px 0 rgba(0,132,255,0.06) inset",
        overflow: "scroll",
      }}
    >
      <div
        className={styles.iphone}
        style={{ transform: `scale(${cneterscale / 100})`, transformOrigin: "50% 0" }}
      >
        <img
          className={styles.iphoneImg}
          src={iphone}
          alt=""
          style={{ display: hidevalue === "true" ? "block" : "none" }}
        />
        <div
          className={styles.centerMain}
          style={{
            marginTop: hidevalue === "true" ? "115px" : "30px",
            background: "white",
          }}
        >
          <div className={styles.centerDiv}>
            <DroppableContent onDropAction={onDropAction}>
              {RederComponents(components, clickDrag, onDropAction, "whalemainroot", showItemData)}
            </DroppableContent>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CenterContent;
