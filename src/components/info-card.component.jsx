import React from 'react'

const InfoCard = ({ item }) => {
    const { imageURL, title, description, } = item;
  return (
      <div className="cardBody">
        <img src={`${imageURL}`} alt=''/>
          <h3>{title}</h3>
          <p>{description}</p>
    </div>
  )
}

export default InfoCard;