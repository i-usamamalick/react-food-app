import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const PreviousSearches = () => {
    const searches = [
        'pizza', 'burger', 'shawarma', 'cookies', 'juice', 'pasta', 'mecroni', 'fries'
    ]
  return (
    <div className='previous-searches section'>
      <h2>Previous Searches</h2>
      <div className='previous-searches-container'>
        {
          searches.map((search, index)=>{
            return <div key={index} className='search-item' style={{animationDelay:index*.1+"s"}}>{search}</div>
          })
        }
      </div>
      <div className='search-box'>
        <input type='text' placeholder='Search...'/>
        <button className='btn'>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
    </div>
  )
}
