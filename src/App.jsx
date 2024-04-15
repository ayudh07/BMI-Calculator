import Section from "./components/section";
import Card from "./components/card";
import Logo from "./assets/images/logo.svg";
import Calculator from "./components/calculator";
function App() {
  return (
    <>
      <Section
        predefinedClasses="d-flex flex-column gap32 section-height"
        id="hero"
      >
        <div className="logo">
          <img src={Logo} alt="BMI Logo" />
        </div>
        <div className="calculator-section">
          <div
            className="d-flex flex-column gap-5 col pe-5 me-5"
            style={{ marginTop: "6rem" }}
          >
            <h1 style={{ font: "var(--Heading-XL)" }}>
              Body Mass Index Calculator
            </h1>
            <p style={{ font: "var(--Body-M-Regular)" }}>
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
          <Card variant="other">
            <Calculator />
          </Card>
        </div>
      </Section>
    </>
  );
}

export default App;
