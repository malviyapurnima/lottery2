import { useQuery } from "react-query";
import { Axios } from "../../lib/axios";

function getAllUsers({ queryKey }) {
    try{
        const [_, page, limit] = queryKey;
        const response = Axios.get(`/getUsers?page=${page}&limit=${limit}`);
        return response.data;
    } catch (err) {
        console.error("Failed to add user:", err);
        throw new Error("Failed to get all user");
    }
}

export default function useGetAllUsers(page = 1, limit = 10) {
    return useQuery(["get_all_users", page, limit], getAllUsers);
}


// ------------------------------- Ui side--------------------------------------

import useGetAllExpert from "./hooks/test/useGetAllExpert";

const { data: userData, isLoading, isError, error } = useGetAllExpert(page=1, limit=10);

if (isLoading) return <div>Loading...</div>;

if (isError) return <div>Error: {error.message}</div>;

useEffect(() => {
    if (userData?.users) {
      setRows(userData?.users);
        // setTotalRows(userData?.users?.count);
    }
}, [userData?.users]);