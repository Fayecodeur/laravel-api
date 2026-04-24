import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "../schemas/postSchema";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { usePost } from "../hooks/usePost";
import { useEdit } from "../hooks/useEdit";

export default function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate: editPost, isPending } = useEdit();
  const { data: post, isLoading } = usePost(id);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(postSchema) });
  const onSubmit = (data) => {
    editPost(
      {
        id,
        data,
      },
      {
        onSuccess: () => {
          navigate("/");
        },
      },
    );
  };

  useEffect(() => {
    if (post) {
      reset({
        title: post.title,
        description: post.description,
      });
    }
  }, [post, reset]);

  if (isLoading) {
    return <p className="text-center">Chargement...</p>;
  }
  return (
    <section className="py-4">
      <div className="container">
        <h3 className="mb-4 text-center">Modifier un post {id}</h3>

        <div className="card shadow-sm">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Title */}
              <div className="mb-3">
                <label className="form-label">Titre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer le titre"
                  {...register("title")}
                />
                {errors.title && (
                  <small className="text-danger">
                    {" "}
                    {errors.title.message}{" "}
                  </small>
                )}
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Entrer la description"
                  {...register("description")}
                ></textarea>
                {errors.description && (
                  <small className="text-danger">
                    {" "}
                    {errors.description.message}{" "}
                  </small>
                )}
              </div>

              {/* Buttons */}
              <div className="d-flex gap-3">
                <button
                  type="submit"
                  disabled={isPending}
                  className="btn btn-primary"
                >
                  {isPending ? "Modification..." : "Modifier"}
                </button>
                <Link to="/" className="btn btn-secondary">
                  Retour
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
