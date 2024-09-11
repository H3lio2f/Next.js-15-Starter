import { useQuery } from "@tanstack/react-query";
import { getUsers_action } from "./actions";

export const useInfrographs = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => await getUsers_action(),
  });
};
