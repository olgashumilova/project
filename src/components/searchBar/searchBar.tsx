import React, { useState, useEffect } from 'react';
import axios from 'axios'

// Game Card
import GameCard from '@Components/gameCard/gameCard.tsx'
import '@Components/gameCard/gameCard.scss'

const SearchBar: React.FunctionComponent = () => {

  interface IGamesArrray {
    id: number,
    name: string,
    ageLimit: string,
    rating: number,
    image: string,
    description: string,
  }

  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [arrOfMatches, setArrOfMatches] = useState([])

  useEffect(() => {
   
    fetchData();

  }, [text])

  async function fetchData() {
    await axios.get(`http://localhost:3001/search/${result}`).then((response) => {
      if (text.length != 0) {
        console.log(text);
        setArrOfMatches(response.data)
      } else if (text.length === 0) {
        setArrOfMatches([])
      }         
    }).catch ((error) => {
        console.log(error);
    })
  }

  setTimeout(() => {
    if (text.length != 0) {
      setResult(text)
    } else if (text.length === 0) {
      setResult('')
      setText('')
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
          onChange = {(event) => {
            setText(event.target.value)
            }
          }
          type = 'text'  
          placeholder = 'Search'
      />

      <div className = {isLoading ? 'loader' : ''}>{isLoading}</div>

      <div className = 'game-cards'>

        {arrOfMatches.map((item: IGamesArrray) => {         
            return (
              <div key = {item.name}>
                  <GameCard
                      backgroundImage = {item.image}
                      description = {item.description}
                      ageLimit = {item.ageLimit}
                  />
              </div>
            )
          })}
      </div>

    </div>
  );
}

export default SearchBar
