import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPost } from "../services/api";
import { toast } from "react-hot-toast";

export const useEdit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => editPost(id, data),

    onSuccess: () => {
      toast.success("Article modifié avec succès");
      queryClient.invalidateQueries(["posts"]);
    },

    onError: () => {
      toast.error("Erreur lors de la modification");
    },
  });
};
