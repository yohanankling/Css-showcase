import './App.css';
import Header from "./components/header/header";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Menu from "./assets/menu.png";


function App() {
    const [selectedCategories, setSelectedCategories] = useState(['text', 'hover', 'button']);
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <div className={"body"}>
                    <Routes>
                        <Route path="/info" element={<Info />} />
                        <Route path="/" element={<Home selectedCategories={selectedCategories} />} />
                    </Routes>
                </div>
                <div className={`sidebar ${showSidebar ? '' : 'hidden'}`}>
                    <Sidebar setSelectedCategories={setSelectedCategories} />
                </div>
                <button className="toggle-button" onClick={() => setShowSidebar(!showSidebar)}>
                    <img src={Menu} alt="Menu" style={{ width: '20px', height: '20px' }}/>
                </button>
            </div>
        </Router>
    );
}

export default App;