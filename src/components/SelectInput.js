import React, {fragment} from 'react';

function SelectInput({label, id, values, 
    currentValue, setCurrentValue}){
const selectOptions = values.map((value)=>
  <option value={value} key={value.toString()}>{value}</option>);
    return(
        <>
            <label htmlFor={id}className="col font-weight-bold">{label}</label>
                <select id={id} defaultValue={currentValue} onChange={(e) => setCurrentValue(e.target.value)} className="col form-control"> {selectOptions}
                </select>
        </>
    )
}

export default SelectInput;
