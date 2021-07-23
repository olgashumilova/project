import React, { useState, useEffect } from 'react';
import axios from 'axios'

const SearchBar: React.FunctionComponent = () => {

    const [text, setText] = useState('');
    const [result, setResult] = useState('');

    const [isLoading, setIsLoading] = useState(false)  

    
      setTimeout(() => {
        if (text.length !== 0) {
          setResult(text)
        } else if (text.length === 0) {
          setResult('')
        }
      }, 300)

      setTimeout(() => {
        if (result !== text) {
          setIsLoading(true)
        } else if (result === text) {
          setIsLoading(false)
        }
      }, 300)
      
    return (

      <div className = 'searchbar'>
        
        <input 
            className = 'searchbar__input'
            onChange = {(e) => { setText(e.target.value) }}
            type = 'text'  
            placeholder = 'Search'
        />

        <div className = {isLoading ? 'loader' : ''}>{isLoading}</div>
      </div>
    );
}

export default SearchBar
