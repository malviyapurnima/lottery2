import { useQuery } from "react-query";
import { Axios } from "../../../lib/axios";

const getAllWinners = async ({ queryKey }) => {
    try {
        const [_, page, limit] = queryKey;
        const response = await Axios.get(`/get_all_winner?page=${page}&limit=${limit}`);
        return response.data;
    } catch (err) {
        console.error("Failed to get all winners:", err);
        throw new Error("Failed to get all winners");
    }
}

export default function useGetAllWinners(page, limit) {
    return useQuery(["get_all_winners",page, limit], getAllWinners);
}