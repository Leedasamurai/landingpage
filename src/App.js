import React from "react"; // Import React library
import "./App.css"; // Import CSS file for styling
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components from react-router-dom
import Home from "./pages"; // Import the Home component
import SignInPage from "./pages/signin"; // Import the SignInPage component

// Define the main App component
function App() {
  return (
    // Wrap the application with the Router component
    <Router>
      {/* Define the routes within the Router */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Route for the sign-in page */}
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App; // Export the App component as the default export
