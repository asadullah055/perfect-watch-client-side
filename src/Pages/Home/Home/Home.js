import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import ReviewHome from "../ReviewHome/ReviewHome";
import Watch from "../Watch/Watch";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Watch></Watch>
      <ReviewHome></ReviewHome>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
