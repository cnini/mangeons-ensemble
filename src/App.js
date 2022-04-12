import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import Account from "./routes/account/Account";
import Restaurant from "./routes/restaurant/Restaurant";
import AddRestaurant from "./routes/restaurant/components/AddRestaurant";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/restaurants" element={<Restaurant/>} />
            <Route path="/restaurants/nouveau-restaurant" element={<AddRestaurant/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
