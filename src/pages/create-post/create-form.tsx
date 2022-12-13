import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const [usuario] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("Debes agregar un titulo."),
    description: yup.string().required("Debes agregar una descripcion."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      username: usuario?.displayName,
      userId: usuario?.uid,
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Titulo" {...register("title")} />
      <p style={{ color: "red" }}> {errors.title?.message}</p>
      <textarea placeholder="Descripcion" {...register("description")} />
      <p style={{ color: "red" }}> {errors.description?.message}</p>
      <input type="submit" className="submitForm" />
    </form>
  );
};
