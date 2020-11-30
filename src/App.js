import React from "react";
import "./App.css";

// components
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from './components/MyCarousel/MyCarousel.component';
import Title from './components/Title/Title.component';
import About from './pages/About/About.component.jsx';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <Title />
      <About />
    My portfolio
    </div>
  );
}

export default App;
