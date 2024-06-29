import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Button from "../../ui/Button";
import useAddContact from '../../../hooks/user/contact/useAddContact';


function ContactUsForm() {

    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const { mutate:addContact } = useAddContact();

    const defaultValues = {
        first_name: '',
        last_name: '',
        email_id: '',
        phone_no: '',
        message: ''
    };

    const onSubmit = async (data) => {

        const postData = {
            first_name: data?.first_name,
            last_name: data?.last_name,
            email_id: data?.email_id,
            phone_no: data?.phone_no,
            message: data?.message,
        }
        try {
            await addContact(postData, {
                onSuccess: (data) => {
                    if (data.status === true) {
                        reset(defaultValues);
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
            console.error('Error add contact:', err);
        }
    }

    return (
        <form className="p-5 md:p-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="mb-3 col-span-2 sm:col-span-1">
                    <label
                        className="block text-black text-text-lg font-bold mb-2"
                        htmlFor="first_name"
                    >
                        First Name
                    </label>
                    <Controller
                        name="first_name"
                        control={control}
                        rules={{ required: 'First name is required' }}
                        render={({ field }) => (
                            <input
                                id="first_name"
                                type="text"
                                name="first_name"
                                placeholder="Enter First Name"
                                className="border border-grey-dark  rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...field}
                            />
                        )}
                    />
                    {errors.first_name && <p className="text-left text-red-600 text-sm mt-1">{errors.first_name.message}</p>}
                </div>
                <div className="mb-3 col-span-2 sm:col-span-1">
                    <label
                        className="block text-black text-text-lg font-bold mb-2"
                        htmlFor="last_name"
                    >
                        Last Name
                    </label>
                    <Controller
                        name="last_name"
                        control={control}
                        rules={{ required: 'Last name is required' }}
                        render={({ field }) => (
                            <input
                                id="last_name"
                                type="text"
                                name="last_name"
                                placeholder="Enter Last Name"
                                className="border border-grey-dark  rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...field}
                            />
                        )}
                    />
                    {errors.last_name && <p className="text-left text-red-600 text-sm mt-1">{errors.last_name.message}</p>}
                </div>
                <div className="mb-3 col-span-2 sm:col-span-1">
                    <label
                        className="block text-black text-text-lg font-bold mb-2"
                        htmlFor="email_id"
                    >
                        Email
                    </label>
                    <Controller
                        name="email_id"
                        control={control}
                        rules={{ required: 'Email is required' }}
                        render={({ field }) => (
                            <input
                                id="email_id"
                                type="email_id"
                                name="email_id"
                                placeholder="Enter Email Name"
                                className="border border-grey-dark  rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...field}
                            />
                        )}
                    />
                    {errors.email_id && <p className="text-left text-red-600 text-sm mt-1">{errors.email_id.message}</p>}
                </div>
                <div className="mb-3 col-span-2 sm:col-span-1">
                    <label
                        className="block text-black text-text-lg font-bold mb-2"
                        htmlFor="phone_no"
                    >
                        Phone Number
                    </label>
                    <Controller
                        name="phone_no"
                        control={control}
                        rules={{ required: 'Phone Number is required' }}
                        render={({ field }) => (
                            <input
                                id="phone_no"
                                type="text"
                                name="phone_no"
                                placeholder="Enter Phone Number"
                                className="border border-grey-dark  rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...field}
                            />
                        )}
                    />
                    {errors.phone_no && <p className="text-left text-red-600 text-sm mt-1">{errors.phone_no.message}</p>}
                </div>
                <div className="col-span-2">
                    <label
                        className="block text-black text-text-lg font-bold mb-2"
                        htmlFor="message"
                    >
                        Write a Message
                    </label>
                    <Controller
                        name="message"
                        control={control}
                        rules={{ required: 'Description is required' }}
                        render={({ field }) => (
                            <textarea
                                id="message"
                                type="text"
                                name="message"
                                placeholder="Description here..."
                                className="border border-grey-dark  rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...field}
                            />
                        )}
                    />
                    {errors.message && <p className="text-left text-red-600 text-sm mt-1">{errors.message.message}</p>}
                </div>
            </div>

            <div className="flex items-center justify-between mt-10">
                <Button type="submit" name={"Continue"}></Button>
            </div>
        </form>
    )
}

export default ContactUsForm;