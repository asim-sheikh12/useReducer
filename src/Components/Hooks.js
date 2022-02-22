import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Hooks() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count : {count.counter}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br />
      <h1>Count 2 : {count2.counter}</h1>
      <button onClick={() => dispatch2({ type: "increment" })}>
        Increment 2
      </button>
      <button onClick={() => dispatch2({ type: "decrement" })}>
        Decrement 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Hooks;
