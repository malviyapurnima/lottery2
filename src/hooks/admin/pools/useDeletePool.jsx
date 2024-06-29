import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const deletePool = async (poolId) => {
  try {
    const response = await Axios.delete(`/delete_lottery_pool/${poolId}`);
    return response.data;
  } catch (err) {
    console.error("Failed to delete Pool:", err);
    throw new Error("Failed to delete Pool");
  }
}

export default function useDeletePool() {
  return useMutation("delete_pool", deletePool);
}