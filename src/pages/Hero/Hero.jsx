import React, { useState, useEffect } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './Hero.css';

const Hero = () => {
    const slideData = [
        {
            image: "./public/image/banner (3).jpg",
            heading: "Summer Collection",
            description: "Explore our exclusive summer wear at discounted prices. Stay cool and stylish!",
            buttonText: "Shop Now",
        },
        {
            image: "./public/image/banner (1).jpg",
            heading: "Winter Sale",
            description: "Get cozy with our latest winter collection. Flat 50% off on jackets and hoodies!",
            buttonText: "Explore",
        },
        {
            image: "./public/image/banner (2).jpg",
            heading: "New Arrivals",
            description: "Be the first to grab our fresh arrivals for all seasons. Limited stock available!",
            buttonText: "View Now",
        },
    ];


    const [currentSlide, setCurrentSlide] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const goToPrev = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? slideData.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setCurrentSlide((prev) =>
            prev === slideData.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="hero">
            <ul>
                <li><SlEnergy className='energy' />Free shipping on all US orders or orders above <FaRupeeSign />200</li>
                <li><SlEnergy className='energy' />Free shipping on all US orders or orders above <FaRupeeSign />200</li>
                <li><SlEnergy className='energy' />Free shipping on all US orders or orders above <FaRupeeSign />200</li>
                <li><SlEnergy className='energy' />Free shipping on all US orders or orders above <FaRupeeSign />200</li>
                <li><SlEnergy className='energy' />Free shipping on all US orders or orders above <FaRupeeSign />200</li>
            </ul>
            <div className="sliders">

                <IoIosArrowBack className="arrow left" onClick={goToPrev} />


                <div className="slider">

                    {slideData.map((slide, index) => (
                        <div
                            className={`slide ${index === currentSlide ? "active" : ""}`}
                            key={index}
                            style={{ display: index === currentSlide ? "flex" : "none" }}
                        >
                            <div className="imgs">
                                <img
                                    src={slide.image}
                                    alt={slide.heading}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "0% 8%" }}
                                />
                            </div>
                            <div className="info">
                                <h1>{slide.heading}</h1>
                                <div className="des">{slide.description}</div>

                                <button className='btn'>{slide.buttonText}</button>

                            </div>
                        </div>
                    ))}
                </div>

                <IoIosArrowForward className="arrow right" onClick={goToNext} />
            </div>
            <ul>
                <li className='brands'><img className='brandsimg' src="./public/image/brands (1).png" alt="Summer Collection Banner" /></li>
                <li className='brands'><img className='brandsimg' src="./public/image/brands (2).png" alt="Summer Collection Banner" /></li>
                <li className='brands'><img className='brandsimg' src="./public/image/brands (1).webp" alt="Summer Collection Banner" /></li>
                <li className='brands'><img className='brandsimg' src="./public/image/brands (2).webp" alt="Summer Collection Banner" /></li>
                <li className='brands'><img className='brandsimg' src="./public/image/brands (3).webp" alt="Summer Collection Banner" /></li>
                <li className='brands'><img className='brandsimg' src="./public/image/brands (1).png" alt="Summer Collection Banner" /></li>
                <li className='brands'><img className='brandsimg' src="./public/image/brands (2).png" alt="Summer Collection Banner" /></li>
                <li className='brands'><img className='brandsimg' src="./public/image/brands (1).webp" alt="Summer Collection Banner" /></li>
                <li className='brands'><img className='brandsimg' src="./public/image/brands (2).webp" alt="Summer Collection Banner" /></li>
                <li className='brands'><img className='brandsimg' src="./public/image/brands (3).webp" alt="Summer Collection Banner" /></li>
            </ul>
        </div>
    );
};

export default Hero;
