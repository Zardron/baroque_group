import React from "react";
import Carousel from "../components/Carousel";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Main from "../components/Main";
import MoreFilter from "../components/MoreFilter";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import SubFooter from "../components/SubFooter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Filter />
      <MoreFilter />
      <Main />
      <Newsletter />
      <Footer />
      <SubFooter />
    </>
  );
};

export default Home;
