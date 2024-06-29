import React from 'react';
import ImageView from '../ui/ImageView';
import { setImagePath } from "../../utils/setImagePath";
import ToggleButton from '../ui/ToggleButton';
import LoaderIcon from '../../assets/SVGs/Loader';
import UpdateIcon from '../../assets/SVGs/UpdateIcon';
import DeleteIcon from '../../assets/SVGs/DeleteIcon';
import profileDefaultIMG from '../../assets/images/profile_default_image.jpg'
import dataNotFound from '../../assets/images/data_not_found.jpg'

const AgentTable = ({ loading, rows, updateState, updateEdit, updateDelete }) => {

  function statusChange(status, agentId) {
    updateState(agentId, status);
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
              Phone No
            </th>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              Email
            </th>
            <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
              Designation
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
                <td className="border-t-0 px-6 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left text-blueGray-700 ">
                  <ImageView
                    src={setImagePath(item?.profile_image) || profileDefaultIMG}
                    width={40}
                    alt="agent image"
                  />
                </td>
                <td className="border-t-0 px-6 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                  {item?.first_name || "--"}
                </td>
                <td className="border-t-0 px-6 py-2 align-center border-l-0 border-r-0 text-xs whitespace-nowrap">
                  {item?.phone_no || "--"}
                </td>
                <td className="border-t-0 px-6 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                  {item?.email_id || "--"}
                </td>
                <td className="border-t-0 px-6 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                  {item?.designation || "--"}
                </td>
                <td className='px-6'>
                  <ToggleButton
                    defaultValue={item?.is_active}
                    onChangeHandler={statusChange}
                    id={item?.id}
                  />
                </td>
                <td className="border-t-0 px-6 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
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

export default AgentTable;
