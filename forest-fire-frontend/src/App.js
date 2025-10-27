import React, { useState } from "react";
import "./App.css";

function App() {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentRiskLevel, setCurrentRiskLevel] = useState("low-risk"); // State for overall background coloring

    const handlePredict = () => {
        const latValue = latitude.trim();
        const lonValue = longitude.trim();

        if (!latValue || !lonValue) {
            setOutput("⚠️ Please enter both latitude and longitude.");
            setCurrentRiskLevel("low-risk"); // Reset if input is cleared
            return;
        }

        const lat = parseFloat(latValue);
        const lon = parseFloat(lonValue);

        if (
            isNaN(lat) || !isFinite(lat) || lat < -90 || lat > 90 ||
            isNaN(lon) || !isFinite(lon) || lon < -180 || lon > 180
        ) {
            setOutput("❌ Invalid coordinates. Please use valid numbers between -90/90 (Lat) and -180/180 (Lon).");
            setCurrentRiskLevel("low-risk"); // Reset if input is invalid
            return;
        }

        setLoading(true);
        setOutput(`Predicting fire probability for (${lat.toFixed(4)}, ${lon.toFixed(4)})... 🔍`);
        setCurrentRiskLevel("predicting"); // Indicate an active prediction

        setTimeout(() => {
            const probability = (Math.random() * 100).toFixed(2);
            setLoading(false);

            let newRiskLevel = "low-risk";
            if (probability >= 70) {
                newRiskLevel = "high-risk";
            } else if (probability >= 30) {
                newRiskLevel = "medium-risk";
            } else {
                newRiskLevel = "low-risk";
            }
            setCurrentRiskLevel(newRiskLevel); // Update global risk level state

            setOutput(
                <div className={`output-message ${newRiskLevel}`}>
                    🔥 Predicted Fire Probability: **{probability}%**
                </div>
            );
        }, 1500);
    };

    return (
        <div className={`app-container ${currentRiskLevel}`}> {/* Apply risk level to container for dynamic background */}
            <div className="background-overlay"></div> {/* For gradient/pattern over the image */}
            
            <header className="app-header">
                <h1 className="title">Forest Fire Analytics </h1>
                <p className="tagline">Real-time probability for safer forests</p>
            </header>

            <div className="input-panel glassmorphism-panel">
                <h2 className="panel-title">Enter Coordinates</h2>
                <p className="panel-subtitle">Provide location details to assess fire risk.</p>

                <div className="input-group">
                    <label>Latitude (-90 to 90)</label>
                    <input
                        type="number"
                        step="any"
                        placeholder="e.g., 34.05"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Longitude (-180 to 180)</label>
                    <input
                        type="number"
                        step="any"
                        placeholder="e.g., -118.24"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                    />
                </div>

                <button
                    className="predict-btn"
                    onClick={handlePredict}
                    disabled={loading}
                >
                    {loading ? "Analyzing..." : "Predict Fire Risk"}
                </button>
            </div>

            <div className="display-panel glassmorphism-panel">
                <h2 className="panel-title">Prediction Result</h2>
                <div className="output-area">
                    {output && typeof output === 'object' ? output : (
                        <div className={`output-message ${currentRiskLevel}`}>{output}</div>
                    )}
                    {!output && <p className="placeholder-text">Enter coordinates and click 'Predict' to see results.</p>}
                </div>
                {/* This is where a map or more complex visualization could go */}
                <div className="map-placeholder">
                    {/* Placeholder for future map integration */}
                    <p>Map/Visual area (future integration)</p>
                     {/* Dynamic image based on risk level */}
                    {currentRiskLevel === "high-risk" && 
                        <img src="https://images.unsplash.com/photo-1533221945199-dc0a6e355913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzODg4NjJ8MHwxfHNlYXJjaHw3fHxmb3Jlc3QlMjBmaXJlJTIwZGFuZ2VyfGVufDB8fHx8MTcwNzAxODAwMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="High Fire Risk" />}
                    {currentRiskLevel === "medium-risk" && 
                        <img src="https://images.unsplash.com/photo-1522039561005-ec6ec8f6356c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzODg4NjJ8MHwxfHNlYXJjaHwxNXx8Zm9yZXN0JTIwd2lsZGxpZmUlMjBkYW5nZXJ8ZW58MHx8fHwxNzA3MDE4MDAwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Medium Fire Risk" />}
                    {currentRiskLevel === "low-risk" && 
                        <img src="https://images.unsplash.com/photo-1498801966453-625d57b32607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzODg4NjJ8MHwxfHNlYXJjaHw0fHxmcmVzaCUyMGZvcmVzdHxlbnwwfHx8fDE3MDcwMTgwMDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Low Fire Risk" />}
                    {currentRiskLevel === "predicting" && 
                        <div className="loading-animation"></div>}
                </div>
            </div>
            
            <footer className="app-footer">
                <p>&copy; 2023 Forest Fire Prediction. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;