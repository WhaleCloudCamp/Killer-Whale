import * as Whale from "components";
import { Collapse } from "antd";

const Panel = Collapse.Panel;
const DraggableContent = Whale.DraggableContent;
const LeftContent = ({ sourceData = [] }) => {
  return (
    <Collapse
      accordion
      style={{
        maxHeight: "600px",
        overflow: "auto"
      }}
    >
      {sourceData.map((item, index) => {
        const Com = Whale[item.type];
        if (!item.props) {
          item.props = {};
        }
        return (
          <Panel header={item.type} key={item.type}>
            <DraggableContent
              draggableId={item.id}
              key={"leftPanel" + item.id}
            >
              {Com && (
                <Com
                  {...item.props}
                  style={item.style}
                  key={`leftPanel${item.type}${item.id}`}
                />
              )}
            </DraggableContent>
          </Panel>
        );
      })}
    </Collapse>
  );
};
export default LeftContent;
