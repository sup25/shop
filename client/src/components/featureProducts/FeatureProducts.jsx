import React, { useEffect, useState } from 'react'
import './FeatureProduct.scss'
import Card from "../card/Card";
import axios from 'axios';
const FeatureProducts = ({ type }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*",
                    {
                        headers: { Authorization: "bearer " + process.env.REACT_APP_API_TOKEN, }
                    })
                setData(res.data.data)

            } catch (err) {
                console.log(err)

            }
        }
        fetchData();
    }, [])
    console.log(data)

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