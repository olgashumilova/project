import React from 'react'

interface IProp {
    backgroundImage: string;
    description: string;
    ageLimit: string;
    price: number;
}

const GameCard: React.FunctionComponent <{backgroundImage: string, description: string, ageLimit: string, price: number}> = ({backgroundImage, description, ageLimit, price}: IProp) => {
    return (
        <div className = 'gamecard gamecard-wrap'>
            <div className = 'front' style = {{backgroundImage: `url(${backgroundImage})`}}></div>
            <div className = 'back'>
                <p className = 'back__description'>{description}</p>
                <p>{ageLimit}</p>
                <p>{price}</p>
                <button className = 'back__cart-button' onClick = {() => alert('Got Product')}>Add to cart</button></div>
        </div>
    )
}

export default GameCard