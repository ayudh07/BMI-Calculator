export default function RadioButton({name='dummy', value='dummy', checked}){

    return (
        <div className="radio">
            <label htmlFor={value}>
                <input type="radio" name={name} value={value} id={value} onChange={()=>{alert(value +" Selected")}}/>
                {value}
            </label>
        </div>
    )
}