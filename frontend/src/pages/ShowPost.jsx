import { useParams, Link } from "react-router-dom";
import { usePost } from "../hooks/usePost";

export default function ShowPost() {
  const { id } = useParams();
  const { data: post, isLoading, error } = usePost(id);
  if (isLoading) return <p className="text-center">Chargement...</p>;
  if (error)
    return <p className="text-danger center">Une erreur s'est produite</p>;
  return (
    <section>
      <h1> {post.title} </h1>
      <p> {post.description} </p>
      <Link to={"/"} className="btn btn-secondary">
        Retour
      </Link>
    </section>
  );
}
