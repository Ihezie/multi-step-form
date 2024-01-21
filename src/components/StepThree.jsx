import { useFormData } from "../FormContext";
import { useState, useEffect } from "react";
import FormControls from "./FormControls";
import checkmark from "../assets/images/check-solid.svg";
import { AnimatePresence, motion } from "framer-motion";

const StepThree = () => {
  const [formData, setFormData] = useFormData();
  const { globalBillingType, stepThree } = formData;

  const [addOnData, setAddOnData] = useState(stepThree);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const atLeastOneAddOn = addOnData.some((item) => item.selected);
    if (atLeastOneAddOn) {
      setFormData({
        ...formData,
        stepThree: addOnData,
        currentStep: "stepFour",
      });
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    const atLeastOneAddOn = addOnData.some((item) => item.selected);
    if (atLeastOneAddOn) {
      setError(false);
    }
  }, [addOnData]);
  
  return (
    <form
      onSubmit={handleSubmit}
      className="text-marine-blue lg:min-h-[435px] lg:relative"
    >
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="text-sm/8 overflow-hidden text-strawberry-red font-bold"
          >
            Please pick at least one add-on
          </motion.p>
        )}
      </AnimatePresence>
      {addOnData.map((item, index) => {
        return (
          <SingleAddOn
            key={index}
            {...item}
            globalBillingType={globalBillingType}
            addOnData={addOnData}
            setAddOnData={setAddOnData}
            index={index}
          />
        );
      })}
      <FormControls goBackValue="stepTwo" />
    </form>
  );
};
export default StepThree;

const SingleAddOn = ({
  title,
  description,
  price,
  globalBillingType,
  addOnData,
  setAddOnData,
  index,
}) => {
  const handleClick = (e) => {
    if (e.target.tagName === "LABEL") {
      return;
    }
    const newAddOnData = [...addOnData];
    newAddOnData[index].selected = !newAddOnData[index].selected;
    setAddOnData(newAddOnData);
  };
  return (
    <div
      className={`flex mb-4 border border-light-gray p-4 rounded-lg justify-between items-center cursor-pointer sm:hover:border-purplish-blue my-transition sm:p-5 ${
        addOnData[index].selected ? "border-purplish-blue bg-magnolia" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flex gap-5 items-center">
        <div className="relative h-5">
          <input
            type="checkbox"
            className="cursor-pointer appearance-none w-5 h-5  border border-light-gray rounded checked:bg-purplish-blue my-transition"
            name={title}
            id={title}
            checked={addOnData[index].selected}
          />
          <img
            src={checkmark}
            alt="checkmark"
            className={`w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
              addOnData[index].selected ? "" : "hidden"
            }`}
          />
        </div>
        <div> 
          <label className="font-medium cursor-pointer" htmlFor={title}>
            {title}
          </label>
          <p className="text-sm text-cool-gray">{description}</p>
        </div>
      </div>
      <span className="text-sm text-purplish-blue">
        +$
        {globalBillingType === "monthly"
          ? `${price[globalBillingType]}/mo`
          : `${price[globalBillingType]}/yr`}
      </span>
    </div>
  );
};
