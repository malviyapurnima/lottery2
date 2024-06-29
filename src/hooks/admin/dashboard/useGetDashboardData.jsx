import { useQuery } from "react-query";
import { Axios } from "../../../lib/axios";

const getDashboardData = async () => {
    try {
        const response = await Axios.get(`/admin_dashboard`);
        return response.data;
    } catch (err) {
        console.error("Failed to get DashboardData:", err);
        throw new Error("Failed to get DashboardData");
    }
}

export default function useGetDashboardData() {
    return useQuery(["get_dashboard_data"], getDashboardData);
}