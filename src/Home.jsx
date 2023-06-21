import { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";
import Banner from "./components/Banner";
import { Navbar } from "react-bootstrap";
import NavbarTop from "./components/NavbarTop";

const Home = () => {

  return (
    <>
    <NavbarTop></NavbarTop>
      <Banner></Banner>
 <NewsCard></NewsCard>
    </>
  );
};

export default Home;
