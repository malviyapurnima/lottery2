import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards2 from "../ui/Cards2";
import ContainerLayout from "../../layouts/ContainerLayout";
import rightarrow from "../../assets/images/right-arrow-icon.svg";
import leftarrow from "../../assets/images/left-arrow-icon.svg";
import useGetAllWinners from "../../hooks/user/winner/useGetAllWinners";


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
    slidesPerView: 4,
  },
  1200: {
    slidesPerView: 4,
  },
};

function WinningNumber() {

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [rows, setRows] = useState([]);

  const { data: winnersData, isLoading, isError, error } = useGetAllWinners(page, limit);

  useEffect(() => {
    if (winnersData?.data) {
      setRows(winnersData?.data);
    }
  }, [winnersData?.data]);

  return (
    <>
      <div className="bg-primary-light  py-12">
        <ContainerLayout>
          <div className="flex md:flex-row items-center flex-col items-left justify-between gap-3">
            <div className="flex-1 text-white text-center">
              <p className="text-4xl">Winning Numbers</p>
            </div>
          </div>
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <div className="flex gap-5 px-2 md:px-20 relative mt-14">
          <Swiper
            style={{
              "--swiper-navigation-color": "#d70021",
              "--swiper-navigation-size": "30px",
            }}
            modules={[Pagination, Navigation]}
            spaceBetween={5}
            slidesPerView="auto"
            Pagination={{ clickable: true }}
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
              <Cards2 />
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <Cards2 />
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <Cards2 />
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <Cards2 />
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <Cards2 />
            </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
              <Cards2 />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-prev w-10 h-10 rounded-lg bg-grey-darker hover:bg-gradient-to-r from-secondary-dark to-secondary-light">
            <img src={leftarrow} alt="" />
          </div>
          <div className="swiper-button-next w-10 h-10 rounded-lg bg-grey-darker hover:bg-gradient-to-r from-secondary-dark to-secondary-light">
            <img src={rightarrow} alt="" />
          </div>
        </div>
      </ContainerLayout>
    </>
  );
}

export default WinningNumber;
