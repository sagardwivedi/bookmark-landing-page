import HeroImage from "../public/illustration-hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mb-[5rem]">
      <div className="my-8">
        <Image src={HeroImage} alt="Hero" />
        <div className="absolute top-[22%] right-0 -z-50 h-[12rem] w-[78%] rounded-l-full bg-soft-blue" />
      </div>
      <article className="space-y-5 pt-6 text-center">
        <h1>A Simple Bookmark Manager</h1>
        <p className="line-clamp-4">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
      </article>
      <div className="mt-10 flex flex-row items-center justify-between">
        <button className="btn-primary">Get it on Chrome</button>
        <button className="btn-secondary">Get it on Firefox</button>
      </div>
    </div>
  );
};

export default Hero;
