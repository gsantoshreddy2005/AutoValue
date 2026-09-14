import "./ResultCard.css"

export default function ResultCard({prediction}) {
    return (
        <div className="result-card">
            <p className="result-label">Estimated resale Value</p>

            <h2>${prediction}</h2>

            <p className="result-message">
                This is the estimated value of your car based on the details provided.
            </p>
        </div>
    );
}