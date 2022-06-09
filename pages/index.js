import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


const index = () => {
  return (
    <div>
      <header className="mx-auto w-[85%]">
        <Navbar />
        <Hero />
      </header>
    </div>
  );
};

export default index;
