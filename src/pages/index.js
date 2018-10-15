import { connect } from "dva";

function App({ global, dispatch }) {
    console.log(global);
    
  const { text, list } = global;
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
}
export default connect(({ global }) => ({ global }))(App);
