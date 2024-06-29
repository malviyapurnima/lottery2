import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import Button from "../components/ui/Button";
import OTPSubmit from "../components/User/OTPSubmit";
import ragisterImg from "../assets/images/ragister-img.png";
import useUserRegister from "../hooks/user/auth/useUserRegister";

function Ragister() {

  const [isOtpForm, setOtpForm] = useState(false);

  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const { mutate: userRegister, isLoading, isError, error } = useUserRegister();

  const onSubmit = async (data) => {
    const postData = {
      first_name: data?.first_name,
      last_name: data?.last_name,
      phone_no: data?.phone_no,
    };

    try {
      await userRegister(postData, {
        onSuccess: (data) => {
          if (data.status === true) {
            reset();
            setOtpForm(true);
            // navigate("/login");
            toast.success(data.message);
          } else {
            toast.error(data.message);
          }
        },
        onError: (err) => {
          toast.error(err.message);
          console.log("onError-err", err);
        },
      });
    } catch (err) {
      console.error("Error admin add pool:", err);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-primary-dark to-primary-light ">
        <div className="container-full mx-auto text-center ">
          <div className="flex md:flex-row flex-col items-center justify-between gap-3">
            <div className="flex-1">
              <img src={ragisterImg} alt="" className="p-10" />
            </div>

            {!isOtpForm && (
              <div className="bg-white text-left flex-1">
                <div className="p-4 md:py-14 md:px-20">
                  <h1 className="text-text-36 relative bg-gradient-to-r from-secondary-dark to-secondary-light text-transparent bg-clip-text">
                    Let’s start Register yourself
                  </h1>
                  <p className="text-[14px]">
                    Join the excitement and get ready to win big with Afriwinn SMS
                    Lottery
                  </p>
                  <form className="mt-8 pr-20" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-5">
                      <label
                        className="block text-black text-text-22 font-bold mb-2"
                        htmlFor="first_name"
                      >
                        First name
                      </label>
                      <Controller
                        name="first_name"
                        control={control}
                        rules={{ required: "First name is required" }}
                        render={({ field }) => (
                          <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="Enter First Name"
                            className="appearance-none border border-grey-dark rounded-lg rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...field}
                          />
                        )}
                      />
                      {errors.first_name && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.first_name.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-5">
                      <label
                        className="block text-black text-text-22 font-bold mb-2"
                        htmlFor="last_name"
                      >
                        Last name
                      </label>
                      <Controller
                        name="last_name"
                        control={control}
                        rules={{ required: "Last name is required" }}
                        render={({ field }) => (
                          <input
                            id="last_name"
                            type="text"
                            name="last_name"
                            placeholder="Enter Last Name"
                            className="appearance-none border border-grey-dark rounded-lg rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...field}
                          />
                        )}
                      />
                      {errors.last_name && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.last_name.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-2">
                      <label
                        className="block text-black text-text-22 font-bold mb-2"
                        htmlFor="phone_no"
                      >
                        Phone number
                      </label>
                      <Controller
                        name="phone_no"
                        control={control}
                        rules={{ required: "Phone number is required" }}
                        render={({ field }) => (
                          <input
                            id="phone_no"
                            type="text"
                            name="phone_no"
                            placeholder="Enter Phone Number"
                            className="appearance-none border border-grey-dark rounded-lg rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...field}
                          />
                        )}
                      />
                      {errors.phone_no && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.phone_no.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-8">
                      <p className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800">
                        Have an account?{" "}
                        <span>
                          <Link
                            to={"/login"}
                            className="text-secondary-light underline"
                          >
                            Login
                          </Link>
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button type="submit" name={"Continue"}></Button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {isOtpForm && (
              <OTPSubmit />
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Ragister;
