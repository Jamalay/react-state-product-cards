import style from '../styles/Render.module.css'
import Cart from './Cart'



const RenderCards = (props) => {

    return (
        <main>
            <div className={props.seeCart ? style.mainDiv_withCart : style.mainDiv}>
                {props.data.filter(dataElem => {
                    if (dataElem.name.toLowerCase().includes(props.text.toLowerCase())) {
                        return dataElem
                    }
                }).map(elem => {
                    return (
                        <div key={elem.id} className={style.card}>
                            <div className={style.img}>
                                <img src={elem.image}></img>
                            </div>
                            <div className={style.details}>
                                <div className={style.nameAndPrice}>
                                    <div className={style.name}>{elem.name}</div>
                                    <div className={style.price}>${elem.price}</div>
                                </div>
                                <div>
                                    <button className={style.detailsButton} onClick={() => props.showDetails(elem.id)}>Детали</button>

                                    <div className={elem.isShowingDetails ? style.relative : style.none}>
                                        <div className={style.detailsText}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A rerum</p> {/* details text */}
                                            <button className={style.closeDetails} onClick={() => props.hideDetails(elem.id)}>x</button> {/*details button */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className={style.discription}>
                                Lorem ipsum dolor quam ipsa quo rem natus, possimus sunt. Eligendi, voluptas!
                            </div>
                            <div className={style.cartButtonDiv}>
                                <button
                                    className={!elem.isInCart ? style.cartButtom : style.unActive}
                                    onClick={() => props.addToCart(elem.id)}>
                                    {elem.isInCart ? 'Уже в корзине' : 'Добавить в корзину'}
                                </button>
                            </div>
                            <div className={style.removingFromCart} onClick={() => props.removeFromCart(elem.id)}>
                                <a className={!elem.isInCart ? style.none : style.a}>удалить из корзины</a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Cart data={props.data} seeCart={props.seeCart} removeFromCart={props.removeFromCart}/>
        </main>
    )
}

export default RenderCards;