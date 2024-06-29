import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const deleteAgent = async (agentId) => {
  try {
    const response = await Axios.delete(`/delete_lottery_agent/${agentId}`);
    return response.data;
  } catch (err) {
    console.error("Failed to delete Agent:", err);
    throw new Error("Failed to delete Agent");
  }
}

export default function useDeleteAgent() {
  return useMutation("delete_agent", deleteAgent);
}