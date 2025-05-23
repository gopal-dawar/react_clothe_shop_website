import React from 'react';
import './Arrival.css';
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineLayers, MdCompareArrows, MdArrowOutward } from 'react-icons/md';

const products = [
    {
        id: 1,
        image: '/image/product-img/men (1).jpg',
        alt: 'Product 1',
        category: 'Shirts',
        title: 'Cotton Casual Shirt',
        rating: 4,
        price: 799
    },
    {
        id: 2,
        image: '/image/product-img/men (2).jpg',
        alt: 'Product 2',
        category: 'Jeans',
        title: 'Slim Fit Blue Jeans',
        rating: 5,
        price: 1199
    },
    {
        id: 3,
        image: '/image/product-img/men (3).jpg',
        alt: 'Product 3',
        category: 'T-Shirts',
        title: 'Printed T-Shirt',
        rating: 3,
        price: 499
    },
    {
        id: 4,
        image: '/image/product-img/men (4).jpg',
        alt: 'Product 3',
        category: 'T-Shirts',
        title: 'Printed T-Shirt',
        rating: 3,
        price: 499
    },
    {
        id: 5,
        image: '/image/product-img/girl (1).jpg',
        alt: 'Product 3',
        category: 'T-Shirts',
        title: 'Printed T-Shirt',
        rating: 3,
        price: 499
    },
    {
        id: 6,
        image: '/image/product-img/girl (2).jpg',
        alt: 'Product 3',
        category: 'T-Shirts',
        title: 'Printed T-Shirt',
        rating: 3,
        price: 499
    },
    {
        id: 7,
        image: '/image/product-img/girl (3).jpg',
        alt: 'Product 3',
        category: 'T-Shirts',
        title: 'Printed T-Shirt',
        rating: 3,
        price: 499
    },
    {
        id: 8,
        image: '/image/product-img/girl (4).jpg',
        alt: 'Product 3',
        category: 'T-Shirts',
        title: 'Printed T-Shirt',
        rating: 3,
        price: 499
    },
];

const renderStars = (rating) => {
    const totalStars = 5;
    return (
        <div className="stars">
            {[...Array(totalStars)].map((_, index) => (
                <FaRegStar key={index} className={index < rating ? 'filled-star' : 'empty-star'} />
            ))}
        </div>
    );
};

const Arrival = () => {
    return (
        <div className="arrival" id='arrival'>
            <div className="container">
                <div className="heading">New Arrivals</div>
                <ul className="product-list">
                    {products.map((product) => (
                        <li key={product.id}>
                            <div className="card">
                                <div className="imgs">
                                    <div className="icons">
                                        <FaRegStar className='icon' /><br />
                                        <MdOutlineLayers className='icon' /><br />
                                        <MdCompareArrows className='icon' /><br />
                                    </div>
                                    <img src={product.image} alt={product.alt} className="card-img" />
                                    <button className="buy-btn">
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Arrival;
