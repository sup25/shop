
import './FeatureProduct.scss'
import Card from "../card/Card";

import useFetch from '../../hooks/useFetch';
const FeatureProducts = ({ type }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)



    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec auctor libero justo, vel finibus justo tempor vitae.
                    Sed gravida varius gravida.</p>
            </div>
            <div className="bottom">
                {error ? "something went wrong!" : (loading ? "loading" : data?.map((item) =>
                    <Card item={item} key={item.id} />
                ))}

            </div>
        </div>
    )
}

export default FeatureProducts