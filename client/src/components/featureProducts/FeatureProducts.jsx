import React from 'react'
import './FeatureProduct.scss'
import Card from "../card/Card";
const FeatureProducts = ({ type }) => {
    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec auctor libero justo, vel finibus justo tempor vitae.
                    Sed gravida varius gravida.</p>
            </div>
            <div className="bottom">
                <Card item="item" />
            </div>
        </div>
    )
}

export default FeatureProducts