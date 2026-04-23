import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../services/api";
import toast from "react-hot-toast";

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      toast.success("Post supprimé avec succès");
      queryClient.invalidateQueries(["posts"]);
    },
    onError: () => {
      toast.error("Une erreur est survenue");
    },
  });
};
