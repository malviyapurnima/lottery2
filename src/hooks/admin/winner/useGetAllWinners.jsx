import { useQuery } from "react-query";
import { Axios } from "../../../lib/axios";

const getAllWinners = async ({ queryKey }) => {
    try {
        const [_, searchInput, page, limit] = queryKey;
        const response = await Axios.get(`/get_all_winner?name=${searchInput}&page=${page}&limit=${limit}`);
        return response.data;
    } catch (err) {
        console.error("Failed to get all winners:", err);
        throw new Error("Failed to get all winners");
    }
}

export default function useGetAllWinners(searchInput, page, limit) {
    return useQuery(["get_all_winners", searchInput, page, limit], getAllWinners);
}