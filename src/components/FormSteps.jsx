const FormSteps = () => {
  const steps = [
    {
      id: 1,
      title: "your info",
    },
    {
      id: 2,
      title: "select plan",
    },
    {
      id: 3,
      title: "add-ons",
    },
    {
      id: 4,
      title: "summary",
    },
  ];
  return (
    <section className="bg-sidebar-mobile min-h-[200px] h-[28vh] flex justify-center items-start pt-10 gap-4 bg-cover lg:h-full lg:bg-sidebar-desktop lg:flex-col lg:justify-start lg:rounded-xl lg:pl-8 lg:gap-8">
      {steps.map((step) => (
        <div key={step.id} className="flex gap-4 items-center">
          <button
            className={`text-white border w-10 h-10 rounded-full cursor-pointer font-medium ${
              step.id === 1 ? "active" : ""
            } hover:scale-125 my-transition lg:w-[34px] lg:h-[34px] lg:text-sm`}
          >
            {step.id}
          </button>
          <div className="hidden lg:block uppercase">
            <h3 className="text-xs text-white/50">step {step.id}</h3>
            <h2 className="font-medium text-white tracking-widest text-sm">{step.title}</h2>
          </div>
        </div>
      ))}
    </section>
  );
};
export default FormSteps;
