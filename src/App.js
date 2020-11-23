import React from "react";
import "./App.css";

// components
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from './components/MyCarousel/MyCarousel.component';
import Title from './components/Title/Title.component';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <Title />
    My portfolio
    </div>
  );
}

export default App;
