import { useQuery } from "react-query";
import { Axios } from "../../../lib/axios";

const getAllAgents = async ({ queryKey }) => {
    try {
        const [_, searchInput, page, limit] = queryKey;
        const response = await Axios.get(`/get_all_lottery_agents?first_name=${searchInput}&page=${page}&limit=${limit}`);
        return response.data;
    } catch (err) {
        console.error("Failed to get all agents:", err);
        throw new Error("Failed to get all agents");
    }
}

export default function useGetAllAgents(searchInput, page, limit) {
    return useQuery(["get_all_agents", searchInput, page, limit], getAllAgents);
}