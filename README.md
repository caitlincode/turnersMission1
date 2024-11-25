# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
## Turners Car Insurance - Car Classification App

This is a React-based application for classifying car images using Azure Custom Vision. The app allows users to upload images, sends the images to a Custom Vision model for analysis, and displays the classification results.

### Features
- **Image Upload**: Upload car images for classification.
- **Azure Custom Vision Integration**: Analyze uploaded images using a pre-trained Azure Custom Vision model.
- **Dynamic Results**: Display classification results with probabilities.
- **Responsive UI**: Clean and simple interface for users.

### Technologies Used
- **Frontend Framework**: React (with Vite for project setup)
- **API Requests**: Axios
- **Environment Configuration**: Dotenv for environment variables

### Project Setup

#### Prerequisites
- Node.js installed (LTS version recommended)
- Azure Custom Vision model set up and published
- Prediction URL and Prediction Key from the Azure portal

#### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd turners-car-insurance
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project:
    ```bash
    touch .env
    ```

4. Add the following to the `.env` file (replace with your Azure details):
    ```env
    VITE_PREDICTION_URL=https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/4c021c26-f6cd-4647-9e60-31c7a627e3f8/classify/iterations/Iteration1/image
    VITE_PREDICTION_KEY=7df862ab4f0749a48dbf7f2b29b6994
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

### Usage
1. Open the app in your browser (usually http://localhost:5173).
2. Upload a car image using the file input.
3. Click the Classify button to analyze the image.
4. View the classification results, including tag names and probabilities.

### Project Structure
```bash
src/
├── components/
│   ├── ImageUpload.jsx    # Handles image upload and API interaction
├── styles/
│   ├── App.css            # Styling for the application
├── App.jsx                # Main app component
├── main.jsx               # Entry point for the React application
.env                       # Environment variables for API keys and URLs
```

### Key Components

#### ImageUpload.jsx
Handles:
- Image selection and preview
- Sending the image to Azure Custom Vision
- Displaying the results

#### App.jsx
Renders the main application layout, including the ImageUpload component.

### Environment Variables
The application uses environment variables to securely manage sensitive information like the Azure Custom Vision Prediction URL and Prediction Key. These are stored in the `.env` file and accessed via `import.meta.env`.

Example `.env` Configuration:
```env
VITE_PREDICTION_URL=<your_prediction_url>
VITE_PREDICTION_KEY=<your_prediction_key>
```

### Dependencies
- **React**: Frontend library for building user interfaces.
- **Axios**: HTTP client for API requests.
- **Dotenv**: Manage environment variables securely.

Install dependencies using:
```bash
npm install
```

### Troubleshooting

#### Common Errors

- **401 Unauthorized Error**:
  - Ensure the Prediction Key and Prediction URL in `.env` are correct.
  - Verify that the Custom Vision model is published and accessible.

- **CORS Error**:
  - Configure CORS settings in Azure to allow requests from `http://localhost:5173`.

- **Invalid Image Error**:
  - Ensure the uploaded image is in a supported format (JPEG, PNG, etc.).

### Future Improvements
- Add drag-and-drop functionality for image uploads.
- Improve error handling with user-friendly messages.
- Enhance UI/UX with additional styling and animations.

### Contributing
1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature name"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

### License
This project is licensed under the MIT License.

### Acknowledgments
- Turners Car Auctions for providing the use case.
- Azure Custom Vision for the machine learning model.
