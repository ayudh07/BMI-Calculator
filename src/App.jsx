import Section from "./components/section";
import Card from "./components/card";
import Logo from "./assets/images/logo.svg";
import Calculator from "./components/calculator";
import Image from "./assets/images/image-man-eating.webp";
import HabitData from "./data/habit.json";
import HabitCard from "./components/habitcard";

function App() {
  return (
    <>
      <Section
        predefinedClasses="d-flex flex-column gap-32 section-height"
        id="hero"
      >
        <div className="logo">
          <img src={Logo} alt="BMI Logo" />
        </div>
        <div className="d-flex flex-lg-row gap-32 flex-column">
          <div
            className="d-flex flex-column gap-5 col pe-5 me-5"
            style={{ marginTop: "6rem" }}
          >
            <h1 style={{ font: "var(--Heading-XL)" }}>
              Body Mass Index Calculator
            </h1>
            <p className="description">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
          <div className="col">
            <Card variant="other">
              <Calculator />
            </Card>
          </div>
        </div>
      </Section>
      <Section
        predefinedClasses="d-flex flex-column gap-32 section-height"
        id="hero"
      >
        <div className="d-flex flex-column flex-lg-row gap-32">
          <div className="col">
            <img src={Image} alt="A smiling Man" />
          </div>
          <div className="d-flex flex-column justify-content-end col gap-32 ps-5 ms-5 mb-5">
            <h2 style={{ font: "var(--Heading-L)" }}>
              What your BMI result mean
            </h2>
            <p className="description">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </div>
      </Section>
      <Section
        predefinedClasses="d-flex flex-row gap-24 section-height mt-5 mb-5 pt-5 pb-5"
        id="hero"
      >
        {HabitData.map((data, index) => {
          return (
            <HabitCard
              key={index}
              imgurl={data.img}
              alttext={data.alt}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </Section>
      <Section
        predefinedClasses="d-flex flex-row gap-24 section-height mt-5 mb-5 pt-5 pb-5"
        id="hero"
      ></Section>
    </>
  );
}

export default App;
