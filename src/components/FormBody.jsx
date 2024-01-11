import { motion } from "framer-motion";
import StepOne from "./StepOne";
import { useRef } from "react";

const FormBody = () => {
  const formBodyVariants = {
    show: {
      scale: "var(--scale-visible, 1)",
      transition: {
        duration: 0.8,
        type: "spring",
      },
    },
    hide: {
      scale: "var(--scale-hidden, 1)",
    },
  };
  const buttonVariants = {
    show: {
      scale: "var(--scale-visible, 1)",
      transition: {
        delay: "0.5",
        duration: 0.5,
        type: "spring",
      },
    },
    hide: {
      scale: "var(--scale-hidden, 1)",
    },
  };

  const stepOneRef = useRef();
  const handleClick = () => {
    stepOneRef.current.requestSubmit()
  };
  const onSubmit = () => {
    console.log("rice");
  };
  return (
    <section className="sm:relative sm:w-4/5 sm:mx-auto sm:bottom-20 lg:bottom-0 lg:w-full lg:pl-[15%] lg:pr-[13%]">
      <motion.section
        variants={formBodyVariants}
        initial="hide"
        animate="show"
        className="w-[90%] mx-auto bg-white shadow-2xl shadow-light-gray rounded-lg px-6 py-8 relative bottom-20 sm:w-full sm:bottom-0 sm:rounded-xl sm:px-10 sm:pt-10 sm:pb-32 lg:pb-0 lg:mb-20 lg:px-0 lg:static lg:shadow-none lg:rounded-none lg:bg-transparent max-lg:[--scale-hidden:0%] max-lg:[--scale-visible:100%]"
      >
        <header className="mb-5 lg:mb-8">
          <h1 className="font-bold text-2xl text-marine-blue mb-3 lg:text-3xl">
            Personal info
          </h1>
          <h2 className="text-cool-gray">
            Please provide your name, email address, and phone number.
          </h2>
        </header>
        <StepOne ref={stepOneRef} onSubmit={onSubmit} />
      </motion.section>
      <div className="bg-white absolute bottom-0 h-20 w-full flex items-center justify-between px-[5%] sm:bg-transparent sm:px-10 lg:static lg:px-0  origin-top">
        <button className="text-cool-gray font-medium cursor-pointer my-transition hover:text-marine-blue invisible">
          Go Back
        </button>
        <motion.button
          variants={buttonVariants}
          initial="hide"
          animate="show"
          onClick={handleClick}
          className="text-white bg-marine-blue w-28 py-3 rounded font-medium sm:rounded-lg  max-lg:[--scale-hidden:0%] max-lg:[--scale-visible:100%]"
          whileHover={{
            backgroundColor: "rgba(2, 42, 90, 0.85)",
          }}
        >
          Next Step
        </motion.button>
      </div>
    </section>
  );
};
export default FormBody;
