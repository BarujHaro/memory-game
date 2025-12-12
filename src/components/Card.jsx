import React from 'react'

const Card = ({imgP, nameP, onClick}) => {
    return (
    <div className="card-container" onClick={onClick}>
        <img className="card-image" src={imgP} alt={nameP} />
        <p>{nameP}</p>
    </div>
    )
}

export default Card
