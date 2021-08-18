import React, { useState, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import axios from 'axios'
import Swal from 'sweetalert2'
import { productAPI } from '@/api/api'

const EditGameCardModal:React.FunctionComponent = () => {

    const currentGameCard = useSelector(state => state.currentGameCard)

    const [showModal, setShowModal] = useState(true)
    const [checked, setChecked] = useState(false)

    const [gameName, setGameName] = useState('')
    const [gameGenre, setGameGenre] = useState('')
    const [gamePrice, setGamePrice] = useState('')
    const [gameImage, setGameImage] = useState('')
    const [gameDescription, setGameDescription] = useState('')
    const [gameAgeLimit, setGameAgeLimit] = useState('')
    const [gamePlatform, setGamePlatform] = useState({})

    useEffect(() => {
        if (currentGameCard === null) {
            setGameName('')
            setGameGenre('')
            setGamePrice('')
            setGameImage('')
            setGameDescription('')
            setGameAgeLimit('')
            setGamePlatform({})
        } else {
            checkValue()
            setGameName(currentGameCard.name)
            setGameGenre(currentGameCard.genre)
            setGamePrice(currentGameCard.price)
            setGameImage(currentGameCard.image)
            setGameDescription(currentGameCard.description)
            setGameAgeLimit(currentGameCard.ageLimit)
            setGamePlatform(Object.keys(currentGameCard.platform))
        }
    }, [currentGameCard])

    const displayImage = () => {
        if (!gameImage) {
            return <div className = 'userpage__image-inner'>No picture</div>
        } else {
            return <img className = 'modalwindow__main-image' src = {gameImage} alt = 'Game card image' />
        }
    }

    const addGame = async() => {
        const response = await axios.post(productAPI, {
            gameName,
            gameGenre,
            gamePrice,
            gameImage,
            gameDescription,
            gameAgeLimit,
            gamePlatform,
        })
        console.log(response.data);
    }

    const editGame = async() => {
        const response = await axios.put(productAPI, {
            gameName,
            gameGenre,
            gamePrice,
            gameImage,
            gameDescription,
            gameAgeLimit,
            gamePlatform,
        })
        console.log(response.data);
        // Swal.fire(response.data);
    }

    const deleteGame = async() => {
        Swal.fire({
            title: `Are you sure  you want to delete the product ${gameName}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgba(199, 0, 218, 1)',
            cancelButtonColor: 'rgba(0, 0, 0, 0.6)',
            confirmButtonText: 'Yes, delete it'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:3001/product/${currentGameCard.id}`)
                Swal.fire(
                  'Deleted!',
                  'Game card has been deleted.',
                  'success'
                )
            }
        })
    }

    const checkValue = () => {
        const pcPlatformOfCurrentCard = 'pc' in currentGameCard.platform
        const playstationPlatformOfCurrentCard = 'playstation' in currentGameCard.platform
        const xboxPlatformOfCurrentCard = 'xbox' in currentGameCard.platform

        pcPlatformOfCurrentCard ? setChecked(true) : setChecked(false)
        playstationPlatformOfCurrentCard ? setChecked(true) : setChecked(false)
        xboxPlatformOfCurrentCard ? setChecked(true) : setChecked(false)
        
        console.log(xboxPlatformOfCurrentCard);
    }

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.checked ? target.value : null
        const name = target.name

        value === null ? delete gamePlatform[name] : setGamePlatform(Object.assign(gamePlatform, ({ [name]: value })))
    }

    return (

        <div className = {showModal === true ? 'edit-modal-wrapper' : 'edit-modal-wrapper_hidden'}>
            <div className = {showModal === true ? 'edit-modalwindow' : 'edit-modalwindow_hidden'}>
                <div className = 'edit-modalwindow__header'>
                    <p>Edit Card</p>
                    <button className = 'modalwindow__close-button' onClick = {() => setShowModal(!showModal)}>x</button>
                </div>
                <div className = 'modalwindow__main-headers'>
                    <p>Card Image</p>
                    <p>Information</p>
                </div>
                <div className = 'modalwindow__main'>

                    <div className = 'modalwindow__main-image-container'>
                        {displayImage()}
                    </div>

                    <div className = 'edit-modalwindow__form'>
                        <div className = 'modalwindow__input'>
                            <p>Name</p>
                            <input 
                                type = 'text'
                                className = 'modalwindow__input-field'
                                onChange = {(event) => setGameName(event.target.value)}
                                value = {gameName}
                            />
                        </div>
                        <div className = 'modalwindow__input'>
                            <p>Category</p>
                            <input 
                                type = 'text'
                                className = 'modalwindow__input-field'
                                onChange = {(event) => setGameGenre(event.target.value)}
                                value = {gameGenre}
                            />
                        </div>
                        <div className = 'modalwindow__input'>
                            <p>Price</p>
                            <input 
                                type = 'text'
                                className = 'modalwindow__input-field'
                                onChange = {(event) => setGamePrice(event.target.value)}
                                value = {gamePrice}
                            />
                        </div>
                        <div className = 'modalwindow__input'>
                            <p>Image</p>
                            <input 
                                type = 'text'
                                className = 'modalwindow__input-field'
                                onChange = {(event) => setGameImage(event.target.value)}
                                value = {gameImage}
                            />
                        </div>
                        <div className = 'modalwindow__input'>
                            <p>Description</p>
                            <textarea 
                                className = 'modalwindow__desc-input-field'
                                onChange = {(event) => setGameDescription(event.target.value)}
                                value = {gameDescription}
                            />
                        </div>
                        <div className = 'modalwindow__input'>
                            <p>Age</p>
                            <input
                                type = 'text'
                                className = 'modalwindow__input-field'
                                onChange = {(event) => setGameAgeLimit(event.target.value)}
                                value = {gameAgeLimit}
                            />
                        </div>

                            <div className = 'modalwindow__checkbox-input'>
                                <input 
                                    type = 'checkbox' 
                                    name = 'pc'
                                    checked = {'pc' in currentGameCard.platform}
                                    onChange = {handleInputChange}
                                    value = {'pc'}
                                />
                                <p>PC</p>

                                <input 
                                    type = 'checkbox' 
                                    name = 'playstation'
                                    checked = {'playstation' in currentGameCard.platform}
                                    onChange = {handleInputChange}
                                    value = {'playstation'}
                                />
                                <p>Playstation</p>

                                <input 
                                   type = 'checkbox' 
                                   name = 'xbox'
                                   checked = {'xbox' in currentGameCard.platform}
                                   onChange = {handleInputChange}
                                   value = {'xbox'}
                                />
                                <p>Xbox</p>
                            </div>

                    </div>
                </div>

                <div className = 'edit-modal-windows-buttons'>
                    <button 
                        className = 'edit-modalwindow__button'
                        type = 'submit'
                        onClick = {() => {
                            currentGameCard === null ? addGame() : editGame()
                            setShowModal(!showModal)
                            // Swal.fire('Game card has been edited')
                        }}>Submit
                    </button>
                    <button 
                        className = 'edit-modalwindow__button'
                        onClick = {() => { 
                            setShowModal(!showModal)
                            deleteGame() 
                        }}>Delete card
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default EditGameCardModal