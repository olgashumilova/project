import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addItemToCart, getCurrentGameCard } from '@/redux/actions/actions.ts'
import { getProductsAPI } from '@/api/api'
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
    const [productsArray, setProductsArray] = useState([])

    async function getProducts(): Promise<void> {
        try {
            await getProductsAPI.then((response) => {
                setProductsArray(response.data)
            })        
        } catch (error) {
            console.log(error);         
        }   
    }

    useEffect(() => {
        getProducts()
    }, [])

    function dispatchItem(): void {
        for (let i = 0; i < productsArray.length; i++) {
            if (productsArray[i].description === description) {
                dispatch(addItemToCart(productsArray[i]))
            }  
        }
    }

    function showModalAndDispatch(): void {
        for (let i = 0; i < productsArray.length; i++) {
            if (productsArray[i].description === description) {
                dispatch(getCurrentGameCard(productsArray[i]))
                setShowModal(!showModal)
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