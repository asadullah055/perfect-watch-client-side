import React from "react";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center mb-3 fw-bold">Contact Us</h1>
        <form className="col-md-5">
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-3 border border-info border-2"
              id="formGroupExampleInput"
              placeholder="name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control p-3 border border-info border-2"
              id="formGroupExampleInput"
              placeholder="Email"
              name="name"
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control p-3 border border-info border-2"
              id="formGroupExampleInput"
              placeholder="Phone"
              name="name"
            />
          </div>
          <div className="mb-3">
            <textarea
              type="tel"
              className="form-control p-3 border border-info border-2"
              id="formGroupExampleInput"
              placeholder="Massage"
              name="name"
            />
          </div>

          <input
            style={{ backgroundColor: "#f9706a" }}
            className="btn p-3 ps-4 pe-4 fw-bold text-white"
            type="submit"
            value="Send Massage"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
