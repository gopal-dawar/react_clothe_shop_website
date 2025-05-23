import React, { useState } from 'react';
import './Cart.css';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const Cart = ({ cartItems = [], setCartItems }) => {
    if (!Array.isArray(cartItems)) return null;

    const [cartVisible, setCartVisible] = useState(true);

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    const handleIncreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    const handleDecreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    const cartClose = () => {
        setCartVisible(false);
    };

    return (
        <div className='cart' style={{
            paddingTop: '80px',
            display: cartVisible ? 'block' : 'none',
        }}>
            <div className="container">
                <div className="cart-header">
                    <h1>Cart Items</h1>
                    <button className="close-btn" onClick={cartClose}>✖</button>
                </div>

                {cartItems.length === 0 ? (
                    <p style={{ padding: "20px", textAlign: "center" }}>Your cart is empty.</p>
                ) : (
                    <>
                        <div className="cart-list">
                            {cartItems.map(item => (
                                <div className="cart-item" key={item.id}>
                                    <div className="imgs">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="info">
                                        <h3>{item.title}</h3>
                                        <p className="price">₹{item.price} x {item.quantity} = <strong>₹{item.price * item.quantity}</strong></p>
                                    </div>
                                    <div className="btns">
                                        <button onClick={() => handleDecreaseQuantity(item.id)}><FaMinus /></button>
                                        <h4>{item.quantity}</h4>
                                        <button onClick={() => handleIncreaseQuantity(item.id)}><FaPlus /></button>
                                    </div>
                                    <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}><FaTrash /></button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <div className="sum">
                                <h2>Total: <span>₹{total}</span></h2>
                                <p>Item(s) in cart <span>({cartItems.length})</span></p>
                            </div>
                            <button className="checkout-btn">Proceed to Checkout</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
