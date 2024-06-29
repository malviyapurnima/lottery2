import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import ContainerLayout from "../../layouts/ContainerLayout";
import Headings from "../ui/Headings";
import Cards from "../ui/Cards";
import useGetAllPools from "../../hooks/user/pools/useGetAllPools";

function CurrentRunningLottery({ initialPage, initialLimit, isHomePage = false }) {

  const navigate = useNavigate();
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [rows, setRows] = useState([]);
  const [totalPool, setTotalPool] = useState(null)

  const { data: poolsData, isLoading, isError, error } = useGetAllPools('running_pool',page, limit);

  useEffect(() => {
    if (poolsData?.data) {
      setRows(prevData => prevData.concat(poolsData?.data));
      setTotalPool(poolsData?.totalCount)
    }
  }, [poolsData?.data]);

  function handleButtonClick() {
    if (isHomePage) {
      navigate('/lotteries');
      return null;
    }
    setPage((prev) => prev + 1);
  }

  return (
    <>
      <ContainerLayout className="mb-20 ">
        <div className="text-center my-14">
          <Headings
            title={"Pick Your Lucky Number"}
            subtitle={"Current running lottery"}
          />
        </div>
        <div className="grid grid-row-1 md:grid-cols-4 gap-3 md:gap-5 ">
          {rows.length > 0 &&
            rows.map((item, index) => (
              <Link key={index} to={`/running/${item.id}`}>
                <Cards
                  logo={item?.pool_image}
                  name={item?.pool_name}
                  description={item?.pool_description}
                  tickrtPrice={item?.pool_ticket_prize}
                />
              </Link>
            ))
          }
        </div>
        <div className="flex justify-center mt-12">
          {!isHomePage && totalPool == rows?.length ? (" ") : (
            <Button type={'button'} onClick={handleButtonClick} name={isHomePage ? "See All" : "Load More"} />
          )}
        </div>
      </ContainerLayout>
    </>
  );
}

export default CurrentRunningLottery;
