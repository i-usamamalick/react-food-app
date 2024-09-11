import React from 'react'
import { CustomImage } from './CustomImage'

export const RecipesCard = (props) => {
  return (
    <div className='recipe-card'>
        <CustomImage imgSrc={props.image} pt={"65%"}/>
        <div className='recipe-card-info'>
            <img src={props.authorImg} alt='' className='author-img' />
            <p className='recipe-title'>{props.title}</p>
            <p className='recipe-desc'>{props.desc}</p>
            <a className='view-recipe' href='#!'>VIEW RECIPE</a>
        </div>
    </div>
  )
}
