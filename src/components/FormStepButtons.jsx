import { motion } from "framer-motion";
import { useFormData } from "../FormContext";

const FormStepButtons = () => {
  const stepButtons = [
    {
      id: 1,
      title: "your info",
      step: "stepOne",
    },
    {
      id: 2,
      title: "select plan",
      step: "stepTwo",
    },
    {
      id: 3,
      title: "add-ons",
      step: "stepThree",
    },
    {
      id: 4,
      title: "summary",
      step: "stepFour",
    },
  ];
  const buttonVariants = {
    show: {
      scale: "var(--scale-visible, 1)",
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 80,
      },
    },
    hide: {
      scale: "var(--scale-hidden, 1)",
    },
  };
  const containerVariants = {
    show: {
      opacity: "var(--shown-opacity, 1)",
      transition: {
        duration: .8,
        staggerChildren: 0.2,
      },
    },
    hide: {
      opacity: "var(--hidden-opacity, 1)",
    },
  };
  const [formData] = useFormData()
  const {currentStep} = formData;
  return (
    <motion.section
      initial="hide"
      animate="show"
      variants={containerVariants}
      className="bg-sidebar-mobile min-h-[200px] h-[28vh] flex justify-center items-start pt-10 gap-4 bg-cover absolute w-full top-0 -z-10 lg:static lg:h-full lg:bg-sidebar-desktop lg:flex-col lg:justify-start lg:rounded-xl lg:pl-8 lg:gap-8 max-lg:[--shown-opacity:1] max-lg:[--hidden-opacity:0]"
    >
      {stepButtons.map((stepButton) => (
        <motion.div
          key={stepButton.id}
          variants={buttonVariants}
          className="flex gap-4 items-center [--scale-hidden:0%] [--scale-visible:100%]"
        >
          <button
            className={`text-white border w-10 h-10 rounded-full cursor-pointer font-medium ${
              stepButton.step === currentStep ? "active" : ""
            } hover:scale-125 my-transition lg:w-[34px] lg:h-[34px] lg:text-sm`}
          >
            {stepButton.id}
          </button>
          <div className="hidden lg:block uppercase">
            <h3 className="text-xs text-white/50">step {stepButton.id}</h3>
            <h2 className="font-medium text-white tracking-widest text-sm">
              {stepButton.title}
            </h2>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};
export default FormStepButtons;
