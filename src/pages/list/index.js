import { connect } from "dva";
import FromList from "../../components/FromListTwo";
const App = ({ global, dispatch }) => {
  const onSubmit = data => {
    console.log(data);
  };
  const showItem = {
    id: 12341232,
    component: {
      type: "Button",
      props: { title: "确定1232" },
      style: {
        height: 200,
        width: 100,
      },
    },
    childrenCom: [],
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "30%",
        background: "white",
      }}
    >
      <FromList data={showItem} onSubmit={onSubmit} />
    </div>
  );
};

export default connect(({ global }) => ({ global }))(App);
