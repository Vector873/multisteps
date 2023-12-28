import React from "react";
function Stepsballs({ number, heading, activestep }) {
  return (
    <>
      <div
        className={activestep == number ? "ballsteps activeball" : "ballsteps"}
      >
        {number}
      </div>
      <div className="stepgap">
        <span className="stepno">STEP {number}</span>
        <br />
        <strong className="stepheading">{heading}</strong>
      </div>
    </>
  );
}
export default Stepsballs;
