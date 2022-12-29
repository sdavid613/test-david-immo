import React from 'react';
import './inputRange.css';

function InputRange({ inputName, label, min,max, step, functionHandle, labelButton }) {

    return ( 
        <div>
        <label htmlFor={inputName} className="form-label">{label}</label>
            <input type="range" id={inputName} name={inputName}  min={min} max={max} step={step} onChange={functionHandle} className="form-range" value={inputName}/>
            <div className="text-center"><button type="button" className="btn btn-light w-40" disabled>{labelButton}</button></div>
    </div>
    )
}

export default InputRange;