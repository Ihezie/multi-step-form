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
    <motion.section
      variants={formBodyVariants}
      initial="hide"
      animate="show"
      className="sm:w-4/5 sm:mx-auto sm:bg-white sm:shadow-2xl sm:shadow-light-gray sm:relative sm:bottom-20 sm:rounded-xl sm:px-10 sm:pt-10 sm:pb-5 lg:static lg:bottom-0 lg:shadow-none lg:rounded-none lg:w-full lg:bg-transparent lg:pl-[15%] lg:pr-[13%] lg:pb-0 max-lg:[--scale-hidden:0%]"
    >
      <section className="w-[90%] mx-auto bg-white shadow-2xl shadow-light-gray rounded-lg px-6 py-8 relative bottom-20 sm:w-full sm:mx-0 sm:shadow-none sm:static sm:bottom-0 sm:rounded-none sm:bg-transparent sm:mb-12 sm:p-0 lg:mb-20">
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
      <div className="bg-white fixed bottom-0 h-20 w-full flex items-center justify-between px-[5%] sm:bg-transparent sm:static sm:px-0 sm:h-auto lg:h-20">
        <button className="text-cool-gray font-medium cursor-pointer my-transition hover:text-marine-blue invisible">
          Go Back
        </button>
        <button className="text-white bg-marine-blue w-28 py-3 rounded font-medium hover:bg-marine-blue/85 my-transition sm:rounded-lg">
          Next Step
        </button>{" "}
      </div>
      <div className="!fixed bottom-0">kdkd</div>
    </motion.section>
  );
};
export default FormBody;
