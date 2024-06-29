import React from "react";
import CardsLayout from "../ui/CardsLayout";
import ImageView from "../ui/ImageView";
import arrowNormal from "../../assets/images/arrow-normal.svg";
import logo from "../../assets/images/lottery-logo.png";

function PoolDeatilsCard() {
  return (
    <CardsLayout className={'text-center p-14'}>
      <div className="text-center flex items-center flex-col">
        <div>
          <ImageView
            src={logo}
            alt="lottery logo"
            className={"w-60 h-[50px] object-contain object-left	"}
          />
        </div>
        <h2 className="text-text-2xl my-6">Power Ball</h2>
        <p className="text-[13px] text-grey-darker">
          The Dear Morning series is one of the several daily lotteries run by
          the Sikkim State Government.
        </p>
        <p className="text-[15px] font-[500] my-6">
          <span className="font-[600]">Ticket Price : </span>TZS
        </p>
        <p className="text-[15px] font-[500]">
          <span className="font-[600]">Draw Frequency:</span> Daily (each
         morning)
        </p>
        <p className="text-[15px] font-[500] my-6">
          <span className="font-[600]">Drawing:</span> 05/27/24
        </p>
        <p className="text-text-2xl font-[600]">
          TZS143,000,000
        </p>
        <p className="text-[15px] font-[500] my-6">
        ₹66,800,000 you can withdraw from Wallet
        </p>
      </div>
      <div className="flex mx-auto w-60 rounded-md bg-primary-light text-white p-6 justify-between">
        <p>Send a message </p>
        <img src={arrowNormal} alt="" />
        <p>*1234#</p>
      </div>
    </CardsLayout>
  );
}

export default PoolDeatilsCard;
