import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
export const ChefsCard = (chef) => {
  return (
    <div className='chef-card'>
        <div className='chef-card-image'>
            <img src={chef.image} alt={chef.name} />
        </div>
        <div className='chef-card-info'>
            <h3 className='chef-name'>{chef.name}</h3>
            <p className='chef-recipes-count'>Recipes: <b>{chef.recipes_count}</b></p>
            <p className='chef-cuisine'>Cuisine: <b>{chef.cuisine}</b></p>
            <p className='chef-icons'>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faInstagram}/>
            </p>
        </div>
    </div>
  )
}
