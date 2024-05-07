import './App.css';
import Header from "./components/header/header";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';

function App() {
    const [selectedCategories, setSelectedCategories] = useState(['text', 'hover', 'button']);

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
                <div className={"sidebar"}>
                    <Sidebar setSelectedCategories={setSelectedCategories} />
                </div>
            </div>
        </Router>
    );
}

export default App;