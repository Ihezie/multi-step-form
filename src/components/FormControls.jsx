import { motion } from "framer-motion";

const FormControls = () => {
  const buttonVariants = {
    show: {
      scale: "var(--scale-visible, 1)",
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
      },
    },
    hide: {
      scale: "var(--scale-hidden, 1)",
    },
  };
  return (
    <div className="bg-white absolute left-0 bottom-0 h-20 w-full flex items-center justify-between px-[5%] sm:bg-transparent sm:px-0 sm:static sm:mt-10 sm:h-auto lg:h-20 lg:mt-16">
      <button className="text-cool-gray font-medium cursor-pointer my-transition hover:text-marine-blue invisible">
        Go Back
      </button>
      <motion.button
        type="submit"
        variants={buttonVariants}
        initial="hide"
        animate="show"
        className="text-white bg-marine-blue w-28 py-3 rounded font-medium sm:rounded-lg lg:w-32 max-lg:[--scale-hidden:0%] max-lg:[--scale-visible:100%]"
        whileHover={{
          backgroundColor: "rgba(2, 42, 90, 0.85)",
        }}
      >
        Next Step
      </motion.button>
    </div>
  );
};
export default FormControls;
