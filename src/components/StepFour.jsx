import FormControls from "./FormControls";
import { useFormData } from "../FormContext";

const StepFour = () => {
  const [formData, setFormData] = useFormData();
  const { globalBillingType, stepTwo, stepThree } = formData;

  const total = stepThree.reduce((accumulator, currentValue) => {
    if (currentValue.selected) {
      return accumulator + currentValue.price[globalBillingType];
    }
    return accumulator + 0;
  }, stepTwo.price);

  return (
    <section className="text-marine-blue lg:min-h-[435px] lg:relative">
      <section className="bg-magnolia px-4 pt-4 pb-2 rounded-md lg:pb-4">
        <div className="flex justify-between items-center pb-4 border-b border-light-gray">
          <div>
            <p className="capitalize font-medium">
              {stepTwo.globalSelectedPlan} ({globalBillingType})
            </p>
            <button
              className="text-cool-gray cursor-pointer underline my-transition hover:text-purplish-blue"
              onClick={() => {
                setFormData({ ...formData, currentStep: "stepTwo" });
              }}
            >
              Change
            </button>
          </div>
          <span className="text-sm font-bold sm:text-base">
            $
            {globalBillingType === "monthly"
              ? `${stepTwo.price}/mo`
              : `${stepTwo.price}/yr`}
          </span>
        </div>
        <div className="pt-2">
          {stepThree.map((item) => {
            if (item.selected) {
              return (
                <div
                  className="flex justify-between items-center py-1"
                  key={item.title}
                >
                  <span className="text-cool-gray">{item.title}</span>
                  <span className="text-sm">
                    +$
                    {globalBillingType === "monthly"
                      ? `${item.price[globalBillingType]}/mo`
                      : `${item.price[globalBillingType]}/yr`}
                  </span>
                </div>
              );
            }
          })}
        </div>
      </section>
      <div className="flex justify-between mt-6 px-4">
        <p className="text-cool-gray">
          Total (per {globalBillingType === "monthly" ? "month" : "year"})
        </p>
        <span className="font-bold text-purplish-blue sm:text-lg lg:text-xl">
          +$
          {globalBillingType === "monthly" ? `${total}/mo` : `${total}/yr`}
        </span>
      </div>
      <FormControls goBackValue="stepThree" />
    </section>
  );
};
export default StepFour;
