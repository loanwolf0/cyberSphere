import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="stars">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star-half">&#9733;</span>
        </div>
        <p className="review-date">2 days ago</p>
      </div>
      <div className="review-content">
        <h1 className="reviewer-name">John Doe</h1>
        <p className="reviewer-role">UI/UX Designer</p>
        <p className="review-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit, libero sed
          convallis porttitor, lacus libero bibendum risus, et tristique elit enim nec ante."
        </p>
      </div>
    </div>
  );
};

export default Review;
