import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import i18next hook
import Logo from "../assets/lease-grid-logo.svg";
import Menu from "../assets/menu.svg";
import CloseIcon from "../assets/close-menu.svg";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  const { t } = useTranslation(); // Get the translation function
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 sm:px-7 md:px-14 xl:px-28 max-w-[1440px] w-full mx-auto py-5 sticky top-0 bg-white flex items-center justify-between z-[9999]">
      <img
        src={Logo}
        alt={t("header.logo.alt")}
        className="w-[225px] md:w-[265px]"
      />

      {/* Desktop Menu */}
      <div className="lg:flex hidden items-center gap-6">
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="/#home"
              className="text-black_100 font-medium leading-[19.5px]"
            >
              {t("header.menu.home")}
            </a>
          </li>
          <li>
            <a
              href="/#keyfeatures"
              className="text-black_100 font-medium leading-[19.5px]"
            >
              {t("header.menu.keyFeatures")}
            </a>
          </li>
          <li>
            <a
              href="/#whychooseus"
              className="text-black_100 font-medium leading-[19.5px]"
            >
              {t("header.menu.whyChooseUs")}
            </a>
          </li>
          <li>
            <a
              href="/#faq"
              className="text-black_100 font-medium leading-[19.5px]"
            >
              {t("header.menu.faq")}
            </a>
          </li>
          <li>
            <LanguageDropdown />
          </li>
        </ul>
        <button className="border border-blueberry_blue text-base text-blueberry_blue font-bold px-5 h-[46px] rounded-[150px]">
          {t("header.menu.contactUs")}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex items-center"
      >
        <img
          src={menuOpen ? CloseIcon : Menu}
          alt={t(
            menuOpen ? "header.mobileMenu.close" : "header.mobileMenu.open"
          )}
          width={30}
          height={30}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 z-50 top-full w-full bg-white shadow-md py-5">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a
                href="/#home"
                className="text-black_100 font-medium leading-[19.5px]"
              >
                {t("header.menu.home")}
              </a>
            </li>
            <li>
              <a
                href="/#keyfeatures"
                className="text-black_100 font-medium leading-[19.5px]"
              >
                {t("header.menu.keyFeatures")}
              </a>
            </li>
            <li>
              <a
                href="/#whychooseus"
                className="text-black_100 font-medium leading-[19.5px]"
              >
                {t("header.menu.whyChooseUs")}
              </a>
            </li>
            <li>
              <a
                href="/#faq"
                className="text-black_100 font-medium leading-[19.5px]"
              >
                {t("header.menu.faq")}
              </a>
            </li>
            <li>
              <LanguageDropdown />
            </li>
            <li>
              <button className="border border-blueberry_blue text-base text-blueberry_blue font-bold px-5 h-[46px] rounded-[150px]">
                {t("header.menu.contactUs")}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
