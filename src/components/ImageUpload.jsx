import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  // State to store the uploaded image file
  const [image, setImage] = useState(null);

  // State to store the image preview URL
  const [preview, setPreview] = useState(null);

  // State to store the classification results
  const [result, setResult] = useState(null);

  // State to track whether the app is currently loading
  const [isLoading, setIsLoading] = useState(false);

  // Environment variables for the prediction URL and key
  const predictionUrl = import.meta.env.VITE_PREDICTION_URL;
  const predictionKey = import.meta.env.VITE_PREDICTION_KEY;

  // This function is triggered when a file is selected
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    setImage(file); // Save the file to state
    setPreview(URL.createObjectURL(file)); // Generate a preview URL for the image
  };

  // This function is triggered when the "Classify" button is clicked
  const handleSubmit = async () => {
    if (!image) {
      alert("Please upload an image before analyzing."); // Alert if no image is uploaded
      return;
    }

    if (!predictionUrl || !predictionKey) {
      console.error(
        "Prediction URL or key is missing in environment variables."
      );
      alert("Error: Missing API configuration."); // Alert if environment variables are missing
      return;
    }

    const formData = new FormData(); // Create a new FormData object
    formData.append("image", image); // Append the image file to the FormData

    setIsLoading(true); // Set loading state to true
    try {
      // Make an API call to classify the image
      const response = await axios.post(predictionUrl, formData, {
        headers: {
          "Prediction-Key": predictionKey, // Add the API key as a header
        },
      });

      setResult(response.data.predictions); // Save the predictions to state
    } catch (error) {
      console.error(
        "Error classifying image:",
        error.response?.data || error.message
      ); // Log any errors
      alert(
        "Error analyzing image. Please check your API key and endpoint configuration."
      ); // Alert the user about the error
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="image-upload">
      {/* File input for selecting an image */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {/* Show the image preview if an image is selected */}
      {preview && (
        <div className="image-preview">
          <h3>Image Preview:</h3>
          <img
            src={preview}
            alt="Uploaded preview"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}

      {/* Button to submit the image for classification */}
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Classifying..." : "Classify"}
      </button>

      {/* Show the classification results if available */}
      {result && (
        <div className="result">
          <h3>Classification Results:</h3>
          <ul>
            {result.map((prediction, index) => (
              <li key={index}>
                {prediction.tagName}: {Math.round(prediction.probability * 100)}
                %
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;