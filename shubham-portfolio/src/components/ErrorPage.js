import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // Assuming you have a separate CSS file for styling

const ErrorPage = ({ errorCode }) => {
    const errorMessage = errorCode === 404 
        ? "Oops! Page not found." 
        : "Oops! Something went wrong.";

    return (
        <div className="error-page">
            <h1>{errorCode}</h1>
            <p>{errorMessage}</p>
            <Link to="/" className="error-link">Return to Homepage</Link>
        </div>
    );
};

export default ErrorPage;