import React from "react";
import { FaRegStar } from "react-icons/fa";
import Data from "../Datas/Data";
import "./Trending.css";

const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <FaRegStar
                key={i}
                className={i < rating ? "star-filled" : "star-empty"}
            />
        );
    }
    return stars;
};

const TrendingClothes = () => {

    const product = Data.slice(0, 8);
    return (
        <section className="trending" id="trending">
            <h2 className="heading"> Trending Clothes</h2>
            <div className="box">
                {product.map((product) => (
                    <div className="card" key={product.id}>
                        <div className="imgs">
                            <img
                                src={product.image}
                                alt={product.alt}
                            />
                        </div>
                        <div className="info">
                            <p className="category">{product.category}</p>
                            <h3 className="name">{product.title}</h3>
                            <div className="rating">{renderStars(product.rating)}</div>
                            <p className="price">₹{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrendingClothes;
