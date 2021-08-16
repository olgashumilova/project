import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import { getProductsAPI } from '@/api/api';
import { getFilteredProducts } from '@/redux/actions/actions'
import 'semantic-ui-css/semantic.min.css'

const SearchProductsPage: React.FunctionComponent = (props) => {

    const dispatch = useDispatch()

    SearchProductsPage.propTypes = {
        title: PropTypes.string,
        filterByPlatform: PropTypes.array,
        searchbar: PropTypes.object,
        productPlatform: PropTypes.array,
    }

    const options = [
        { label: "Ascending", value: "ascending"},
        { label: "Descending", value: "descending"},
    ]

    const [type, setType] = useState('ascending')
    const [productsArray, setProductsArray] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const changeOptionType = (e) => {
        setType(e.target.value)
    }

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

    // Filters____________________________________________________________________________________________

    const filterByGenre = (value) => {
        setTimeout(() => { setIsLoading(true) }, 0);
        setTimeout (() => {
            if (value === 'All genres') {
                dispatch(getFilteredProducts(productsArray.filter((game) => game.genre)))
            } else if (value) {
                dispatch(getFilteredProducts(productsArray.filter((game) => game.genre == value)))
            }
        }, 500)
        setTimeout(() => { setIsLoading(false) }, 800); 
    }

    const filterByAge = (value) => {
        setTimeout(() => { setIsLoading(true) }, 0);
        setTimeout (() => {
            if (value === 'All ages') {
                dispatch(getFilteredProducts(productsArray.filter((game) => game.ageLimit)))
            } else if (value === '3') {
                dispatch(getFilteredProducts(productsArray.filter((game) => (game.ageLimit === 3 ))))
            } else if (value === '6') {
                dispatch(getFilteredProducts(productsArray.filter((game) => game.ageLimit >= 3 && game.ageLimit <= 6)))
            } else if (value === '12') {
                dispatch(getFilteredProducts(productsArray.filter((game) => game.ageLimit >= 3 && game.ageLimit <= 12)))
            } else if (value === '16') {
                dispatch(getFilteredProducts(productsArray.filter((game) => game.ageLimit >= 3 && game.ageLimit <= 16)))
            } else if (value === '18') {
                dispatch(getFilteredProducts(productsArray.filter((game) => game.ageLimit >= 3 && game.ageLimit <= 18)))
            }
        }, 500)
        setTimeout(() => { setIsLoading(false) }, 800); 
    }

    // Sorting____________________________________________________________________________________________

    // Sort by name ascending

    const sortByNameAsc = () => {
        setTimeout(() => { setIsLoading(true) }, 0);
        setTimeout (() => {
            const result = productsArray.sort((a, b) => {
                const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                if (nameA < nameB)
                  return -1
                if (nameA > nameB)
                  return 1
                return 0
            })
            return dispatch(getFilteredProducts(result))
        }, 500)
        setTimeout(() => { setIsLoading(false) }, 800); 
    }

    // Sort by name descending

    const sortByNameDesc = () => {
        setTimeout(() => { setIsLoading(true) }, 500);
        setTimeout (() => {
            const result = productsArray.sort((a, b) => {
                const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                nameA > nameB ? -1 : 1
                if (nameA > nameB)
                  return -1
                if (nameA < nameB)
                  return 1
                return 0
            })
            return dispatch(getFilteredProducts(result))
        }, 600)
        setTimeout(() => { setIsLoading(false) }, 800); 
    }

    // Sort by rating ascending

    const sortByRatingAsc = () => {
        setTimeout(() => { setIsLoading(true) }, 500);
        setTimeout (() => {
            const result = productsArray.sort((a, b) => {
                const ratingA = a.rating, ratingB = b.rating
                if (ratingA < ratingB)
                  return -1
                if (ratingA > ratingB)
                  return 1
                return 0
            })
            return dispatch(getFilteredProducts(result))
        }, 600)
        setTimeout(() => { setIsLoading(false) }, 800);      
    }

    // Sort by rating descending

    const sortByRatingDesc = () => {
        setTimeout(() => { setIsLoading(true) }, 500);
        setTimeout (() => {
            const result = productsArray.sort((a, b) => {
                const ratingA = a.rating, ratingB = b.rating
                if (ratingA > ratingB)
                  return -1
                if (ratingA < ratingB)
                  return 1
                return 0
            })
            return dispatch(getFilteredProducts(result))
        }, 600)
        setTimeout(() => { setIsLoading(false) }, 800);      
    }

    // Sort by price ascending

    const sortByPriceAsc = () => {
        setTimeout(() => { setIsLoading(true) }, 500);
        setTimeout (() => {
            const result = productsArray.sort((a, b) => {
                const priceA = a.price, priceB = b.price
                if (priceA < priceB)
                  return -1
                if (priceA > priceB)
                  return 1
                return 0
            })
            return dispatch(getFilteredProducts(result))
        }, 600)
        setTimeout(() => { setIsLoading(false) }, 800); 
    }

    // Sort by price descending

    const sortByPriceDesc = () => {
        setTimeout(() => { setIsLoading(true) }, 500);
        setTimeout (() => {
            const result = productsArray.sort((a, b) => {
                const priceA = a.price, priceB = b.price
                if (priceA > priceB)
                  return -1
                if (priceA < priceB)
                  return 1
                return 0
            })
            return dispatch(getFilteredProducts(result))
        }, 600)
        setTimeout(() => { setIsLoading(false) }, 800); 
    }

    // Sort by age ascending

    const sortByAgeAsc = () => {
        setTimeout(() => { setIsLoading(true) }, 500);
        setTimeout (() => {
            const result = productsArray.sort((a, b) => {
                const ageLimitA = a.ageLimit, ageLimitB = b.ageLimit
                if (ageLimitA < ageLimitB)
                  return -1
                if (ageLimitA > ageLimitB)
                  return 1
                return 0
            })
            return dispatch(getFilteredProducts(result))
        }, 600)
        setTimeout(() => { setIsLoading(false) }, 800); 
    }

    // Sort by age descending

    const sortByAgeDesc = () => {
        setTimeout(() => { setIsLoading(true) }, 500);
        setTimeout (() => {
            const result = productsArray.sort((a, b) => {
                const ageLimitA = a.ageLimit, ageLimitB = b.ageLimit
                if (ageLimitA > ageLimitB)
                  return -1
                if (ageLimitA < ageLimitB)
                  return 1
                return 0
            })
            return dispatch(getFilteredProducts(result))
        }, 600)
        setTimeout(() => { setIsLoading(false) }, 800); 
    }

    const listGenres = ['Shooter', 'RPG', 'Sandbox', 'Action-adventure', 'Simulator']
    const listAgeLimit = [3, 6, 12, 16, 18]

    return (
        <div className = 'products-page'>

            <div className = 'products-page__filters'>
                <p className = 'products-page__title'>{props.title}</p>
                <p className = 'products-page__title'>Sort</p>

                <div className = 'products-page__container'>
                    <p>Criteria</p>
                    <Dropdown text = 'Select'>
                        <Dropdown.Menu className = 'products-page__select'>
                            <Dropdown.Item text = 'Name' onClick = {() => type === 'ascending' ? sortByNameAsc() : sortByNameDesc()}/>
                            <Dropdown.Item text = 'Rating' onClick = {() => type === 'ascending' ? sortByRatingAsc() : sortByRatingDesc()}/>
                            <Dropdown.Item text = 'Price' onClick = {() => type === 'ascending' ? sortByPriceAsc() : sortByPriceDesc()}/>
                            <Dropdown.Item text = 'Age Limit' onClick = {() => type === 'ascending' ? sortByAgeAsc() : sortByAgeDesc()}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                
                <div className = 'products-page__container'>
                    <p>Type</p>
                    <select className = 'select' value = {type} onChange = {changeOptionType}>
                        {options.map((option) => (
                          <option className = 'select-point' key = {option.label} value = {option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className = 'products-page__selection'>
                    <p className = 'products-page__title'>Genres</p>
                    <ul className = 'products-page__selection-list'>
                        <li>
                            <input name = 'genreFilter' type = 'radio' onChange = {() => filterByGenre('All genres')}></input>
                            <span className = 'products-page__selectors'>All genres</span>
                        </li>

                        {listGenres.map((genre, index) => (
                            <li key = {index}>
                                <input name = 'genreFilter' type = 'radio' value = {genre} onChange = {(event) => filterByGenre(event.target.value)}></input>
                                <span className = 'products-page__selectors'>{genre}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className = 'products-page__selection'>
                    <p className = 'products-page__title'>Age</p>
                    <ul className = 'products-page__selection-list'>
                        <li>
                            <input name = 'ageFilter' type = 'radio' onChange = {() => filterByAge('All ages')}></input>
                            <span className = 'products-page__selectors'>All ages</span>
                        </li>

                        {listAgeLimit.map((age, index) => (
                            <li key = {index}>
                                <input name = 'ageFilter' type = 'radio' value = {age} onChange = {(event) => filterByAge(event.target.value)}></input>
                                <span className = 'products-page__selectors'>{age} +</span>
                            </li>
                        ))}
                    </ul>
                    
                </div>

            </div>

            <div className = 'products-page__search'>
                {props.searchbar}
                <p className = 'products-page__products-title'>Products</p>

                <div className = {isLoading ? 'loader' : ''}>{isLoading}</div>
                <div className = 'catalog'>
                    {props.productPlatform}
                    {props.filterByPlatform}
                </div>
            </div>
            
        </div>
    )
}

export default SearchProductsPage
