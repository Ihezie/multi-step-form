import { useFormData } from "../FormContext";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Thankyou from "./Thankyou";
const FormBody = () => {
  const [formData] = useFormData();
  const { currentStep, isFinished } = formData;

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
  const displayStep = (step) => {
    if (step === currentStep && !isFinished) {
      return true;
    }
    return false;
  };
  return (
    <section className="w-[90%] mx-auto bg-white shadow-2xl shadow-light-gray rounded-lg px-6 py-8 sm:w-4/5 sm:rounded-xl sm:px-10 sm:pt-10 lg:w-full lg:mb-0 lg:pb-0 lg:pl-[15%] lg:pr-[13%] lg:shadow-none lg:rounded-none lg:bg-transparent">
      {!isFinished && (
        <header className="mb-5 lg:mb-8">
          <h1 className="font-bold text-2xl text-marine-blue mb-3 lg:text-3xl">
            {formStepsHeadings[currentStep]?.main}
          </h1>
          <h2 className="text-cool-gray">
            {formStepsHeadings[currentStep]?.sub}
          </h2>
        </header>
      )}
      {displayStep("stepOne") && <StepOne />}
      {displayStep("stepTwo") && <StepTwo />}
      {displayStep("stepThree") && <StepThree />}
      {displayStep("stepFour") && <StepFour />}
      {isFinished && <Thankyou />}
    </section>
  );
};
export default FormBody;
