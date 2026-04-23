import { Link } from "react-router-dom";

export default function PostCard({ post, deletePost }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
        </div>
        <div className="d-flex gap-2 mb-2">
          {/* <Link to={`/posts/${post.id}`} className="btn btn-info btn-sm">
            Voir
          </Link>

          <Link
            to={`/posts/edit/${post.id}`}
            className="btn btn-warning btn-sm"
          >
            Modifier
          </Link> */}

          <button
            onClick={() => deletePost(post.id)}
            className="btn btn-danger btn-sm"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
