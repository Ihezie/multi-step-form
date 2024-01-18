import { useFormData } from "../../FormContext";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
const FormBody = () => {
  const [formData] = useFormData();
  const { currentStep } = formData;

  const formStepsHeadings = {
    stepOne: {
      main: "Personal info",
      sub: "Please provide your name, email address, and phone number.",
    },
    stepTwo: {
      main: "Select your plan",
      sub: "You have the option of monthly or yearly billing.",
    },
    stepThree: {
      main: "Pick add-ons",
      sub: "Add-ons help enhance your gaming experience.",
    },
    stepFour: {
      main: "Finishing up",
      sub: "Double-check everything looks OK before confirming.",
    },
  };
  return (
    <section className="w-[90%] mx-auto bg-white shadow-2xl shadow-light-gray rounded-lg px-6 py-8 sm:w-4/5 sm:rounded-xl sm:px-10 sm:pt-10 lg:w-full lg:mb-0 lg:pb-0 lg:pl-[15%] lg:pr-[13%] lg:shadow-none lg:rounded-none lg:bg-transparent max-lg:[--shown-opacity:1] max-lg:[--hidden-opacity:0]">
      <header className="mb-5 lg:mb-8">
        <h1 className="font-bold text-2xl text-marine-blue mb-3 lg:text-3xl">
          {formStepsHeadings.stepTwo.main}
        </h1>
        <h2 className="text-cool-gray">{formStepsHeadings.stepTwo.sub}</h2>
      </header>
      {currentStep === "stepOne" && <StepOne />}
      {currentStep === "stepTwo" && <StepTwo />}
    </section>
  );
};
export default FormBody;
