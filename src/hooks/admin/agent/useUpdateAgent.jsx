import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const updateAgent = async (data) => {
  try {
    const formData = new FormData();
    if (data?.profile_image) {
      formData.append("profile_image", data?.profile_image);
    }
    formData.append("first_name", data?.first_name);
    formData.append("phone_no", data?.phone_no);
    formData.append("email_id", data?.email_id);
    formData.append("designation", data?.designation);
    formData.append("password", data?.password);
    formData.append("confirm_password", data?.confirm_password);
    const response = await Axios.patch(`/update_lottery_agent/${data?.id}`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to update agent:", err);
    throw new Error("Failed to update agent");
  }
};

export default function useUpdateAgent() {
  return useMutation("update_agent", updateAgent);
}