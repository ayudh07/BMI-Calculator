import RadioButton from "./radioButton"

export default function RadioGroup({options, groupLabel}){
    return (
        <div className="radio-group">
            <span className="group-label">{groupLabel}</span>
            {options ? options.map((option, index) => {
                return (
                    <RadioButton key={index} name={groupLabel} value={options.value} />
                )
            }) : 'Error: Unknown option'}
        </div>
    )
}