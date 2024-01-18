import { createContext, useContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const initialValues = {
    currentStep: "stepOne",
    stepOne: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    stepTwo: {
      globalBillingType: 'monthly',
      globalSelectedPlan: null,
      price: null,
    }
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