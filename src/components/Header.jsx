import Form from "./Form"
import style from '../styles/Header.module.css'

const Header = (props) => {
    const showCart = () => {
        props.setSeeCart(!props.seeCart)
        console.log(props.seeCart)
    }

    return (
        <header>
            <Form
                text={props.text}
                setText={props.setText}
            />
            <button onClick={() => showCart()}>{!props.seeCart ? 'Показать корзину': 'Скрыть корзину'}</button>
        </header>
    )
}


export default Header