import { useQuery } from "react-query";
import { Axios } from "../../../lib/axios";

const getAllPools = async ({ queryKey }) => {
    try {
        const [_, type, page, limit] = queryKey;
        const response = await Axios.get(`/get_all_lottery_pools?pool_type=${type}&page=${page}&limit=${limit}`);
        return response.data;
    } catch (err) {
        console.error("Failed to get all pools:", err);
        throw new Error("Failed to get all pools");
    }
}

export default function useGetAllPools(type, page, limit) {
    return useQuery(["get_all_pools",type, page, limit], getAllPools);
}