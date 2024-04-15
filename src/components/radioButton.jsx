export default function RadioButton({name='dummy', value='dummy', checked, shareValue}){

    return (
        <div className="radio">
            <label htmlFor={value}>
                <input type="radio" name={name} value={value} id={value} onChange={(e)=>shareValue(e.target.value)} checked={checked}/>
                {value}
            </label>
        </div>
    )
}