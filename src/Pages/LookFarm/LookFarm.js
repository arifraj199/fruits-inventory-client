import React from "react";
import "./LookFarm.css";

const LookFarm = () => {
  return (
    <div>
      <h1 className="text-center farm-header-title">About Our Farm</h1>
      <hr className="title-hr" />
      <div className="farm-container">
        <div className="">
          <h5 className="fw-bold farm-title">Have Look at out beautiful Farm</h5>
          <p>
            We provides fresh organic fruits and vegetable which good for health and wealth.You can get best fruits and vegetable without formalin.The year was 2021. It was the best of times. 
          </p>
          <p>
          Our Goal: The goal was (and still is) to provide a service where local farms are given priority and members are able to access the freshest organic items available at a fair price.
          </p>
        </div>
        <div className="">
          <h2 className="farm-year-2020">2020</h2>
          <h1 className="farm-year-2021">2021</h1>
        </div>
        <div className="farm-img">
          <img
            src="https://i.ibb.co/WPR4pJM/pablo-merchan-montes-hy-IE90-CN6b0-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LookFarm;
