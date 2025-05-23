import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>ClothShop</h3>
                    <p>
                        Your go-to fashion destination. Shop the latest trends in clothing,
                        accessories, and more. We deliver style with comfort.
                    </p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p><strong>Email:</strong> gopaldawar45@gmail.com</p>
                    <p><strong>Phone:</strong> +91 9370448972</p>
                    <p><strong>Address:</strong> 123 Fashion Ave, New York, NY</p>
                </div>

                <div className="footer-newsletter">
                    <h4>Subscribe to our Newsletter</h4>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ClothShop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
