import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const changeAgentStatus = async (data) => {
  try {
    const formData = new FormData();
    formData.append("is_active", data?.is_active);
    const response = await Axios.patch(`/update_lottery_agent/${data?.id}`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to change agent status:", err);
    throw new Error("Failed to change agent status");
  }
};

export default function useChangeAgentStatus() {
  return useMutation("change_agent_status", changeAgentStatus);
}