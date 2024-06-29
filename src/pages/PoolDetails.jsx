import React, { useState } from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import ContainerLayout from "../layouts/ContainerLayout";
import BannerInner2 from "../components/banners/User/BannerInner2";
import PoolDeatilsCard from "../components/User/PoolDeatilsCard";
import CheckNumberModal from "../components/modal/User/CheckNumberModal";


function PoolDetails() {

  const [openModal, isOpenModal] = useState(true);

  function handleClose() {
    isOpenModal(false);
  }

  return (
    <>
      <Header />
      <BannerInner2
        index={"Winning Numbers"}
        title={"Powerball"}
      // subTitle={""}
      />
      <ContainerLayout>
        <PoolDeatilsCard />
      </ContainerLayout>
      <Footer />
      <CheckNumberModal
        isOpen={openModal}
        onClose={handleClose}
      />
    </>
  );
}

export default PoolDetails;
