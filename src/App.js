import Logo from "./img/logo.svg"

function App() {
  /* Youtube: Tailwind Crash Course | Project From Scratch */
  return (
    <>
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={Logo} alt="" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-sky-500">Pricing</a>
          <a href="#" className="hover:text-sky-500">Product</a>
          <a href="#" className="hover:text-sky-500">About Us</a>
          <a href="#" className="hover:text-sky-500">Careers</a>
          <a href="#" className="hover:text-sky-500">Community</a>
        </div>
        <button className="hidden md:block p-2 px-6  text-white bg-red-500 rounded-full baseline hover:bg-red-400">Get Started</button>
      </div>
    </nav>
    <section>
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* space-y-0 =space between y elements=0 */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">sdfsdf</div>
        <div className="">aaaaa</div>
      </div>
    </section>
    </>
    
  );
}

export default App;
