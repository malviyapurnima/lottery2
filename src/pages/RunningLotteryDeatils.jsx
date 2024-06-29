import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import ContainerLayout from "../layouts/ContainerLayout";
import BannerInner2 from "../components/banners/User/BannerInner2";
import Cards from "../components/ui/Cards";
import Button from "../components/ui/Button";
import Headings from "../components/ui/Headings";
import arrow from "../assets/images/arrow.svg";
import arrowNormal from "../assets/images/arrow-normal.svg";
import megamillionlogo from "../assets/images/megamillionslogo.png";
import useGetPoolById from "../hooks/user/pools/useGetPoolById";
import useGetAllPools from "../hooks/user/pools/useGetAllPools";

function RunningLotteryDeatils() {

  const { poolId } = useParams();

  const [poolDetails, setPoolsDetails] = useState({});
  const [pools, setPools] = useState([]);

  const { data: poolData } = useGetPoolById(poolId);
  const { data: allpools } = useGetAllPools('running_pool',1, 4);

  useEffect(() => {
    if (poolData?.data) {
      setPoolsDetails(poolData?.data);
    }
  }, [poolData?.data]);

  useEffect(() => {
    if (allpools?.data) {
      setPools(allpools?.data);
    }
  }, [allpools?.data]);

  return (
    <>
      <Header />
      <div className="relative">
        <BannerInner2
          index={"Current running lottery"}
          title={poolDetails?.pool_name}
          subTitle={poolDetails?.pool_description}
        />
        <div className="m-6 md:m-0 md:absolute md:top-36 z-10 md:right-28">
          <Cards
            logo={poolDetails?.pool_image}
            name={poolDetails?.pool_name}
            description={poolDetails?.pool_description}
            tickrtPrice={poolDetails?.pool_ticket_prize}
          />
        </div>
      </div>
      <ContainerLayout>
        <div className="my-12">
          <h3 className="text-text-4xl">Missing Out?</h3>
          <p className="text-base mt-2 mb-8">
            Get our contact number for more
            <br /> chances to win!
          </p>
          <Link to={"/register"}>
            <Button name={"Ragister"} arrowIcon={arrow} />
          </Link>
        </div>
      </ContainerLayout>
      <div className="container-full bg-primary-light p-4 md:p-8">
        <ContainerLayout>
          <div className="grid grid-rows-1 md:grid-cols-3 gap-5 items-center">
            <div>
              <h1 className="text-[50px] md:text-[80px] font-[600] relative bg-gradient-to-r from-secondary-dark to-secondary-light text-transparent bg-clip-text leading-[90px]">
                Drawing
                <br /> Show
              </h1>
            </div>
            <div>
              <img src={megamillionlogo} alt="" className="w-[200px]" />
            </div>
            <div className="md:px-20">
              <p className="text-white text-text-sm ">
                Drawings are every Tuesday and Friday at 10:00 p.m. Tickets must
                be purchased by 9:00 p.m. on drawing days.
              </p>
              <div className="inline-flex gap-3 bg-primary-light text-white py-6 justify-between">
                <p>Send a message </p>
                <img src={arrowNormal} alt="" />
                <p>*1234#</p>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <div className="my-14">
          <div className="text-center mb-8">
            <Headings subtitle={"Recommended Games"} />
          </div>
          <div className="grid grid-row-1 md:grid-cols-4 gap-3 md:gap-5 ">
            {pools.length > 0 &&
              pools.map((item, index) => (
                <Link key={index} to={`/running/${item.id}`}>
                  <Cards
                    logo={item?.pool_image}
                    name={item?.pool_name}
                    description={item?.pool_description}
                    tickrtPrice={item?.pool_ticket_prize}
                  />
                </Link>
              ))
            }
          </div>
        </div>
        <div className="bg-[#116F801A]  rounded p-3 md:p-14 my-14 flex items-center flex-col">
          <h3 className="text-text-2xl md:text-text-4xl mb-5 text-center">How To Play</h3>
          <p className="text-base md:text-text-sm text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="my-8 w-full md:w-auto">
            <Cards
              logo={poolDetails?.pool_image}
              name={poolDetails?.pool_name}
              description={poolDetails?.pool_description}
              tickrtPrice={poolDetails?.pool_ticket_prize}
            />
          </div>
        </div>
        <div className="bg-[#116F801A]  rounded p-3 md:p-14 my-14 ">
          <h3 className="text-text-2xl md:text-text-4xl mb-5 text-center">Prizes and Odds</h3>

          <div className="relative overflow-x-auto">
            <table className="w-full border-separate border-spacing-x-8  md:border-spacing-x-16 md:border-spacing-y-4">
              <thead>
                <tr className="text-left">
                  <th className="whitespace-nowrap">Match:</th>
                  <th className="whitespace-nowrap">To Win:</th>
                  <th className="whitespace-nowrap">Approx. Odds:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="whitespace-nowrap">5 of 5 + Mega Ball</td>
                  <td className="whitespace-nowrap">JACKPOT*</td>
                  <td className="whitespace-nowrap">1 in 302,575,350.00</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap">5 of 5</td>
                  <td className="whitespace-nowrap">$1,000,000</td>
                  <td className="whitespace-nowrap">1 in 12,607,306.00</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap">4 of 5 + Mega Ball</td>
                  <td className="whitespace-nowrap">$10,000</td>
                  <td className="whitespace-nowrap">1 in 931,001.00</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap">4 of 5</td>
                  <td className="whitespace-nowrap">$500</td>
                  <td className="whitespace-nowrap">1 in 38,792.00</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap">4 of 5</td>
                  <td className="whitespace-nowrap">$500</td>
                  <td className="whitespace-nowrap">1 in 38,792.00</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap">4 of 5</td>
                  <td className="whitespace-nowrap">$500</td>
                  <td className="whitespace-nowrap">1 in 38,792.00</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap">4 of 5</td>
                  <td className="whitespace-nowrap">$500</td>
                  <td className="whitespace-nowrap">1 in 38,792.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-base md:text-text-sm text-center mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </ContainerLayout>
      <Footer />
    </>
  );
}

export default RunningLotteryDeatils;
