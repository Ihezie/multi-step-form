import { createContext, useContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const initialValues = {
    stepOne: {
      name: "",
      email: "",
      phoneNumber: "",
    },
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