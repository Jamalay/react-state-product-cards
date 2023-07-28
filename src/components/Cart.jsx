import style from '../styles/Cart.module.css'
import { Link } from "react-router-dom";

const Cart = (props) => {
    let amountOfElemsInCart = 0;
    let totalPrice = 0;

    return (
        <>
            <div className={props.seeCart ? style.main : style.none} >
                <div key={1}>
                    <h2>Корзина</h2>
                </div>
                {props.data.filter(elem => {
                    if(elem.isInCart){
                        amountOfElemsInCart++
                        totalPrice += elem.price
                        return elem
                    }
                }).map(dataElem => {
                    return (
                        <div className={style.card} key={Math.random()}>
                            <div>
                                <img className={style.img} src={dataElem.image}></img>
                            </div>
                            <div className={style.priceAndName}>
                                <p>{dataElem.name}</p>
                                <p>${dataElem.price}</p>
                            </div>
                            <div>
                                <button className={style.button} onClick={() => props.removeFromCart(dataElem.id)}>x</button>
                            </div>
                        </div>
                    )
                })}
                <p>{amountOfElemsInCart? `Сумарная стоимость: ${totalPrice}`: "Корзина пустая" }</p>
                <Link to="/Purchase">{amountOfElemsInCart? 'Перейти к покупке': ''}</Link>
            </div>
        </>
    )
}

export default Cart;