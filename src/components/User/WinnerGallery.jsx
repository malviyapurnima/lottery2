import React from "react";
import ImageView from "../ui/ImageView";
import ContainerLayout from "../../layouts/ContainerLayout";
import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";
import gallery5 from "../../assets/images/gallery5.png";
import gallery6 from "../../assets/images/gallery6.png";

function WinnerGallery() {
  return (
    <ContainerLayout className="mb-20">
      <div className="text-center my-14">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-14">
          <div className="grid gap-4">
            <ImageView src={gallery1} className={"h-auto w-full max-w-full"} />
            <div className="grid grid-cols-2 gap-4">
              <ImageView
                src={gallery4}
                className={"h-auto w-full max-w-full"}
              />
              <ImageView
                src={gallery5}
                className={"h-auto w-full max-w-full"}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <ImageView
                src={gallery2}
                className={"h-auto w-full max-w-full"}
              />
              <ImageView
                src={gallery3}
                className={"h-auto w-full max-w-full"}
              />
            </div>

            <ImageView src={gallery6} className={"h-auto w-full max-w-full "} />
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default WinnerGallery;
