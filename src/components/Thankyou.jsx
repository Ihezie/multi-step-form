import thanksIcon from "../assets/images/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <section className="text-marine-blue text-center px-4 py-10 sm:h-[389px] lg:h-[539px] lg:py-0 lg:flex lg:flex-col lg:justify-center lg:pb-10 lg:px-0">
      <img
        src={thanksIcon}
        alt="thank you icon"
        className="w-16 mx-auto mb-6 lg:w-auto"
      />
      <h1 className="text-3xl font-bold">Thank you!</h1>
      <p className="text-cool-gray text-lg mt-3">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </section>
  );
};
export default Thankyou;
