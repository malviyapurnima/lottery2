import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const changePoolState = async (data) => {
  try {
    const formData = new FormData();
    formData.append("pool_is_active", data?.pool_is_active);
    const response = await Axios.patch(`/update_lottery_pool/${data?.id}`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to change Pool State:", err);
    throw new Error("Failed to change Pool State");
  }
};

export default function useChangePoolState() {
  return useMutation("change_pool_state", changePoolState);
}