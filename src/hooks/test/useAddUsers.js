import { useMutation } from "react-query";
import { Axios } from "../../lib/axios";

const addUser = async (userData) => {
    try {
      const formData = new FormData();
      formData.append("name", userData?.name);
      formData.append("address", userData?.address);
      const response = await Axios.post(`/adduser`, formData);
      return response.data;
    } catch (err) {
      console.error("Failed to add user:", err);
      throw new Error("Failed to add user");
    }
  };

export default function useAddUsers() {
  return useMutation("add_user", addUser);
}

// ------------------------------- Ui side--------------------------------------

import { useQueryClient } from "react-query";
import useAddUsers  from "./hooks/test/useAddUsers";

const queryClient = useQueryClient();
const { mutate: addUser, isLoading, isError, error } = useAddUsers();

const onSubmit = async (data) => {
  const postData = {
    name: data?.name,
    address: data?.address,
  };
  try{
    await addUser(postData, {
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