import { useMutation } from "react-query";
import { Axios } from "../../lib/axios";

const updateUser = async (userData) => {
    try {
      const formData = new FormData();
      formData.append("id", userData?.id);
      formData.append("name", userData?.name);
      formData.append("address", userData?.address);
      const response = await Axios.put(`/edit_user`, formData);
      return response.data;
    } catch (err) {
      console.error("Failed to add user:", err);
      throw new Error("Failed to update user");
    }
  };

export default function useUpdateUser() {
  return useMutation("update_user", updateUser);
}

// ------------------------------- Ui side--------------------------------------

import { useQueryClient } from "react-query";
import useUpdateUser  from "./hooks/test/useUpdateUser";

const queryClient = useQueryClient();
const { mutate: updateUser, isLoading, isError, error } = useAddUsers();

const onSubmit = async (data) => {
  const updateData = {
    id: data?.id,
    name: data?.name,
    address: data?.address,
  };
  try{
    await updateUser(updateData, {
      onSuccess: (data) => {
        console.log('onSuccess-data', data);
        queryClient.invalidateQueries("get_all_users");
      },
      onError: (err) => {
        console.log('onError-err', err);
      },
    })
  } catch (err) {
    console.error('Error adding user:', err);
  }
  
}