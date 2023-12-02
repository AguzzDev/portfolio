import * as yup from "yup";

export const FormValidate = yup.object().shape({
  name: yup.string().required("common:form-validate-required"),
  email: yup.string().email("common:form-validate-email").required("common:form-validate-required"),
  message: yup
    .string()
    .min(10, "common:form-validate-minCharacters")
    .max(500, "common:form-validate-maxCharacters")
    .required("common:form-validate-required"),
});
