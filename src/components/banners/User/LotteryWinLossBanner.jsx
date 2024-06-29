import React from "react";
import ImageView from "../../ui/ImageView";
import winimg from '../../../assets/images/win-img.png'
import bannerLoss from "../../../assets/images/bannerLoss.png"

function LotteryWinLossBanner({ type }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <ImageView
          src={type == 'win' ? winimg : bannerLoss}
          alt="image"
          height={300}
          width={300}
        />
      </div>
      <h2 className="text-[32px] mt-12 text-black font-bold">
        {type == 'win' ? "Congratulations on Winning the Lottery!" : "Better Luck Next Time!"}

      </h2>
      <p className="text-base text-gray-400">
        Thank you for participating in the SMS Lottery
      </p>
    </div>
  )
}

export default LotteryWinLossBanner;
