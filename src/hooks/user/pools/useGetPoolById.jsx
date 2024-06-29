import { useQuery } from "react-query";
import { Axios } from "../../../lib/axios";

const getPoolById = async ({ queryKey }) => {
    try {
        const [_, poolId] = queryKey;
        const response = await Axios.get(`/get_lottery_poll_by_id/${poolId}`);
        return response.data;
    } catch (err) {
        console.error("Failed to get pool:", err);
        throw new Error("Failed to get pool by id");
    }
}

export default function useGetPoolById(poolId) {
    return useQuery(["get_pool_by_id", poolId], getPoolById);
}