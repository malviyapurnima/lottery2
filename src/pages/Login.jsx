import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import loginImg from "../assets/images/login-img.png";
import Button from "../components/ui/Button";
import useUserLogin from "../hooks/user/auth/useUserLogin";

function Login() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const { mutate: userLogin, isLoading, isError, error } = useUserLogin();

  const onSubmit = async (data) => {
    const postData = {
      phone_no: data?.phone_no,
    };
    try {
      await userLogin(postData, {
        onSuccess: (data) => {
          if (data.status === true) {
            reset();
          } else {
            console.log("wrong auth ->", data.message);
          }
        },
        onError: (err) => {
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
              <img src={loginImg} alt="" className="p-10" />
            </div>
            <div className="bg-white text-left flex-1">
              <div className="p-4 md:px-20 md:py-32">
                <h1 className="text-text-36 relative bg-gradient-to-r from-secondary-dark to-secondary-light text-transparent bg-clip-text">
                  Login
                </h1>
                <p className="text-[14px]">
                  Join the excitement and get ready to win big with AFRIWINN SMS
                  Lottery
                </p>
                <form className="mt-8 pr-20" onSubmit={handleSubmit(onSubmit)}>
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
                          type="number"
                          name="phone_no"
                          placeholder="Enter Phone Number"
                          className="appearance-none border border-grey-dark  rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    <Link
                      to={"/register"}
                      className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
                    >
                      Have an account?{" "}
                      <span>
                        <a href="" className="text-secondary-light underline">
                          Register now
                        </a>
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button type="submit" name={"Continue"}></Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
