import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
export const Qoute = () => {
  return (
    <div className='section qoute'>
        <p className='qoute-text'> <FontAwesomeIcon icon={faQuoteLeft}/> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec</p>
        <p className='qoute-author'>Usama Bin Saeed</p>
    </div>
  )
}
