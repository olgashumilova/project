import React from 'react'

const GameCard: React.FunctionComponent <{backgroundImage: string}> = (background) => {
    return (
        <div className = 'gamecard h'>
            {/* <img src = {background}></img> */}
            <div className = 'front' style = {{backgroundImage: `url(${background})`}}>This is front side</div>
            <div className = 'back' style = {{backgroundImage: `url(${background})`}}>Back side</div>
        </div>
    )
}

export default GameCard