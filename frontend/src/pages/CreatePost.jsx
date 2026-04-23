import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "../schemas/postSchema";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../hooks/useCreatePost";

export default function CreatePost() {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(postSchema) });
  const onSubmit = async (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate("/");
      },
    });
  };
  return (
    <section className="py-4">
      <div className="container">
        <h1 className="mb-4 text-center">Ajouter un post</h1>

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
                  {isPending ? " Ajouter..." : "Ajouter"}
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
