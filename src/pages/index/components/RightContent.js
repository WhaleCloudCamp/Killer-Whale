import * as Whale from "components";
import FromList from "../../../components/FromList"

const RightContent = ({ showItemData ,onSubmit}) => {
  return (
    <div>
      {showItemData&&showItemData.id && <FromList data={showItemData} onSubmit={onSubmit} />}
    </div>
  );
};
export default RightContent;
