import React, { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState("0");
  const [b, setB] = useState(null);
  const [action, setAction] = useState(null);
  const [numFlag, setNumFlag] = useState(false);
  const [result, setResult] = useState(null);

  const setter = (value) => {
    const methods = [
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
      "",
    ];

    const isNumb = /^[0-9]+$/;

    if (methods.includes(value)) {
      console.log("method");
    } else if (value.match(isNumb)) {
      console.log("num");
    } else {
      console.log("dot");
    }
  };

  return (
    <>
      <div className="calc">
        <span className="output">
          {a} {action} {b} = {result}
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

          <div className="key key_result dark_gray" onClick={() => setter("=")}>
            =
          </div>
          <div className="key key_dot dark_gray" onClick={() => setter(".")}>
            .
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
