import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import Swal from "sweetalert2";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/dashboard/makeAdmin";
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleMakeAdmin = (e) => {
    const user = { email };
    fetch("https://infinite-caverns-27270.herokuapp.com/users/admin", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Admin Add Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push(redirect_uri);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h1>Make Admin</h1>
      <form onSubmit={handleMakeAdmin} className="row g-3">
        <div className="col-md-4">
          <input
            type="email"
            name="email"
            onBlur={handleOnBlur}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Make Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
