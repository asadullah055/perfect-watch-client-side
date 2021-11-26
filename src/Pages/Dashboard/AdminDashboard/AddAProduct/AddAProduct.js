import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import Swal from "sweetalert2";
const AddAProduct = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/dashboard/manageProduct";

  const [addProduct, setAddProduct] = useState([]);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...addProduct };
    newInfo[field] = value;
    setAddProduct(newInfo);
  };
  const handleAddProduct = (e) => {
    // collect order data
    e.preventDefault();
    const product = {
      ...addProduct,
    };
    fetch("https://infinite-caverns-27270.herokuapp.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Product Add Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push(redirect_uri);
        }
      });
  };
  return (
    <div className="container text-center">
      <h1>Add A Product</h1>
      <div className="row justify-content-center">
        <form className="col-md-5" onSubmit={handleAddProduct}>
          <div className="mb-3">
            <input
              type="text"
              onBlur={handleOnBlur}
              name="title"
              className="form-control p-3"
              placeholder="Product Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              onBlur={handleOnBlur}
              name="price"
              className="form-control p-3"
              placeholder="Price"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              onBlur={handleOnBlur}
              name="model"
              className="form-control p-3"
              placeholder="Model"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              onBlur={handleOnBlur}
              name="category"
              className="form-control p-3"
              placeholder="Category"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              onBlur={handleOnBlur}
              name="image"
              className="form-control p-3"
              placeholder="Image url"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              onBlur={handleOnBlur}
              name="description"
              className="form-control p-3"
              placeholder="Description"
              required
            />
          </div>

          <input
            style={{ backgroundColor: "#f9706a" }}
            className="btn p-3 ps-4 pe-4 fw-bold text-white"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
