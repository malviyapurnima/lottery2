import React from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import BannerInner from "../components/banners/User/BannerInner";
import AboutUsBanner from "../components/banners/User/AboutUsBanner";
import ContactUsBanner from "../components/banners/User/ContactUsBanner";
import WhyBestSection from "../components/User/WhyBestSection";
import Testimonial from "../components/User/Testimonial";
import Team from "../components/User/Team";


const AboutUs = () => {
  return (
    <>
      <Header />
      <BannerInner pagetitle={"About Us"} pagedetail={"We Offer a Wide Variety of Lotteries"} routeTitle={"About Us"} />
      <AboutUsBanner />
      <ContactUsBanner />
      <Team />
      <WhyBestSection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default AboutUs;
