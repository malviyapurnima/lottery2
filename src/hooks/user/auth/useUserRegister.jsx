import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const userRegister = async (data) => {
  try {
    const formData = new FormData();
    formData.append("first_name", data?.first_name);
    formData.append("last_name", data?.last_name);
    formData.append("phone_no", data?.phone_no);
    const response = await Axios.post(`/registration`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to register user:", err);
    throw new Error("Failed to register user");
  }
};

export default function useUserRegister() {
  return useMutation("user_register", userRegister);
}