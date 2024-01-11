import { useForm } from "react-hook-form";
import { forwardRef } from "react";

const StepOne = forwardRef(({ onSubmit }, ref) => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="text-marine-blue"
      onSubmit={handleSubmit(onSubmit)}
      ref={ref}
    >
      <label htmlFor="name" className="text-sm block lg:mb-2">
        Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="e.g. Stephen King"
        {...register("name", { required: true })}
        className="block border border-light-gray w-full py-2 px-5 font-medium rounded mb-4 focus:border-1 focus:border-purplish-blue outline-none my-transition lg:rounded-lg lg:py-[10px] lg:mb-6"
      />
      <label htmlFor="email" className="text-sm block lg:mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        {...register("email", { required: true })}
        placeholder="e.g. stephenking@lorem.com"
        className="block border border-light-gray w-full py-2 px-5 font-medium rounded mb-4 focus:border-1 focus:border-purplish-blue outline-none my-transition lg:rounded-lg lg:py-[10px] lg:mb-6"
      />
      <label htmlFor="phone" className="text-sm block lg:mb-2">
        Phone Number
      </label>
      <input
        id="phone"
        type="text"
        {...register("phone-number", { required: true })}
        placeholder="e.g. +1 234 567 890"
        className="block border border-light-gray w-full py-2 px-5 font-medium rounded focus:border-1 focus:border-purplish-blue outline-none my-transition lg:rounded-lg lg:py-[10px] lg:mb-6"
      />
      {/* <input type="submit" value="submit" /> */}
    </form>
  );
});
export default StepOne;
