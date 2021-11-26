import React from "react";
import { Link } from "react-router-dom";
import "./Watches.css";
const Watches = ({ watch }) => {
  const { image, price, title, description, _id } = watch;
  return (
    <div className="col">
      <div className="border">
        <div className="text-center mt-2">
          <img
            style={{ width: "350px", height: "350px" }}
            src={image}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body p-3">
          <h4 className="card-title fw-bold color-brown">{title}</h4>
          <p className="card-text">{description.slice(0, 200)}</p>
          <h4 className="card-title fw-bold color-brown">
            <span className="text-dark">Price:</span> {price}
          </h4>
          <Link to={`/placeOrder/${_id}`}>
            <button
              style={{ backgroundColor: "#f9706a" }}
              className="btn text-uppercase fw-bold mt-3 text-white bg-brown"
            >
              Order Now &gt;&gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Watches;
