import { createContext, useContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const initialValues = {
    globalBillingType: "monthly",
    currentStep: "stepOne",
    isFinished: false,
    stepOne: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    stepTwo: {
      globalSelectedPlan: null,
      price: 0,
    },
    stepThree: [
      {
        title: "Online service",
        description: "Access to multiplayer games",
        price: {
          monthly: 1,
          yearly: 10,
        },
        selected: false,
      },
      {
        title: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: {
          monthly: 2,
          yearly: 20,
        },
        selected: false,
      },
      {
        title: "Customizable Profile",
        description: "Custom theme on your profile",
        price: {
          monthly: 2,
          yearly: 20,
        },
        selected: false,
      },
    ],
  };
  const [formData, setFormData] = useState(initialValues);
  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {children}
    </FormContext.Provider>
  );
};
export default FormProvider;

export const useFormData = (index)=>{
  return useContext(FormContext)
}