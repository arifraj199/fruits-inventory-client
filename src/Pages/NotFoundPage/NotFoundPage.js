import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center page-error">
      <img src="https://i.ibb.co/CbgbShh/error.jpg" alt="" />
      <button onClick={()=> navigate('/home')} className="btn btn-danger mt-4 fw-bold text-white">Back To Homepage</button>
    </div>
  );
};

export default NotFoundPage;
