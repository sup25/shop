import React from 'react'
import FeatureProducts from '../../components/featureProducts/FeatureProducts'
import Slider from '../../components/slider/Slider'
import './home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <FeatureProducts type="Featured" />
            <FeatureProducts type="Trending" />
        </div>
    )
}

export default Home