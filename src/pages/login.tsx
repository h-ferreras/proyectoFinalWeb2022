import { auth, providerGoogle, providerFacebook, providerGitHub } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const accederConGoogle = async () => {
    const result = await signInWithPopup(auth, providerGoogle);

    navigate("/");
  };

  const accederConFacebook = async () => {
    const result = await signInWithPopup(auth, providerFacebook);
    
    navigate("/");
  };

  const accederConGitHub = async () => {
    const result = await signInWithPopup(auth, providerGitHub);
    
    navigate("/");
  };
  

  return (
    <div>
      <p> Acceda con google para continuar </p>
      <button onClick={accederConGoogle}> Acceder con google </button>

      <p> Acceda con Facebook para continuar </p>
      <button onClick={accederConFacebook}> Acceder con Facebook </button>

      <p> Acceda con Github para continuar </p>
      <button onClick={accederConGitHub}> Acceder con GitHub </button>

    </div>

    
  );
};
