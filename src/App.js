import './App.css';
import Header from "./components/header/header";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className={"body"}>
          <Content selectedCategories={selectedCategories} />
        </div>
        <div className={"sidebar"}>
          <Sidebar setSelectedCategories={setSelectedCategories} />
        </div>
      </div>
  );
}

export default App;