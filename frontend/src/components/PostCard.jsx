import { Link } from "react-router-dom";

export default function PostCard({ post, deletePost }) {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow-sm h-100 rounded-4">
        <div className="card-body d-flex flex-column">
          {/* Title */}
          <h5 className="fw-bold mb-2">{post.title}</h5>

          {/* Description */}
          <p className="text-muted flex-grow-1">{post.description}</p>

          {/* Buttons */}
          <div className="d-flex gap-2 mt-3">
            <Link
              to={`/posts/${post.id}`}
              className="btn btn-sm btn-outline-primary w-100"
            >
              Voir
            </Link>

            <Link
              to={`/posts/edit/${post.id}`}
              className="btn btn-sm btn-outline-warning w-100"
            >
              Modifier
            </Link>

            <button
              onClick={() => deletePost(post.id)}
              className="btn btn-sm btn-outline-danger w-100"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
