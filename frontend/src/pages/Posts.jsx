import { usePosts } from "../hooks/usePosts";

export default function Posts() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <p className="text-center">Chargement...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">Erreur de chargement</p>;
  }

  return (
    <section className="py-3">
      <div className="container">
        <h1 className="text-center mb-4">Liste des posts</h1>

        <div className="row g-3">
          {posts?.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
