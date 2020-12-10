import React, { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(null);
  const [action, setAction] = useState(null);
  const [numFlag, setNumFlag] = useState(false);
  const [result, setResult] = useState(null);

  const setter = (value) => {
    if (Number(value)) {
      if (action === null || numFlag === false) {
        setA(value);
        setNumFlag(true);
      } else {
        setB(value);
        setNumFlag(false);
      }
    } else {
      return action ? action : setAction(value);
    }
  };

  const output = () => {
    switch (action) {
      case "+": {
        const res = a + b;
        setResult(res);
        resetVars(res);
        break;
      }

      case "/": {
        const res = a / b;
        setResult(res);
        resetVars(res);
        break;
      }

      case "*": {
        const res = a * b;
        setResult(res);
        resetVars(res);
        break;
      }

      case "-": {
        setResult(a - b);
        break;
      }
      default:
        return 0;
    }
  };

  const resetVars = (result) => {
    setA(result);
    setAction(null);
    setB(null);
    setResult(null);
  };

  return (
    <>
      <div className="calc">
        <span className="output">
          {a} {action} {b} = {result}
        </span>
        <div className="buttons">
          <div className="key key_0 dark_gray" onClick={() => setter(0)}>
            0
          </div>
          <div className="key key_1 dark_gray" onClick={() => setter(1)}>
            1
          </div>
          <div className="key key_2 dark_gray" onClick={() => setter(2)}>
            2
          </div>
          <div className="key key_3 dark_gray" onClick={() => setter(3)}>
            3
          </div>
          <div className="key key_4 dark_gray" onClick={() => setter(4)}>
            4
          </div>
          <div className="key key_5 dark_gray" onClick={() => setter(5)}>
            5
          </div>
          <div className="key key_6 dark_gray" onClick={() => setter(6)}>
            6
          </div>
          <div className="key key_7 dark_gray" onClick={() => setter(7)}>
            7
          </div>
          <div className="key key_8 dark_gray" onClick={() => setter(8)}>
            8
          </div>
          <div className="key key_9 dark_gray" onClick={() => setter(9)}>
            9
          </div>

          <div
            className="key key_multiply dark_gray"
            onClick={() => setter("*")}
          >
            *
          </div>
          <div className="key key_plus dark_gray" onClick={() => setter("+")}>
            +
          </div>

          <div className="key key_result dark_gray" onClick={() => output()}>
            =
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
