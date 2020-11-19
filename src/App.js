import React from "react";
import "./App.css";

// components
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from './components/MyCarousel/MyCarousel.component';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
    My portfolio
    </div>
  );
}

export default App;
