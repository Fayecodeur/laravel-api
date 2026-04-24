import { useQuery } from "@tanstack/react-query";
import { getPost } from "../services/api";

export const usePost = (id) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
    enabled: !!id,
  });
};
