import React from "react";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import SubFooter from "../components/SubFooter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Filter />
      <Main />
      <Newsletter />
      <Footer />
      <SubFooter />
    </>
  );
};

export default Home;
