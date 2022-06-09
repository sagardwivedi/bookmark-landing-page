import Image from "next/image";
import BrandLogo from "../public/logo-bookmark.svg";
import IconMenuOpen from "../public/icon-hamburger.svg";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8">
      <Image
        className="relative"
        src={BrandLogo}
        layout="fixed"
        alt="Brand Logo"
      />
      <div>
        <Menu>
          <Menu.Button>
            <Image src={IconMenuOpen} layout="fixed" alt="Open Menu" />
          </Menu.Button>
          <div className="mx-auto w-[85%]">
            <Menu.Items
              className={`absolute inset-0 top-0 left-0 z-50 flex flex-col divide-y divide-solid divide-grayish-blue bg-dark-blue/90 text-white`}
            >
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
