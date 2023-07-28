import { useState } from "react";
import style from '../styles/Form.module.css'
import logo from '../logos/lupa.png'

const Form = (props) => {

    const enterText = (e) => {
        props.setText(e.target.value);
        console.log(props.text);
    }

    return (
        <form className={style.search}>
            <input type="text" onChange={enterText} placeholder="Поиск"></input>
            <img src={logo}></img>
        </form>
    )
}

export default Form;