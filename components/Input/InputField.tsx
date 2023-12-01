import { Field, useField } from "formik";
import { InputFieldProps } from "types";

export const InputField = (props: InputFieldProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold py-2">{props.label}</label>
      <div className="flex justify-between px-5 py-2 rounded-md box1">
        <Field
          className="w-full pr-3"
          autoComplete="off"
          type="text"
          {...props}
          {...field}
        />
      </div>
      {meta.touched && meta.error ? (
        <p className="mt-1 text-xs font-bold text-red-500 dark:text-red-400">
          {meta.error}
        </p>
      ) : null}
    </div>
  );
};
