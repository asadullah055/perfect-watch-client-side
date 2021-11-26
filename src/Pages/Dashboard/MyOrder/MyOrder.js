import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    fetch(`https://infinite-caverns-27270.herokuapp.com/order`)
      .then((res) => res.json())
      .then((data) => {
        const users = data.filter((order) => order.email === user.email);
        setMyOrder(users);
      });
  }, [user.email]);

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
            const remainingOrders = myOrder.filter(
              (order) => order._id !== orderId
            );
            setMyOrder(remainingOrders);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="color-brown text-center fw-bold">My Order</h1>
      <div className="row row-cols-1 row-cols-md-12 g-4">
        {myOrder.map((order) => (
          <div key={order._id} className="col">
            <div className="card col-md-10 ">
              <div className="row align-items-center g-0">
                <div className="col-md-3">
                  <img
                    // style={{ width: "200px" }}
                    src={order.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title fw-bold">{order.name}</h4>
                    <h5 className="card-title fw-bold">{order.title}</h5>
                    <h6 className="card-title fw-bold mt-3">{order.price}</h6>
                    <p className="card-title">Phone: {order.phone}</p>
                    <p className="card-title">Address: {order.address}</p>
                    <p className="card-title">Courier Name: {order.courier}</p>
                    <p className="card-title">Quantity: {order.quantity}</p>
                    <div className="d-flex justify-content-between col-md-6 col-12 align-items-center">
                      <h6 className="card-title fw-bold text-danger">
                        {order.status}
                      </h6>
                      <button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="btn btn-danger"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
