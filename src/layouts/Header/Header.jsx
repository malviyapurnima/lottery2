import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import ContainerLayout from "../ContainerLayout";
import logo from "../../assets/images/logo.png";
import arrow from "../../assets/images/arrow.svg";
import Button from "../../components/ui/Button";
import SignOutIcon from "../../assets/SVGs/SignOutIcon";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function matchPath(paths) {
    return paths.some((path) => useMatch(path));
  }

  return (
    <>
      <header className="relative z-1 shadow-shadowTop bg-gradient-to-r from-primary-dark to-primary-light p-4">
        <ContainerLayout>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Afriwinn Logo" className="w-[100px]" />
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none bg-white rounded-md p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            {/* desktop menu */}
            <nav className="hidden lg:flex space-x-4 gap-4">
              <Link
                to="/"
                className={`${matchPath(["/", "/pool/*", "/running/*", "/future/*"])
                  ? "text-white flex justify-center px-3 relative after:absolute after:bottom-[-40px] after:block font-semibold after:bg-gradient-to-r from-secondary-dark to-secondary-light after:w-full after:h-1 after:rounded-full"
                  : "text-grey-light hover:text-white"
                  }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`${matchPath(["/about"])
                  ? "text-white flex justify-center px-3 relative after:absolute after:bottom-[-40px] after:block font-semibold after:bg-gradient-to-r from-secondary-dark to-secondary-light after:w-full after:h-1 after:rounded-full"
                  : "text-grey-light hover:text-white"
                  }`}
              >
                About us
              </Link>

              <Link
                to="/gallery"
                className={`${matchPath(["/gallery"])
                  ? "text-white flex justify-center px-3 relative after:absolute after:bottom-[-40px] after:block font-semibold after:bg-gradient-to-r from-secondary-dark to-secondary-light after:w-full after:h-1 after:rounded-full"
                  : "text-grey-light hover:text-white"
                  }`}
              >
                Gallery
              </Link>
              <Link
                to="/winners"
                className={`${matchPath(["/winners"])
                  ? "text-white flex justify-center px-3 relative after:absolute after:bottom-[-40px] after:block font-semibold after:bg-gradient-to-r from-secondary-dark to-secondary-light after:w-full after:h-1 after:rounded-full"
                  : "text-grey-light hover:text-white"
                  }`}
              >
                Winners
              </Link>

              <Link
                to="/lotteries"
                className={`${matchPath(["/lotteries"])
                  ? "text-white flex justify-center px-3 relative after:absolute after:bottom-[-40px] after:block font-semibold after:bg-gradient-to-r from-secondary-dark to-secondary-light after:w-full after:h-1 after:rounded-full"
                  : "text-grey-light hover:text-white"
                  }`}
              >
                Lotteries
              </Link>

              <Link
                to="/contact"
                className={`${matchPath(["/contact"])
                  ? "text-white flex justify-center px-3 relative after:absolute after:bottom-[-40px] after:block font-semibold after:bg-gradient-to-r from-secondary-dark to-secondary-light after:w-full after:h-1 after:rounded-full"
                  : "text-grey-light hover:text-white"
                  }`}
              >
                Contact us
              </Link>
            </nav>

            {isLoggedIn ? (
              <div className="hidden md:block relative">
                <button
                  className="flex items-center text-sm rounded-full focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <span className="hidden md:inline-block ml-2 text-white">
                    Hi, User Name
                  </span>
                </button>
                {/* Dropdown menu */}
                {isOpen && (
                  <div className="absolute right-0 top-8 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                    <div className="">
                      <Link
                        to="#"
                        className="block px-4 py-3 text-sm text-primary-dark hover:bg-secondary-light"
                      >
                        <span className="font-bold flex items-start mb-[-3px]">

                          <SignOutIcon fill="#0B3447" /> <span className="mt-[-2px]"> Logout</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden lg:flex space-x-4">
                <Link to={"/login"}>
                  <button className="bg-transparent border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-primary-dark">
                    Login
                  </button>
                </Link>
                <Link to={"/register"}>
                  <Button name={"Register"} width={"135px"} arrowIcon={arrow} />
                </Link>
              </div>
            )}

            {/* mobile menu */}
            <div
              className={`lg:hidden ${menuOpen ? "block" : "hidden"
                } fixed top-0 left-0 w-full h-screen bg-white z-50 ease-in-out transition-all duration-300`}
            >
              <div className="p-4">
                <button onClick={() => setMenuOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <nav className="flex flex-col mt-3 gap-4">
                  <Link
                    to="/"
                    className={`${matchPath(["/", "/pool/*", "/running/*", "/future/*"])
                      ? "font-bold"
                      : ""
                      }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`${matchPath(["/about"]) ? "font-bold" : ""}`}
                  >
                    About us
                  </Link>
                  <a
                    to="/lotteries"
                    className={`${matchPath(["/gallery"]) ? "font-bold" : ""}`}
                  >
                    Gallery
                  </a>
                  <Link
                    to="/winners"
                    className={`${matchPath(["/winners"]) ? "font-bold" : ""}`}
                  >
                    Winners
                  </Link>
                  <Link
                    to="/lotteries"
                    className={`${matchPath(["/lotteries"]) ? "font-bold" : ""
                      }`}
                  >
                    Lotteries
                  </Link>
                  <Link
                    to="/contact"
                    className={`${matchPath(["/contact"]) ? "font-bold" : ""}`}
                  >
                    Contact us
                  </Link>
                </nav>
                {isLoggedIn ? (
                  <div className="relative">
                    <button
                      className="flex items-center text-sm rounded-full focus:outline-none"
                      onClick={toggleDropdown}
                    >
                      <span className="mt-4 font-bold text-secondary-dark">
                        Hi, User Name
                      </span>
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 top-10 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                        <div className="">
                          <Link
                            to="#"
                            className="block px-4 py-3 text-sm text-primary-dark hover:bg-secondary-light"
                          >
                            <span className="font-bold flex items-start mb-[-3px]">
                              <SignOutIcon fill="#0B3447" /> <span className="mt-[-2px]"> Logout</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-start gap-4 mt-3">
                    <Link to={"/login"}>
                      <button className="bg-transparent border border-primary-dark text-primary-dark py-2 px-12 rounded-full hover:bg-white hover:text-primary-dark">
                        Login
                      </button>
                    </Link>
                    <Link to={"/register"}>
                      <Button
                        name={"Register"}
                        width={"135px"}
                        arrowIcon={arrow}
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ContainerLayout>
      </header>
    </>
  );
}

export default Header;
