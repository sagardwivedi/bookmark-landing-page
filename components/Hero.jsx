import HeroImage from "../public/illustration-hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div>
        <Image src={HeroImage} property="true" layout="responsive" alt="Hero" />
      </div>
      <article className="text-center">
        <h1 className="text-4xl font-medium text-dark-blue">
          A Simple Bookmark Manager
        </h1>
        <p className="text-grayish-blue">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
      </article>
      <div>
        <button className="btn-primary">Get it on Chrome</button>
        <button className="btn-secondary">Get it on Firefox</button>
      </div>
    </div>
  );
};

export default Hero;
