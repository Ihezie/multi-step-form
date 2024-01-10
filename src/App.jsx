import FormBody from "./components/FormBody";
import FormSteps from "./components/FormSteps";

function App() {
  return (
    <main className="min-h-full relative lg:grid lg:w-[950px] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:grid-cols-[30%_70%] lg:min-h-0 lg:bg-white lg:p-4 lg:rounded-xl shadow-2xl shadow-light-gray">
      <FormSteps />
      <FormBody />
    </main>
  );
}

export default App;
