import React from 'react'
import './Plans.css'
import {plansData} from  '../../Data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-contaner'>
      <div className='plans-header' style={{gap: '2rem'}}>
        <span className='strock-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='strock-text'>NOW WITHUS</span>
      </div>
      {/*plans  box*/}

      <div className='plans'>
        {plansData.map((plan, i)=> (
          <div className='plan' key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> $ {plan.price}</span>

            <div className='features'>
              {plan.features.map((feature, i)=>(
                <div className='feature'>
                  <img src={whiteTick} alt=''/>
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>
                See More Benefits -

            </span>
            </div>
            <button className='btn'>Join now</button>
            
          </div>

        ))}

      </div>

    </div>
  )
}

export default Plans