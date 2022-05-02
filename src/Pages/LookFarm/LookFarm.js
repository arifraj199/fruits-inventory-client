import React from "react";
import "./LookFarm.css";

const LookFarm = () => {
  return (
    <div>
      <h1 className="text-center farm-header-title">About Our Farm</h1>
      <hr className="title-hr" />
      <div className="farm-container">
        <div className="farm-title">
          <h5 className="fw-bold">Have Look at out beautiful Farm</h5>
          <p>
            We provides fresh organic fruits and vegetable which good for health and wealth.You can get best fruits and vegetable without formalin.The year was 2021. It was the best of times. 
          </p>
          <p>
          Our Goal: The goal was (and still is) to provide a service where local farms are given priority and members are able to access the freshest organic items available at a fair price.
          </p>
        </div>
        <div className="farm-year">
          <h2>2020</h2>
          <h1>2021</h1>
        </div>
        <div className="farm-img">
          <img
            src="https://i.ibb.co/RH8kYfH/cesar-guel-0-PABOpz5-Sa4-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LookFarm;
