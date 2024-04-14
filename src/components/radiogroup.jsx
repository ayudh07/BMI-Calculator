import RadioButton from "./radioButton"

export default function RadioGroup({options, groupLabel, groupIdentifier, orientation, defaultChecked=''}) {
    return (
        <div className="input-group">
            {groupLabel ? <span className="group-label">{groupLabel}</span> : ''}
            <div className={"radio-group "+ (orientation=='vertical' ? 'flex-column' : 'flex-row')}>
                {options ? options.map((option, index) => {
                    return (
                        <RadioButton key={index} name={groupIdentifier} value={option} checked={ option == defaultChecked ? true :false}/>
                    )
                }) : 'Error: Unknown option'}
            </div>        
        </div>
    )
}