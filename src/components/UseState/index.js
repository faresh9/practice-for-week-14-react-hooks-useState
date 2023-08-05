import "./UseState.css";
import { useState } from "react";
const UseState = () => {
  // console.log(useState('light'))
  const [theme, setTheme] = useState("light");
  return (
    <div className={`state = ${theme}`}>
      <h1>UseState Component</h1>
      <button>Dark</button>
      <button>Light</button>
      <h2>DISPLAY COUNT HERE</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

export default UseState;
