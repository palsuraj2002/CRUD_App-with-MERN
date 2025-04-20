import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-warning">
      <div className="card text-center shadow-lg p-5" style={{ width: '30rem' }}>
        <div className="card-body">
          <h1 className="card-title text-danger mb-4">
            <i className="bi bi-exclamation-circle"></i> Error 404
          </h1>
          <p className="card-text lead mb-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/admin" className="btn btn-danger btn-lg">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;