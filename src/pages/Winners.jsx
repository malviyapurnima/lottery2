import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import ContainerLayout from "../layouts/ContainerLayout";
import Cards2 from "../components/ui/Cards2";
import Button from "../components/ui/Button";
import BannerInner from "../components/banners/User/BannerInner";
import CheckLuckyNumberForm from "../components/form/user/CheckLuckyNumberForm";
import CardsLayout from "../components/ui/CardsLayout";
import useGetAllWinners from "../hooks/user/winner/useGetAllWinners";


const Winners = () => {

  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [rows, setRows] = useState([]);
  const [totalWinners, setTotalWinners] = useState(null);

  const { data: winnersData, isLoading, isError, error } = useGetAllWinners(page, limit);

  useEffect(() => {
    if (winnersData?.data) {
      setRows(prevData => prevData.concat(winnersData?.data));
      setTotalWinners(winnersData?.total_count)
    }
  }, [winnersData?.data]);

  function handleButtonClick() {
    setPage((prev) => prev + 1);
  }

  return (
    <>
      <Header />
      <BannerInner
        pagetitle={"Winners"}
        pagedetail={"From Aspiration to Achievement: Our Winners"}
      />
      <ContainerLayout>
        <div className="flex justify-center my-14">
          <CardsLayout className={"w-full md:w-3/5"}>
            <div className="bg-white text-left flex-1">
              <div className="p-4 md:p-16">
                <h1 className="text-text-2xl mb-10 md:text-text-36">Check your lucky Numbers</h1>
                <CheckLuckyNumberForm />
              </div>
            </div>
          </CardsLayout>
        </div>
      </ContainerLayout>
      <div className="bg-primary-light  py-12">
        <ContainerLayout>
          <div className="flex md:flex-row items-center flex-col items-left justify-between gap-3">
            <div className="flex-1 text-white text-center">
              <p className="text-4xl">Winning Numbers</p>
            </div>
          </div>
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-16">
          {rows.length > 0 &&
              rows.map((item, index) => (
                <Link key={index} to={`/pool/${item.id}`}>
                  <Cards2/>
                </Link>
              ))
            }
        </div>
        <div className="flex justify-center items-center mt-12 mb-12">
            {totalWinners == rows?.length ? (" ") : (
              <Button type={'button'} onClick={handleButtonClick} name={"Load More"} />
            )}
        </div>
      </ContainerLayout>
      <Footer />
    </>
  );
};

export default Winners;
