"use server"

import axios from "axios";

export const getUsers_action = async () => {
  const { data } = await axios.get(
     `${process.env.API_URL}/users`
   );
  return data;
};


export const addUsers_action = async (payload: any) => {
    
    const { data } = await axios.post("/users", { ...payload });

    return data
}