import FormBody from "./components/FormBody";
import FormSteps from "./components/FormSteps";
import { motion } from "framer-motion";
import FormProvider from "../FormContext";

function App() {
  const variants = {
    show: {
      scale: "var(--main-scale-visible)",
      transition: {
        duration: 0.8,
        type: "spring",
      },
    },
    hide: {
      scale: "var(--main-scale-hidden)",
      x: "var(--translate)",
      y: "var(--translate)",
    },
  };
  return (
    <motion.main
      variants={variants}
      initial="hide"
      animate="show"
      className="min-h-full pt-36 pb-28 relative lg:grid lg:w-[950px] lg:absolute lg:left-1/2 lg:top-1/2 lg:[--translate:-50%] lg:grid-cols-[30%_70%] lg:min-h-0 lg:bg-white lg:p-4 lg:rounded-xl shadow-2xl shadow-light-gray lg:[--main-scale-hidden:0%] lg:[--main-scale-visible:100%]"
    >
      <FormProvider>
        <FormSteps />
        <FormBody />
      </FormProvider>
    </motion.main>
  );
}

export default App;
