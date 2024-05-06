import React from 'react';
import Content from '../components/content/content';

function Home({ selectedCategories }) {
    return (
        <div>
            <Content selectedCategories={selectedCategories} />
        </div>
    );
}

export default Home;