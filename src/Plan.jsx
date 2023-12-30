import React from "react";

function Plan({ id, icons, heading, fees, selectedplan, setplan, planmethod }) {
  return (
    <div
      className={selectedplan == id ? "structure selectedplan" : "structure"}
      onClick={() => setplan(id)}
    >
      <img src={icons} alt="image not found" />
      <div>
        <h3>{heading}</h3>
        <p>{fees}</p>
        {planmethod ? <span className="free">2 months free</span> : <></>}
      </div>
    </div>
  );
}

export default Plan;
