import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/actions/actions'
import { getProductsAPI } from '@/api/api'

interface IProp {
    backgroundImage: string;
    description: string;
    ageLimit: string;
    price: number;
}

const GameCard: React.FunctionComponent <{backgroundImage: string, description: string, ageLimit: string, price: number}> = ({backgroundImage, description, ageLimit, price}: IProp) => {
    
    const dispatch = useDispatch()

    const [productsArray, setProductsArray] = useState([])
    async function getProducts() {
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

    function dispatchItem() {
        for (let i = 0; i < productsArray.length; i++) {
            if (productsArray[i].description === description) {
                dispatch(addItemToCart(productsArray[i]))
            }  
        }
    }

    return (
        <div className = 'gamecard gamecard-wrap'>
            <div className = 'front' style = {{backgroundImage: `url(${backgroundImage})`}}></div>
            <div className = 'back'>
                <p className = 'back__description'>{description}</p>
                <p>{ageLimit}</p>
                <p>{price}</p>
                <button className = 'back__cart-button' onClick = {() => {
                    dispatchItem()
                    Swal.fire(`Added to cart`)
                }}>Add to cart</button></div>
        </div>
    )
}

export default GameCard