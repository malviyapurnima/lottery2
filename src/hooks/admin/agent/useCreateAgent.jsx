import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const createAgent = async (data) => {
  try {
    const formData = new FormData();
    formData.append("profile_image", data?.profile_image);
    formData.append("first_name", data?.first_name);
    formData.append("phone_no", data?.phone_no);
    formData.append("email_id", data?.email_id);
    formData.append("designation", data?.designation);
    formData.append("password", data?.password);
    formData.append("confirm_password", data?.confirm_password);
    const response = await Axios.post(`/create_lottery_agent`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to add Agent:", err);
    throw new Error("Failed to add Agent");
  }
};

export default function useCreateAgent() {
  return useMutation("create_agent", createAgent);
}