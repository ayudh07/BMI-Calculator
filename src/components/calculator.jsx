import RadioButton from "./radioButton"

export default function Calculator(){
    return(
        <div className="d-flex flex-column gap-3">
            <h2>Enter your details below</h2>
            <div className="d-flex flex-row gap-4">
                <div className="col gap-2 d-flex">
                <RadioButton name="system" value="Metric" onClick={(e)=> console.log(e.target.value)}/>
                </div>
                <div className="col gap-2 d-flex">
                    <RadioButton name="system" value="Imperial" onClick={(e)=> console.log(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex flex-row gap-4">
                <div className="d-flex flex-column gap-2 col">
                    <label>
                        Height
                    </label>
                    <input type="text" />
                </div>
                <div className="d-flex flex-column gap-2 col">
                    <label>
                        Weight
                    </label>
                    <input type="text" />
                </div>
            </div>
            <div 
                className="d-flex flex-row justify-content-between gap-3 align-items-center bmi-result" 
            >
                <div className="d-flex flex-column col">
                    <p style={{marginBottom:'.5rem'}}>Your BMI is</p>
                    <b style={{font: 'var(--Heading-XL)'}}>23.4</b>
                </div>
                <div className="d-flex flex-column col justify-content-center align-items-center">
                    <p style={{font: 'var(--Body-S-Regular)'}}>
                        Your BMI suggests you’re a healthy weight. 
                        Your ideal weight is between 
                        <b> 63.3kgs - 85.2kgs.</b>
                    </p>
                </div>
            </div>
        </div>
    )
}