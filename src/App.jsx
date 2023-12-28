import { useState } from "react";
import Stepsballs from "./Stepsballs";
import iconarcade from "./assets/icon-arcade.svg";
import iconadvanced from "./assets/icon-advanced.svg";
import iconpro from "./assets/icon-pro.svg";
import Plan from "./Plan";
import Buttonsbn from "./Buttonsbn";
import thanksicon from "./assets/icon-thank-you.svg";
function App() {
  const steps = [
    {
      number: 1,
      heading: "YOUR INFO",
    },
    {
      number: 2,
      heading: "SELECT PLAN",
    },
    {
      number: 3,
      heading: "ADD-ONS",
    },
    {
      number: 4,
      heading: "SUMMARY",
    },
  ];
  const monthlystruct = [
    {
      id: 1,
      icon: iconarcade,
      heading: "Arcade",
      fees: "$9/mo",
    },
    {
      id: 2,
      icon: iconadvanced,
      heading: "Adavnced",
      fees: "$12/mo",
    },
    {
      id: 3,
      icon: iconpro,
      heading: "Pro",
      fees: "$15/mo",
    },
  ];
  const yearlystruct = [
    {
      id: 1,
      icon: iconarcade,
      heading: "Arcade",
      fees: "$90/yr",
    },
    {
      id: 2,
      icon: iconadvanced,
      heading: "Adavnced",
      fees: "$120/yr",
    },
    {
      id: 3,
      icon: iconpro,
      heading: "Pro",
      fees: "$150/yr",
    },
  ];
  const [name, setname] = useState("");
  const [errname, seterrname] = useState(true);
  const [email, setemail] = useState("");
  const [erremail, seterremail] = useState(true);
  const [phone, setphone] = useState("");
  const [errphone, seterrphone] = useState(true);
  const [activestep, setactive] = useState(1);
  const [selectedplan, setplan] = useState(0);
  const [planmethod, setplanmethod] = useState(false);
  const [picked1, setpicked1] = useState(false);
  const [picked2, setpicked2] = useState(false);
  const [picked3, setpicked3] = useState(false);
  const [confirm, setconfirm] = useState(false);
  const [totalfee, settotalfee] = useState(0);
  const step1 = () => {
    if (name == "") {
      seterrname(false);
    }
    if (email == "") {
      seterremail(false);
    }
    if (phone == "") {
      seterrphone(false);
    }
    name == "" || email == "" || phone == "" ? none : setactive(2);
  };
  const stepchange = () => {
    if (activestep == 4) {
      setconfirm(true);
    } else {
      if (activestep == 3) {
        calculatetotalfee();
      }
      if (selectedplan != 0) {
        setactive((a) => a + 1);
      }
    }
  };
  const calculatetotalfee = () => {
    if (planmethod) {
      if (selectedplan == 1) {
        settotalfee(90);
      } else if (selectedplan == 2) {
        settotalfee(120);
      } else if (selectedplan == 3) {
        settotalfee(150);
      }
      if (picked1) {
        settotalfee((t) => (t += 10));
      }
      if (picked2) {
        settotalfee((t) => (t += 20));
      }
      if (picked3) {
        settotalfee((t) => (t += 20));
      }
    } else {
      if (selectedplan == 1) {
        settotalfee(9);
      } else if (selectedplan == 2) {
        settotalfee(12);
      } else if (selectedplan == 3) {
        settotalfee(15);
      }
      if (picked1) {
        settotalfee((t) => (t += 1));
      }
      if (picked2) {
        settotalfee((t) => (t += 2));
      }
      if (picked3) {
        settotalfee((t) => (t += 2));
      }
    }
  };
  return (
    <>
      <div className="maindiv">
        <div className="box">
          <div className="leftbox">
            <div>
              <div className="step">
                {steps.map((s) => (
                  <Stepsballs
                    key={s.number}
                    number={s.number}
                    heading={s.heading}
                    activestep={activestep}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="rightbox">
            {activestep == 1 && (
              <div className="innerright">
                <h1>Personal info</h1>
                <p>
                  Please provide your name, email address, and phone number.
                </p>
                <div
                  className={
                    errname == true ? "inputfields" : "inputfields errorfields"
                  }
                >
                  <div className="spns">
                    <span className="inpsp">Name</span>
                    {errname == false && (
                      <span className="errsp">This field is required</span>
                    )}
                  </div>
                  <br />
                  <input
                    type="text"
                    placeholder="e.g. Stephen King"
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                    onClick={() => seterrname(true)}
                  />
                  <br />
                  <br />
                </div>
                <div
                  className={
                    erremail == true ? "inputfields" : "inputfields errorfields"
                  }
                >
                  <div className="spns">
                    <span className="inpsp">Email Address</span>
                    {erremail == false && (
                      <span className="errsp">This field is required</span>
                    )}
                  </div>
                  <br />
                  <input
                    type="text"
                    placeholder="e.g. stephenking@lorem.com"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    onClick={() => seterremail(true)}
                  />
                  <br />
                  <br />
                </div>
                <div
                  className={
                    errphone == true ? "inputfields" : "inputfields errorfields"
                  }
                >
                  <div className="spns">
                    <span className="inpsp">Phone Number</span>
                    {errphone == false && (
                      <span className="errsp">This field is required</span>
                    )}
                  </div>
                  <br />
                  <input
                    type="text"
                    placeholder="e.g. +1 234 567 890"
                    onChange={(e) => setphone(e.target.value)}
                    value={phone}
                    onClick={() => seterrphone(true)}
                  />
                  <br />
                  <br />
                </div>
                <div className="btn">
                  <button className="nextstep" onClick={step1}>
                    Next Step
                  </button>
                </div>
              </div>
            )}
            {activestep == 2 && (
              <div className="innerright">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
                <div className="secstepdiv">
                  <div className="secstepoptions">
                    {(planmethod ? yearlystruct : monthlystruct).map((s) => (
                      <Plan
                        key={s.id}
                        id={s.id}
                        icons={s.icon}
                        heading={s.heading}
                        fees={s.fees}
                        selectedplan={selectedplan}
                        setplan={setplan}
                        planmethod={planmethod}
                      />
                    ))}
                  </div>
                </div>
                <div className="planmethod">
                  <span
                    className={
                      planmethod ? "unselectedmethod" : "selectedmethod"
                    }
                  >
                    Monthly
                  </span>
                  <div className="switch">
                    <input
                      type="checkbox"
                      id="switch-input"
                      onClick={() => setplanmethod((p) => !p)}
                    />
                    <label htmlFor="switch-input"></label>
                  </div>
                  <span
                    className={
                      planmethod ? "selectedmethod" : "unselectedmethod"
                    }
                  >
                    Yearly
                  </span>
                </div>
                <Buttonsbn
                  stepchange={stepchange}
                  setactive={setactive}
                  word={"Next Step"}
                />
              </div>
            )}
            {activestep == 3 && (
              <div className="innerright">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>

                <div
                  className={
                    picked1 ? "pickaddons selectedpicks" : "pickaddons"
                  }
                  onClick={() => setpicked1((p) => !p)}
                >
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={picked1}
                    onChange={() => {}}
                  />
                  <div>
                    <h3>Online service</h3>
                    <p>Access to multiplayer games</p>
                  </div>
                  <span>{planmethod ? "+$10/yr" : "+$1/mo"}</span>
                </div>
                <div
                  className={
                    picked2 ? "pickaddons selectedpicks" : "pickaddons"
                  }
                  onClick={() => setpicked2((p) => !p)}
                >
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={picked2}
                    onChange={() => {}}
                  />
                  <div>
                    <h3>Larger storage</h3>
                    <p>Extra 1TB of cloud save</p>
                  </div>
                  <span>{planmethod ? "+$20/yr" : "+$2/mo"}</span>
                </div>
                <div
                  className={
                    picked3 ? "pickaddons selectedpicks" : "pickaddons"
                  }
                  onClick={() => setpicked3((p) => !p)}
                >
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={picked3}
                    onChange={() => {}}
                  />
                  <div>
                    <h3>Customizable profile</h3>
                    <p>Custom theme on your profile</p>
                  </div>
                  <span>{planmethod ? "+$20/yr" : "+$2/mo"}</span>
                </div>
                <Buttonsbn
                  stepchange={stepchange}
                  setactive={setactive}
                  word={"Next Step"}
                />
              </div>
            )}
            {confirm == false && activestep == 4 && (
              <div className="innerright">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                <div className="finish">
                  <div className="finishhead">
                    <span>
                      <h4>
                        {selectedplan == 1
                          ? "Arcade"
                          : selectedplan == 2
                          ? "Advanced"
                          : "Pro"}
                        ({planmethod ? "per year" : "per month"})
                      </h4>
                      <button onClick={() => setactive(1)}>Change</button>
                    </span>
                    <span>
                      $
                      {planmethod
                        ? selectedplan == 1
                          ? "90"
                          : selectedplan == 2
                          ? "120"
                          : "150"
                        : selectedplan == 1
                        ? "9"
                        : selectedplan == 2
                        ? "12"
                        : "15"}
                      /{planmethod ? "yr" : "mo"}
                    </span>
                  </div>
                  <hr />
                  {picked1 && (
                    <div className="finishpara">
                      <p>Online service</p>
                      <span>{planmethod ? "+$10/yr" : "+$1/mo"}</span>
                    </div>
                  )}
                  {picked2 && (
                    <div className="finishpara">
                      <p>Larger storage</p>
                      <span>{planmethod ? "+$20/yr" : "+$2/mo"}</span>
                    </div>
                  )}
                  {picked3 && (
                    <div className="finishpara">
                      <p>Customizable profile</p>
                      <span>{planmethod ? "+$20/yr" : "+$2/mo"}</span>
                    </div>
                  )}
                </div>
                <div className="total">
                  <p>Total({planmethod ? "per year" : "per month"})</p>
                  <span>
                    +${totalfee}/{planmethod ? "yr" : "mo"}
                  </span>
                </div>
                <Buttonsbn
                  stepchange={stepchange}
                  setactive={setactive}
                  word={"Confirm"}
                />
              </div>
            )}
            {confirm && (
              <div className="confirm">
                <img src={thanksicon} alt="image not found" />
                <h1>Thank you!</h1>
                <p>
                  Thanks for confirming your subscription! We hope you have fun
                  using our platform. If you ever need support, please feel free
                  to email us at support@loremgaming.com.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
