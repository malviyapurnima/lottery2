import React from 'react';
import ImageView from './ImageView';
import { setImagePath } from "../../utils/setImagePath";
import defaultLotteryIMG from "../../assets/images/default_lottery.jpg";
import arrowNormal from '../../assets/images/arrow-normal.svg';
import lockIcon from '../../assets/images/icon-lock.png';

function FutureCards({ logo, name, description, tickrtPrice }) {
  return (
    <div className="shadow-shadow rounded-xl relative overflow-hidden flex flex-col justify-between">
      <div className="p-8">
        <div>
          <ImageView src={setImagePath(logo) || defaultLotteryIMG} alt="lottery logo" className={'w-60 h-[50px] object-contain object-left	'} />
        </div>
        <h2 className="text-text-2xl my-6">{name}</h2>
        <p className="text-[13px] w-60 h-14 text-grey-darker line-clamp-3">
          {description}
        </p>
        <p className="text-[15px] font-[500] my-6">
          <span className="font-[600]">Ticket Price : </span>TZS {tickrtPrice}
        </p>
        <p className="text-[15px] font-[500]">
          <span className="font-[600]">Draw Frequency:</span> Daily (each
          <br /> morning)
        </p>
      </div>
      <div className="flex bg-primary-light text-white p-6 justify-between">
        <p>Send a message </p>
        <img src={arrowNormal} alt="" />
        <p>*1234#</p>
      </div>
      <div className='absolute w-full h-full backdrop-blur z-10 top-0 flex items-center justify-center'>
        <img src={lockIcon} alt="" />
      </div>
    </div>
  )
}

export default FutureCards