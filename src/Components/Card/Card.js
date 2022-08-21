import React from 'react'

const Card = ({emoji, heading, detail}) => {
  return (
    <div className='card'>
        <img src={emoji} alt=''/>
        <span>{heading}</span>
        <span>{detail}</span>
    </div>
  )
}

export default Card