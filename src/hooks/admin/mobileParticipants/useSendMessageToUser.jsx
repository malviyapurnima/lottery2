import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const sendMessageToUser = async (data) => {
  try {
    const formData = new FormData();
    formData.append("to_number", data?.to_number);
    const response = await Axios.post(`/send_sms_to_user`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to sendMessageToUser:", err);
    throw new Error("Failed to sendMessageToUser");
  }
};

export default function useSendMessageToUser() {
  return useMutation("send_message_to_user", sendMessageToUser);
}