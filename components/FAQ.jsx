import Image from "next/image";
import { Disclosure } from "@headlessui/react";

import { faqs } from "./data";
import Arrow from "../public/icon-arrow.svg";

const FAQ = () => {
  return (
    <div className="my-16 flex flex-col items-center justify-center text-center">
      <h1>Frequently Asked Questions</h1>
      <p className="mt-4 mb-8">
        Here are some of our FAQs. If you have any other questions youd like
        answered please feel free to email us.
      </p>
      <div>
        {faqs.map((faq) => (
          <Disclosure key={faq.id}>
            <Disclosure.Button
              className={`flex w-full flex-row items-center justify-between border-b border-b-grayish-blue py-4`}
            >
              <p>{faq.question}</p>
              <Image src={Arrow} alt="Arrow" />{" "}
            </Disclosure.Button>
            <Disclosure.Panel>{faq.answer}</Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
      <button className="btn-primary my-8">More Info</button>
    </div>
  );
};

export default FAQ;
