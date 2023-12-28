import React from "react";

function Buttonsbn({ stepchange, setactive, word }) {
  return (
    <div className="btns">
      <button className="goback" onClick={() => setactive((a) => a - 1)}>
        Go Back
      </button>
      <button className="nextstep" onClick={stepchange}>
        {word}
      </button>
    </div>
  );
}

export default Buttonsbn;
