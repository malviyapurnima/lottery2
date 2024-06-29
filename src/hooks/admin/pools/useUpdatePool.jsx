import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const updatePool = async (data) => {
  try {
    const formData = new FormData();
    if (data?.pool_image) {
      formData.append("pool_image", data?.pool_image);
    }
    formData.append("pool_type", data?.pool_type);
    formData.append("pool_name", data?.pool_name);
    formData.append("pool_ticket_prize", data?.pool_ticket_prize);
    formData.append("pool_spots_limit", data?.pool_spots_limit);
    formData.append("pool_winner_prize", data?.pool_winner_prize);
    formData.append("pool_start_date", data?.pool_start_date);
    formData.append("pool_end_date", data?.pool_end_date);
    formData.append("pool_start_time", data?.pool_start_time);
    formData.append("pool_end_time", data?.pool_end_time);
    formData.append("pool_description", data?.pool_description);
    const response = await Axios.patch(`/update_lottery_pool/${data?.id}`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to update pool:", err);
    throw new Error("Failed to update pool");
  }
};

export default function useUpdatePool() {
  return useMutation("update_pool", updatePool);
}