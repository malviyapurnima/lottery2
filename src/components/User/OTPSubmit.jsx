import React from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Button from "../../components/ui/Button";

function OTPSubmit() {

    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    //   const { mutate: userRegister, isLoading, isError, error } = useUserRegister();

    const onSubmit = async (data) => {

        console.log('onSubmit ->', data);
        // const postData = {
        //   first_name: data?.first_name,
        //   last_name: data?.last_name,
        //   phone_no: data?.phone_no,
        // };

        // try {
        //   await userRegister(postData, {
        //     onSuccess: (data) => {
        //       if (data.status === true) {
        //         reset();
        //         setOtpForm(true);
        //         // navigate("/login");
        //         toast.success(data.message);
        //       } else {
        //         toast.error(data.message);
        //       }
        //     },
        //     onError: (err) => {
        //       toast.error(err.message);
        //       console.log("onError-err", err);
        //     },
        //   });
        // } catch (err) {
        //   console.error("Error admin add pool:", err);
        // }
    };

    function resendOTPHandle() {
        console.log('resendOTPHandle ---->');
    }

    return (
        <>
            <div className="bg-white text-left flex-1">
                <div className="py-24 px-20">
                    <h1 className="text-text-36 relative bg-gradient-to-r from-secondary-dark to-secondary-light text-transparent bg-clip-text">
                        Enter 4 Digits Code
                    </h1>
                    <p className="text-[14px]">
                        Enter the 4 digits code that you received on your mobile number.
                    </p>
                    <form className="mt-8 pr-20" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2">
                            <Controller
                                name="otp"
                                control={control}
                                rules={{ required: "OTP is required" }}
                                render={({ field }) => (
                                    <input
                                        id="otp"
                                        type="text"
                                        name="otp"
                                        placeholder="Enter OTP here"
                                        className="appearance-none border border-grey-dark rounded-lg rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.otp && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.otp.message}
                                </p>
                            )}
                        </div>
                        <div className="mt-2 mb-8">
                            <p className="inline-block align-baseline text-sm text-black">
                                Didn’t get it?
                            </p>
                            <button
                                type='button'
                                onClick={resendOTPHandle}
                                className="ml-2 px-2 border text-sm border-black rounded-xl hover:border-secondary-light hover:text-white hover:bg-secondary-light"
                            >
                                Resend OTP
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <Button type="submit" name={"Verify OTP"}></Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default OTPSubmit;