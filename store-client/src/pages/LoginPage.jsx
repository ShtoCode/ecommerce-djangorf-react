import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Formik } from "formik";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    loginUser(e);
  };

  return (
    <Card color="transparent" shadow={false}>
      <Formik>
        <form className="mx-auto mt-[calc(50vh_-_300px)] mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nombre de Usuario
            </Typography>
            <Input
              size="lg"
              placeholder="Usuario"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              name="username"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contraseña
            </Typography>
            <Input
              type="password"
              name="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6 bg-tertiary-rgb hover:bg-secondary-rgb" fullWidth type="submit">
            Ingresar
          </Button>
        </form>
      </Formik>
    </Card>
  );
};

export default LoginPage;
