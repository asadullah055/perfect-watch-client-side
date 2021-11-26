import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const ReviewHome = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://infinite-caverns-27270.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="mt-1" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="container pt-4 pb-5 mb-5">
        <h1 className="text-center fw-bold color-brown">Customer Reviews</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {review.map((reviews) => (
            <div key={reviews._id} className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{reviews.name}</h5>
                  <Rating
                    className="text-warning"
                    initialRating={reviews.rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                  ></Rating>
                  <p className="card-text">{reviews.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewHome;
