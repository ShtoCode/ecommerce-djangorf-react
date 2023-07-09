import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Formik } from "formik";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    loginUser(e);
  };

  return (
    <div>
      <Formik>
        <form onSubmit={handleSubmit}>
          <label>Usuario</label>
          <input type="text" name="username" placeholder="Enter username" />
          <label>Contraseña</label>
          <input type="password" name="password" placeholder="Enter password" />
          <button>Login</button>
        </form>
      </Formik>
    </div>
  );
};

export default LoginPage;
