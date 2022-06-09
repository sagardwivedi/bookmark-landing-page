import { Features, Hero, Navbar } from "../components";

const index = () => {
  return (
    <div>
      <header className="mx-auto w-[85%]">
        <Navbar />
        <Hero />
        <Features />
      </header>
    </div>
  );
};

export default index;
