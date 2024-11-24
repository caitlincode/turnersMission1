import React from "react";

export const ResultDisplay = ({ result }) => {
  const predictions = result.predictions || [];
  const topPrediction = predictions[0] || {};

  return (
    <div className="result-display">
      <h2>Recognition Results</h2>
      <p><strong>Predicted Car Type:</strong> {topPrediction.tagName || "Unknown"}</p>
      <p><strong>Confidence:</strong> {(topPrediction.probability * 100).toFixed(2)}%</p>
    </div>
  );
};
