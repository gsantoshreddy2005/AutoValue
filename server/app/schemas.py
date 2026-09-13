from pydantic import BaseModel


class CarData(BaseModel):
    Levy: float
    Manufacturer: str
    Model: str
    Prod_year: int
    Category: str
    Leather_interior: str
    Fuel_type: str
    Engine_volume: float
    Mileage: int
    Cylinders: float
    Gear_box_type: str
    Drive_wheels: str
    Doors: str
    Wheel: str
    Color: str
    Airbags: int
    Turbo: int