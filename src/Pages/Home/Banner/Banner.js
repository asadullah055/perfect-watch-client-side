import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide mt-4 mb-4 container"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="200000">
          <img
            src="https://i.ibb.co/WHzM70W/slider01.jpg"
            className="d-block w-100"
            // height="450px"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block top-50 text-start w-50">
            <h2 className="display-3 color-brown fw-bold">
              Black Great Addition
            </h2>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https:i.ibb.co/zrSvmYL/slider02.jpg"
            className="d-block w-100 "
            // height="450px"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block top-50 text-start w-50">
            <h2 className="display-3 color-brown fw-bold">A Great Addition</h2>
            <p className="d-md-block ">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
