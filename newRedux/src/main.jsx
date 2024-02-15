import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const container = document.getElementById("root");
const root = createRoot(container);

//creating store

const countStore = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

const counts = createStore(countStore);

const App = () => {
  return (
    <div>
      <div>{counts.getState()}</div>
      <button onClick={(e) => counts.dispatch({ type: "INCREMENT" })}>
        plus
      </button>
      <button onClick={(e) => counts.dispatch({ type: "DECREMENT" })}>
        minus
      </button>
      <button onClick={(e) => counts.dispatch({ type: "ZERO" })}>zero</button>
    </div>
  );
};

root.render(<App />);
counts.subscribe(() => {
  root.render(<App />);
});
