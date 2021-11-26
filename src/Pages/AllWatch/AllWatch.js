import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Watches from "../Home/Watches/Watches";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./AllWatch.css";
const AllWatch = () => {
  const [watch, setWatch] = useState([]);
  useEffect(() => {
    fetch("https://infinite-caverns-27270.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setWatch(data));
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <div className="container">
        <div className="text-center mt-3 mb-3 text-uppercase">
          <h1 className="fw-bold color-brown">Our All Watch</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {watch.length === 0 ? (
            <div className="text-center">
              <Spinner animation="border" variant="info" />
            </div>
          ) : (
            watch.map((watch) => (
              <Watches key={watch._id} watch={watch}></Watches>
            ))
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AllWatch;
