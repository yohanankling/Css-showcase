import './App.css';
import Header from "./components/header/header";
import React from "react";
import Footer from "./components/footer/footer";
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
        <footer>
        <Footer/>
        </footer>
    </div>
  );
}

export default App;
