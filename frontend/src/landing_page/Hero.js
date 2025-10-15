import React from "react";

function Hero() {
  return (
    <div className="hero-section position-relative text-white">
      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/fire.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="container position-relative py-5">
        {/* Header */}
        <div className="row p-5 mb-5 mt-5">
          <h1 className="display-5 text-center fw-bold">
            FOREST FIRE PREDICTION AND PROBABILITY MAPPING
          </h1>
          <p className="lead text-center">
            Predict 🌍 | Protect 🌱 | Rescue the Environment 🌳
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="row p-5 mt-5 border-top fs-6 align-items-center">
          {/* Left Column */}
          <div className="col-md-6 mt-3 text-center">
            <p className="text-light mt-3">
              Forest fires are one of the most devastating natural disasters,
              leading to loss of biodiversity and impacting climate. Our system
              helps predict fire-prone areas using geographical coordinates so
              that preventive action can be taken in time.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-6 mt-3">
            <div className="card bg-dark bg-opacity-75 text-white p-4 shadow">
              <h4 className="mb-4 text-warning">Enter Coordinates</h4>
              <div className="mb-3">
                <label className="form-label">Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter latitude"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter longitude"
                />
              </div>
              <button className="btn btn-danger w-100 fw-bold">
                🔥 Predict Fire Risk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
