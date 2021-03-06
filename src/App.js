import React, { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState("0");
  const [b, setB] = useState(null);
  const [action, setAction] = useState(null);
  const [numFlag, setNumFlag] = useState(false);
  const [result, setResult] = useState(null);
  const [memory, setMemory] = useState(0);
  const [memoryFlag, setMemoryFlag] = useState(false);

  const setter = (value) => {
    console.log(a, b, result, memory);
    const operations = ["+", "-", "/", "*", "="];

    const isNumb = RegExp(/^[0-9]+$/);

    if (operations.includes(value)) {
      methods(value);
    } else if (value.match(isNumb)) {
      digits(value);
    } else if (value === ".") {
      a[a.length - 1] !== "%" && formating(".");
      if (numFlag) {
        b[b.length - 1] !== "%" && formating(".");
      }
    } else if (value === "%") {
      if (a && a > 0) {
        a[a.length - 1] !== "." && formating("%");
        if (numFlag) {
          b[b.length - 1] !== "." && formating("%");
        }
      }
    } else if (value === "ac") {
      ac();
    } else if (value === "mc") {
      setMemory("0");
    } else if (value === "mr") {
      if (memory === 0) {
        setMemory(a);
      } else {
        setMemoryFlag(!memoryFlag);
      }
    } else if (value === "mMinus") {
      setMemory(Number(memory) - Number(a));
    } else if (value === "mPlus") {
      setMemory(Number(memory) + Number(a));
    } else if (value === "invert") {
      if (!numFlag) {
        a > 0 ? setA(-Math.abs(a)) : setA(Math.abs(a));
      } else {
        b > 0 ? setB(-Math.abs(b)) : setB(Math.abs(b));
      }
    }
  };

  const digits = (value) => {
    setMemoryFlag(false);
    if (!numFlag) {
      if (a[1] !== ".") {
        if (a[a.length - 1] !== "%") {
          a[0] === "0" ? setA(value) : setA(a + value);
        }
      } else {
        setA(a + value);
      }
    } else {
      if (!b) {
        !b ? setB(value) : setB(b + value);
      } else {
        if (b[b.length - 1] !== "%") {
          setB(b + value);
        }
      }
    }
  };

  const formating = (symbol) => {
    if (!numFlag) {
      String(a).indexOf(symbol) === -1 && setA(a + symbol);
    } else {
      String(b).indexOf(symbol) === -1 && setB(b + symbol);
    }
  };

  const percentToNormalValue = () => {
    if (checkPerc(a) === true && checkPerc(b) === false) {
      setA(Number(parseInt(a) / 100));
    } else if (checkPerc(a) === true && checkPerc(b) === true) {
      setA(Number(parseInt(a) / 100));
      setB(Number(parseInt(b) / 100));
    } else if (checkPerc(a) === false && checkPerc(b) === true) {
      setB((a / 100) * Number(parseInt(b)));
    }
  };

  const checkPerc = (num) => {
    return String(num).indexOf("%") === -1 ? false : true;
  };
  percentToNormalValue();
  const methods = (value) => {
    if (value !== "=") {
      setNumFlag(true);
      setAction(value);
    }

    const newA = Number(a);
    const newB = Number(b);

    if (a && action && b) {
      setAction(value);
      switch (action) {
        case "+": {
          setA(newA + newB);
          break;
        }

        case "-": {
          setA(newA - newB);
          break;
        }

        case "*": {
          setA(newA * newB);
          break;
        }

        case "/": {
          setA(newA / newB);
          break;
        }

        default:
          return 0;
      }
      setNumFlag(false);
      resetVar();
    }
  };

  const ac = () => {
    setA("0");
    setB(null);
    setAction(null);
    setNumFlag(false);
    setResult(null);
    setMemory(0);
    setMemoryFlag(false);
    console.log(a, b, action, numFlag, result, memory);
  };

  const resetVar = () => {
    setB(null);
    setAction(null);
    setResult(null);
  };

  return (
    <>
      <div className="calc">
        <span className="output">
          {memoryFlag && <span className="memo">MEMORY</span>}
          {memoryFlag === false ? (
            <div>
              <span>{a}</span>
              <span>{action}</span>
              <span>{b}</span>
              <span>{result}</span>
            </div>
          ) : (
            <span>{memory}</span>
          )}
        </span>
        <div className="buttons">
          <div className="key key_ac gray" onClick={() => setter("ac")}>
            AC
          </div>

          <div className="key key_invert gray" onClick={() => setter("invert")}>
            /
          </div>

          <div className="key key_perc gray" onClick={() => setter("%")}>
            %
          </div>

          <div className="key key_separate orange" onClick={() => setter("/")}>
            &divide;
          </div>

          <div className="key key_mc dark_gray" onClick={() => setter("mc")}>
            mc
          </div>

          <div className="key key_mr dark_gray" onClick={() => setter("mr")}>
            mr
          </div>

          <div
            className="key key_mMinus dark_gray"
            onClick={() => setter("mMinus")}
          >
            m-
          </div>

          <div className="key key_mPlus orange" onClick={() => setter("mPlus")}>
            m+
          </div>

          <div className="key key_7 dark_gray" onClick={() => setter("7")}>
            7
          </div>

          <div className="key key_8 dark_gray" onClick={() => setter("8")}>
            8
          </div>

          <div className="key key_9 dark_gray" onClick={() => setter("9")}>
            9
          </div>

          <div className="key key_multiply orange" onClick={() => setter("*")}>
            *
          </div>

          <div className="key key_4 dark_gray" onClick={() => setter("4")}>
            4
          </div>

          <div className="key key_5 dark_gray" onClick={() => setter("5")}>
            5
          </div>

          <div className="key key_6 dark_gray" onClick={() => setter("6")}>
            6
          </div>

          <div className="key key_minus orange" onClick={() => setter("-")}>
            -
          </div>

          <div className="key key_1 dark_gray" onClick={() => setter("1")}>
            1
          </div>

          <div className="key key_2 dark_gray" onClick={() => setter("2")}>
            2
          </div>

          <div className="key key_3 dark_gray" onClick={() => setter("3")}>
            3
          </div>

          <div className="key key_plus orange" onClick={() => setter("+")}>
            +
          </div>

          <div
            className="key key_0 dark_gray long_key"
            onClick={() => setter("0")}
          >
            0
          </div>

          <div className="key key_dot dark_gray" onClick={() => setter(".")}>
            .
          </div>
          <div className="key key_result orange" onClick={() => setter("=")}>
            =
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
