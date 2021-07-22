import React from 'react'

import { useState, useEffect } from 'react';

const SearchBar: React.FunctionComponent = () => {

    const [searchedText, setSearchedText] = useState('')

    // useEffect(() => {
    //     const getText = () => {

    //     }
    // }, [])

    return (
      <div className = 'searchbar'>
          <input 
              className = 'searchbar__input'
              
              type = "text"
              value = {searchedText}
              placeholder = 'Search'
          />
          <p className = 'searchbar__result'>{searchedText}</p>
        {/* {filteredNames.map(name => <div key={name}>{name}</div>)} */}
      </div>
    );
}

export default SearchBar
