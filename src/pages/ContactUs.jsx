import React from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import BannerInner from "../components/banners/User/BannerInner";
import ContactUsForm from "../components/form/user/ContactUsForm";
import contactimg from "../assets/images/contact-img.png";

const ContactUs = () => {
  return (
    <>
      <Header />
      <BannerInner
        pagetitle={"Contact Us"}
        pagedetail={"Get in touch by simply dropping a message"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="shadow-shadow md:w-[100%] p-0 overflow-hidden border-0 m-4 md:m-16">
          <div className="bg-white text-left flex-1">
            <div className="bg-gradient-to-r from-primary-dark to-primary-light text-center p-2 rounded-tr-lg rounded-tl-lg">
              <h1 className="text-[22px] md:text-[32px] font-[600] text-white">Get in touch with us</h1>
            </div>
            <ContactUsForm />
          </div>
        </div>
        <div className="md:flex items-center justify-end hidden">
          <img src={contactimg} alt="" className="md:w-[80%] lg:w-auto  " />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
