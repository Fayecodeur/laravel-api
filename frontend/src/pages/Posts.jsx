import PostCard from "../components/PostCard";
import { useDeletePost } from "../hooks/useDeletePost";
import { usePosts } from "../hooks/usePosts";

export default function Posts() {
  const { data: posts, isLoading, error } = usePosts();
  const { mutate: deletePost } = useDeletePost();

  if (isLoading) {
    return <p className="text-center">Chargement...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">Erreur de chargement</p>;
  }

  return (
    <section className="py-3">
      <div className="container">
        <h5 className="text-center mb-4">Liste des posts</h5>

        <div className="row g-3">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} deletePost={deletePost} />
          ))}
        </div>
      </div>
    </section>
  );
}
