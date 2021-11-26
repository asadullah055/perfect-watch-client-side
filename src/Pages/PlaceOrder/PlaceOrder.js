import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "../Hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";

const PlaceOrder = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState([]);
  const { user } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/dashboard";
  const initialInfo = {
    name: user.displayName,
    email: user.email,
    status: "Pending",
  };
  const [orderInfo, setOrderInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };
  const handlePlaceOrder = (e) => {
    // collect order data
    e.preventDefault();
    const order = {
      ...orderInfo,
      title: orderDetails.title,
      image: orderDetails.image,
      price: orderDetails.price * parseInt(orderInfo.quantity),
    };
    fetch("https://infinite-caverns-27270.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("order success");

          history.push(redirect_uri);
        }
      });
  };

  useEffect(() => {
    fetch(`https://infinite-caverns-27270.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderDetails(data));
  }, [id]);
  return (
    <>
      <Navigation></Navigation>
      <div className="mt-3">
        <div className="container mt-4">
          <div className="row text-start">
            <div className="col-md-7">
              <div className="card mb-3">
                <div className="text-center">
                  <img
                    style={{ width: "80%" }}
                    src={orderDetails.image}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title text-start title mb-3 color-brown">
                    {orderDetails.title}
                  </h4>
                  <div className="text-start border-top border-bottom border-info p-3">
                    <h3>
                      Price :
                      <span className="color-brown">
                        {" "}
                        {orderDetails.price}{" "}
                      </span>
                      Taka
                    </h3>
                  </div>
                </div>
                <div className="ms-4">
                  <h2 className="text-start text-decoration-underline ">
                    Details
                  </h2>
                  <h6>Category: {orderDetails.category} </h6>
                  <h6>Model: {orderDetails.model} </h6>
                  <p className="text-justify">{orderDetails.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 ms-3">
              <h2 className="mb-3 text-center fs-2">Shipping address</h2>
              {/* form */}
              <form onSubmit={handlePlaceOrder}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control p-3"
                    id="formGroupExampleInput"
                    placeholder="name"
                    name="name"
                    onBlur={handleOnBlur}
                    defaultValue={user?.displayName}
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
                    defaultValue={user?.email}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tell"
                    className="form-control p-3"
                    id="formGroupExampleInput2"
                    onBlur={handleOnBlur}
                    placeholder="Phone"
                    name="phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control p-3"
                    id="formGroupExampleInput2"
                    onBlur={handleOnBlur}
                    placeholder="Quantity"
                    name="quantity"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="address"
                    className="form-control p-3"
                    id="formGroupExampleInput2"
                    onBlur={handleOnBlur}
                    placeholder="Address"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    onBlur={handleOnBlur}
                    name="courier"
                    className="form-control p-3"
                    id="formGroupExampleInput2"
                    placeholder="Courier"
                  />
                </div>
                <input
                  style={{ backgroundColor: "#f9706a" }}
                  className="btn p-3 ps-4 pe-4 fw-bold text-white"
                  type="submit"
                  value="Continue Shipping"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
