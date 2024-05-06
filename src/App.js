import './App.css';
import Header from "./components/header/header";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Info from './pages/Info';

function App() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <div className={"body"}>
                    <Routes>
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/info" element={<Info />} />
                        <Route path="/" element={<Home selectedCategories={selectedCategories} />} />
                    </Routes>
                </div>
                <div className={"sidebar"}>
                    <Sidebar setSelectedCategories={setSelectedCategories} />
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
            </div>
        </Router>
    );
}

export default App;