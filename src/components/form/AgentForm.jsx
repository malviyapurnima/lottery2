import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import ImageView from '../ui/ImageView';
import { setImagePath } from '../../utils/setImagePath';
import useCreateAgent from '../../hooks/admin/agent/useCreateAgent';
import useUpdateAgent from '../../hooks/admin/agent/useUpdateAgent';

function AgentForm({ isUpdate, initialData, onClose }) {

    const queryClient = useQueryClient();
    const { handleSubmit, control, reset, setValue, formState: { errors } } = useForm();
    const { mutate: createAgent } = useCreateAgent();
    const { mutate: updateAgent } = useUpdateAgent();
    const [image, setImage] = useState(null);

    useEffect(() => {
        if(isUpdate) {
            setInitialData()
        }

    },[initialData])

    function setInitialData() {
        setValue("first_name", initialData?.first_name);
        setValue("phone_no", initialData?.phone_no);
        setValue("email_id", initialData?.email_id);
        setValue("designation", initialData?.designation);
    }

    const handleFileChange = (files) => {
        setImage(URL.createObjectURL(files[0]));
    };

    const onSubmit = async (data) => {
        const postData = {
            first_name: data?.first_name,
            phone_no: data?.phone_no,
            email_id: data?.email_id,
            designation: data?.designation,
            password: data?.password,
            confirm_password: data?.confirm_password,
        };

        if (isUpdate) {
            try {
                postData.id = initialData?.id
                if(image) {
                    postData.profile_image = data?.profile_image[0]
                }
                await updateAgent(postData, {
                    onSuccess: (data) => {
                        if (data.status === true) {
                            queryClient.invalidateQueries("get_all_agents");
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
                console.error('Error agent update:', err);
            }
        } else {
            try {

                if(postData?.password !== postData?.confirm_password) {
                    toast.error('Password is not match!');
                    return null;
                }

                postData.profile_image = data?.profile_image[0]
                await createAgent(postData, {
                    onSuccess: (data) => {
                        if (data.status === true) {
                            queryClient.invalidateQueries("get_all_agents");
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
                console.error('Error agent add:', err);
            }
        }
    };

    return (
        <>
            {isUpdate && (<>
                <div className='flex justify-center'>
                    <div className='my-5 h-[100px]'>
                        <ImageView
                            src={image || setImagePath(initialData?.profile_image)}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </>)}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-8'>
                    <div className='w-[50%]'>
                        <label htmlFor="profile_image" className="block text-left mb-2 text-sm font-medium text-gray-900">Agent Image*</label>
                        <Controller
                            name="profile_image"
                            control={control}
                            rules={{ required: !isUpdate ? 'Agent image is required' : false }}
                            render={({ field }) => (
                                <input
                                    id="profile_image"
                                    type="file"
                                    name="profile_image"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    onChange={(e) => {
                                        handleFileChange(e.target.files);
                                        field.onChange(e.target.files);
                                    }}
                                />
                            )}
                        />
                        {errors.profile_image && <p className="text-left text-red-600 text-sm mt-1">{errors.profile_image.message}</p>}
                    </div>

                    <div className='w-[50%]'>
                        <label htmlFor="first_name" className="block text-left mb-2 text-sm font-medium text-gray-900">Agent Name*</label>
                        <Controller
                            name="first_name"
                            control={control}
                            rules={{ required: 'Agent name is required' }}
                            render={({ field }) => (
                                <input
                                    id="first_name"
                                    type="text"
                                    name="first_name"
                                    placeholder="Enter Agent Name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.first_name && <p className="text-left text-red-600 text-sm mt-1">{errors.first_name.message}</p>}

                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='w-[50%]'>
                        <label htmlFor="phone_no" className="block text-left mb-2 text-sm font-medium text-gray-900">Phone Number*</label>
                        <Controller
                            name="phone_no"
                            control={control}
                            rules={{ required: 'Phone number is required' }}
                            render={({ field }) => (
                                <input
                                    id="phone_no"
                                    type="text"
                                    name="phone_no"
                                    placeholder="Enter Phone Number"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.phone_no && <p className="text-left text-red-600 text-sm mt-1">{errors.phone_no.message}</p>}

                    </div>

                    <div className='w-[50%]'>
                        <label htmlFor="email_id" className="block text-left mb-2 text-sm font-medium text-gray-900">Email*</label>
                        <Controller
                            name="email_id"
                            control={control}
                            rules={{ required: 'Email is required' }}
                            render={({ field }) => (
                                <input
                                    id="email_id"
                                    type="email"
                                    name="email_id"
                                    placeholder="Enter Email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.email_id && <p className="text-left text-red-600 text-sm mt-1">{errors.email_id.message}</p>}

                    </div>
                </div>

                {!isUpdate && (
                    <div className='flex gap-8'>
                        <div className='w-[50%]'>
                            <label htmlFor="password" className="block text-left mb-2 text-sm font-medium text-gray-900">Password*</label>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="********"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.password && <p className="text-left text-red-600 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        <div className='w-[50%]'>
                            <label htmlFor="confirm_password" className="block text-left mb-2 text-sm font-medium text-gray-900">Confirm Password*</label>
                            <Controller
                                name="confirm_password"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        id="confirm_password"
                                        type="password"
                                        name="confirm_password"
                                        placeholder="********"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.confirm_password && <p className="text-left text-red-600 text-sm mt-1">{errors.confirm_password.message}</p>}
                        </div>
                    </div>
                )}

                <div className='flex gap-8'>
                    <div className='w-[50%]'>
                        <label htmlFor="designation" className="block text-left mb-2 text-sm font-medium text-gray-900">Designation*</label>
                        <Controller
                            name="designation"
                            control={control}
                            render={({ field }) => (
                                <input
                                    id="designation"
                                    type="text"
                                    name="designation"
                                    placeholder="Enter Designation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                                    {...field}
                                />
                            )}
                        />
                        {errors.designation && <p className="text-left text-red-600 text-sm mt-1">{errors.designation.message}</p>}
                    </div>
                </div>

                <div className='flex gap-5'>
                    <button type='submit' className="text-white bg-primary-light hover:bg-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center">{isUpdate ? "Update Agent" : "Add Agent"}</button>
                    <button type='button' onClick={onClose} className='border text-primary-light bg-white hover:text-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Cancel</button>
                </div>
            </form>
        </>
    )
};

export default AgentForm;