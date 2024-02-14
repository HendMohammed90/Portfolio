import React from "react";
import "./WorkSamples.css";

const WorkSamples = () => {
  return (
    <section className="work-samples-container" id="samples">
      <h5>WorkSamples</h5>
      <span>
      Explore my work samples! Here, you'll find a variety of projects that showcase what I do best. From designs to completed work, see how I bring ideas to life.
      </span>
      <div className="samples-content">
        <div className="image-container">
         
          <img src="/assets/images/workSample.png" alt="workSample" />
        </div>
        <div className="image-container">
         
          <img src="/assets/images/workSample.png" alt="workSample" />
        </div>
        <div className="image-container">
         
          <img src="/assets/images/workSample.png" alt="workSample" />
        </div>
        <div className="image-container">
         
          <img src="/assets/images/workSample.png" alt="workSample" />
        </div>
        <div className="image-container">
         
          <img src="/assets/images/workSample.png" alt="workSample" />
        </div>
        <div className="image-container">
         
          <img src="/assets/images/workSample.png" alt="workSample" />
        </div>
      </div>
    </section>
  );
};

export default WorkSamples;
