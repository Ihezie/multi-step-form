import { useForm } from "react-hook-form";
import { useState } from "react";

const ExampleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const [name, setName] = useState("");
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        setName(data.firstName);
        setTimeout(() => {
          console.log(name);
        }, 2000);
      })}
    >
      <input
        type="text"
        {...register("firstName", { required: "This is required" })}
        placeholder="first name"
      />
      <p>{errors.firstName?.message}</p>
      <input
        type="text"
        {...register("lastName", {
          required: "This is required",
          minLength: {
            value: 4,
            message: "min length is 4",
          },
        })}
        placeholder="last name"
      />
      <p>{errors.lastName?.message}</p>
      <input type="submit" />
    </form>
  );
};
export default ExampleForm;
