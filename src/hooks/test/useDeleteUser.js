import { useMutation } from "react-query";
import { Axios } from "../../lib/axios";

function deleteUser(userId) {
  return Axios.delete(`/del_user_by_id/${userId}`);
}

export default function useDeleteUser() {
  return useMutation("delete_user", deleteUser);
}



// ------------------------ UI -----------------------------------

import useDeleteUser from "./hooks/test/useDeleteUser";

const { mutate: deleteUser, isLoading, isError, error } = useDeleteUser();

const onSubmit = async (userId) => {
    try{
      await deleteUser(userId, {
        onSuccess: (data) => {
          console.log('onSuccess-data', data);
          queryClient.invalidateQueries("get_all_users");
        },
        onError: (err) => {
          console.log('onError-err', err);
        },
      })
    } catch (err) {
      console.error('Error deleting user:', err);
    }
    
}