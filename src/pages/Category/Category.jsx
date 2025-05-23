import React, { useState } from 'react';
import { MdCompareArrows, MdOutlineLayers, MdArrowOutward } from "react-icons/md";
import { FaRegStar, FaStar, FaLongArrowAltRight } from "react-icons/fa";
import './Category.css';
import Products from '../Datas/Data'; // Replace with your correct import path

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = fullStars + (halfStar ? 1 : 0);
    return (
        <>
            {[...Array(fullStars)].map((_, i) => <FaStar key={i} color="gold" />)}
            {halfStar && <FaRegStar key="half" color="gold" />}
            {[...Array(5 - totalStars)].map((_, i) => <FaRegStar key={`empty-${i}`} color="gray" />)}
        </>
    );
};

const Product = ({ cartItems, setCartItems }) => {
    const [activeTab, setActiveTab] = useState("Men");
    const [fade, setFade] = useState(false);
    const [visibleCount, setVisibleCount] = useState(3);

    const handleTabClick = (tab) => {
        setFade(true);
        setTimeout(() => {
            setActiveTab(tab);
            setFade(false);
            setVisibleCount(3);
        }, 300);
    };

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const filteredProducts = Products.filter(product => product.category === activeTab);

    return (
        <div className='category-page'>
            <div className="product" id='category'>
                <div className="nav">
                    <div className="container">
                        <ul className="tabs">
                            {["Men", "Women", "Kids", "Fashion"].map(tab => (
                                <li key={tab}>
                                    <button
                                        className={activeTab === tab ? 'active' : ''}
                                        onClick={() => handleTabClick(tab)}
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className={`container ${fade ? "fade-out" : "fade-in"}`}>
                        {filteredProducts.slice(0, visibleCount).map(product => (
                            <div className="card" key={product.id}>
                                <div className="imgs">
                                    <div className="icons">
                                        <FaRegStar className='icon' /><br />
                                        <MdOutlineLayers className='icon' /><br />
                                        <MdCompareArrows className='icon' /><br />
                                    </div>
                                    <img src={product.image} alt={product.title} className="card-img" />
                                    <button className="buy-btn" onClick={() => addToCart(product)}>
                                        Add To Cart <MdArrowOutward className='icon' />
                                    </button>
                                </div>
                                <div className="info">
                                    <div className="cate">{product.category}</div>
                                    <div className="heading">{product.title}</div>
                                    <div className="rating">{renderStars(product.rating)}</div>
                                    <div className="price">₹{product.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {visibleCount < filteredProducts.length && (
                    <div className="showmorebtn">
                        <button className='btn' onClick={() => setVisibleCount(prev => prev + 3)}>
                            Show More <FaLongArrowAltRight className='icon' />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Product;
