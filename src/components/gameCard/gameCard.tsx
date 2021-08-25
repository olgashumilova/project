import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, getCurrentGameCard } from '@/redux/actions/actions.ts'
import EditGameCardModal from '@Components/modals/editGameCardModal'

interface IProp {
    backgroundImage: string;
    description: string;
    ageLimit: string;
    price: number;
}

const GameCard: React.FunctionComponent <{backgroundImage: string, description: string, ageLimit: string, price: number}> = ({backgroundImage, description, ageLimit, price}: IProp) => {
    
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)

    const products = useSelector(state => state.products)

    function dispatchItem(): void {
        for (let i = 0; i < products.length; i++) {
            if (products[i].description === description) {
                dispatch(addItemToCart(products[i]))
            }    
        }
    }

    function showModalAndDispatch(): void {
        for (let i = 0; i < products.length; i++) {
            if (products[i].description === description) {
                setShowModal(true)
                dispatch(getCurrentGameCard(products[i]))
            }   
        }
    }

    const userName = localStorage.getItem('username')
    
    if (userName === 'admin') {
        return (
            <div className = 'modalportal'>{showModal ? <EditGameCardModal /> : null}
                <div className = 'gamecard gamecard-wrap'>
                <div className = 'front' style = {{backgroundImage: `url(${backgroundImage})`}}></div>
                <div className = 'back'>
                    <p className = 'back__description'>{description}</p>
                    <p>{ageLimit}</p>
                    <p>{price}</p>
                    <button className = 'back__card-button' onClick = {(): void => {
                        Swal.fire(`Added to cart`)
                    }}>Add to cart</button>
                    <button className = 'back__card-button edit-card-button' onClick = {(): void => showModalAndDispatch()}>Edit</button>
                </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className = 'gamecard gamecard-wrap'>
                <div className = 'front' style = {{backgroundImage: `url(${backgroundImage})`}}></div>
                <div className = 'back'>
                    <p className = 'back__description'>{description}</p>
                    <p>{ageLimit}</p>
                    <p>{price}</p>
                    <button className = 'back__card-button' onClick = {(): void => {
                        dispatchItem()
                        Swal.fire(`Added to cart`)
                    }}>Add to cart</button></div>
            </div>
        )
    }
}

export default React.memo(GameCard)