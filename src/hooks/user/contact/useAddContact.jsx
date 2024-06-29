import { useMutation } from "react-query";
import { Axios } from "../../../lib/axios";

const addContact = async (data) => {
  try {
    const formData = new FormData();
    formData.append("first_name", data?.first_name);
    formData.append("last_name", data?.last_name);
    formData.append("email_id", data?.email_id);
    formData.append("phone_no", data?.phone_no);
    formData.append("message", data?.message);
    const response = await Axios.post(`/create_contact_us`, formData);
    return response.data;
  } catch (err) {
    console.error("Failed to add Contact:", err);
    throw new Error("Failed to add Contact");
  }
};

export default function useAddContact() {
  return useMutation("add_contact", addContact);
}