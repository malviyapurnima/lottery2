import React from 'react';
import ImageView from '../ui/ImageView';
import { formatISODate } from '../../utils/formatDate';
import LoaderIcon from '../../assets/SVGs/Loader';
import ViewIcon from '../../assets/SVGs/ViewIcon';
import dataNotFound from '../../assets/images/data_not_found.jpg'

const ContactUsTable = ({ loading, rows, viewHandler }) => {

  function handleView(data) {
    viewHandler(data);
  }

  if (loading)
    return <LoaderIcon />

  return (
    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-[#F8F9FB] w-[95%] ml-6">
        <thead>
          <tr>
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              Id
            </th>
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              First Name
            </th>
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              Created At
            </th>
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              Phone Number
            </th>
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              Email
            </th>
            <th className="align-middle py-2 text-base whitespace-nowrap font-semibold text-left">
              Message
            </th>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              View
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.length > 0 ? (
            rows.map((item, index) => (
              <tr key={index} className='bg-white'>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2 ">
                  {item?.id}
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2 ">
                  {item?.first_name || "--"}
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2 ">
                  {formatISODate(item?.createdAt) || "--"}
                </td>
                <td className="border-t-0 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-2">
                  {item?.phone_no || "--"}
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2">
                  {item?.email_id || "--"}
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2">
                  {item?.message || "--"}
                </td>
                <td className="border-t-0 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-2">
                  <div className='cursor-pointer ml-5' onClick={() => handleView(item)}>
                    <ViewIcon />
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

export default ContactUsTable;
