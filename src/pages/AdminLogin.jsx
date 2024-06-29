import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAdminLogin from "../hooks/admin/auth/useAdminLogin";
import Logo from "../assets/images/logo.png";
import loginUserData from "../store/loginUserData";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = loginUserData();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { mutate: adminLogin, isLoading, isError, error } = useAdminLogin();

  useEffect(() => {
    if (userData !== null) {
      navigate("/admin");
    }
  }, [userData])

  const onSubmit = async (data) => {
    const postData = {
      email: data?.email,
      password: data?.password,
    };

    try {
      await adminLogin(postData, {
        onSuccess: (data) => {
          if (data.status === true) {
            setUserData(data.data);
            toast.success(data.message);
            navigate("/admin");
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
      console.error("Error admin login:", err);
    }
  };

  return (
    <>
      <section className="bg-primary-dark">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img src={Logo} alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign into Admin Pannel
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Email is required" }}
                    render={({ field }) => (
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                        {...field}
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Password is required" }}
                    render={({ field }) => (
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-dark-600 focus:border-primary-dark-600 block w-full p-2.5"
                        {...field}
                      />
                    )}
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-dark hover:bg-primary-dark-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
