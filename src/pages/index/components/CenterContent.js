import * as Whale from "components";
import styles from "./center.less";

const DroppableContent = Whale.DroppableContent;
const DraggableContent = Whale.DraggableContent;
const CenterContent = props => {
  const { cneterscale, onDropAction, components, moveCard, clickDrag } = props;
  return (
    <div
      className={styles.centerMain}
      style={{
        transform: `scale(${cneterscale / 100})`
      }}
    >
      <div className={styles.centerDiv}>
        <DroppableContent onDropAction={onDropAction}>
          {components.map((item, index) => {
            const { component, id } = item;
            const Com = Whale[component.type];
            if (!component.props) {
              component.props = {};
            }
            return (
              <DraggableContent
                itemData={item}
                key={"centerPanel" + id}
                index={index}
                onDropAction={onDropAction}
                moveCard={moveCard}
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
          })}
        </DroppableContent>
      </div>
    </div>
  );
};
export default CenterContent;
