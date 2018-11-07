import * as Whale from "components";
import * as Whales from "combinations";
import { Collapse } from "antd";

const Panel = Collapse.Panel;
const DraggableContent = Whale.DraggableContent;
const LeftContent = ({ sourceData = [] }) => {
  return (
    <Collapse
      accordion
      style={{
        maxHeight: "600px",
        overflow: "auto",
        flex:1
      }}
    >
      {sourceData.map((item, index) => {
        return (
          <Panel header={item.type} key={item.type}>
            {item.data.map((items, index) => {
              let Com =null
              if(items.state === 1){
                Com = Whale[items.type];
              }else{
                Com = Whales[items.type];
              }

              if (!items.props) {
                items.props = {};
              }
              return (
                <DraggableContent itemData={items} key={"leftPanel" + items.id}>
                  {Com && (
                    <Com
                      {...items.props}
                      style={items.style}
                      key={`leftPanel${items.type}${items.id}`}
                    />
                  )}
                </DraggableContent>
              );
            })}
          </Panel>
        );
      })}
    </Collapse>
  );
};
export default LeftContent;
