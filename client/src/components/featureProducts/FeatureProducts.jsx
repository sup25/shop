import React from 'react'
import './FeatureProduct.scss'
import Card from "../card/Card";
const FeatureProducts = ({ type }) => {
    const data = [
        {
            id: 0,
            img: "https://source.unsplash.com/xw5cQNbky5A",
            img2: 'https://source.unsplash.com/YsiSAp3ccvk',
            title: "title",
            isNew: true,
            oldPrice: 19,
            price: 12,


        },
        {
            id: 1,
            img: "https://source.unsplash.com/2UTk-Nip5aM",
            title: "title",
            isNew: true,
            oldPrice: 19,
            price: 12,


        },
        {
            id: 2,
            img: "https://source.unsplash.com/3MvlGhagq4E",
            title: "title",
            isNew: true,
            oldPrice: 19,
            price: 12,


        },
        {
            id: 3,
            img: "https://source.unsplash.com/yQTCPf-AnUY",
            title: "title",
            isNew: true,
            oldPrice: 19,
            price: 12,


        }



    ];

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec auctor libero justo, vel finibus justo tempor vitae.
                    Sed gravida varius gravida.</p>
            </div>
            <div className="bottom">
                {data?.map(item => (
                    <Card item={item} key={item.id} />
                ))}

            </div>
        </div>
    )
}

export default FeatureProducts