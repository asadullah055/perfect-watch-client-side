import React from "react";

const Footer = () => {
  return (
    <div className="bg-light mt-5">
      <div className="container w-50">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <h3 className="text-dark fw-bold p-3 text-start">Contact Us</h3>
            <div className="">
              <ul className="list list-unstyled text-dark text-start ">
                <li className="p-2 fw-bold">Phone : +8801724-002000</li>
                <li className="p-2 fw-bold">Email : perfect@gmail.com</li>
                <li className="p-2 fw-bold">
                  Address: Mirpur-10 <br /> Dhaka-1200
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <h3 className="text-dark fw-bold p-3 text-start">Support</h3>
            <ul className="list list-unstyled text-dark text-start ">
              <li className="p-2 fw-bold">Contact Us</li>
              <li className="p-2 fw-bold">supportadmin@gmail.com</li>
              <li className="p-2 fw-bold">
                Address: Mirpur-10 <br /> Dhaka-1200
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-dark" />
      </div>
      <div className="text-dark text-center fw-bolder p-2 pb-3">
        Copyright 2021 <span className=" fs-6 fw-bold">Perfect Watch</span>{" "}
      </div>
    </div>
  );
};

export default Footer;
