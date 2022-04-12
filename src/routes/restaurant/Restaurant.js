import React from "react";
import "./Restaurant.css";
import { Link } from 'react-router-dom';

const Restaurant = () => {
  return (
    <div className="Restaurant">
      <header className="Restaurant-header">
        <p>Restaurant page</p>
        <Link to="/restaurants/nouveau-restaurant">Ajouter un restaurant</Link>
      </header>
    </div>
  );
};

export default Restaurant;
