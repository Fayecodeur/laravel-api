import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../services/api";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["post"]);
    },
  });
};
