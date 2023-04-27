import React from 'react'
import './Features.css'
import { HiDesktopComputer } from 'react-icons/hi'
import { FaUserAlt } from 'react-icons/fa'
import { RiRecycleFill } from 'react-icons/ri'
const Features = () => {
  return (
    <div className='Features'>
      <div className="top">
        <h1>Our Features</h1>
      </div>
      <div className="bottom">
        <div className="one">
          <div className="round">{<HiDesktopComputer/>}</div>
          <h3>Fully Responsive</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi alias optio sit aperiam incidunt laudantium? Id quidem quis hic amet.</p>
          <span>Read More</span>
        </div>
        <div className="one">
          <div className="round"><FaUserAlt/></div>
          <h3>Trusted Auther</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi alias optio sit aperiam incidunt laudantium? Id quidem quis hic amet.</p>
          <span>Read More</span>
        </div>
        <div className="one">
          <div className="round">{<RiRecycleFill/>}</div>
          <h3>Reusable Elements</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi alias optio sit aperiam incidunt laudantium? Id quidem quis hic amet.</p>
          <span>Read More</span>
        </div>
      </div>
    </div>
  )
}

export default Features