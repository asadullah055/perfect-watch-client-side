import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Watches from "../Watches/Watches";

const Watch = () => {
  const [watch, setWatch] = useState([]);
  useEffect(() => {
    fetch("https://infinite-caverns-27270.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setWatch(data));
  }, []);
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="color-brown mt-2 mb-3 text-decoration-underline">
          Our Best Watch
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {watch.length === 0 ? (
          <div className="text-center">
            <Spinner animation="border" variant="info" />
          </div>
        ) : (
          watch
            .slice(0, 6)
            .map((watch) => <Watches key={watch._id} watch={watch}></Watches>)
        )}
      </div>
    </div>
  );
};

export default Watch;
