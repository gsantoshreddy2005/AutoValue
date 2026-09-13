import {Link} from "react-router-dom"

import "./Hero.css";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="hero-tagline">SMARTER CAR VALUATION</p>

        <h2>Know Your Car's Value</h2>

        <p className="hero-description">
          Get an estimated resale value for your car using machine learning.
        </p>

        <Link to="/predict" className="hero-button">
            Preict My car
        </Link>
      </div>
    </main>
  );
}