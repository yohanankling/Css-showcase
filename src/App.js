import './App.css';
import Header from "./components/header/header";
import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
        <div className={"body"}>
        <Content/>
        </div>
        <div className={"sidebar"}>
        <Sidebar/>
        </div>
    </div>
  );
}

export default App;
