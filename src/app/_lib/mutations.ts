import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUsers_action } from "./actions";

export const useMutateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["addUser"],
        mutationFn: async (data) => await addUsers_action(data),
        onSuccess: () => {
        },
        onSettled: async (_, error) => {
            if(error){
                console.log(error)
            }else{
                await queryClient.invalidateQueries({ queryKey: ['users'] });
            }
        }
    })
}