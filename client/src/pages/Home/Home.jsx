import React from 'react'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'
import FeatureProducts from '../../components/featureProducts/FeatureProducts'
import Slider from '../../components/slider/Slider'
import './home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <FeatureProducts type="Featured" />
            <Categories />
            <FeatureProducts type="Trending" />
            <Contact />
        </div>
    )
}

export default Home