import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [usuario] = useAuthState(auth);

  const cerrarSesionUsu = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Inicio </Link>
        {!usuario ? (
          <Link to="/login"> Iniciar sesion </Link>
        ) : (
          <Link to="/createpost"> Agregar Post </Link>
        )}
      </div>
      <div className="user">
        {usuario && (
          <>
            <p> {usuario?.displayName} </p>
            <img src={usuario?.photoURL || ""} width="20" height="20" />
            <button onClick={cerrarSesionUsu}> Cerrar sesion</button>
          </>
        )}
      </div>
    </div>
  );
};
