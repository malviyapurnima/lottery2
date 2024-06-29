import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import lotteryLogo from "../../assets/images/lottery-logo.png";

function Cards2() {

  const navigate = useNavigate()

  function handleCheckNumber() {
    return navigate('/pool/123')
  }

  return (
    <>
      <div className="shadow-shadow rounded-xl flex flex-col items-center flex-1 overflow-hidden text-center p-8">
        <div className="">
          <img src={lotteryLogo} alt="img logo" className="inline-block w-64" />
        </div>
        <p className="text-[13px] text-grey-darker my-6">Drawing 05/27/24</p>
        <h2 className="text-text-22">TZS 143,000,000</h2>
        <p className="text-[15px] font-[500] my-6">
          ₹66,800,000 you can withdraw
          <br /> from Wallet
        </p>
        <Button
          name={"Check Number"}
          onClick={handleCheckNumber}
        />
        <div className="pt-6">
          <Link
            to="/pool/123"
            className="text-primary-light underline underline-offset-4 font-[600]"
          >
            Pool Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cards2;
