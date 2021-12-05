import React, { useState } from "react";
import './style.scss';

const MultiplyForm = () => {
    const [firstValue, setFirstValue] = useState("")
    const [secondValue, setSecondValue] = useState("")
    const handleChange1 = (e) => {
        setFirstValue(e.target.value)
        setSecondValue(e.target.value * 5)
    }
    const handleChange2 = (e) => {
        setFirstValue(e.target.value * 10)
        setSecondValue(e.target.value)
    }
    return (<div className="header">
        <form className="header__form">
            <input className="header__mult-input" placeholder="Multiply to 5" value={firstValue} type="text" onChange={handleChange1}></input>
            <input className="header__mult-input" placeholder="Multiply to 10" value={secondValue} type="text" onChange={handleChange2}></input>
        </form>
    </div>)
}

export default MultiplyForm;


