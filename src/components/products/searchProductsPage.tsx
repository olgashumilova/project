import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { getProductsAPI } from '@/api/api';
import { getFilteredProducts } from '@/redux/actions/actions.ts'
import { Dropdown } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import { setTimeout } from 'core-js';

const SearchProductsPage: React.FunctionComponent<{title, filterByPlatform, searchbar, productPlatform}> = (props) => {

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

    const [products, setProducts] = useState([])
    
    const [type, setType] = useState('ascending')
    const [isLoading, setIsLoading] = useState(false)

    const productsState = useSelector(state => state.products)
    
    const listGenres = ['Shooter', 'RPG', 'Sandbox', 'Action-adventure', 'Simulator']
    const listAgeLimit = [3, 6, 12, 16, 18]

    const changeOptionType = (e): void => {
        setType(e.target.value)
    }

    async function getProducts(): Promise<void> {
        try {
            await getProductsAPI.then((response) => {
                setProducts(productsState.length !== 0 ? productsState : response.data)
            })
        } catch (error) {
            console.log(error);         
        }   
    }

    useEffect(() => {
        getProducts()
    }, [])

    // Filters____________________________________________________________________________________________

    async function filterByGenre(value): Promise<void> {
        setIsLoading(true)
        await setTimeout(() => {
            if (value === 'All genres') {
                dispatch(getFilteredProducts(products.filter((game) => game.genre)))
            } else if (value) {
                dispatch(getFilteredProducts(products.filter((game) => game.genre == value)))
            }
            setIsLoading(false)
        }, 500)
    }

    async function filterByAge(value): Promise<void> {
        setIsLoading(true)
        await setTimeout(() => {
            if (value === 'All ages') {
                dispatch(getFilteredProducts(products.filter((game) => game.ageLimit)))
            } else if (value) {
                dispatch(getFilteredProducts(products.filter((game) => (game.ageLimit >= 3 && game.ageLimit <= value))))
            }
            setIsLoading(false)
        }, 500)
    }

    // Sorting____________________________________________________________________________________________

    // Sort by name ascending

    async function sortByNameAsc(): Promise<void> {
        setIsLoading(true)
        await setTimeout(() => {
            const result = products.sort((a, b) => {
                const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                if (nameA < nameB)
                  return -1
                if (nameA > nameB)
                  return 1
                return 0
            })
            dispatch(getFilteredProducts(result))
            setIsLoading(false)
        }, 500)
    }

    // Sort by name descending

    async function sortByNameDesc(): Promise<void> {
        setIsLoading(true)
        await setTimeout(() => {
            const result = products.sort((a, b) => {
                const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                nameA > nameB ? -1 : 1
                if (nameA > nameB)
                  return -1
                if (nameA < nameB)
                  return 1
                return 0
            })
            dispatch(getFilteredProducts(result))
            setIsLoading(false)
        }, 500)
    }

    // Sort by rating ascending

    async function sortByRatingAsc(): Promise<void> {
        setIsLoading(true)
        await setTimeout(() => {
            const result = products.sort((a, b) => {
                const ratingA = a.rating, ratingB = b.rating
                if (ratingA < ratingB)
                  return -1
                if (ratingA > ratingB)
                  return 1
                return 0
            })
            dispatch(getFilteredProducts(result))
            setIsLoading(false)
        }, 500)
    }

    // Sort by rating descending

    async function sortByRatingDesc(): Promise<void> {
        setIsLoading(true)
        await setTimeout(() => {
            const result = products.sort((a, b) => {
                const ratingA = a.rating, ratingB = b.rating
                if (ratingA > ratingB)
                  return -1
                if (ratingA < ratingB)
                  return 1
                return 0
            })
            dispatch(getFilteredProducts(result))
            setIsLoading(false)
        }, 500)
    }

    // Sort by price ascending

    async function sortByPriceAsc(): Promise<void> {
        setIsLoading(true)
        await setTimeout(() => {
            const result = products.sort((a, b) => {
                const priceA = a.price, priceB = b.price
                if (priceA < priceB)
                  return -1
                if (priceA > priceB)
                  return 1
                return 0
            })
            dispatch(getFilteredProducts(result))
            setIsLoading(false)
        }, 500)
    }

    // Sort by price descending

    async function sortByPriceDesc(): Promise<void> {
        setIsLoading(true)
        await setTimeout(() => {
            const result = products.sort((a, b) => {
                const priceA = a.price, priceB = b.price
                if (priceA > priceB)
                  return -1
                if (priceA < priceB)
                  return 1
                return 0
            })
            dispatch(getFilteredProducts(result))
            setIsLoading(false)
        }, 500)
    }

    // Sort by age ascending

    async function sortByAgeAsc(): Promise<void> {
        setIsLoading(true)
        await setTimeout(() => {
            const result = products.sort((a, b) => {
                const ageLimitA = a.ageLimit, ageLimitB = b.ageLimit
                if (ageLimitA < ageLimitB)
                  return -1
                if (ageLimitA > ageLimitB)
                  return 1
                return 0
            })
            dispatch(getFilteredProducts(result))
            setIsLoading(false)
        }, 500)
    }

    // Sort by age descending

    async function sortByAgeDesc(): Promise<void> {
        setIsLoading(true)
        await setTimeout(() => {
            const result = products.sort((a, b) => {
                const ageLimitA = a.ageLimit, ageLimitB = b.ageLimit
                if (ageLimitA > ageLimitB)
                  return -1
                if (ageLimitA < ageLimitB)
                  return 1
                return 0
            })
            dispatch(getFilteredProducts(result))
            setIsLoading(false)
        }, 500)
    }

    return (
        <div className = 'products-page'>

            <div className = 'products-page__filters'>
                <p className = 'products-page__title'>{props.title}</p>
                <p className = 'products-page__title'>Sort</p>

                <div className = 'products-page__container'>
                    <p>Criteria</p>
                    <Dropdown text = 'Select'>
                        <Dropdown.Menu className = 'products-page__select'>
                            <Dropdown.Item text = 'Name' onClick = {(): Promise<void> => type === 'ascending' ? sortByNameAsc() : sortByNameDesc()}/>
                            <Dropdown.Item text = 'Rating' onClick = {(): Promise<void> => type === 'ascending' ? sortByRatingAsc() : sortByRatingDesc()}/>
                            <Dropdown.Item text = 'Price' onClick = {(): Promise<void> => type === 'ascending' ? sortByPriceAsc() : sortByPriceDesc()}/>
                            <Dropdown.Item text = 'Age Limit' onClick = {(): Promise<void> => type === 'ascending' ? sortByAgeAsc() : sortByAgeDesc()}/>
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
                            <input name = 'genreFilter' type = 'radio' onChange = {(): void => filterByGenre('All genres')}></input>
                            <span className = 'products-page__selectors'>All genres</span>
                        </li>

                        {listGenres.map((genre, index) => (
                            <li key = {index}>
                                <input name = 'genreFilter' type = 'radio' value = {genre} onChange = {(event): void => filterByGenre(event.target.value)}></input>
                                <span className = 'products-page__selectors'>{genre}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className = 'products-page__selection'>
                    <p className = 'products-page__title'>Age</p>
                    <ul className = 'products-page__selection-list'>
                        <li>
                            <input name = 'ageFilter' type = 'radio' onChange = {(): void => filterByAge('All ages')}></input>
                            <span className = 'products-page__selectors'>All ages</span>
                        </li>

                        {listAgeLimit.map((age, index) => (
                            <li key = {index}>
                                <input name = 'ageFilter' type = 'radio' value = {age} onChange = {(event): void => filterByAge(event.target.value)}></input>
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

export default React.memo(SearchProductsPage)