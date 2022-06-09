import Image from "next/image";
import { Tab } from "@headlessui/react";

import ImageTab1 from "../public/illustration-features-tab-1.svg";
import ImageTab2 from "../public/illustration-features-tab-2.svg";
import ImageTab3 from "../public/illustration-features-tab-3.svg";

const tabTitles = [
  {
    id: 1,
    title: "Simple Bookmarking",
  },
  {
    id: 2,
    title: "Speedy Searching",
  },
  {
    id: 3,
    title: "Easy Sharing",
  },
];

const tabData = [
  {
    id: 1,
    img: ImageTab1,
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: 2,
    img: ImageTab2,
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 3,
    img: ImageTab3,
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const Features = () => {
  return (
    <div className="h-screen">
      <article className="text-center">
        <h1>Features</h1>
        <p className="mt-4 mb-10 ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </article>
      <div>
        <Tab.Group vertical>
          <Tab.List className={`flex flex-col text-center`}>
            {tabTitles.map((tab) => (
              <Tab
                key={tab.id}
                className={`${
                  tab.id === 1
                    ? "border-y border-y-grayish-blue p-4 font-medium text-grayish-blue"
                    : "border-b border-b-grayish-blue p-4 font-medium text-grayish-blue"
                }`}
              >
                {tab.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {tabData.map((tab) => (
              <Tab.Panel key={tab.id}>
                <div className="relative flex flex-col items-center justify-center text-center">
                  <div className="mt-[4rem] mb-[7rem]">
                    <Image src={tab.img} alt={tab.title} />
                    <div className="absolute top-[17%] -left-8 -z-50 h-[13rem] w-[98%] rounded-r-full bg-soft-blue" />
                  </div>
                  <h1 className="my-2">{tab.title}</h1>
                  <p className="mt-4 mb-10 line-clamp-4">{tab.description}</p>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Features;
