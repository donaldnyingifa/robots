import React from 'react'
import './card.css'

const Card = ({name,email,id}) => {
  return (
    <div className='card-container'>
      <img alt='robots' src={`https://robohash.org/${id}?set=set3&size=180x180`} />
      <h1> {name} </h1>
      <p> {email} </p>
    </div>
  )
}

export default Card;
