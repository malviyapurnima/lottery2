import React from 'react';
import ImageView from '../ui/ImageView';
import { setImagePath } from "../../utils/setImagePath";
import { formatdate } from "../../utils/formatDate";
import { setPoolTypes } from "../../utils/poolTypes";
import ToggleButton from '../ui/ToggleButton';
import LoaderIcon from '../../assets/SVGs/Loader';
import UpdateIcon from '../../assets/SVGs/UpdateIcon';
import DeleteIcon from '../../assets/SVGs/DeleteIcon';
import dataNotFound from '../../assets/images/data_not_found.jpg';
import defaultPoolIMG from '../../assets/images/default_lottery.jpg';

const PoolTable = ({ loading, rows, updateState, updateEdit, updateDelete }) => {

  function statusChange(status, poolId) {
    updateState(poolId, status);
  }

  function handleEdit(id) {
    updateEdit(id);
  }

  function handleDelete(id) {
    updateDelete(id);
  }

  if (loading)
    return <LoaderIcon />

  return (
    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-[#F8F9FB] w-full border-separate	border-spacing-y-2 ">
        <thead>
          <tr>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              Image
            </th>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              Name
            </th>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              Type
            </th>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              Ticket Price
            </th>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              Start Date
            </th>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              End Date
            </th>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              Status
            </th>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.length > 0 ? (
            rows.map((item, index) => (
              <tr key={index} className='bg-white'>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                  <ImageView
                    src={setImagePath(item?.pool_image) || defaultPoolIMG}
                    width={100}
                    alt="pool image"
                  />
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  {item?.pool_name || "--"}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  {setPoolTypes(item?.pool_type) || "--"}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  TZS {item?.pool_ticket_prize || "--"}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {formatdate(item?.pool_start_date) || "--"}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {formatdate(item?.pool_end_date) || "--"}
                </td>
                <td className='px-6'>
                  <ToggleButton
                    defaultValue={item?.pool_is_active}
                    onChangeHandler={statusChange}
                    id={item?.id}
                  />
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className='flex gap-2'>
                    <div className='cursor-pointer' onClick={() => handleEdit(item)}>
                      <UpdateIcon />
                    </div>
                    <div className='cursor-pointer'>
                      <DeleteIcon onClick={() => handleDelete(item?.id)} />
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

export default PoolTable;
