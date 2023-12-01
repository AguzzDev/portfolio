import emailjs from "@emailjs/browser";
import { InputField } from "components/Input/InputField";
import { Form, Formik, Field } from "formik";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { FormValidate } from "utils/FormValidate";
import axios from "axios";

export const Contact = () => {
  const [send, setSend] = useState(false);
  const { t } = useTranslation();

  const axiosURL = axios.create({
    baseURL:
      process.env.NODE_ENV == "development"
        ? "http://localhost:3000"
        : "https://www.agustin-ribotta.xyz",
  });

  return (
    <section id="contact-section" className="w-full sm:w-3/4">
      <h2 className="textGradient">{t("common:contact-title")}</h2>
      <div className="my-4">
        <h3 className="tracking-tight">{t("common:contact-message")}</h3>
      </div>

      <Formik
        initialValues={{ name: "", email: "", message: "", err: "" }}
        validationSchema={FormValidate}
        onSubmit={async (values, { resetForm, setStatus, setSubmitting }) => {
          const errorsType = {
            450: "El email no existe",
          };

          try {
            await axiosURL.post("/api/sendMail", values);

            setStatus({});
            setSend(true);
            setTimeout(() => {
              resetForm();
              setSend(false);
              setSubmitting(false);
            }, 3000);
          } catch (error) {
            setStatus({ err: errorsType[error.response.data.responseCode] });
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form className="flex flex-col box1 p-5">
            <InputField label="Nombre" name="name" />
            <InputField label="Email" name="email" />
            <InputField label="Mensaje" name="message" as="textarea" rows="4" />
            <button
              className="px-2 py-3 bg-gray1 dark:bg-gray4 mt-5 font-bold text-white dark:text-black rounded-md"
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </button>
            {status && (
              <p className="mt-1 text-xs font-bold text-red-500 dark:text-red-400">
                {status.err}
              </p>
            )}
            {send ? <p>Enviado</p> : null}
          </Form>
        )}
      </Formik>
    </section>
  );
};
