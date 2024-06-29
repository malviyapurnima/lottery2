import React from "react";

function BannerInner2({ index, title, subTitle }) {
  return (
    <div className="container-full">
      <div className="bg-[url('/src/assets/images/inner-banner.png')] bg-cover bg-no-repeat text-center px-5 py-10 ">
        <div className="bg-[url('/src/assets/images/breadcrumbs-bg.png')] bg-no-repeat bg-center	">
          <div className="flex items-center text-white px-3 py-2 gap-3 justify-center ">
            <p className="text-text-sm">
              Home
            </p>
            &gt;
            <p className="relative text-text-sm inline-block bg-gradient-to-r from-secondary-dark to-secondary-light text-transparent bg-clip-text">
              {index}
            </p>
          </div>
        </div>
        <div className="md:w-[25%]">
          <h2 className="text-text-4xl text-white mt-14 text-left">{title}</h2>
        </div>
        <div className="md:w-[40%]">
          <p className="text-base text-white my-2 text-left">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerInner2;
