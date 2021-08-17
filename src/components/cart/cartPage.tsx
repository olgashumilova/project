import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'
import { sendOrderToServerAPI } from '@/api/api'
import { removeItemFromCart } from '@/redux/actions/actions'

const CartPage: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    let totalPrice = 0

    const [itemCount, setItemCount] = useState(1);

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear();

    today = mm + ' / ' + dd + ' / ' + yyyy;

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
                
                <div className = 'cart__main'>
                    <p>Name</p>
                    <p>Platform</p>
                    <p>Order date</p>
                    <p>Amount</p>
                    <p>Price ($)</p>
                </div>

                {cart.map((game, index) => {
                    totalPrice += game.price * game.amount
                    
                    return (
                        <div className = 'cart__products' key = {index}>
                        
                            <p className = 'game-border'>{game.name}</p>
                            <div className = 'game-border'>
                                <select>
                                    <option>PC</option>
                                    <option>Playstation</option>
                                    <option>Xbox</option>
                                </select>
                            </div>
                            <p className = 'game-border'>{today}</p>
                            <div className = 'game-border'>
                                <div className = 'cart__change-quantity-btn'>
                                    <button className = 'cart__change-quantity-btn' onClick = {() => {
                                        game.amount <= 0 ? game.amount = 1 : setItemCount(--game.amount)
                                    }}> - </button>
                                    <p className = 'cart__current-item-amount'>{game.amount}</p>
                                    <button className = 'cart__change-quantity-btn' onClick = {() => {
                                        setItemCount(++game.amount)
                                    }}> + </button>
                                </div>
                            </div>
                            <p className = 'game-border'>{game.price * game.amount}$</p>
                            <div className = 'cart__game-button' onClick = {() => dispatch(removeItemFromCart(index))}><button>x</button></div> 
                        </div>
                    )
                })}
                <p className = 'cart__total'>Games cost: {totalPrice}$</p>
                <button className = 'cart__purchase-button' onClick = {
                    async () => {
                        const response = await axios.post(sendOrderToServerAPI, {cart})
                        Swal.fire(response.data);
                }}>Buy</button>
            </div>
        )
    }
}

export default CartPage
