import React from "react";
import "./About.css";

const About = () => {
  const cards = [
    {
      id: 1,
      title: "Our Vision",
      text: "At StyleNest, we aim to make fashion accessible to everyone. Our designs are inspired by everyday elegance and modern comfort.",
      image: "/public/image/product-img/about (1).jpg",
    },
    {
      id: 2,
      title: "Trendy Collections",
      text: "From casual outfits to party wear, we offer collections that reflect the latest trends and timeless classics.",
      image: "/public/image/product-img/about (2).jpg",
    },
    {
      id: 3,
      title: "Sustainable Fashion",
      text: "We care about the planet. Our eco-friendly materials and ethical practices support sustainable fashion choices.",
      image: "/public/image/product-img/about (4).jpg",
      
    },
    {
      id: 4,
      title: "Customer Satisfaction",
      text: "Your happiness is our priority. We offer hassle-free returns, fast delivery, and 24/7 support to keep you smiling.",
      image: "/public/image/product-img/about (3).jpg",
    },
  ];

  return ( 
    <section className="about" id="about">
      <h2 className="title">About Us</h2>
      <div className="box">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <div className="image">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
