from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd

from .schemas import CarData

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("../model/model.pkl")
preprocessor = joblib.load("../model/preprocessor.pkl")

@app.get("/")
def root():
    return {"message": "AutoValue API is running"}

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/predict")
def predict(car: CarData):

    car_data = pd.DataFrame([{
        "Levy": car.Levy,
        "Manufacturer": car.Manufacturer,
        "Model": car.Model,
        "Prod. year": car.Prod_year,
        "Category": car.Category,
        "Leather interior": car.Leather_interior,
        "Fuel type": car.Fuel_type,
        "Engine volume": car.Engine_volume,
        "Mileage": car.Mileage,
        "Cylinders": car.Cylinders,
        "Gear box type": car.Gear_box_type,
        "Drive wheels": car.Drive_wheels,
        "Doors": car.Doors,
        "Wheel": car.Wheel,
        "Color": car.Color,
        "Airbags": car.Airbags,
        "Turbo": car.Turbo
    }])

    prediction = preprocessor.transform(car_data)
    predicted_price = model.predict(prediction)

    return {"prediction_price": predicted_price[0]}