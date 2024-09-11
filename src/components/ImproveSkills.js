import React from 'react'

const ImproveSkills = () => {
    const list = [
        "Learn new recipes",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips",
        "Get started"
    ] 
  return (
    <div className='section improve-skills'>
        <div className='col img'>
            <img src='../img/gallery/img_10.jpg' alt=''></img>
        </div>
        <div className='col typography'>
            <h1 className='title'>Improve Your Culinary Skills</h1>
            {
                list.map((item,index)=>{
                    return <p className='skill-item' key={index}>{item}</p>
                })
            }
            <button className='btn'>Signup</button>
        </div>   
    </div>
  )
}

export default ImproveSkills