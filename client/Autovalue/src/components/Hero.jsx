import {Link} from "react-router-dom"

import "./Hero.css";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="hero-tagline">SMARTER CAR VALUATION</p>

        <h2>Know Your Car's Value</h2>

        <p className="hero-description">
          Get an estimated resale value for your car based on its details.
        </p>

        <Link to="/predict" className="hero-button">
            Predict My Car
        </Link>
      </div>
    </main>
  );
}