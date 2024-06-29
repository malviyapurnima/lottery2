import { useQuery } from "react-query";
import { Axios } from "../../../lib/axios";

const getAllContactUsList = async ({ queryKey }) => {
    try {
        const [_, searchInput, page, limit] = queryKey;
        const response = await Axios.get(`/get_contact_us?first_name=${searchInput}&page=${page}&limit=${limit}`);
        return response.data;
    } catch (err) {
        console.error("Failed to get all contact:", err);
        throw new Error("Failed to get all contact");
    }
}

export default function useGetAllContactUsList(searchInput, page, limit) {
    return useQuery(["get_all_contact_list", searchInput, page, limit], getAllContactUsList);
}