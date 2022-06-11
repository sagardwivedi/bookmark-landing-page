import Image from "next/image";

import Chrome from "../public/logo-chrome.svg";
import Firefox from "../public/logo-firefox.svg";
import Opera from "../public/logo-opera.svg";
import Dot from "../public/bg-dots.svg";

const cardData = [
  {
    id: 1,
    img: Chrome,
    title: "Add to Chrome",
    description: "Minimum version 62",
    divider: Dot,
  },
  {
    id: 2,
    img: Firefox,
    title: "Add to Firefox",
    description: "Minimum version 55",
    divider: Dot,
  },
  {
    id: 3,
    img: Opera,
    title: "Add to Opera",
    description: "Minimum version 46",
    divider: Dot,
  },
];

const Download = () => {
  return (
    <div className="text-center">
      <h1>Download the extension</h1>
      <p className="mt-2">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="my-8 flex flex-col items-center justify-center">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="my-4 flex flex-col items-center justify-center rounded-lg pt-4 shadow-xl"
          >
            <Image src={card.img} alt={card.title} />
            <h1 className="mt-8">{card.title}</h1>
            <p className="mb-8">{card.description}</p>
            <Image src={card.divider} alt={card.title} />
            <button className="btn-primary my-4">
              Add & Install Extension
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;
