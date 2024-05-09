import React, { useState } from 'react';
import './sidebar.css';

function Sidebar({ setSelectedCategories }) {
    const [selectedCategories, setSelectedCategoriesInternal] = useState([]);

    const handleCategoryChange = (category) => {
        if (category === 'all') {
            setSelectedCategoriesInternal(['text', 'hover', 'image', 'loading']);
            setSelectedCategories(['text', 'hover', 'image', 'loading']);
        } else if (selectedCategories.includes(category)) {
            setSelectedCategoriesInternal(selectedCategories.filter((c) => c !== category));
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategoriesInternal([...selectedCategories, category]);
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar-preferences">
                <h2>Preferences</h2>
                <button
                    className="sidebar-button"
                    onClick={() => handleCategoryChange('all')}
                    style={{
                        backgroundColor: selectedCategories.length === 0 ? 'lightgray' : 'transparent',
                    }}
                >
                    All
                </button>
                <div className="checkbox-container">
                    <div className={"checkbox-container"}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes('text')}
                            onChange={() => handleCategoryChange('text')}
                        />
                        Text
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes('hover')}
                            onChange={() => handleCategoryChange('hover')}
                        />
                        Hover
                    </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes('image')}
                                onChange={() => handleCategoryChange('image')}
                            />
                            Image
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes('loading')}
                                onChange={() => handleCategoryChange('loading')}
                            />
                            Loading
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;