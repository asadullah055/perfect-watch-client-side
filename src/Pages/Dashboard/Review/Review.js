import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useHistory, useLocation } from "react-router";
const Review = () => {
  const { user } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/dashboard/review";
  const initialInfo = {
    name: user.displayName,
    email: user.email,
    status: "Pending",
  };
  const [reviewInfo, setReviewInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...reviewInfo };
    newInfo[field] = value;
    setReviewInfo(newInfo);
  };
  const handleReview = (e) => {
    // collect review data
    e.preventDefault();
    const review = {
      ...reviewInfo,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Review Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push(redirect_uri);
        }
      });
  };
  return (
    <div className="container">
      <h2 style={{ color: "#f9706a" }} className="text-center fw-bold">
        Please Review Our Service
      </h2>
      <div className="row justify-content-center mt-4">
        <div className="col-md-5">
          <form onSubmit={handleReview}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control p-3"
                id="formGroupExampleInput"
                placeholder="name"
                name="name"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control p-3"
                id="formGroupExampleInput2"
                onBlur={handleOnBlur}
                placeholder="Email"
                defaultValue={user.email}
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                max="5"
                className="form-control p-3"
                id="formGroupExampleInput2"
                onBlur={handleOnBlur}
                placeholder="Your rating out of 5"
                name="rating"
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                onBlur={handleOnBlur}
                name="comment"
                className="form-control p-3"
                id="formGroupExampleInput2"
                placeholder="Your Comment"
              />
            </div>
            <div className="text-center">
              <input
                style={{ backgroundColor: "#f9706a" }}
                className="btn p-3 ps-4 pe-4 fw-bold text-white"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
