import React from 'react'

export const CustomImage = ({imgSrc, pt}) => {
  return (
    <div className='custom-image' style={{paddingTop:pt, backgroundImage: `url(${imgSrc})`, backgroundRepeat:'round'}}></div>
  )
}
