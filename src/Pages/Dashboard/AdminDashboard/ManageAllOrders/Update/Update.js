import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const [order, setOrders] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/dashboard";
  useEffect(() => {
    fetch(`https://infinite-caverns-27270.herokuapp.com/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  //   const [UpdateOrder, setUpdateOrder] = useState([]);
  useEffect(() => {
    const url = `https://infinite-caverns-27270.herokuapp.com/order/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleAction = (e) => {
    const updateAction = e.target.value;
    const updateOrder = { ...order };
    updateOrder.status = updateAction;
    setOrders(updateOrder);
  };
  const handleUpdateUser = (e) => {
    const url = `https://infinite-caverns-27270.herokuapp.com/order/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Successfully",
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
      <div className="container">
        <h1 className="text-center">Manage All Orders</h1>
        <div className="row">
          <form onSubmit={handleUpdateUser}>
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
              {order && (
                <tbody>
                  <tr>
                    <td data-label="Name">{order.name}</td>
                    <td data-label="Email">{order.email}</td>
                    <td data-label="Booked Title">{order.title}</td>
                    <td data-label="Price">{order.price}</td>
                    <td data-label="Status">
                      <select
                        className="form-select text-uppercase"
                        onChange={handleAction}
                        value={order.status || ""}
                      >
                        <option className="text-uppercase" value="pending">
                          pending
                        </option>
                        <option className="text-uppercase" value="Shipped ">
                          Shipped
                        </option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
            <input
              className="btn btn-primary text-uppercase text-white"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
