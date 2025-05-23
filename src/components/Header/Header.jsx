import "./Header.css";
import { FaHome } from "react-icons/fa";
import { CiSearch } from 'react-icons/ci';
import { HashLink } from 'react-router-hash-link';
import { MdOutlineCategory, MdLocalOffer } from "react-icons/md";
import { AiOutlineAppstore, AiOutlineHeart, AiOutlinePhone, AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Header = () => {



    return (
        <div className="header">
            <div className="header-container">

                <div className="nav1">
                    <div className="container">
                        <div className="logo">
                            <a href="#">Clothes Shop</a>
                        </div>

                        <div className="search">
                            <input type="search" placeholder="Search Here..." />
                            <CiSearch className="search-icon" />
                        </div>

                        <div className="icons">
                            <AiOutlineHeart className="icon" />

                            <HashLink to='/cart' className="carticon">
                                <AiOutlineShoppingCart className="icon" />
                                <div className="counter">0</div>
                            </HashLink>

                            <AiOutlineUser className="icon" />
                        </div>
                    </div>
                </div>
                {/* Bottom Navbar */}
                <div className="nav2">
                    <div className="container">
                        <ul>
                            <li>
                                <HashLink smooth to="/" ><FaHome className="navicons" /> Home</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#shop" ><AiOutlineAppstore className="navicons" /> Shop</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#category" ><MdOutlineCategory className="navicons" /> Categories</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#offers" ><MdLocalOffer className="navicons" /> Offers</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#arrival" >
                                    <AiOutlineAppstore className="navicons" /> New Arrivals
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#trending">
                                    <AiOutlineHeart className="navicons" /> Trending
                                </HashLink>

                            </li>
                            <li>
                                <HashLink smooth to="/#about">
                                    <AiOutlineInfoCircle className="navicons" /> About Us
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#contact">
                                    <AiOutlinePhone className="navicons" /> Contact Us
                                </HashLink>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <HashLink smooth  >  <AiOutlineInfoCircle className="navicons" /> Help Center</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
