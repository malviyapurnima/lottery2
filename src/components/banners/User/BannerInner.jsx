import React from "react";

function BannerInner({ pagetitle, pagedetail, className }) {
  return (
    <div className={`container-full ${className}`}>
      <div className="bg-[url('/src/assets/images/inner-banner.png')] bg-cover bg-no-repeat text-center px-5 py-10 ">
        <p className="relative text-text-sm font-[600] inline-block bg-gradient-to-r from-secondary-dark to-secondary-light text-transparent bg-clip-text">
          {pagetitle}
          <span className="block absolute left-0 -bottom-2 rounded-full bg-white w-full h-[2px]"></span>
        </p>
        <h2 className="text-[32px] md:text-text-4xl text-white my-14">{pagedetail}</h2>
        <div className="bg-[url('/src/assets/images/breadcrumbs-bg.png')] bg-contain bg-no-repeat bg-center">
          <div className="flex items-center text-white px-3 py-2 gap-3 justify-center ">
            <p className="text-text-sm">
              Home
            </p>
            &gt;
            <p className="relative text-text-sm inline-block bg-gradient-to-r from-secondary-dark to-secondary-light text-transparent bg-clip-text">
              {pagetitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerInner;
