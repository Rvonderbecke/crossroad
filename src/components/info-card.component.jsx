import React from 'react'

const InfoCard = ({ item }) => {
    const { imageURL, title, description,color } = item;
  return (
      <div className="cardBody" style={{backgroundColor: `${color}`}}>
        <img src={`${imageURL}`} alt=''/>
          <h3>{title}</h3>
          <p>{description}</p>
    </div>
  )
}

export default InfoCard;