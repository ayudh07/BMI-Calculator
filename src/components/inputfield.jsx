export default function InputField({type='text',label, onValueChange, unit}){

    if(type === 'text'){
        return (
            <div className="text-field d-flex flex-column">
                <label htmlFor={label}>{label}</label>
                <input type={type} name={label} onChange={(e) => onValueChange(e.target.value)}/>
            </div>
        )

    }
    else if(type === 'number'){
        return (
            <div className="text-field d-flex flex-column">
                <label htmlFor={label}>{label}</label>
                <div className="input-container">
                    <input type={type} name={label} placeholder="0" onChange={(e) => onValueChange(e.target.value)}/>
                    <span className="unit">{unit}</span>
                </div>
            </div>
        )
    }


}