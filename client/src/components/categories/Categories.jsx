import React from 'react'
import { Link } from 'react-router-dom'
import './categories.scss'
const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://source.unsplash.com/MwKX92Z75wU" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://source.unsplash.com/_7LbC5J-jw4" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://source.unsplash.com/I7sZUNgc0lE" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://source.unsplash.com/4NAG83bhe6c" alt="" />
                            <button>
                                <Link className='link' to="/products/1">
                                    Sale
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://source.unsplash.com/Zhh3WM2ko3s" alt="" />
                            <button>
                                <Link className='link' to="/products/1">
                                    Sale
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://source.unsplash.com/4nulm-JUYFo" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories