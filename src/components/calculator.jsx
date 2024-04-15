import RadioGroup from "./radiogroup";
import { useState, useEffect } from "react";
import InputField from "./inputfield";
export default function Calculator() {
  const [currentSystem, setCurrentSystem] = useState("metric");
  // Weight metrics
  const [kg, setKg] = useState(0);
  const [st, setSt] = useState(0);
  const [lb, setLb] = useState(0);

  // height metrics
  const [cm, setCm] = useState(0);
  const [ft, setFt] = useState(0);
  const [inch, setInch] = useState(0);

  //   BMI value
  const [bmi, setBmi] = useState(0);

  //   handle weight changes
  function handleKgChange(value) {
    console.log(value);
    setKg(value);
  }

  function handleStChange(value) {
    console.log(value);
    setSt(value);
  }

  function handleLbChange(value) {
    console.log(value);
    setLb(value);
  }

  //   handle height changes
  function handleCmChange(value) {
    console.log(value);
    setCm(value);
  }

  function handleFtChange(value) {
    console.log(value);
    setFt(value);
  }

  function handleInchChange(value) {
    console.log(value);
    setInch(value);
  }

  //   change calculation system
  function handleSystem(value) {
    setCurrentSystem(value);
    setBmi(0);
    setKg(0);
    setSt(0);
    setLb(0);
    setCm(0);
    setFt(0);
    setInch(0);
  }

  // Calculate bmi

  useEffect(() => {
    console.log("Calculation Triggered");
    if (currentSystem == "metric") {
      let hm = cm / 100;
      console.log("HM:" + hm);
      console.log("WT: " + kg);
      let bmiMetric = kg / (hm * hm);
      bmiMetric = Math.round((bmiMetric + Number.EPSILON) * 10) / 10;
      setBmi(bmiMetric);
      console.log("Metric:" + bmiMetric);
    } else if (currentSystem == "imperial") {
      let inches = ft * 12 + parseInt(inch);
      let lbs = st * 14 + parseInt(lb);
      console.log("lbs:" + lbs);
      let bmiImperial = 703 * (lbs / (inches * inches));
      bmiImperial = Math.round((bmiImperial + Number.EPSILON) * 10) / 10;
      setBmi(bmiImperial);
      console.log("Metric:" + bmiImperial);
    }
  }, [cm, kg, ft, inch, lb, st, currentSystem]);

  return (
    <div className="d-flex flex-column gap32">
      <h2 style={{ font: "var(--Heading-M)" }}>Enter your details below</h2>
      <RadioGroup
        groupIdentifier="system"
        options={["metric", "imperial"]}
        defaultChecked={currentSystem}
        shareValue={handleSystem}
      />
      {currentSystem == "metric" ? (
        <div className="d-flex flex-row gap-24">
          <InputField
            type="number"
            unit="cm"
            label="cm"
            onValueChange={handleCmChange}
          />
          <InputField
            type="number"
            unit="kg"
            label="kg"
            onValueChange={handleKgChange}
          />
        </div>
      ) : (
        <div className="d-flex flex-column gap-24">
          <div className="d-flex flex-row gap-24 align-items-end">
            <InputField
              type="number"
              unit="ft"
              label="Height"
              onValueChange={handleFtChange}
            />
            <InputField
              type="number"
              unit="in"
              onValueChange={handleInchChange}
            />
          </div>
          <div className="d-flex flex-row gap-24 align-items-end">
            <InputField
              type="number"
              unit="st"
              label="kg"
              onValueChange={handleStChange}
            />
            <InputField
              type="number"
              unit="lbs"
              onValueChange={handleLbChange}
            />
          </div>
        </div>
      )}
      <div className="d-flex flex-row justify-content-between gap-3 align-items-center bmi-result">
        {bmi ? (
          <>
            <div className="d-flex flex-column col">
              <p style={{ marginBottom: ".5rem" }}>Your BMI is</p>
              <b style={{ font: "var(--Heading-XL)" }}>{bmi}</b>
            </div>
            <div className="d-flex flex-column col justify-content-center align-items-center">
              <p style={{ font: "var(--Body-S-Regular)" }}>
                Your BMI suggests you’re a healthy weight. Your ideal weight is
                between
                <b> 63.3kgs - 85.2kgs.</b>
              </p>
            </div>
          </>
        ) : (
          <div className="d-flex flex-column gap-16">
            <h1 style={{ font: "var(--Heading-M)" }}>Welcome!</h1>
            <span style={{ font: "var(--Body-S-Regular)" }}>
              Enter your height and weight and you’ll see your BMI result here
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
