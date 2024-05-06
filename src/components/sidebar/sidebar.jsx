import React, { useState } from 'react';
import './sidebar.css';
import HomeImage from '../../assets/home.png';
import AboutImage from '../../assets/info.png';
import ContactImage from '../../assets/contact.png';
import { Link } from 'react-router-dom';

function Sidebar({ setSelectedCategories }) {
    const [selectedCategories, setSelectedCategoriesInternal] = useState([]);

    const handleCategoryChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter(c => c !== category)
            : [...selectedCategories, category];

        setSelectedCategoriesInternal(updatedCategories);
        setSelectedCategories(updatedCategories);
    };

    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <button className={"sidebar-button"}> <img src={HomeImage} alt="Home" /> </button>
            <button className={"sidebar-button"}> <img src={AboutImage} alt="About" /> </button>
            <button className={"sidebar-button"}> <img src={ContactImage} alt="Contact" /> </button>

            <h2>Categories</h2>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes('text')}
                        onChange={() => handleCategoryChange('text')}
                    />
                    Text
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes('hover')}
                        onChange={() => handleCategoryChange('hover')}
                    />
                    Hover
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes('button')}
                        onChange={() => handleCategoryChange('button')}
                    />
                    Button
                </label>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/info">Info</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;