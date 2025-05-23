import React, { useState } from 'react';
import './Shop.css';
import { FaRegStar } from 'react-icons/fa';
import Data from '../Datas/Data';
import { MdOutlineLayers, MdCompareArrows, MdArrowOutward } from 'react-icons/md';


const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaRegStar key={`full-${i}`} style={{ color: '#f39c12' }} />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} style={{ color: '#ccc' }} />);
    }
    return stars;
};

const Shop = () => {
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        gender: '',
        size: '',
        color: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const filteredProducts = Data.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(filters.search.toLowerCase());

        // Adjust category match based on your product data
        const matchesCategory = filters.category ? product.category === filters.category : true;
        const matchesGender = filters.gender ? product.gender === filters.gender : true;
        const matchesSize = filters.size ? product.size === filters.size : true;
        const matchesColor = filters.color ? product.color === filters.color : true;

        return matchesSearch && matchesCategory && matchesGender && matchesSize && matchesColor;
    });

    return (
        <div className='shop-page'>
            <div className="shop" id='shop'>
                <div className="container">
                    <aside className="filters">
                        <h3>Filter</h3>

                        <input
                            type="text"
                            name="search"
                            placeholder="Search by name..."
                            value={filters.search}
                            onChange={handleFilterChange}
                        /><br />

                        <label>Category</label>
                        <select name="category" value={filters.category} onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Women">Girls</option>
                            <option value="Men">Men</option>
                        </select>
                        <br />

                        <label>Gender</label>
                        <div className="gender-options">
                            {['Male', 'Female', 'Unisex'].map((gender) => (
                                <button
                                    key={gender}
                                    type="button"
                                    title={`Filter by ${gender}`}
                                    className={filters.gender === gender ? 'active' : ''}
                                    onClick={() => setFilters({ ...filters, gender })}
                                >
                                    {gender}
                                </button>
                            ))}
                        </div>

                        <label>Size</label>
                        <div className="size-options">
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <div
                                    key={size}
                                    className={`size-circle ${filters.size === size ? 'selected' : ''}`}
                                    onClick={() => setFilters({ ...filters, size })}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>

                        <label>Color</label>
                        <div className="color-options">
                            {['Black', 'White', 'Blue', 'Red', 'Green'].map((clr) => (
                                <div
                                    key={clr}
                                    className={`color-circle ${clr.toLowerCase()} ${filters.color === clr ? 'selected' : ''}`}
                                    onClick={() => setFilters({ ...filters, color: clr })}
                                    title={clr}
                                ></div>
                            ))}
                        </div>

                        <button
                            className="clear-btn"
                            onClick={() =>
                                setFilters({ search: '', category: '', gender: '', size: '', color: '' })
                            }
                        >
                            Clear Filters
                        </button>
                    </aside>

                    <main className="products">
                        {filteredProducts.length === 0 ? (
                            <p>No products match your filters.</p>
                        ) : (
                            filteredProducts.map((product) => (
                                <div className="card" key={product.id}>
                                    <div className="imgs">
                                        <div className="icons">
                                            <FaRegStar className='icon' /> <br />
                                            <MdOutlineLayers className='icon' /><br />
                                            <MdCompareArrows className='icon' /><br />
                                        </div>
                                        <img src={product.image} alt={product.title} className="card-img" />
                                        <button className="buy-btn">Add To Cart <MdArrowOutward className='icon' /></button>
                                    </div>
                                    <div className="info">
                                        <div className="cate">{product.category}</div>
                                        <div className="heading">{product.title}</div>
                                        <div className="rating">{renderStars(product.rating)}</div>
                                        <div className="price">₹{product.price}</div>
                                    </div>
                                </div>
                            ))
                        )}
                    </main>
                </div>
            </div>

        </div>
    );
};

export default Shop;
