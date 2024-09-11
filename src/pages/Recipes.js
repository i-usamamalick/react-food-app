
import React from 'react'
import { PreviousSearches } from '../components/PreviousSearches'
import { RecipesCard } from '../components/RecipesCard'

const Recipes = () => {
  const recipes = [
    {
      title:"Chicken Pan Pizza",
      image:"/img/gallery/img_1.jpg",
      authorImg:"/img/top-chefs/img_1.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    },
    {
      title:"Mint Margarita",
      image:"/img/gallery/img_2.jpg",
      authorImg:"/img/top-chefs/img_2.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    },
    {
      title:"White Sauce Pasta",
      image:"/img/gallery/img_3.jpg",
      authorImg:"/img/top-chefs/img_3.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    },
    {
      title:"Loaded Fries",
      image:"/img/gallery/img_4.jpg",
      authorImg:"/img/top-chefs/img_4.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    },
    {
      title:"Chicken Biryani",
      image:"/img/gallery/img_5.jpg",
      authorImg:"/img/top-chefs/img_5.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    },
    {
      title:"Mc Chicken Burger",
      image:"/img/gallery/img_6.jpg",
      authorImg:"/img/top-chefs/img_6.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    }
  ].sort(()=> Math.random() - 0.5)
  return (
    <div>
      <PreviousSearches/>
      <div className='recipes-container'>
        {
          recipes.map((recipe,index)=>{
            return <RecipesCard key={index} title={recipe.title} image={recipe.image} authorImg={recipe.authorImg} desc={recipe.desc} />
          })
        }
      </div>
    </div>
  )
}

export default Recipes