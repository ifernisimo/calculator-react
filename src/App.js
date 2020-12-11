import React, { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState("0");
  const [b, setB] = useState(null);
  const [action, setAction] = useState(null);
  const [numFlag, setNumFlag] = useState(false);
  const [result, setResult] = useState(null);

  const setter = (value) => {
    const operations = [
      "+",
      "-",
      "/",
      "*",
      "=",
      "%", // Доля от предидущего числа
      "ac", //Очистить все
      "mc", //Очистить память
      "mr", //Прочитать память
      "mMinus", //Вычитает значение в буфере из текщего значения на экране и сохраняет в буфер (результат по нажатию mr)
      "mPlus", //Аналогично только с суммированием
    ];

    const isNumb = RegExp(/^[0-9]+$/);

    if (operations.includes(value)) {
      methods(value);
    } else if (value.match(isNumb)) {
      digits(value);
    } else if (value === ".") {
      formating(".");
    } else if (value === "%") {
      formating("%");
    }
  };

  const digits = (value) => {
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
      a.indexOf(symbol) === -1 && setA(a + symbol);
    } else {
      b.indexOf(symbol) === -1 && setB(b + symbol);
    }
  };

  //TODO: Исправить багу с точками после числа
  //TODO: Конвертировать процент в число
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
        case "=": {
          resetVar();
          break;
        }

        case "+": {
          setNumFlag(false);
          setA(newA + newB);
          resetVar();
          break;
        }

        case "-": {
          setNumFlag(false);
          setA(newA - newB);
          resetVar();
          break;
        }

        case "*": {
          setNumFlag(false);
          setA(newA * newB);
          resetVar();
          break;
        }

        case "/": {
          setNumFlag(false);
          setA(newA / newB);
          resetVar();
          break;
        }

        default:
          return 0;
      }
    }
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
          {result ? (
            result
          ) : (
            <span>
              {a} {action} {b}
            </span>
          )}
        </span>
        <div className="buttons">
          <div className="key key_0 dark_gray" onClick={() => setter("0")}>
            0
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
          <div className="key key_4 dark_gray" onClick={() => setter("4")}>
            4
          </div>
          <div className="key key_5 dark_gray" onClick={() => setter("5")}>
            5
          </div>
          <div className="key key_6 dark_gray" onClick={() => setter("6")}>
            6
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

          <div
            className="key key_multiply dark_gray"
            onClick={() => setter("*")}
          >
            *
          </div>
          <div className="key key_plus dark_gray" onClick={() => setter("+")}>
            +
          </div>

          <div className="key key_minus dark_gray" onClick={() => setter("-")}>
            -
          </div>

          <div className="key key_result dark_gray" onClick={() => setter("=")}>
            =
          </div>
          <div className="key key_dot dark_gray" onClick={() => setter(".")}>
            .
          </div>
          <div
            className="key key_separate dark_gray"
            onClick={() => setter("/")}
          >
            /
          </div>

          <div
            className="key key_perc dark_gray"
            onClick={() => {
              formating("%");
            }}
          >
            %
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
