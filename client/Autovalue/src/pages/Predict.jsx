import PredictionForm from "../components/PredictionForm"
import "./Predict.css"

export default function Predict() {
    return (
        <main className="predict-page">
            <div className="predict-content">
                <h1>Predict your car's Value</h1>

                <p>Enter your car details to get an estimated resale value.</p>
                <PredictionForm />
            </div>
        </main>
    );
}