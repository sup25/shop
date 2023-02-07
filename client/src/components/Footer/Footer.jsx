import React from 'react'
import './footer.scss'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>

                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor libero justo, vel finibus justo tempor vitae.
                        Sed gravida varius gravida.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor libero justo, vel finibus justo tempor vitae.
                        Sed gravida varius gravida.

                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">SUPGG STORE</span>
                    <span className="copyright">©️ Copyright 2023. All Right Reserved </span>
                </div>

                <div className="right">
                    <img src='/img/payment.png' alt='' />
                </div>
            </div>


        </div>
    )
}

export default Footer