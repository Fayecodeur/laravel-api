import { useParams, Link } from "react-router-dom";
import { usePost } from "../hooks/usePost";

export default function ShowPost() {
  const { id } = useParams();
  const { data: post, isLoading, error } = usePost(id);

  if (isLoading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border" />
        <p className="mt-2">Chargement...</p>
      </div>
    );

  if (error)
    return (
      <p className="text-danger text-center py-5">Une erreur s'est produite</p>
    );

  return (
    <section className="py-5">
      <div className="container">
        <div
          className="card border-0 shadow-sm rounded-4 mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <div className="card-body p-4">
            {/* Title */}
            <h2 className="fw-bold mb-3">{post.title}</h2>

            {/* Description */}
            <p className="text-muted fs-5">{post.description}</p>

            {/* Back button */}
            <div className="mt-4">
              <Link to="/" className="btn btn-outline-secondary">
                ← Retour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
