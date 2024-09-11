import React from 'react'
import { ChefsCard } from './ChefsCard'

export const TopChefs = () => {
    const chefs=[
        {
            name:"John Doe",
            image:"../img/top-chefs/img_1.jpg",
            recipes_count:10,
            cuisine:"Mexican"
        },
        {
            name:"Mathew Chris",
            image:"../img/top-chefs/img_2.jpg",
            recipes_count:8,
            cuisine:"Italian"
        },
        {
            name:"Jack Sparrow",
            image:"../img/top-chefs/img_3.jpg",
            recipes_count:16,
            cuisine:"Continental"
        },
        {
            name:"Tom Cruise",
            image:"../img/top-chefs/img_4.jpg",
            recipes_count:26,
            cuisine:"Chineese"
        },
        {
            name:"Dominic Toretto",
            image:"../img/top-chefs/img_5.jpg",
            recipes_count:26,
            cuisine:"Asian"
        },
        {
            name:"George Bernard Shaw",
            image:"../img/top-chefs/img_6.jpg",
            recipes_count:12,
            cuisine:"German"
        }
    ]
  return (
    <div className='section chefs'>
        <h1 className='title'>Our Top Chefs</h1>
        <div className='top-chefs-container'>
            {
                chefs.map((chef, index) => {
                    return <ChefsCard key={index} name={chef.name} image={chef.image} recipes_count={chef.recipes_count} cuisine={chef.cuisine} />
                })
            }
        </div>
    </div>
  )
}
