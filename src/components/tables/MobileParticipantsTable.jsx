import React from 'react';
import ImageView from '../ui/ImageView';
import LoaderIcon from '../../assets/SVGs/Loader';
import dataNotFound from '../../assets/images/data_not_found.jpg'

const MobileParticipantsTable = ({ loading, rows, viewHandler, sendHandler }) => {

  function handleView(data) {
    viewHandler(data);
  }

  function sendInviationHandle(number) {
    sendHandler(number);
  }

  if (loading)
    return <LoaderIcon />

  return (
    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-[#F8F9FB] w-[95%] ml-6">
        <thead>
          <tr>
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              Uid
            </th>
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              To
            </th>
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              From
            </th>
            {/* <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              Status
            </th> */}
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              Message
            </th>
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.length > 0 ? (
            rows.map((item, index) => (
              <tr key={index} className='bg-white'>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2 ">
                  {item?.uid || "--"}
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2 ">
                  {item?.to || "--"}
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2 ">
                  {item?.from || "--"}
                </td>
                {/* <td className="border-t-0 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-2">
                  {item?.status || "--"}
                </td> */}
                <td className="w-[200px] line-clamp-1 border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2">
                  {item?.message || "--"}
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2">
                  <div className='flex gap-2'>
                    <div className='cursor-pointer'>
                    <button type="button" onClick={() => handleView(item)} className="text-white bg-primary-light hover:bg-primary-dark font-medium rounded-lg text-sm px-3 py-2.5 text-center">View</button>
                    </div>
                    <div className='cursor-pointer'>
                      <button type="button" onClick={() => sendInviationHandle(item?.to)} className="text-white bg-primary-light hover:bg-primary-dark font-medium rounded-lg text-sm px-3 py-2.5 text-center">Send Inviation</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className='text-center pl-[40%]'>
                <ImageView
                  src={dataNotFound}
                  width={200}
                  height={200}
                  alt="data not found"
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};

export default MobileParticipantsTable;
