import React from "react";
import "./swiper.css"; // Ensure this CSS file includes the custom styles

const CustomSwiper = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row top-columns">
          <div className="col-md-6 top-column d-flex flex-column flex-md-row">
            <div className="flex-fill me-md-3">
              <h5>Column 1</h5>
              <p>Content for the first column goes here.</p>
            </div>
            <div className="flex-fill">
              <h5>Column 2</h5>
              <p>Content for the second column goes here.</p>
            </div>
          </div>
        </div>
        <div className="row bottom-columns">
          <div className="col-md-4 bottom-column mb-4">
            <h5>Column 3</h5>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
          </div>
          <div className="col-md-4 bottom-column mb-4">
            <h5>Column 4</h5>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
          </div>
          <div className="col-md-4 bottom-column mb-4">
            <h5>Column 5</h5>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomSwiper;
.custom-footer {
  background-color: #343a40; /* Dark background */
  color: #ffffff; /* White text */
  padding-top: 3rem; /* Adjust padding as needed */
}

.top-columns {
  display: flex;
  justify-content: center; /* Center horizontally */
  flex-wrap: wrap; /* Wrap columns if necessary */
}

.top-column {
  flex: 1;
  max-width: 100%; /* Ensure columns are responsive */
  margin: 0 1rem; /* Margin between columns */
}

.bottom-columns {
  display: flex;
  justify-content: center; /* Center horizontally */
  flex-wrap: wrap; /* Wrap columns if necessary */
}

.bottom-column {
  flex: 1;
  max-width: 100%; /* Ensure columns are responsive */
  margin: 0.5rem; /* Margin between columns */
}