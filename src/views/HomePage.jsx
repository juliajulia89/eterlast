import React from "react";
import { Link } from "react-router-dom";
//import Header from "../components/Header";



function HomePage() {
  return (
    <div className= "home-page">
      <h1 className="home-page-header">Welcome to Eterlast</h1>
      <Link to="/wallet-form">
        <p>Create your wallet!</p>
      </Link>
    </div>
  );
}

export default HomePage;
