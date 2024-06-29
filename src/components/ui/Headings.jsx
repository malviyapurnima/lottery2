import React from "react";

function Headings({ title, subtitle }) {
  return (
    <div className="">
      <h2 className="text-2xl font-[600] relative bg-gradient-to-r from-secondary-dark to-secondary-light text-transparent bg-clip-text">
        {subtitle}
      </h2>

      <h1 className="text-darkBlue relative text-text-2xl md:text-text-title inline-block">
        {title}
        <span className="block absolute left-0 -bottom-2 rounded-full bg-gradient-to-r from-secondary-dark to-secondary-light w-14 h-1"></span>
      </h1>

    </div>
  );
}

export default Headings;
