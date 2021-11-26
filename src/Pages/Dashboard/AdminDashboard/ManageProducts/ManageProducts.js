import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://infinite-caverns-27270.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleDeleteProduct = (deleteId) => {
    const proceed = window.confirm("Are you sure, you want to deleted");
    if (proceed) {
      fetch(
        `https://infinite-caverns-27270.herokuapp.com/product/${deleteId}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingProduct = products.filter(
              (product) => product._id !== deleteId
            );
            setProducts(remainingProduct);
          }
        });
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Manage Products</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.length === 0 ? (
            <div className="text-center">
              <div class="spinner-border text-info " role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            products.map((product) => (
              <div key={product._id} className="col">
                <div className="border">
                  <div className="text-center mt-2">
                    <img
                      style={{ width: "250px", height: "250px" }}
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body p-3">
                    <h5 className="card-title fw-bold color-brown">
                      {product.title}
                    </h5>
                    <p className="card-title fw-bold color-brown">
                      <span className="text-dark">Price:</span> {product.price}
                    </p>
                    <p className="card-title fw-bold color-brown">
                      <span className="text-dark">Model:</span> {product.model}
                    </p>
                  </div>
                  <div className="text-center d-flex justify-content-around mb-2">
                    <Link to={`/dashboard/updateProduct/${product._id}`}>
                      <button className="btn btn-info me-2">Update</button>
                    </Link>

                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
