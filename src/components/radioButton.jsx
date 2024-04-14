export default function RadioButton({name='dummy', value='dummy'}){

    return (
        <div className="radio">
            <input type="radio" name={name} value={value} id={value}/>
            <label htmlFor="">{value}</label>
        </div>
    )
}