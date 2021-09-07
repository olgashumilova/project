import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'
import { sendOrderToServerAPI } from '@/api/api'
import { removeItemFromCart } from '@/redux/actions/actions.ts'

const CartPage: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    
    let totalPrice = 0

    const [itemCount, setItemCount] = useState(1);

    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = date.getFullYear();

    const today = mm + ' / ' + dd + ' / ' + yyyy;

    if (cart.length === 0) {
        return (
            <div className = 'cart__empty'>
                <p>Cart is empty</p>
                <div className = 'empty-cart'></div>
            </div>
        )
        
    } else {
        return (
            <div className = 'cart' >
                <p className = 'cart__title' >Cart page</p>

                {cart.map((game, index) => {
                    totalPrice += game.price * game.amount

                    return (
                        <div className = 'cart__products' key = {index}>
                        
                            <p className = 'game-border'>{game.name}</p>
                            <div className = 'game-border'>
                                <select className = 'cart__select-platform'>
                                    { Object.keys(game.platform).map((key) => {
                                        return <option key = {key} value = {key}>{game.platform[key]}</option>
                                    })}
                                </select>
                            </div>
                            <p className = 'game-border'>{today}</p>
                            <div className = 'game-border'>
                                <div className = 'cart__change-quantity-btn'>
                                    <button className = 'cart__change-quantity-btn' onClick = {(): void => {
                                        game.amount <= 0 ? game.amount = 1 : setItemCount(--game.amount)
                                    }}> - </button>
                                    <p className = 'cart__current-item-amount'>{game.amount}</p>
                                    <button className = 'cart__change-quantity-btn' onClick = {(): void => {
                                        setItemCount(++game.amount)
                                    }}> + </button>
                                </div>
                            </div>
                            <p className = 'game-border'>{game.price * game.amount}$</p>
                            <div className = 'cart__game-button' onClick = {(): void => dispatch(removeItemFromCart(index))}>
                                <button className = 'cart__game-button-close'></button>
                            </div> 
                        </div>
                    )
                })}
                <p className = 'cart__total'>Games cost: {totalPrice}$</p>
                <button className = 'cart__purchase-button' onClick = {
                    async (): Promise<void> => {
                        const response = await axios.post(sendOrderToServerAPI, {cart})
                        Swal.fire(response.data);
                }}>Buy</button>
            </div>
        )
    }
}

export default CartPage
