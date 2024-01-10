import { motion } from "framer-motion";
import StepOne from "./StepOne";

const FormBody = () => {
  const formBodyVariants = {
    show: {
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
      },
    },
    hide: {
      scale: "var(--scale-hidden)",
    },
  };
  return (
    <section className="">
      <motion.section
        variants={formBodyVariants}
        initial="hide"
        animate="show"
        className="w-[90%] mx-auto bg-white shadow-2xl shadow-light-gray rounded-lg px-6 py-8 relative bottom-20 sm:w-4/5 sm:rounded-xl sm:px-10 sm:py-10 lg:static lg:bottom-0 lg:shadow-none lg:rounded-none lg:w-full lg:bg-transparent lg:pl-[15%] lg:pr-[13%] lg:pb-0 max-lg:[--scale-hidden:0%]"
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
      </motion.section>
      <div className="bg-white absolute bottom-0 h-20 w-full flex items-center justify-between px-[5%] sm:bg-transparent">
        <button className="text-cool-gray font-medium cursor-pointer my-transition hover:text-marine-blue invisible">
          Go Back
        </button>
        <button className="text-white bg-marine-blue w-28 py-3 rounded font-medium hover:bg-marine-blue/85 my-transition sm:rounded-lg">
          Next Step
        </button>
      </div>
    </section>
  );
};
export default FormBody;
