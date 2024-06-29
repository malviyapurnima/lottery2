import React from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import Banner from "../components/banners/User/Banner";
import CurrentRunningLottery from "../components/User/CurrentRunningLottery";
import FutureLottery from "../components/User/FutureLottery";
import WinningNumber from "../components/User/WinningNumber";
import AboutUsbanner from "../components/banners/User/AboutUsBanner";
import ContactUsBanner from "../components/banners/User/ContactUsBanner";
import WhyBestSection from "../components/User/WhyBestSection";
import WinnerGallery from "../components/User/WinnerGallery";
import Testimonial from "../components/User/Testimonial";
import Headings from "../components/ui/Headings";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Header />
        <Banner />
        <WinningNumber/>
        <AboutUsbanner />
        <ContactUsBanner />
        <CurrentRunningLottery initialPage={1} initialLimit={4} isHomePage={true}/>
        <WhyBestSection />
        <FutureLottery initialPage={1} initialLimit={4} isHomePage={true}/>
        <div className="text-center">
          <Headings
            subtitle={"Gallery images"}
            title={"Our Lottery Winners Gallery"}
          />
        </div>
        <WinnerGallery />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default Home;
