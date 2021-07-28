import React from 'react'

const SignInModal: React.FunctionComponent = () => {
    return (
        <div className = 'modalwindow'>
            <div className = 'modalwindow__header'>
                <p>Authorization</p>
                <button className = 'modalwindow__close-button'>x</button>
            </div>

            <div className = 'modalwindow__form'>
                <div className = 'modalwindow__input'>
                    <p>Login</p>
                    <input type="text" className = 'modalwindow__input-field' />
                </div>
        
                <div className = 'modalwindow__input'>
                    <p>Password</p>
                    <input type="text" className = 'modalwindow__input-field' />
                </div>
            </div>

            <button  className = 'modalwindow__button'>Submit</button>
        </div>
    )
}

export default SignInModal
