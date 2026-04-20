import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/api";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};
