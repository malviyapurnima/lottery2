import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import ImageView from '../ui/ImageView';
import { setImagePath } from '../../utils/setImagePath';
import useCreatePool from '../../hooks/admin/pools/useCreatePool';
import useUpdatePool from '../../hooks/admin/pools/useUpdatePool';

function PoolForm({ isUpdate, initialData, onClose }) {

    const queryClient = useQueryClient();
    const { handleSubmit, control, reset, formState: { errors } } = useForm();
    const { mutate: createPool } = useCreatePool();
    const { mutate: updatePool } = useUpdatePool();
    const [image, setImage] = useState(null);

    const handleFileChange = (files) => {
        setImage(URL.createObjectURL(files[0]));
    };

    const onSubmit = async (data) => {

        const postData = {
            pool_type: data?.pool_type,
            pool_name: data?.pool_name,
            pool_ticket_prize: data?.pool_ticket_prize,
            pool_spots_limit: data?.pool_spots_limit,
            pool_winner_prize: data?.pool_winner_prize,
            pool_start_date: data?.pool_start_date,
            pool_end_date: data?.pool_end_date,
            pool_start_time: data?.pool_start_time,
            pool_end_time: data?.pool_end_time,
            pool_description: data?.pool_description
        };

        if (isUpdate) {
            try {
                postData.id = initialData?.id
                if (image) {
                    postData.pool_image = data?.pool_image[0]
                }
                await updatePool(postData, {
                    onSuccess: (data) => {
                        if (data.status === true) {
                            queryClient.invalidateQueries("get_all_pools");
                            reset();
                            onClose();
                            toast.success(data.message);
                        } else {
                            toast.error(data.message);
                        }
                    },
                    onError: (err) => {
                        toast.error(err.message);
                        console.log('onError-err', err);
                    },
                })
            } catch (err) {
                console.error('Error admin update pool:', err);
            }
        } else {
            try {
                postData.pool_image = data?.pool_image[0]
                await createPool(postData, {
                    onSuccess: (data) => {
                        if (data.status === true) {
                            queryClient.invalidateQueries("get_all_pools");
                            reset();
                            onClose();
                            toast.success(data.message);
                        } else {
                            toast.error(data.message);
                        }
                    },
                    onError: (err) => {
                        toast.error(err.message);
                        console.log('onError-err', err);
                    },
                })
            } catch (err) {
                console.error('Error admin add pool:', err);
            }
        }
    };

    return (
        <>
            {isUpdate && (<>
                <div className='flex justify-center'>
                    <div className='my-5 h-[100px]'>
                        <ImageView
                            src={image || setImagePath(initialData?.pool_image)}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </>)}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-8'>
                    <div className='w-[50%]'>
                        <label htmlFor="pool_image" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool Image*</label>
                        <Controller
                            name="pool_image"
                            control={control}
                            rules={{ required: !isUpdate ? 'Pool image is required' : false }}
                            render={({ field }) => (
                                <input
                                    id="pool_image"
                                    type="file"
                                    name="pool_image"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    onChange={(e) => {
                                        handleFileChange(e.target.files);
                                        field.onChange(e.target.files);
                                    }}
                                />
                            )}
                        />
                        {errors.pool_image && <p className="text-left text-red-600 text-sm mt-1">{errors.pool_image.message}</p>}
                    </div>

                    <div className='w-[50%]'>
                        <label htmlFor="pool_type" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool Type*</label>
                        <Controller
                            name="pool_type"
                            control={control}
                            defaultValue={isUpdate ? initialData?.pool_type : "running_pool"}
                            render={({ field }) => (
                                <select id='pool_type' {...field} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5">
                                    <option value="running_pool">Running Pool</option>
                                    <option value="upcoming_pool">Upcoming Pool</option>
                                    <option value="completed_pool">Completed Pool</option>
                                </select>
                            )}
                        />
                        {errors.pool_type && <p className="text-left text-red-600 text-sm mt-1">{errors.pool_type.message}</p>}

                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='w-[50%]'>
                        <label htmlFor="pool_name" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool Name*</label>
                        <Controller
                            name="pool_name"
                            control={control}
                            defaultValue={isUpdate ? initialData?.pool_name : ""}
                            rules={{ required: 'Pool name is required' }}
                            render={({ field }) => (
                                <input
                                    id="pool_name"
                                    type="text"
                                    name="pool_name"
                                    placeholder="Enter Pool Name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.pool_name && <p className="text-left text-red-600 text-sm mt-1">{errors.pool_name.message}</p>}

                    </div>

                    <div className='w-[50%]'>
                        <label htmlFor="pool_ticket_prize" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool Ticket Price*</label>
                        <Controller
                            name="pool_ticket_prize"
                            control={control}
                            defaultValue={isUpdate ? initialData?.pool_ticket_prize : ""}
                            rules={{ required: 'Pool ticket price is required' }}
                            render={({ field }) => (
                                <input
                                    id="pool_ticket_prize"
                                    type="number"
                                    name="pool_ticket_prize"
                                    placeholder="Enter Pool Ticket Price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.pool_ticket_prize && <p className="text-left text-red-600 text-sm mt-1">{errors.pool_ticket_prize.message}</p>}

                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='w-[50%]'>
                        <label htmlFor="pool_start_date" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool Start Date*</label>
                        <Controller
                            name="pool_start_date"
                            control={control}
                            defaultValue={isUpdate ? initialData?.pool_start_date : ""}
                            rules={{ required: 'Pool start date is required' }}
                            render={({ field }) => (
                                <input
                                    id="pool_start_date"
                                    type="date"
                                    name="pool_start_date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.pool_start_date && <p className="text-left text-red-600 text-sm mt-1">{errors.pool_start_date.message}</p>}

                    </div>

                    <div className='w-[50%]'>
                        <label htmlFor="pool_end_date" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool End Date*</label>
                        <Controller
                            name="pool_end_date"
                            control={control}
                            defaultValue={isUpdate ? initialData?.pool_end_date : ""}
                            rules={{ required: 'Pool end date is required' }}
                            render={({ field }) => (
                                <input
                                    id="pool_end_date"
                                    type="date"
                                    name="pool_end_date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.pool_end_date && <p className="text-left text-red-600 text-sm mt-1">{errors.pool_end_date.message}</p>}

                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='w-[50%]'>
                        <label htmlFor="pool_start_time" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool Start Time*</label>
                        <Controller
                            name="pool_start_time"
                            control={control}
                            defaultValue={isUpdate ? initialData?.pool_start_time : ""}
                            rules={{ required: 'Pool start time is required' }}
                            render={({ field }) => (
                                <input
                                    id="pool_start_time"
                                    type="time"
                                    name="pool_start_time"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.pool_start_time && <p className="text-left text-red-600 text-sm mt-1">{errors.pool_start_time.message}</p>}

                    </div>

                    <div className='w-[50%]'>
                        <label htmlFor="pool_end_time" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool End Time*</label>
                        <Controller
                            name="pool_end_time"
                            control={control}
                            defaultValue={isUpdate ? initialData?.pool_end_time : ""}
                            rules={{ required: 'Pool end time is required' }}
                            render={({ field }) => (
                                <input
                                    id="pool_end_time"
                                    type="time"
                                    name="pool_end_time"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.pool_end_time && <p className="text-left text-red-600 text-sm mt-1">{errors.pool_end_time.message}</p>}

                    </div>
                </div>

                <div className='flex gap-8'>
                    {/* <div className='w-[50%]'>
                        <label htmlFor="pool_spots_limit" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool Spots Limit*</label>
                        <Controller
                            name="pool_spots_limit"
                            control={control}
                            defaultValue={isUpdate ? initialData?.pool_spots_limit : ""}
                            rules={{ required: 'Pool sports limit is required' }}
                            render={({ field }) => (
                                <input
                                    id="pool_spots_limit"
                                    type="number"
                                    name="pool_spots_limit"
                                    placeholder="Pool Sports Limit"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.pool_spots_limit && <p className="text-red-600 text-left text-sm mt-1">{errors.pool_spots_limit.message}</p>}

                    </div> */}

                    <div className='w-[50%]'>
                        <label htmlFor="pool_winner_prize" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool Winner Price*</label>
                        <Controller
                            name="pool_winner_prize"
                            control={control}
                            defaultValue={isUpdate ? initialData?.pool_winner_prize : ""}
                            rules={{ required: 'Pool winner price is required' }}
                            render={({ field }) => (
                                <input
                                    id="pool_winner_prize"
                                    type="number"
                                    name="pool_winner_prize"
                                    placeholder="Enter Pool Winner Price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.pool_winner_prize && <p className="text-left text-red-600 text-sm mt-1">{errors.pool_winner_prize.message}</p>}

                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='w-full'>
                        <label htmlFor="pool_description" className="block text-left mb-2 text-sm font-medium text-gray-900">Pool Description*</label>
                        <Controller
                            name="pool_description"
                            control={control}
                            defaultValue={isUpdate ? initialData?.pool_description : ""}
                            rules={{ required: 'Pool description is required' }}
                            render={({ field }) => (
                                <textarea
                                    id="pool_description"
                                    row={3}
                                    name="pool_description"
                                    placeholder="Enter Pool Description"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.pool_description && <p className="text-left text-red-600 text-sm mt-1">{errors.pool_description.message}</p>}

                    </div>
                </div>

                <div className='flex gap-5'>
                    <button type="submit" className="text-white bg-primary-light hover:bg-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center">{isUpdate ? "Update Pool" : "Add Pool"}</button>
                    <button type='button' onClick={onClose} className='border text-primary-light bg-white hover:text-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Cancel</button>
                </div>
            </form>
        </>
    )
};

export default PoolForm;