import React from 'react'
 import './Program.css'
 import {programsData} from  '../../Data/programData'
 import rightArrow from '../../assets/rightArrow.png'


const Program = () => {
  return (
    <div className='programs' id='programs'>
        {/*headre */}
        <div className='program-header'>
            <span className='strock-text'>explore our</span>
            <span>programs</span>
            <span className='strock-text'>to shape you</span>
        </div>

        <div className='program-categories'>
            {programsData.map((program)=>(
                <div className='category'>
                    {program.image}


                    <span>{ program.heading }</span><span>{ program.details }</span>
                    <div className='join-now'><span>Join Now</span><img src={rightArrow} /></div>
                </div>

            ))}

        </div>
       
    </div>
  )
}

export default Program