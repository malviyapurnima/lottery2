import { useQuery } from "react-query";
import { Axios } from "../../lib/axios";

function getUserById({ queryKey }) {
    try{
        const [_, userId] = queryKey;
        const response = Axios.get(`/getUser/${userId}`);
        return response.data;
    } catch (err) {
        console.error("Failed to add user:", err);
        throw new Error("Failed to get user by id");
    }
}

export default function useGetUserById(userId) {
    return useQuery(["get_user_by_id", userId], getUserById);
}

// ------------------------------- Ui side--------------------------------------

import useGetUserById from "./hooks/test/useGetUserById";

const userId = 10;
const { data: userData, isLoading, isError, error } = useGetUserById(userId);

if (isLoading) return <div>Loading...</div>;

if (isError) return <div>Error: {error.message}</div>;

useEffect(() => {
    if (userData?.user) {
      setUserDetails(userData?.user);
    }
}, [userData?.users]);