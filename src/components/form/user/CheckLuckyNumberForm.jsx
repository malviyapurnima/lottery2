import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from "react-toastify";
import CrossIcon from "../../../assets/SVGs/CrossIcon";
import Button from "../../ui/Button";
import LotteryWinLossBanner from '../../banners/User/LotteryWinLossBanner';
import useCheckWinner from '../../../hooks/user/winner/useCheckWinner';


function CheckLuckyNumberForm() {

    const [isPoster, setIsPoster] = useState(false);
    const [posterType, setPosterType] = useState(null);
    const { handleSubmit, control, reset, setValue, formState: { errors } } = useForm();
    const { mutate: checkWinner } = useCheckWinner();

    function handlePosterClose() {
        setIsPoster(false)
    }

    const onSubmit = async (data) => {

        const postData = {
            phone_no: data?.phone_no,
            ticket_no: data?.ticket_no,
        };

        try {
            await checkWinner(postData, {
                onSuccess: (data) => {
                    if (data.status === true) {
                        setPosterType('win');
                        setIsPoster(true);
                        reset();
                    } else {
                        setPosterType('loss');
                        setIsPoster(true);
                        reset();
                    }
                },
                onError: (err) => {
                    toast.error(err.message);
                    console.log('onError-err', err);
                },
            })
        } catch (err) {
            console.error('Error check winner:', err);
        }
    }

    return (
        <>
            {isPoster ? (
                <>
                    <button onClick={handlePosterClose}>
                        <CrossIcon />
                    </button>
                    <LotteryWinLossBanner type={posterType} />
                </>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:w-full">
                        <div className="mb-3">
                            <label
                                className="block text-black text-text-22 font-bold mb-2"
                                htmlFor="phone_no"
                            >
                                Phone Number
                            </label >
                            <Controller
                                name="phone_no"
                                control={control}
                                rules={{ required: "Phone number is required" }}
                                render={({ field }) => (
                                    <input
                                        id="phone_no"
                                        type="number"
                                        name="phone_no"
                                        placeholder="Enter Phone Number"
                                        className="border border-grey-dark rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        {...field}
                                    />
                                )}
                            />
                            {
                                errors.phone_no && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.phone_no.message}
                                    </p>
                                )
                            }
                        </div >
                        <div className="mb-3">
                            <label
                                className="block text-black text-text-22 font-bold mb-2"
                                htmlFor="ticket_no"
                            >
                                Ticket Number
                            </label>
                            <Controller
                                name="ticket_no"
                                control={control}
                                rules={{ required: "Ticket number is required" }}
                                render={({ field }) => (
                                    <input
                                        id="ticket_no"
                                        type="text"
                                        name="ticket_no"
                                        placeholder="Enter Ticket Number"
                                        className="border border-grey-dark rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.ticket_no && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.ticket_no.message}
                                </p>
                            )}
                        </div>
                    </div >
                    <div className="flex gap-5 justify-start mt-12">
                        <Button type="submit" name={"Check My Number"} />
                    </div>
                </form >
            )}
        </>
    )
}

export default CheckLuckyNumberForm;