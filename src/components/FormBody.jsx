import { motion } from "framer-motion";
import StepOne from "./StepOne";

const FormBody = () => {
  const formBodyVariants = {
    show: {
      opacity: "var(--shown-opacity, 1)",
      transition: {
        duration: 0.8,
      },
    },
    hide: {
      opacity: "var(--hidden-opacity, 1)",
    },
  };
  return (
    <section
      className="w-[90%] mx-auto bg-white shadow-2xl shadow-light-gray rounded-lg px-6 py-8 sm:w-4/5 sm:rounded-xl sm:px-10 sm:pt-10 lg:w-full lg:pb-0 lg:pl-[15%] lg:pr-[13%] lg:shadow-none lg:rounded-none lg:bg-transparent max-lg:[--shown-opacity:1] max-lg:[--hidden-opacity:0]"
    >
      <header className="mb-5 lg:mb-8">
        <h1 className="font-bold text-2xl text-marine-blue mb-3 lg:text-3xl">
          Personal info
        </h1>
        <h2 className="text-cool-gray">
          Please provide your name, email address, and phone number.
        </h2>
      </header>
      <StepOne />
    </section>
  );
};
export default FormBody;
