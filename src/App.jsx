import Section from "./components/section";
import Card from "./components/card";
import Logo from "./assets/images/logo.svg";
import Calculator from "./components/calculator";
import Image from "./assets/images/image-man-eating.webp";
import HabitData from "./data/habit.json";
import HabitCard from "./components/habitcard";
import gender from './assets/images/icon-gender.svg'
import age from './assets/images/icon-age.svg'
import muscle from './assets/images/icon-muscle.svg'
import pregnancy from './assets/images/icon-pregnancy.svg'
import race from './assets/images/icon-race.svg'

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
        predefinedClasses="d-flex flex-column gap-32 section-height bmi-description"
      >
        <div className="d-flex flex-column flex-lg-row gap-32">
          <div className="col">
            <img src={Image} alt="A smiling Man" style={{width: "100%"}}/>
          </div>
          <div className="d-flex flex-column justify-content-end col gap-32 ps-5 pb-5 ms-5 mb-5">
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
        predefinedClasses="d-flex flex-row gap-24 section-height"
      >
        <div className="habit-box d-flex flex-row gap-24">
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
        </div>
      </Section>
      <Section
        predefinedClasses="d-flex flex-row gap-24 section-height"
      >
          <div className="d-flex flex-column col gap-32 limitations-header">
            <h2 style={{ font: "var(--Heading-L)" }}>
              Limitations of BMI
            </h2>
            <p className="description">
            Although BMI is often a practical indicator of healthy weight, it is not suited for every person. 
            pecific groups should carefully consider their BMI outcomes, and in certain cases, 
            the measurement may not be beneficial to use.
            </p>
          </div>
          <div className="col d-flex flex-column align-items-end">
            <div className="limitation-box ">
              <div className="d-flex gap-5 flex-row justify-content-end" style={{marginRight: '10vw'}}>
                <Card   
                  title='gender'
                  icon={gender}
                  description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."         
                  styles={{width: '24vw'}}
                />
              </div>
              <div className="d-flex gap-5 flex-row pe-5 justify-content-end">
                <Card   
                  title='age'
                  icon={age}
                  description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."         
                  styles={{width: '24vw '}}
                />
                <Card   
                  title='muscle'
                  icon={muscle}
                  description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."         
                  styles={{width: '24vw'}}
                />
              </div>
              <div className="d-flex gap-5 flex-row pe-5" style={{marginRight: '5rem'}}>
                <Card   
                  title='pregnancy'
                  icon={pregnancy}
                  description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."         
                  styles={{width: '24vw'}}
                />
                <Card   
                  title='race'
                  icon={race}
                  description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."         
                  styles={{width: '24vw'}}
                />
              </div>
            </div>
          </div>

      </Section>
    </>
  );
}

export default App;
