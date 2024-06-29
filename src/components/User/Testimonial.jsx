import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import 'swiper/css/pagination';
import Headings from "../ui/Headings";
import ImageView from "../ui/ImageView";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import rightarrow from "../../assets/images/swiper-right-arrow-dot.svg";
import leftarrow from "../../assets/images/swiper-left-arrow-dot.svg";
import ContainerLayout from "../../layouts/ContainerLayout";

const breakpointNewArrival = {
  320: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 1,
  },
  600: {
    slidesPerView: 2,
  },
  991: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 3,
  },
};

function Testimonial() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };
  return (
    <ContainerLayout>
      <div className="text-center my-14 mb-20 ">
        <Headings
          subtitle={"Testimonials"}
          title={"Client’s valuable feedback"}
        />

        <div className="relative">
          <Swiper
            style={{
              "--swiper-navigation-color": "#d70021",
              "--swiper-navigation-size": "30px",
              "paddingTop": "150px",
              "paddingBottom": "50px",

            }}
            modules={[Pagination, Navigation]}
            spaceBetween={5}
            slidesPerView="auto"
            pagination={pagination}
            // Pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={breakpointNewArrival}
            className={""}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            loop={true}
            centeredSlides={false}
            speed={900}
          >
            <SwiperSlide className="py-3 px-2">
              <div className="flex items-center justify-center flex-1 relative shadow-shadow rounded-md">
                <div className="absolute rounded-[100%] -top-20 overflow-hidden w-[140px] h-[155px] border-2 border-secondary-light">
                  <ImageView src={client1} />
                </div>
                <div className="w-full rounded-md bg-gradient-to-t from-secondary-light p-[2px] mt-12 ">
                  <div className="h-full w-full items-center justify-center bg-white back p-8 rounded-md">
                    <h1 className="text-text-2xl  text-black px-2">
                      Leah Stanley
                    </h1>
                    <p className="text-base">Karunya Lottery Winner</p>
                    <p className="text-base">( Dec - 2021 )</p>
                    <p className="text-base mt-4">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <div className="flex items-center justify-center flex-1 relative shadow-shadow rounded-md">
                <div className="absolute -top-20 rounded-[100%] overflow-hidden w-[140px] h-[155px] border-2 border-secondary-light">
                  <ImageView src={client2} />
                </div>
                <div className="w-full rounded-md bg-gradient-to-t from-secondary-light p-[2px] mt-12 ">
                  <div className="h-full w-full items-center justify-center bg-white back p-8 rounded-md">
                    <h1 className="text-text-2xl  text-black px-2">
                      Leah Stanley
                    </h1>
                    <p className="text-base">Karunya Lottery Winner</p>
                    <p className="text-base">( Dec - 2021 )</p>
                    <p className="text-base mt-4">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <div className="flex items-center justify-center flex-1 relative shadow-shadow rounded-md">
                <div className="absolute rounded-[100%] -top-20 overflow-hidden w-[140px] h-[155px] border-2 border-secondary-light">
                  <ImageView src={client3} />
                </div>
                <div className="w-full rounded-md bg-gradient-to-t from-secondary-light p-[2px] mt-12 ">
                  <div className="h-full w-full items-center justify-center bg-white back p-8 rounded-md">
                    <h1 className="text-text-2xl  text-black px-2">
                      Leah Stanley
                    </h1>
                    <p className="text-base">Karunya Lottery Winner</p>
                    <p className="text-base">( Dec - 2021 )</p>
                    <p className="text-base mt-4">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <div className="flex items-center justify-center flex-1 relative shadow-shadow rounded-md">
                <div className="absolute rounded-[100%] -top-20 overflow-hidden w-[140px] h-[155px] border-2 border-secondary-light">
                  <ImageView src={client1} />
                </div>
                <div className="w-full rounded-md bg-gradient-to-t from-secondary-light p-[2px] mt-12 ">
                  <div className="h-full w-full items-center justify-center bg-white back p-8 rounded-md">
                    <h1 className="text-text-2xl  text-black px-2">
                      Leah Stanley
                    </h1>
                    <p className="text-base">Karunya Lottery Winner</p>
                    <p className="text-base">( Dec - 2021 )</p>
                    <p className="text-base mt-4">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <div className="flex items-center justify-center flex-1 relative shadow-shadow rounded-md">
                <div className="absolute -top-20 rounded-[100%] overflow-hidden w-[140px] h-[155px] border-2 border-secondary-light">
                  <ImageView src={client2} />
                </div>
                <div className="w-full rounded-md bg-gradient-to-t from-secondary-light p-[2px] mt-12 ">
                  <div className="h-full w-full items-center justify-center bg-white back p-8 rounded-md">
                    <h1 className="text-text-2xl  text-black px-2">
                      Leah Stanley
                    </h1>
                    <p className="text-base">Karunya Lottery Winner</p>
                    <p className="text-base">( Dec - 2021 )</p>
                    <p className="text-base mt-4">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
           
          </Swiper>

          <div className="swiper-button-prev w-10 h-10 rounded-lg left-auto right-[60%] bottom-0 top-auto">
            <img src={leftarrow} alt="" />
          </div>
          <div className="swiper-button-next w-10 h-10 rounded-lg right-auto left-[60%] bottom-0 top-auto">
            <img src={rightarrow} alt="" />
          </div>
        </div>

      </div>
    </ContainerLayout>
  );
}

export default Testimonial;
