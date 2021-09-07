import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'
import Swal from 'sweetalert2'
import { productAPI } from '@/api/api'
import { addGameToProductsArray, getProductsArray } from '@/redux/actions/actions.ts'

const EditGameCardModal:React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const currentGameCard = useSelector(state => state.currentGameCard)

    const [showModal, setShowModal] = useState(true)

    const initialState = {
        gameId: '',
        gameName: '',
        gameGenre: '',
        gamePrice: '',
        gameImage: '',
        gameRating: '',
        gameDescription: '',
        gameAgeLimit: '',
        gamePlatform: {},
    }

    const [stateGame, setStateGame] = useState(initialState)

    useEffect(() => {
        if (currentGameCard === null) {
            setStateGame(initialState);
        } else {
            setStateGame({
                ...stateGame,
                gameName: currentGameCard.name,
                gameGenre: currentGameCard.genre,
                gamePrice: currentGameCard.price,
                gameImage: currentGameCard.image,
                gameRating: currentGameCard.rating,
                gameDescription: currentGameCard.description,
                gameAgeLimit: currentGameCard.ageLimit,
                gamePlatform: currentGameCard.platform,
            })
        }
    }, [currentGameCard])

    const displayImage = (): JSX.Element => {
        if (!stateGame.gameImage) {
            return <div className = 'userpage__image-inner'>No picture</div>
        } else {
            return <img className = 'modal-window__main-image' src = {stateGame.gameImage} alt = 'Game card image' />
        }
    }

    const addGame = async(): Promise<void> => {
        const response = await axios.post(productAPI, stateGame)
        dispatch(addGameToProductsArray(response.data))
        Swal.fire('Game card has been created');
    }

    const editGame = async(): Promise<void> => {
        const response = await axios.put(productAPI, stateGame)
        dispatch(getProductsArray(response.data))
        Swal.fire('Game has been edited');
    }

    const deleteGame = async(): Promise<void> => {
        Swal.fire({
            title: `Are you sure  you want to delete the product ${stateGame.gameName}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgba(199, 0, 218, 1)',
            cancelButtonColor: 'rgba(0, 0, 0, 0.6)',
            confirmButtonText: 'Yes, delete it'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:3001/product/${currentGameCard.id}`).then((response) => {
                    Swal.fire(
                        'Deleted!',
                        'Game card has been deleted.',
                        'success'
                    )
                    dispatch(getProductsArray(response.data))
                })
            }
        })
    }

    const [pcChecked, setPcChecked] = useState(currentGameCard !== null ? 'pc' in currentGameCard.platform : false)
    const [playstationChecked, setPlaystationChecked] = useState(currentGameCard !== null ? 'playstation' in currentGameCard.platform : false)
    const [xboxChecked, setXboxChecked] = useState(currentGameCard !== null ? 'xbox' in currentGameCard.platform : false)

    const handleInputChange = (event): void => {
        const target = event.target
        const value = target.checked ? target.value : null
        const name = target.name

        if (value === null) {
            delete stateGame.gamePlatform[name]
            if (target.value === 'pc') {
                setPcChecked(!pcChecked)
            } else if (target.value === 'playstation') {
                setPlaystationChecked(!playstationChecked)
            } else if (target.value === 'xbox') {
                setXboxChecked(!xboxChecked)
            }
        } else if (value) {
            if (value === target.value) {
                setStateGame({...stateGame, gamePlatform: Object.assign(stateGame.gamePlatform, ({ [name]: value }))})
                if (target.value === 'pc') {
                    setPcChecked(!pcChecked)
                } else if (target.value === 'playstation') {
                    setPlaystationChecked(!playstationChecked)
                } else if (target.value === 'xbox') {
                    setXboxChecked(!xboxChecked)
                }
            }
        }
    }

    return (

        <div className = {showModal === true ? 'edit-modal-wrapper' : 'edit-modal-wrapper_hidden'}>
            <div className = {showModal === true ? 'edit-modal-window' : 'edit-modal-window_hidden'}>
                <div className = 'edit-modal-window__header'>
                    <p>Edit Card</p>
                    <button className = 'modal-window__close-button' onClick = {(): void => {setShowModal(!showModal)}}></button>
                </div>
                <div className = 'modal-window__main-headers'>
                    <p>Card Image</p>
                    <p>Information</p>
                </div>
                <div className = 'modal-window__main'>

                    <div className = 'modal-window__main-image-container'>
                        {displayImage()}
                    </div>

                    <div className = 'edit-modal-window__form'>
                        <div className = 'modal-window__input'>
                            <p className = 'modal-window__fieldname'>Name</p>
                            <input 
                                type = 'text'
                                className = 'modal-window__input-field'
                                onChange = {(event): void => setStateGame({...stateGame, gameName: event.target.value})}
                                value = {stateGame.gameName}
                            />
                        </div>
                        <div className = 'modal-window__input'>
                            <p className = 'modal-window__fieldname'>Genre</p>
                            <input 
                                type = 'text'
                                className = 'modal-window__input-field'
                                onChange = {(event): void => setStateGame({...stateGame, gameGenre: event.target.value})}
                                value = {stateGame.gameGenre}
                            />
                        </div>
                        <div className = 'modal-window__input'>
                            <p className = 'modal-window__fieldname'>Price</p>
                            <input 
                                type = 'number'
                                className = 'modal-window__input-field'
                                onChange = {(event): void => setStateGame({...stateGame, gamePrice: +(event.target.value)})}
                                value = {stateGame.gamePrice}
                            />
                        </div>
                        <div className = 'modal-window__input'>
                            <p className = 'modal-window__fieldname'>Image</p>
                            <input 
                                type = 'text'
                                className = 'modal-window__input-field'
                                onChange = {(event): void => setStateGame({...stateGame, gameImage: event.target.value})}
                                value = {stateGame.gameImage}
                            />
                        </div>
                        <div className = 'modal-window__input'>
                            <p className = 'modal-window__fieldname'>Rating</p>
                            <input 
                                type = 'number' min = '0' max = '5'
                                className = 'modal-window__input-field'
                                onChange = {(event): void => setStateGame({...stateGame, gameRating: +(event.target.value)})}
                                value = {stateGame.gameRating}
                            />
                        </div>
                        <div className = 'modal-window__input'>
                            <p className = 'modal-window__fieldname'>Description</p>
                            <input 
                                className = 'modal-window__input-field'
                                onChange = {(event): void => setStateGame({...stateGame, gameDescription: event.target.value})}
                                value = {stateGame.gameDescription}
                            />
                        </div>
                        <div className = 'modal-window__input'>
                            <p className = 'modal-window__fieldname'>Age</p>
                            <input
                                type = 'number' min = '3' max = '18'
                                className = 'modal-window__input-field'
                                onChange = {(event): void => setStateGame({...stateGame, gameAgeLimit: +(event.target.value)})}
                                value = {stateGame.gameAgeLimit}
                            />
                        </div>

                            <div className = 'modal-window__checkbox-input'>
                                <div className = 'modal-window__checkbox-container'>
                                    <input 
                                        type = 'checkbox' 
                                        name = 'pc'
                                        checked = {pcChecked}
                                        onChange = {handleInputChange}
                                        value = {'pc'}
                                    />
                                    <p>PC</p>
                                </div>
                                
                                <div className = 'modal-window__checkbox-container'>
                                    <input 
                                        type = 'checkbox' 
                                        name = 'playstation'
                                        checked = {playstationChecked}
                                        onChange = {handleInputChange}
                                        value = {'playstation'}
                                    />
                                    <p>Playstation</p>
                                </div>
                                
                                <div className = 'modal-window__checkbox-container'>
                                    <input 
                                        type = 'checkbox' 
                                        name = 'xbox'
                                        checked = {xboxChecked}
                                        onChange = {handleInputChange}
                                        value = {'xbox'}
                                    />
                                    <p>Xbox</p>
                                </div>
                                
                            </div>

                    </div>
                </div>

                <div className = 'edit-modal-windows-buttons'>
                    <button 
                        className = 'edit-modal-window__button'
                        type = 'submit'
                        onClick = {(): void => {
                            currentGameCard === null ? addGame() : editGame()
                            setShowModal(!showModal)
                        }}>Submit
                    </button>
                    <button 
                        className = 'edit-modal-window__button'
                        onClick = {(): void => { 
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