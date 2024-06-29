import React from 'react';
import ImageView from '../ui/ImageView';
import profileDefaultIMG from '../../assets/images/profile_default_image.jpg'
import dataNotFound from '../../assets/images/data_not_found.jpg'

const UserTable = ({ rows }) => {

  return (
    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-[#F8F9FB] w-[95%] ml-6">
        <thead>
          <tr>
            <th className="align-middle py-2 text-sm whitespace-nowrap font-semibold text-left">
              Profile
            </th>
            <th className="align-middle py-2 text-sm whitespace-nowrap font-semibold text-left">
              Name
            </th>
            <th className="align-middle py-2 text-sm whitespace-nowrap font-semibold text-left">
              Phone Number
            </th>
            <th className="align-middle py-2 text-sm whitespace-nowrap font-semibold text-left">
              Particificated Pool
            </th>
            <th className="align-middle py-2 text-sm whitespace-nowrap font-semibold text-left">
              Wallet Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((item, index) => (
              <tr key={index} className='bg-white'>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 ">
                  <ImageView
                    src={item?.profile || profileDefaultIMG}
                    width={30}
                    height={30}
                    alt="pool image"
                  />
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 ">
                  {item?.name || "--"}
                </td>
                <td className="border-t-0 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                  {item?.phone_no || "--"}
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                  {item?.particificated_pool || "--"}
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                  TZS {item?.wallet_amount || "--"}
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

export default UserTable;
