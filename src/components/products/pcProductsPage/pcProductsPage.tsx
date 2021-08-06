import React from 'react'

// Search Bar Component
import SearchBar from '@Components/searchBar/searchBar.tsx'
import '@Components/searchBar/searchBar.scss'

const PcProductsPage: React.FunctionComponent = () => {
    return (
        <div className = 'products-page'>

            <div className = 'products-page__filters'>
                <p className = 'products-page__title'>PC</p>
                <p className = 'products-page__title'>Sort</p>

                <div className = 'products-page__container'>
                    <p>Criteria</p>
                    <select>
                        <option>Name</option>
                        <option>Rating</option>
                        <option>Price</option>
                        <option>Age Limit</option>
                    </select>
                </div>
                
                <div className = 'products-page__container'>
                    <p>Type</p>
                    <select>
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </div>

                <div className = 'products-page__selection'>
                    <p className = 'products-page__title'>Genres</p>
                    <ul className = 'products-page__selection-list'>
                        <li>
                            <input type = 'radio'></input>
                            <span>All genres</span>
                        </li>

                        <li>
                            <input type = 'radio'></input>
                            <span>Shooter</span> 
                        </li>

                        <li>
                            <input type = 'radio'></input>
                            <span>Arcade</span>
                        </li>

                        <li>
                            <input type = 'radio'></input>
                            <span>Survive </span>                      
                        </li>
                    </ul>
                </div>

                <div className = 'products-page__selection'>
                    <p className = 'products-page__title'>Age</p>
                    <ul className = 'products-page__selection-list'>
                        <li>
                            <input type = 'radio'></input>
                            <span>All ages</span>
                        </li>

                        <li>
                            <input type = 'radio'></input>
                            <span>3+</span> 
                        </li>

                        <li>
                            <input type = 'radio'></input>
                            <span>6+</span>
                        </li>

                        <li>
                            <input type = 'radio'></input>
                            <span>12+ </span>                      
                        </li>

                        <li>
                            <input type = 'radio'></input>
                            <span>18+</span>                      
                        </li>

                    </ul>
                    
                </div>

            </div>

            <div className = 'products-page__search'>
                <SearchBar />
                <div className = 'catalog'>

                </div>
            </div>
            
        </div>
    )
}

export default PcProductsPage
