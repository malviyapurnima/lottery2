import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const adminLogin = async (data) => {
  try {
    const formData = new FormData();
    formData.append("email", data?.email);
    formData.append("password", data?.password);
    const response = await Axios.post(`/admin_login`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to login admin user:", err);
    throw new Error("Failed to login admin user");
  }
};

export default function useAdminLogin() {
  return useMutation("admin_login", adminLogin);
}