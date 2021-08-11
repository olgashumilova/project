import React from 'react'
import { useSelector } from 'react-redux'

const CartPage: React.FunctionComponent = () => {

    const cart = useSelector(state => state.cart)

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + ' / ' + dd + ' / ' + yyyy;

    if (cart.length === 0) {
        return (
            <div className = 'cart__empty'>
                <p>Cart is empty </p>
                <div className = 'empty-cart'></div>
            </div>
        )
        
    } else {
        return (
            <div className = 'cart' >
                <p className = 'cart__title' >Cart page</p>
                
                <div className = 'cart__main'>
                    {cart.map((game) => {
                        return (
                            <div key = {game.index}>
                                <p>{game.name}</p>
                                <p>{today}</p>
                            </div>
                        )
                        
                    })}
                </div>
            </div>
        )
    }
}

export default CartPage
