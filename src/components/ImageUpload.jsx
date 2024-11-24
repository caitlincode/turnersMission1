import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const predictionUrl = import.meta.env.VITE_PREDICTION_URL;
  const predictionKey = import.meta.env.VITE_PREDICTION_KEY;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please upload an image before analyzing.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(predictionUrl, image, {
        headers: {
          "Prediction-Key": predictionKey,
          "Content-Type": "application/octet-stream",
        },
      });

      setResult(response.data.predictions);
    } catch (error) {
      console.error("Error classifying image:", error.response || error.message);
      alert(
        "Error analyzing image. Please check your API key and endpoint configuration."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="image-upload">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Classifying..." : "Classify"}
      </button>
      {result && (
        <div className="result">
          <h3>Classification Results:</h3>
          <ul>
            {result.map((prediction, index) => (
              <li key={index}>
                {prediction.tagName}: {Math.round(prediction.probability * 100)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
