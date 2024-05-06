import React, { useState } from 'react';
import './sidebar.css';
import HomeImage from '../../assets/home.png';
import AboutImage from '../../assets/info.png';
import ContactImage from '../../assets/contact.png';

function Sidebar({ setSelectedCategories }) {
    const [selectedCategories, setSelectedCategoriesInternal] = useState([]);

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategoriesInternal(selectedCategories.filter(c => c !== category));
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
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
        </div>
    );
}

export default Sidebar;