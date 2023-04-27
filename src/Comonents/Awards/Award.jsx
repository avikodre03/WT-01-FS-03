import React from 'react'
import './Award.css'
import { BsFillTrophyFill } from 'react-icons/bs'
import { FaToolbox } from 'react-icons/fa'
import { MdDirectionsCar } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
const Award = () => {
  return (
    <div className='Award'>
      <div className="AwardDiv">
        <BsFillTrophyFill/>
        <p>22</p>
        <span>Awards Winning</span>
      </div>
      <div className="AwardDiv">
        <FaToolbox/>
        <p>145</p>
        <span>Finnished Projects</span>
      </div>
      <div className="AwardDiv">
      <MdDirectionsCar/>
        <p>349</p>
        <span>Products Sold</span>
      </div>
      <div className="AwardDiv">
      <AiOutlineTwitter/>
        <p>2456</p>
        <span>Twitter Fans</span>
      </div>
    </div>
  )
}

export default Award