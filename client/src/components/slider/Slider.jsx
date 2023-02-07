import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import './slider.scss'
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://source.unsplash.com/ssnCzNayHC4",
        "https://source.unsplash.com/wSct4rrBPWc",
        "https://source.unsplash.com/paoUHg6k4Kg"


    ];
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
    }

    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />

            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <KeyboardArrowLeftIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <KeyboardArrowRightIcon />
                </div>
            </div>
        </div>
    )
}
export default Slider
