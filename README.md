# ⚡ AutoValue — Smarter Car Valuation

AutoValue is an end-to-end Machine Learning web application designed to estimate the resale value of a car based on key vehicle attributes. Built with a high-performance **FastAPI** backend, a trained **Scikit-Learn** regression model pipeline, and a modern, responsive **React + Vite** frontend with glassmorphic aesthetics.

---

## ✨ Features

- 🏎️ **Instant Resale Estimates**: Accurately predicts car resale values based on 17+ vehicle specifications (Manufacturer, Year, Mileage, Engine Volume, Fuel Type, Gear Box, etc.).
- 🎨 **Modern Responsive UI**: Ultra-premium dark automotive theme featuring glassmorphism, smooth micro-animations, custom input controls, and multi-column grid layouts adapted for mobile, tablet, and desktop screens.
- 🚀 **FastAPI REST Backend**: Asynchronous Python API powered by Pydantic data validation and CORS middleware.
- 📊 **Machine Learning Pipeline**: Complete ML workflow including Exploratory Data Analysis (EDA), feature preprocessing pipeline, and model persistence via `joblib`.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: React 18 (Vite)
- **Routing**: React Router DOM (`v7`)
- **Styling**: Modern Vanilla CSS (CSS Variables, Glassmorphism, Responsive CSS Grid, CSS Keyframes)
- **Typography**: Google Fonts (*Plus Jakarta Sans*)

### **Backend**
- **Framework**: FastAPI (Python)
- **Server**: Uvicorn
- **Data Validation**: Pydantic
- **Cors**: FastAPI CORSMiddleware

### **Machine Learning**
- **Libraries**: Scikit-Learn, Pandas, NumPy, Joblib
- **Environment**: Jupyter Notebooks (`eda.ipynb`, `model_training.ipynb`)

---

## 📁 Project Structure

```text
AutoValue/
├── client/
│   └── Autovalue/               # React + Vite Frontend
│       ├── public/
│       ├── src/
│       │   ├── components/      # Reusable UI Components
│       │   │   ├── Hero.jsx & Hero.css
│       │   │   ├── NavBar.jsx & NavBar.css
│       │   │   ├── PredictionForm.jsx & PredictionForm.css
│       │   │   └── ResultCard.jsx & ResultCard.css
│       │   ├── pages/           # Application Views
│       │   │   ├── Home.jsx & Home.css
│       │   │   └── Predict.jsx & Predict.css
│       │   ├── App.jsx          # Route Definitions
│       │   ├── main.jsx         # App Entry Point
│       │   └── index.css        # Core Design Tokens & Global Reset
│       ├── package.json
│       └── vite.config.js
├── model/                       # Machine Learning Artifacts
│   ├── datasets/                # Training Datasets
│   ├── eda.ipynb                # Exploratory Data Analysis
│   ├── model_training.ipynb     # Model Training Notebook
│   ├── model.pkl                # Trained Scikit-Learn Model
│   └── preprocessor.pkl         # Feature Preprocessing Pipeline
└── server/                      # FastAPI Backend Service
    ├── app/
    │   ├── main.py              # API Routes & Predict Handler
    │   └── schemas.py           # Pydantic Input Data Schema
    └── requirements.txt         # Python Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) & **npm**
- **Python** (v3.10 or higher) & **pip**

---

### 1️⃣ Setting Up the Backend Server

1. Navigate to the `server/` directory:
   ```bash
   cd server
   ```

2. Create and activate a virtual environment:
   ```bash
   # Windows (PowerShell)
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1

   # macOS/Linux
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Launch the FastAPI server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```
   The backend API will be available at `http://127.0.0.1:8000`.

---

### 2️⃣ Setting Up the React Frontend

1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client/Autovalue
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be running at `http://localhost:5173`.

---

## 🔌 API Endpoints

### `POST /predict`
Estimates the price of a car given its features.

#### Request Body Sample:
```json
{
  "Levy": 1000,
  "Manufacturer": "TOYOTA",
  "Model": "Camry",
  "Prod_year": 2018,
  "Category": "Sedan",
  "Leather_interior": "Yes",
  "Fuel_type": "Petrol",
  "Engine_volume": 2.5,
  "Mileage": 60000,
  "Cylinders": 4.0,
  "Gear_box_type": "Automatic",
  "Drive_wheels": "Front",
  "Doors": "04-May",
  "Wheel": "Left wheel",
  "Color": "Black",
  "Airbags": 8,
  "Turbo": 0
}
```

#### Response Sample:
```json
{
  "prediction_price": 18500.50
}
```

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
