import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageAllOrder.css";
const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://infinite-caverns-27270.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDeleteOrder = (orderId) => {
    const proceed = window.confirm("Are you sure, you want to deleted");
    if (proceed) {
      const url = `https://infinite-caverns-27270.herokuapp.com/order/${orderId}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = orders.filter(
              (order) => order._id !== orderId
            );
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Manage All Orders</h1>
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Order Name</th>
                <th style={{ width: "100px" }} scope="col">
                  Price
                </th>
                <th style={{ width: "20%" }} scope="col">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.length === 0 ? (
                <div className="text-center">
                  <Spinner animation="border" variant="dark" />
                </div>
              ) : (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td data-label="Name">{order.name}</td>
                    <td data-label="Email">{order.email}</td>
                    <td data-label="Booked Title">{order.title}</td>
                    <td data-label="Date">{order.price}</td>
                    <td data-label="Status">
                      {" "}
                      <span className="text-uppercase btn btn-primary">
                        {order.status}
                      </span>
                      <span className="ms-2">
                        <Link to={`/dashboard/update/${order._id}`}>
                          <button className="btn-info border rounded">
                            <i className="far fa-edit text-white"></i>
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDeleteOrder(order._id)}
                          className="ms-2 btn-danger rounded"
                        >
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
