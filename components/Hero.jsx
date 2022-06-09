import HeroImage from "../public/illustration-hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="my-8">
        <Image src={HeroImage} property="true" layout="responsive" alt="Hero" />
        <div className="absolute top-[22%] right-0 -z-50 h-[12rem] w-[80%] rounded-l-full bg-soft-blue" />
      </div>
      <article className="space-y-5 text-center pt-6">
        <h1 className="text-3xl font-medium text-dark-blue">
          A Simple Bookmark Manager
        </h1>
        <p className="text-grayish-blue">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
      </article>
      <div className="space-x-2 mt-8">
        <button className="btn-primary">Get it on Chrome</button>
        <button className="btn-secondary">Get it on Firefox</button>
      </div>
    </div>
  );
};

export default Hero;
