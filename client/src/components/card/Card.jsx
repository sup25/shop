import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className='card'>
                <div className="image">
                    {item.isNew && <span> New Season</span>}
                    <img src={item} alt="img" className="mainImg" />
                    <img src={item} alt="img" className="secondImg" />
                </div>
                <h2>{item}</h2>
                <div className='prices'>
                    <h3>${item.old}</h3>
                    <h3>${item.price}</h3>
                </div>

            </div>
        </Link>

    )
}

export default Card