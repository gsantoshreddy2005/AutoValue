import { useState } from "react";
import ResultCard from "./ResultCard";

export default function PredictionForm() {
  const [formData, setFormData] = useState({
    Levy: "",
    Manufacturer: "",
    Model: "",
    Prod_year: "",
    Category: "",
    Leather_interior: "",
    Fuel_type: "",
    Engine_volume: "",
    Mileage: "",
    Cylinders: "",
    Gear_box_type: "",
    Drive_wheels: "",
    Doors: "",
    Wheel: "",
    Color: "",
    Airbags: "",
    Turbo: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    setPrediction(data.prediction_price);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="Levy"
          placeholder="Levy"
          value={formData.Levy}
          onChange={handleChange}
        />

        <input
          type="text"
          name="Manufacturer"
          placeholder="Manufacturer"
          value={formData.Manufacturer}
          onChange={handleChange}
        />

        <input
          type="text"
          name="Model"
          placeholder="Model"
          value={formData.Model}
          onChange={handleChange}
        />

        <input
          type="number"
          name="Prod_year"
          placeholder="Production Year"
          value={formData.Prod_year}
          onChange={handleChange}
        />

        <input
          type="text"
          name="Category"
          placeholder="Category"
          value={formData.Category}
          onChange={handleChange}
        />

        <select
          name="Leather_interior"
          value={formData.Leather_interior}
          onChange={handleChange}
        >
          <option value="">Leather Interior</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <select
          name="Fuel_type"
          value={formData.Fuel_type}
          onChange={handleChange}
        >
          <option value="">Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electric">Electric</option>
          <option value="LPG">LPG</option>
          <option value="CNG">CNG</option>
        </select>

        <input
          type="number"
          step="0.1"
          name="Engine_volume"
          placeholder="Engine Volume"
          value={formData.Engine_volume}
          onChange={handleChange}
        />

        <input
          type="number"
          name="Mileage"
          placeholder="Mileage"
          value={formData.Mileage}
          onChange={handleChange}
        />

        <input
          type="number"
          step="0.1"
          name="Cylinders"
          placeholder="Cylinders"
          value={formData.Cylinders}
          onChange={handleChange}
        />

        <select
          name="Gear_box_type"
          value={formData.Gear_box_type}
          onChange={handleChange}
        >
          <option value="">Gear Box Type</option>
          <option value="Automatic">Automatic</option>
          <option value="Tiptronic">Tiptronic</option>
          <option value="Variator">Variator</option>
          <option value="Manual">Manual</option>
        </select>

        <select
          name="Drive_wheels"
          value={formData.Drive_wheels}
          onChange={handleChange}
        >
          <option value="">Drive Wheels</option>
          <option value="4x4">4x4</option>
          <option value="Front">Front</option>
          <option value="Rear">Rear</option>
        </select>

        <select
          name="Doors"
          value={formData.Doors}
          onChange={handleChange}
        >
          <option value="">Select Doors</option>
          <option value="04-May">4-5 Doors</option>
          <option value="02-Mar">2-3 Doors</option>
          <option value=">5">&gt;5 Doors</option>
        </select>

        <select
          name="Wheel"
          value={formData.Wheel}
          onChange={handleChange}
        >
          <option value="">Wheel</option>
          <option value="Left wheel">Left wheel</option>
          <option value="Right-hand drive">Right-hand drive</option>
        </select>

        <input
          type="text"
          name="Color"
          placeholder="Color"
          value={formData.Color}
          onChange={handleChange}
        />

        <input
          type="number"
          name="Airbags"
          placeholder="Airbags"
          value={formData.Airbags}
          onChange={handleChange}
        />

        <select
          name="Turbo"
          value={formData.Turbo}
          onChange={handleChange}
        >
          <option value="">Turbo</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <button type="submit">Predict Value</button>
      </form>

      {prediction !== null && (
        <ResultCard prediction={prediction} />
      )}
    </>
  );
}