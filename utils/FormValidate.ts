import * as yup from "yup";

export const FormValidate = yup.object().shape({
  name: yup.string().required("Requerido"),
  email: yup.string().email("Email no valido").required("Requerido"),
  message: yup
    .string()
    .min(10, "Minimo 10 caracteres")
    .max(500, "Maximo 500 caracteres")
    .required("Requerido"),
});
