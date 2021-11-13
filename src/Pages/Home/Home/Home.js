import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";
import Services from "../Products/Services";


const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Services></Services>
    <Reviews></Reviews>
    <Gallery></Gallery>
    <Footer></Footer>
    </div>
  );
};

export default Home;
