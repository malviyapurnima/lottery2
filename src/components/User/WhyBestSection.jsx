import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import sslIcon from "../../assets/images/icon-ssl.svg";
import notificationIcon from "../../assets/images/icon-notification.svg";
import linesIcon from "../../assets/images/icon-long-lines.svg";
import ticketsIcon from "../../assets/images/icon-tickets.svg";

function WhyBestSection() {
  return (
    <div className="bg-[url('/src/assets/images/why-best-bg.png')] bg-cover	bg-no-repeat py-10 px-6 md:px-0 md:py-28">

        <ContainerLayout>
        <div className="flex md:flex-row items-center flex-col items-left justify-between gap-14 md:gap-32">
          <div className="flex-1 text-white text-left">
            <h2 className="text-2xl mb-16 flex items-end	">
              <span className="w-5 h-1 block bg-secondary-dark"></span>
              <span className="w-5 h-1 block bg-secondary-light"></span>Why we
              are best
            </h2>
            <h1 className="md:text-text-title text-text-36 md:leading-[64px] pr-10">
              We are proud to provide best services to our clients
            </h1>
            <div className="flex items-center gap-2 mt-16">
              <div className="bg-gradient-to-r from-secondary-dark to-secondary-light w-64 h-1 rounded"></div>
              <div className="bg-gradient-to-r from-secondary-dark to-secondary-light w-2 h-2 rounded-full">

              </div>
            </div>
          </div>
          <div className=" text-left flex flex-wrap	gap-x-12 gap-y-16 w-full md:w-1/2 justify-between text-white">
            <div className="w-full md:w-[42%] ">
              <img src={sslIcon} alt="icon" />
              <h3 className="text-text-2xl mt-10">SSL security layer</h3>
              <p className="text-base	">
                its the standard technology for keeping an internet connection
                secure and safeguarding any sensitive.
              </p>
            </div>
            <div className="w-full md:w-[42%] ">
              <img src={notificationIcon} alt="icon" />
              <h3 className="text-text-2xl mt-10">Quick Notifications</h3>
              <p className="text-base	">
                When you’ve successfully matched enough numbers to win a prize,
                we notify you via email and/or SMS
              </p>
            </div>
            <div className="w-full md:w-[42%] ">
              <img src={linesIcon} alt="icon" />
              <h3 className="text-text-2xl mt-10">No Lost Tickets</h3>
              <p className="text-base	">
                Since it’s all by chance, enjoy picking your numbers or seeing
                what the lottery terminal generates.
              </p>
            </div>
            <div className="w-full md:w-[42%] ">
              <img src={ticketsIcon} alt="icon" />
              <h3 className="text-text-2xl mt-10">No Long Lines</h3>
              <p className="text-base	">
                Since it’s all by chance, enjoy picking your numbers or seeing
                what the lottery terminal generates.
              </p>
            </div>
          </div>
        </div>
        </ContainerLayout>

    </div>
  );
}

export default WhyBestSection;
