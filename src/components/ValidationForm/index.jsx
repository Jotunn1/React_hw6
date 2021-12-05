import React, { useState } from "react";
import styles from "./style.module.css"

const ValidationForm = () => {
    const [value, setValue] = useState("")
    const [isError, setError] = useState(false)
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.length < 5) {
            setError(false)
            console.log("Submit Sucess");
        }
        else {
            setError(true)
            console.log("Fatal Error");
        }
    }
    const errorStyles = isError ? styles.error : styles.default
    return (
        <div className="container">
            <p className="container__text">Кількість символів повинна бути меньшою 5</p>
            <form className="container__form" onSubmit={handleSubmit}>
                <input onChange={handleChange} value={value} type="text" className={errorStyles}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default ValidationForm;