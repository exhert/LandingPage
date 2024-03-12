/* eslint-disable no-unused-vars */
import React from "react";
// import {
//   Box,
// } from "@chakra-ui/react";
import LandingPageLayout from '../../components/Layout/LandingPageLayout'
import Hero from "../../components/LandingPage/Hero";
import Features from "../../components/LandingPage/Features";
import Newsletter from "../../components/LandingPage/NewsLetters";
import Contact from "../../components/LandingPage/Contact";
import Benefits from "../../components/LandingPage/Benefits";
// import AboutUs from "../../components/Contact/AboutUs";
// import Services from "../../components/LandingPage/Services";
// import NewsLetter from "../../components/Contact/NewsLetter";

const Home = () => {

  return (
    <LandingPageLayout>
      <Hero/>
      <Benefits/>
      <Features/>
        {/* <Box bg="white" pt={{ base: "2rem", md: "2rem" }} >
        <AboutUs />
      </Box>
       <Services/>
      //  <NewsLetter/> */}
      <Newsletter/>
      <Contact/>
    </LandingPageLayout>
  )
}

export default Home;