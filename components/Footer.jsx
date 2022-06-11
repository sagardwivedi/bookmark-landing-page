import Image from "next/image";

import BrandLogo from "../public/logo-bookmark-w.svg";
import FacebookIcon from "../public/icon-facebook.svg";
import TwitterIcon from "../public/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="bg-dark-blue">
      <div className="flex flex-col items-center justify-between space-y-10 py-10">
        <Image src={BrandLogo} alt="Brand Logo" />
        <ul className="space-y-5 tracking-widest text-white">
          <li>
            <h2>FEATURE</h2>
          </li>
          <li>
            <h2>PRICING</h2>
          </li>
          <li>
            <h2>CONTACT</h2>
          </li>
        </ul>
        <div className="flex w-[25%] flex-row items-center justify-between">
          <Image src={FacebookIcon} alt="" />
          <Image src={TwitterIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
