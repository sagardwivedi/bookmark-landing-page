import Head from "next/head";
import { Download, Features, Hero, Navbar } from "../components";

const index = () => {
  return (
    <div>
      <Head>
        <title>BookMark | Home</title>
      </Head>
      <div className="mx-auto w-[85%]">
        <Navbar />
        <Hero />
        <Features />
        <Download />
      </div>
    </div>
  );
};

export default index;
