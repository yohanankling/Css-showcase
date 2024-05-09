import './App.css';
import Header from "./components/header/header";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Menu from "./assets/menu.png";

function App() {
    const [selectedCategories, setSelectedCategories] = useState(['text', 'hover', 'button', 'image', 'loading']);
    const [showSidebar, setShowSidebar] = useState(window.innerWidth > 500);

    useEffect(() => {
        const handleResize = () => {
            setShowSidebar(window.innerWidth > 499);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <div className={`body ${showSidebar && window.innerWidth <499 ? 'blurred-background' : ''}`}>
                    <Routes>
                        <Route path="/info" element={<Info />} />
                        <Route path="/" element={<Home selectedCategories={selectedCategories} />} />
                    </Routes>
                </div>
                <div className={`sidebar ${showSidebar ? '' : 'hidden'}`}>
                    <Sidebar setSelectedCategories={setSelectedCategories} />
                </div>
                <button
                    className="toggle-button"
                    onClick={() => setShowSidebar((prevState) => !prevState)}>
                    <img src={Menu} alt="Menu" style={{ width: '20px', height: '20px' }} />
                </button>
            </div>
        </Router>
    );
}

export default App;