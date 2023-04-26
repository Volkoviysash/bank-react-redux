import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  // Create dispatch
  const dispatch = useDispatch();

  //to take state from Redux
  const cash = useSelector((state) => state.cash);

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: 5 });
  };

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 5 });
  };

  return (
    <div className="App">
      <div className="display">${cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash()} className="cash-in">
          Cash IN
        </button>
        <button onClick={() => getCash()} className="cash-out">
          Cash OUT
        </button>
      </div>
    </div>
  );
}

export default App;
