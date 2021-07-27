import React from 'react'

interface IProp {
    backgroundImage: string;
    description: string;
    ageLimit: string;
}

const GameCard: React.FunctionComponent <{backgroundImage: string, description: string, ageLimit: string}> = ({backgroundImage, description, ageLimit}: IProp) => {
    return (
        <div className = 'gamecard h'>
            <div className = 'front' style = {{backgroundImage: `url(${backgroundImage})`}}></div>
            <div className = 'back'>
                <p className = 'back__description'>{description}</p>
                <p>{ageLimit}</p>
                <button className = 'back__cart-button' onClick = {() => alert('Got Product')}>Add to cart</button></div>
        </div>
    )
}

export default GameCard