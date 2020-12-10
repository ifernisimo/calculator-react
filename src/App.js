import React, { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState(null);
  const [action, setAction] = useState(null);
  const [numFlag, setNumFlag] = useState(false);
  const [result, setResult] = useState(null);

  return (
    <>
      <div className="calc">
        <span className="output"></span>
        <div className="buttons">
          <div className="key key_0 dark_gray">0</div>
          <div className="key key_1 dark_gray">1</div>
          <div className="key key_2 dark_gray">2</div>
          <div className="key key_3 dark_gray">3</div>
          <div className="key key_4 dark_gray">4</div>
          <div className="key key_5 dark_gray">5</div>
          <div className="key key_6 dark_gray">6</div>
          <div className="key key_7 dark_gray">7</div>
          <div className="key key_8 dark_gray">8</div>
          <div className="key key_9 dark_gray">9</div>

          <div className="key key_multiply dark_gray">*</div>
          <div className="key key_plus dark_gray">+</div>
          <div className="key key_perc dark_gray">%</div>
          <div className="key key_minus dark_gray">-</div>
          <div className="key key_separate dark_gray">/</div>

          <div className="key key_result dark_gray">=</div>
        </div>
      </div>
    </>
  );
}

export default App;
