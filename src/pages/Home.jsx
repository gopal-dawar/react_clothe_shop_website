import React, { useState } from 'react';
import Hero from './Hero/Hero';
import Product from './Category/Category';
import Contact from './Contact/Contact';
import Trending from './Trending/Trending';
import Shop from './Shop/Shop';
import Offers from './Offers/Offers';
import Arrivals from './Arrival/Arrival';
import About from './About/About'
const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <div className='homepage'>
            <div id="home"><Hero /></div>
            <div id="shop"> <Shop /> </div>
            <div id="product"> <Product /></div>
            <div id="offers"> <Offers /> </div>
            <div id="arrivals"> <Arrivals /> </div>
            <div id="trending"><Trending /></div>
            <div id="about"> <About /> </div>
            <div id="contact"> <Contact /> </div>

        </div>
    )
}

export default Home
