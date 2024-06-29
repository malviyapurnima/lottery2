import React from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import BannerInner from "../components/banners/User/BannerInner";
import WinnerGallery from "../components/User/WinnerGallery";

const Gallery = () => {
  return (
    <>
      <Header />
      <BannerInner pagetitle={"Gallery"} pagedetail={"Artistic Visions: Explore Our Gallery"} />
      <WinnerGallery />
      <Footer />
    </>
  );
};

export default Gallery;
