import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const checkWinner = async (data) => {
  try {
    const formData = new FormData();
    formData.append("phone_no", data?.phone_no);
    formData.append("ticket_no", data?.ticket_no);
    const response = await Axios.post(`/check_winner`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to check winner:", err);
    throw new Error("Failed to check winner");
  }
};

export default function useCheckWinner() {
  return useMutation("check_winner", checkWinner);
}