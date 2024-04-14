import RadioGroup from "./radiogroup"
import {useState, useEffect} from 'react'
import InputField from "./inputfield";
export default function Calculator(){

    const [currentSystem, setCurrentSystem] = useState("metric");
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    function handleWeightChange(value){
        setWeight(value);
    }

    function handleHeightChange(value){
        setHeight(value);
    }

    useEffect(() => {
        if(height & weight){
            let hm = height/100;
            let bmi = weight/(hm*hm);
            bmi = Math.round((bmi + Number.EPSILON) * 100) / 100
            setBmi(bmi);
            console.log(bmi);
        }
    }) ;
    
    return(
        <div className="d-flex flex-column gap32">
            <h2 style={{font: 'var(--Heading-M)'}}>Enter your details below</h2>
                <RadioGroup groupIdentifier="system" options={["metric", "imperial"]} defaultChecked={currentSystem}/>
            <div className="d-flex flex-row gap-24">
                <InputField type='number' unit='cm' label="Height" onValueChange={handleHeightChange}/>
                <InputField type='number' unit='kg' label="Weight" onValueChange={handleWeightChange}/>
            </div>
            <div className="d-flex flex-row justify-content-between gap-3 align-items-center bmi-result">
                {
                    bmi ? 
                    <>
                        <div className="d-flex flex-column col">
                            <p style={{marginBottom:'.5rem'}}>Your BMI is</p>
                            <b style={{font: 'var(--Heading-XL)'}}>{bmi}</b>
                        </div>
                        <div className="d-flex flex-column col justify-content-center align-items-center">
                            <p style={{font: 'var(--Body-S-Regular)'}}>
                                Your BMI suggests you’re a healthy weight. 
                                Your ideal weight is between 
                                <b> 63.3kgs - 85.2kgs.</b>
                            </p>
                        </div>
                    
                    </>
                :
                    <div className="d-flex flex-column gap-16">
                        <h1 style={{font: 'var(--Heading-M)'}}>Welcome!</h1>
                        <span style={{font: 'var(--Body-S-Regular)'}}>Enter your height and weight and you’ll see your BMI result here</span>
                    </div>

                }
            </div>
        </div>
    )
}