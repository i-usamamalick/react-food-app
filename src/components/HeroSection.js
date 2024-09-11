import React from 'react'
import { CustomImage } from './CustomImage'
const images = [
    "../img/gallery/img_1.jpg",
    "../img/gallery/img_2.jpg",
    "../img/gallery/img_3.jpg",
    "../img/gallery/img_4.jpg",
    "../img/gallery/img_5.jpg",
    "../img/gallery/img_6.jpg",
    "../img/gallery/img_7.jpg",
    "../img/gallery/img_8.jpg",
    "../img/gallery/img_9.jpg"
]
export const HeroSection = () => {
    
  return (
    <div className='section hero'>
        <div className='col typography'>
            <h1 className='title'>What Are We About</h1>
            <p className='info'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</p>
            <button className='btn'>explore now</button>
        </div>
        <div className='col gallery'>
            {
                images.map((src, index) => {
                    return <CustomImage imgSrc={src} key={index} pt={"90%"} />
                })
            }
        </div>
    </div>
  )
}
