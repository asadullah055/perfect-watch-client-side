import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id } = useParams();
  const { user, admin } = useAuth();
  const [update, setUpdate] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/dashboard/manageProduct";

  const [updateProduct, setUpdateProduct] = useState([]);
  useEffect(() => {
    fetch(`https://infinite-caverns-27270.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, [id]);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...updateProduct };
    newInfo[field] = value;
    setUpdateProduct(newInfo);
  };
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const product = {
      ...updateProduct,
    };
    console.log(product);
    fetch(`https://infinite-caverns-27270.herokuapp.com/product/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Product Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push(redirect_uri);
        }
      });
  };

  return (
    <div className="container text-center">
      <h1>Update A Product</h1>
      <div className="row justify-content-center">
        <form className="col-md-5" onSubmit={handleUpdateProduct}>
          <div className="mb-3">
            {user.email && admin && (
              <input
                type="text"
                onBlur={handleOnBlur}
                name="title"
                className="form-control p-3"
                placeholder="Product Name"
                defaultValue={update?.title}
              />
            )}
          </div>

          <div className="mb-3">
            {update._id && (
              <input
                type="number"
                onBlur={handleOnBlur}
                name="price"
                className="form-control p-3"
                placeholder="Price"
                defaultValue={update.price}
              />
            )}
          </div>
          <div className="mb-3">
            <input
              type="text"
              onBlur={handleOnBlur}
              name="model"
              className="form-control p-3"
              placeholder="Model"
              defaultValue={update.model}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              onBlur={handleOnBlur}
              name="category"
              className="form-control p-3"
              placeholder="Category"
              defaultValue={update.category}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              onBlur={handleOnBlur}
              name="image"
              className="form-control p-3"
              placeholder="Image url"
              defaultValue={update.image}
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              onBlur={handleOnBlur}
              name="description"
              className="form-control p-3"
              placeholder="Description"
              defaultValue={update.description}
            />
          </div>

          <input
            style={{ backgroundColor: "#f9706a" }}
            className="btn p-3 ps-4 pe-4 fw-bold text-white"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
