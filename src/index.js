import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const el = document.querySelector("#root");

const root = ReactDOM.createRoot(el);

const Compo = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <h1 className="title">Counter</h1>;
      <div className="content">
        <p className="value">{count}</p>
        {console.log(count)}

        <div className="all-btn">
          <button className="btn" onClick={add}>
            <h5>increase</h5>
          </button>
          <button className="btn" onClick={decrease}>
            <h5>decrease</h5>
          </button>
        </div>
      </div>
    </div>
  );
};
root.render(<Compo />);
