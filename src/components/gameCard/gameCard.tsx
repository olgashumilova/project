import React from 'react'

const GameCard: React.FunctionComponent <{backgroundImage: string}> = (background) => {
    return (
        <div className = 'flipcard h'>
            <div className = 'front' style = {{backgroundImage: 'url(' + background + ')'}}>This is front side</div>
            <div className = 'back' style = {{backgroundImage: 'url(' + background + ')'}}>This is back side</div>
        </div>
    )
}

export default GameCard
