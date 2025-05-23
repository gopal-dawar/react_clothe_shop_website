import React from 'react';
import './Offers.css';

import img1 from '/public/image/product-img/aboutimg (1).avif';
import img2 from '/public/image/product-img/aboutimg (2).avif';
import img3 from '/public/image/product-img/aboutimg (3).avif';
import img4 from '/public/image/product-img/aboutimg (4).avif';
import img5 from '/public/image/product-img/aboutimg (5).avif';
import Home from '../Hero/Hero';
import About from '../About/About';
import Contact from '../Contact/Contact'

const offers = [
  { title: "Hot Deal 1", discount: "30% Off", img: img4 },
  { title: "Limited Time!", discount: "40% Off", img: img2 },
  { title: "Exclusive Offer", discount: "25% Off", img: img3 },
  { title: "Best ", discount: "50% Off", img: img5 },
  { title: "Best Seller", discount: "50% Off", img: img1 },
];

const Offers = () => {
  return (
    <div className='offers-page'>
      <div className="offers" id='offers'>
        <div className="container">
          <div className="heading">
            <h2> Special Offers</h2>
            <p className="subheading">🔥 Grab your deals before they're gone!</p>
          </div>

          {offers.map((offer, index) => (
            <div
              className={`row ${index % 2 === 0 ? 'normal' : 'reverse'}`}
              key={index}
            >
              <div className="imgs">
                <img src={offer.img} alt={offer.title} />
              </div>
              <div className="text">
                <h3>{offer.title}</h3>
                <p className="discount">{offer.discount}</p>
                <p className="description">
                  Don't miss this amazing deal. Perfect picks at discounted prices. <br /> Limited time only!
                </p>
                <button className="shop-btn">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Offers;
