import { useForm } from "react-hook-form";
import FormControls from "./FormControls";

const StepOne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="text-marine-blue" onSubmit={handleSubmit()}>
      <div className={`flex justify-between items-center mb-2`}>
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        {errors.name && (
          <p className="text-sm font-bold text-strawberry-red" role="alert">
            {errors.name?.message}
          </p>
        )}
      </div>
      <input
        id="name"
        type="text"
        placeholder="e.g. Stephen King"
        {...register("name", {
          required: "This field is required",
          maxLength: {
            value: 30,
            message: "Maximum of 60 characters",
          },
          minLength: {
            value: 2,
            message: "Minimum of 2 characters",
          },
        })}
        className={`block border border-light-gray w-full py-2 px-5 font-medium rounded mb-4 focus:border-1 focus:border-purplish-blue outline-none my-transition lg:rounded-lg lg:py-[10px] lg:mb-6 ${
          errors.name ? "border-1 !border-strawberry-red" : ""
        }`}
      />
      <div className={`flex justify-between items-center mb-2`}>
        <label htmlFor="email" className="text-sm">
          Email Address
        </label>
        {errors.email && (
          <p className="text-sm font-bold text-strawberry-red" role="alert">
            {errors.email?.message}
          </p>
        )}
      </div>
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "This field is required",
          maxLength: {
            value: 30,
            message: "Maximum of 50 characters",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        placeholder="e.g. stephenking@lorem.com"
        className={`block border border-light-gray w-full py-2 px-5 font-medium rounded mb-4 focus:border-1 focus:border-purplish-blue outline-none my-transition lg:rounded-lg lg:py-[10px] lg:mb-6 ${
          errors.email ? "border-1 !border-strawberry-red" : ""
        }`}
      />
      <div className={`flex justify-between items-center mb-2`}>
        <label htmlFor="phone" className="text-sm">
          Phone Number
        </label>
        {errors.phoneNumber && (
          <p className="text-sm font-bold text-strawberry-red" role="alert">
            {errors.phoneNumber?.message}
          </p>
        )}
      </div>
      <input
        id="phone"
        type="text"
        {...register("phoneNumber", {
          required: "This field is required",
          maxLength: {
            value: 30,
            message: "Maximum of 50 characters",
          },
          pattern: {
            value:
              /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g,
            message: "Invalid phone number",
          },
        })}
        placeholder="e.g. +1 234 567 8900"
        className={`block border border-light-gray w-full py-2 px-5 font-medium rounded focus:border-1 focus:border-purplish-blue outline-none my-transition lg:rounded-lg lg:py-[10px] lg:mb-6 ${
          errors.phoneNumber ? "border-1 !border-strawberry-red" : ""
        }`}
      />
      <FormControls />
    </form>
  );
};
export default StepOne;
