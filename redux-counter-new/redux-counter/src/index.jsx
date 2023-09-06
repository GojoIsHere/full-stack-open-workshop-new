import { createRoot } from "react-dom/client";
// import { useState } from "react";
import { createStore } from "redux";

const counterReducer = (state = 100, action) => {
  console.log("action is", action);
  console.log("state is", state);
  switch (action.type) {
    case "ADD": {
      const newState = state + 1;
      return newState;
    }
    case "SUB": {
      const newState = state - 1;
      return newState;
    }
    case "ZERO": {
      const newState = 0;
      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const App = () => {
  //   const [counter, setCounter] = useState(0);

  const addCounter = () => {
    // setCounter(counter + 1);
    store.dispatch({ type: "ADD" });
  };

  const subtractCounter = () => {
    // setCounter(counter - 1);
    store.dispatch({ type: "SUB" });
  };

  const makeZero = () => {
    store.dispatch({ type: "ZERO" });
  };

  return (
    <div>
      {/* <div>{counter}</div> */}
      <div>{store.getState()}</div>
      <button onClick={addCounter}>add</button>
      <button onClick={subtractCounter}>subtract</button>
      <button onClick={makeZero}>zero</button>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
store.subscribe(() => {
  root.render(<App />);
});
