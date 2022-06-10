import Head from "next/head";
import {
  ContactUs,
  Download,
  FAQ,
  Features,
  Footer,
  Hero,
  Navbar,
} from "../components";

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
        <FAQ />
        <div className="absolute inset-x-0 w-screen">
          <ContactUs />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;
