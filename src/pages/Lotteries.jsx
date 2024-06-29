import React from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import CurrentRunningLottery from "../components/User/CurrentRunningLottery";
import FutureLottery from "../components/User/FutureLottery";
import BannerInner from "../components/banners/User/BannerInner";
import ContactUsBanner from "../components/banners/User/ContactUsBanner";

const Lotteries = () => {
  return (
    <>
      <Header />
      <BannerInner pagetitle={"Lotteries"}  pagedetail={"Fortune's Gateway: Welcome to Our Lotteries"}/>
      <CurrentRunningLottery initialPage={1} initialLimit={4} isHomePage={false} />
      <ContactUsBanner />
      <FutureLottery initialPage={1} initialLimit={4} isHomePage={false} />
      <Footer />
    </>
  );
};

export default Lotteries;
