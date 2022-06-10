import Image from "next/image";

import BrandLogo from "../public/logo-bookmark.svg";
import FacebookIcon from "../public/icon-facebook.svg";
import TwitterIcon from "../public/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="bg-dark-blue">
      <div className="flex flex-col items-center justify-between text-white">
        <Image src={BrandLogo} className="fill-white" alt="Brand Logo" />
        <ul>
          <li>
            <h2>Feature</h2>
          </li>
          <li>
            <h2>PRICING</h2>
          </li>
          <li>
            <h2>CONTACT</h2>
          </li>
        </ul>
        <Image src={FacebookIcon} alt="" />
        <Image src={TwitterIcon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
