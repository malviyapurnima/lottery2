import Headings from "../../ui/Headings";
import iconPlayer from "../../../assets/images/icon-player.png";
import iconlottery from "../../../assets/images/icon-lottery.png";
import iconjackpot from "../../../assets/images/icon-jackpot.png";
import aboutbannerImg from "../../../assets/images/about-img.png";

function AboutUsBanner() {
  return (
    <>
      <div className="container-full mx-auto">
        <div className="flex md:flex-row items-center flex-col items-left justify-between gap-3  mt-24">
          <div className=" text-left flex-1">
            <div className="">
              <img src={aboutbannerImg} alt="about image" />
            </div>
          </div>
          <div className="flex-1 text-white text-left p-4">
            <Headings
              title={"We provide best SMS Lottery"}
              subtitle={"About us"}
            />
            <p className="text-22 text-grey-darker mt-9 pr-0 md:pr-36">
              Welcome to Afriwinn, your trusted source for thrilling lottery
              experiences and life-changing opportunities. Our mission is to
              provide a fun and exciting way for you to try your luck while
              contributing to public welfare projects . We have been committed
              to operating with transparency, integrity, and social
              responsibility.
            </p>
            <div className="flex  mt-16 flex-col md:flex-row text-darkBlue gap-10">
              <div className="flex flex-col gap-4 items-center">
                <img src={iconPlayer} alt="" />
                <p className="text-[15px] font-[500] ">
                  <span className="font-[600]">25.3k </span>Players
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img src={iconlottery} alt="" />
                <p className="text-[15px] font-[500] ">
                  <span className="font-[600]">25.3k </span>Players
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img src={iconjackpot} alt="" />
                <p className="text-[15px] font-[500] ">
                  <span className="font-[600]">25.3k </span>Players
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsBanner;
