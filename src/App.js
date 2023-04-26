import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  // Create dispatch
  const dispatch = useDispatch();

  //to take state from Redux
  const cash = useSelector((state) => state.cash.cash);

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  return (
    <div className="App">
      <div className="display">${cash}</div>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => addCash(Number(prompt("Enter the amount")))}
          className="cash-in"
        >
          Cash IN
        </button>
        <button
          onClick={() => getCash(Number(prompt("Enter the amount")))}
          className="cash-out"
        >
          Cash OUT
        </button>
      </div>
    </div>
  );
}

export default App;
