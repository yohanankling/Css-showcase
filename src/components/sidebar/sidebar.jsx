import React, { useState } from 'react';
import './sidebar.css';
import HomeImage from '../../assets/home.png';
import AboutImage from '../../assets/info.png';
import ContactImage from '../../assets/contact.png';
import { Link } from 'react-router-dom';

function Sidebar({ setSelectedCategories }) {
    const [selectedCategories, setSelectedCategoriesInternal] = useState([]);

    const handleCategoryChange = (category) => {
        if (category === 'all') {
                setSelectedCategoriesInternal(['text', 'hover', 'button']);
                setSelectedCategories(['text', 'hover', 'button']);
        }
        else if (selectedCategories.includes(category)) {
            setSelectedCategoriesInternal(selectedCategories.filter(c => c !== category));
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        }
        else {
            setSelectedCategoriesInternal([...selectedCategories, category]);
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <button className={"sidebar-button"}> <img src={HomeImage} alt="Home" /> </button>
            <button className={"sidebar-button"}> <img src={AboutImage} alt="About" /> </button>
            <button className={"sidebar-button"}> <img src={ContactImage} alt="Contact" /> </button>

            <h2>Categories</h2>
            <div className="sidebar-button">
                <button
                    onClick={() => handleCategoryChange('all')}
                    style={{
                        backgroundColor: selectedCategories.length === 0 ? 'lightgray' : 'transparent',
                    }}
                >
                    All
                </button>
            </div>
            <div className="sidebar-checkbox">
                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes('text')}
                        onChange={() => handleCategoryChange('text')}
                    />
                    Text
                </label>
            </div>
            <div className="sidebar-checkbox">
                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes('hover')}
                        onChange={() => handleCategoryChange('hover')}
                    />
                    Hover
                </label>
            </div>
            <div className="sidebar-checkbox">
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