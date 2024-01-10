const StepOne = () => {
  return (
    <form className="text-marine-blue">
      <label htmlFor="name" className="text-sm block lg:mb-2">
        Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="e.g. Stephen King"
        className="block border border-light-gray w-full py-2 px-5 font-medium rounded mb-4 focus:border-1 focus:border-purplish-blue outline-none my-transition lg:rounded-lg lg:py-[10px] lg:mb-6"
      />
      <label htmlFor="email" className="text-sm block lg:mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        className="block border border-light-gray w-full py-2 px-5 font-medium rounded mb-4 focus:border-1 focus:border-purplish-blue outline-none my-transition lg:rounded-lg lg:py-[10px] lg:mb-6"
      />
      <label htmlFor="phone" className="text-sm block lg:mb-2">
        Phone Number
      </label>
      <input
        id="phone"
        type="text"
        placeholder="e.g. +1 234 567 890"
        className="block border border-light-gray w-full py-2 px-5 font-medium rounded focus:border-1 focus:border-purplish-blue outline-none my-transition lg:rounded-lg lg:py-[10px] lg:mb-6"
      />
    </form>
  );
};
export default StepOne;
