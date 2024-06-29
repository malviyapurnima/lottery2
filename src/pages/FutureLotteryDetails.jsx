import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { formatdate } from "../utils/formatDate";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import ContainerLayout from "../layouts/ContainerLayout";
import BannerInner2 from "../components/banners/User/BannerInner2";
import FutureCards from "../components/ui/FutureCards";
import Button from "../components/ui/Button";
import Headings from "../components/ui/Headings";
import arrow from "../assets/images/arrow.svg";
import arrowNormal from "../assets/images/arrow-normal.svg";
import BannerInner from "../components/banners/User/BannerInner";
import useGetPoolById from "../hooks/user/pools/useGetPoolById";


function FutureLotteryDetails() {

  const { poolId } = useParams();
  const [poolDetails, setPoolsDetails] = useState({});
  const { data: poolData } = useGetPoolById(poolId);

  useEffect(() => {
    if (poolData?.data) {
      setPoolsDetails(poolData?.data);
    }
  }, [poolData?.data]);

  return (
    <>
      <Header />
      <BannerInner2
        index={"Future lottery"}
        title={poolDetails?.pool_name}
        subTitle={poolDetails?.pool_description}
      />

      <ContainerLayout>
        <div className="grid grid-row-1 md:grid-cols-2 gap-5 my-14">
          <div>
            <h3 className="text-[48px] font-[500]">{poolDetails?.pool_name || '--'}</h3>
            <p className="text-[24px] font-[400] my-6">
              <span className="font-[600]">Current Jackpot: </span>
              {poolDetails?.pool_description || '--'}
            </p>
            <p className="text-[24px] font-[400] my-6">
              <span className="font-[600]">Start Date: </span>
              {formatdate(poolDetails?.pool_start_date) || '--'}
            </p>
            <p className="text-[24px] font-[400] my-6">
              <span className="font-[600]">End Date: </span>
              {formatdate(poolDetails?.pool_end_date) || '--'}
            </p>
            <p className="text-[24px] font-[400] my-6">
              <span className="font-[600]">Winner Announcement Date: </span>
              {formatdate(poolDetails?.pool_announcement_date) || '--'}
            </p>
            <div className="inline-flex bg-primary-light text-white mt-5 p-6 justify-between rounded">
              <p>Send a message </p>
              <img src={arrowNormal} alt="" />
              <p>*1234#</p>
            </div>
          </div>
          <div className="flex lg:justify-end">
            <div className="lg:w-1/2 ">
              <FutureCards
                logo={poolDetails?.pool_image}
                name={poolDetails?.pool_name}
                description={poolDetails?.pool_description}
                tickrtPrice={poolDetails?.pool_ticket_prize}
              />
            </div>
          </div>
        </div>
      </ContainerLayout>
      <Footer />
    </>
  );
}

export default FutureLotteryDetails;
