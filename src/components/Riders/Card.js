import React from 'react'

const Card = ({img, txt}) => {
  return (
    <div className='card'>
      <div className="img_div">
        <img src={img} alt="" />
      </div>
      <p className="txt">{txt}
      </p>
    </div>
  )
}

export default Card