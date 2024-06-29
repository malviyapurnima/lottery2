import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const userLogin = async (data) => {
  try {
    const formData = new FormData();
    formData.append("phone_no", data?.phone_no);
    const response = await Axios.post(`/login`, data);
    return response.data;
  } catch (err) {
    console.error("Failed to login user:", err);
    throw new Error("Failed to login user");
  }
};

export default function useUserLogin() {
  return useMutation("user_login", userLogin);
}