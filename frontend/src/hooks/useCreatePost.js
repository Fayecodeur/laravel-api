import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../services/api";
import toast from "react-hot-toast";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post ajouté avec succès");
      queryClient.invalidateQueries(["post"]);
    },
    onError: () => {
      toast.error("Une erreur est survenue");
    },
  });
};
