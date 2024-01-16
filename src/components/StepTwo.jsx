import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import FormControls from "./FormControls";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StepTwo = () => {
  const plans = [
    {
      icon: arcadeIcon,
      name: "arcade",
      price: {
        monthly: 9,
        yearly: 90,
      },
    },
    {
      icon: advancedIcon,
      name: "advanced",
      price: {
        monthly: 12,
        yearly: 120,
      },
    },
    {
      icon: proIcon,
      name: "pro",
      price: {
        monthly: 15,
        yearly: 150,
      },
    },
  ];
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingType, setBillingType] = useState("monthly");

  const handleSubmit = (e) => {e.preventDefault()};
  return (
    <form className="text-marine-blue" onSubmit={handleSubmit}>
      <fieldset className="lg:flex lg:gap-5">
        {plans.map((plan, index) => {
          return (
            <SinglePlan
              {...plan}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
              billingType={billingType}
              key={index}
            />
          );
        })}
      </fieldset>
      <div className="bg-magnolia mt-8 rounded-lg flex justify-between items-center px-[15%] h-14 font-medium text-cool-gray">
        <span
          className={`my-transition ${
            billingType === "monthly" ? "text-marine-blue" : ""
          }`}
        >
          Monthly
        </span>
        <div
          className="w-10 h-5 bg-marine-blue rounded-full p-1 flex items-center cursor-pointer my-transition hover:scale-110"
          onClick={() => {
            setBillingType(billingType === "monthly" ? "yearly" : "monthly");
          }}
        >
          <div
            className={`h-[13px] w-[13px] bg-white rounded-full my-transition ${
              billingType === "yearly" ? "translate-x-[146.15384%]" : ""
            } `}
          ></div>
        </div>
        <span
          className={`my-transition  ${
            billingType === "yearly" ? "text-marine-blue" : ""
          }`}
        >
          Yearly
        </span>
      </div>
      <FormControls />
    </form>
  );
};
export default StepTwo;

const SinglePlan = ({
  icon,
  name,
  price,
  selectedPlan,
  setSelectedPlan,
  billingType,
}) => {
  const radioRef = useRef();
  return (
    <div className="relative mb-4 lg:mb-0 lg:w-1/3">
      <input
        ref={radioRef}
        type="radio"
        name="plan"
        id={name}
        value={name}
        className="absolute peer opacity-0"
        checked={selectedPlan === name}
        onChange={(e) => {
          setSelectedPlan(e.target.value);
        }}
      />
      <motion.div
        className="border border-light-gray px-4 flex py-4 items-center gap-4 rounded-lg sm:hover:border-purplish-blue cursor-pointer focus:border-purplish-blue my-transition peer-checked:bg-magnolia peer-checked:border-purplish-blue lg:flex-col lg:items-start lg:gap-12"
        onClick={() => {
          if (selectedPlan === name) {
            setSelectedPlan(null);
            radioRef.current.blur();
          } else {
            setSelectedPlan(name);
            radioRef.current.focus();
          }
        }}
      >
        <img src={icon} alt={name} className="w-11" />
        <div>
          <label
            htmlFor={name}
            className="capitalize font-medium text-lg block"
          >
            {name}
          </label>
          <span className="text-cool-gray">
            {billingType === "monthly"
              ? `$${price[billingType]}/mo`
              : `$${price[billingType]}/yr`}
          </span>
          <AnimatePresence>
            {billingType === "yearly" && (
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
                className="text-sm/8 overflow-hidden"
              >
                2 months free
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
