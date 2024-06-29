import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import IconFb from "../../assets/images/icon-facebook.svg";
import IconTw from "../../assets/images/icon-twitter.svg";
import IconIn from "../../assets/images/icon-insta.svg";
import ContainerLayout from "../ContainerLayout";
import iconSupport from "../../assets/images/icon-support.svg";

function Footer() {
  return (
    <footer className="relative">
      <div className="bg-[url('/src/assets/images/footerbg.png')] bg-cover	bg-no-repeat py-10 ">
        <ContainerLayout className="text-white">
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="Afriwinn Logo" className="mb-4" />
            <p className="text-sm mb-4">
              Lottery players can play Virginia Lottery games online from
              <br /> anywhere in Virginia on a phone, tablet or computer.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Link
                // to="/terms"
                className="text-[10px] md:text-sm hover:text-secondary-light"
              >
                Term and condition
              </Link>
              <span className="text-secondary-dark">|</span>
              <Link
                // to="/help"
                className="text-[10px] md:text-sm hover:text-secondary-light"
              >
                Help & Support
              </Link>
              <span className="text-secondary-dark">|</span>
              <Link
                // to="/privacy"
                className="text-[10px] md:text-sm hover:text-secondary-light"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </ContainerLayout>
      </div>
      <div className="bg-gradient-to-r from-primary-dark to-primary-light py-9 shadow-[0_-4px_20px_0px_rgba(0,0,0,0.25)]">
        <ContainerLayout>
          <div className="flex md:flex-row flex-col gap-3 justify-between text-white">
            <p className="text-[14px] text-center md:text-start">
              copyright © 2024, all rights reserved by Afriwinn
            </p>

            <div className="flex justify-center space-x-4 ">
              <div className="rounded-full bg-gradient-to-r from-secondary-dark to-secondary-light p-[1px] w-12 h-12 ">
                <div className="flex h-full w-full items-center justify-center bg-primary-dark back rounded-full">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-light rounded-full p-2 "
                  >
                    <img src={IconFb} alt="" />
                  </a>
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-secondary-dark to-secondary-light p-[1px] w-12 h-12 ">
                <div className="flex h-full w-full items-center justify-center bg-primary-dark back rounded-full">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-light rounded-full p-2 "
                  >
                    <img src={IconTw} alt="" />
                  </a>
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-secondary-dark to-secondary-light p-[1px] w-12 h-12 ">
                <div className="flex h-full w-full items-center justify-center bg-primary-dark back rounded-full">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-light rounded-full p-2 "
                  >
                    <img src={IconIn} alt="" />
                  </a>
                </div>
              </div>


            </div>
            <div className="flex justify-center items-center space-x-4 text-[14px]">
              <Link to="/" className="hover:text-secondary-light">
                Home
              </Link>
              <Link to="/about" className="hover:text-secondary-light">
                About Us
              </Link>
              <Link to="/lotteries" className="hover:text-secondary-light">
                Lotteries
              </Link>
              <Link to="/contact" className="hover:text-secondary-light">
                Contact Us
              </Link>
            </div>
          </div>
        </ContainerLayout>
      </div>
      <div className="p-2 absolute -top-[40px] right-5 flex items-center justify-center bg-gradient-to-r from-secondary-dark to-secondary-light rounded-full w-20 h-20 border-2 border-secondary-light">
        <img src={iconSupport} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
