import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import ContainerLayout from "../../../layouts/ContainerLayout";
import bannerImg from "../../../assets/images/banner-img.png";
import arrow from "../../../assets/images/arrow.svg";

function Banner() {
  return (
    <div className="bg-[url('/src/assets/images/banner-bg.png')] bg-cover	bg-no-repeat py-10 px-6 md:px-0 md:py-28">
      <ContainerLayout>

        <div className="flex md:flex-row items-center flex-col items-left justify-between gap-3">
          <div className="flex-1 text-white text-left">
            <p className="text-[14px]">
              <span className="text-secondary-dark">_</span>
              <span className="text-secondary-light">_</span>
              Join the excitement and win big!
            </p>
            <h1 className="text-text-36 md:text-text-5xl">
              Participate in our{" "}
              <span className="relative bg-gradient-to-r from-secondary-dark to-secondary-light text-transparent bg-clip-text">
                SMS lotteries
              </span>{" "}
              for a chance to turn your dreams into reality.
            </h1>
            <div className="flex gap-3 mt-16 flex-col md:flex-row items-start">
              <Link to={'/lotteries'}>
                <Button height={'62px'} name={"Play Lottery"} arrowIcon={arrow} />
              </Link>
              <Link to="/about">
                <div className="flex items-center justify-center text-white hover:text-secondary-dark">
                  <div className="rounded-full bg-gradient-to-r from-secondary-dark to-secondary-light p-[2px] min-w-[180px] md:min-w-[186px] h-[62px] md:h-[60px] ">
                    <div className="flex h-full w-[full] items-center justify-center bg-primary-dark hover:bg-white back rounded-full">
                      <h1 className="text-base px-2">
                        Explore more
                      </h1>
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </div>
          <div className=" text-left flex-1">
            <div className="md:px-20">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </div>
      </ContainerLayout>

    </div>
  );
}

export default Banner;
