import React from "react";
import FooterLogo from "../assets/leasegrid-footer.svg";
import LocationIcon from "../assets/location-icon.svg";
import EmailIcon from "../assets/mail-icons.svg";
import PhoneIcon from "../assets/phone-icon.svg";
import Twitter from "../assets/Twitter-X.png";
import Facebook from "../assets/Facebook.png";
import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";
import Youtube from "../assets/Youtube.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      className="py-20"
      style={{
        background: " linear-gradient(270deg, #9233EA 0%, #5145E5 100%)",
      }}
    >
      <div className="px-4 sm:px-7 md:px-14 xl:px-28 max-w-[1440px] w-full mx-auto">
        <div className="flex items-start lg:flex-row flex-col justify-between gap-10 lg:gap-5">
          <div>
            <img src={FooterLogo} alt="Footer" />
            <p className="mt-5 text-white text-sm leading-[21px] font-normal max-w-[337px]">
              {t("footer.description")}
            </p>
          </div>

          <div className="w-full lg:w-fit flex sm:flex-row flex-col items-start justify-between gap-10 sm:gap-[60px] xl:gap-[100px]">
            <div>
              <h2 className="text-white text-sm leading-[19.5px] font-bold mb-[22px]">
                {t("footer.content.title")}
              </h2>
              <ul className="flex gap-[22px] flex-col">
                <li>
                  <a
                    href="/#home"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    {t("footer.content.home")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#keyfeatures"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    {t("footer.content.keyFeatures")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#whychooseus"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    {t("footer.content.whyChooseUs")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#faq"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    {t("footer.content.faq")}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-bold"
                  >
                    {t("footer.content.contactUs")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-sm leading-[19.5px] font-bold mb-[22px]">
                {t("footer.company.title")}
              </h2>
              <ul className="flex gap-[22px] flex-col">
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    {t("footer.company.privacyPolicy")}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    {t("footer.company.termsConditions")}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    {t("footer.company.cookiesSettings")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-sm leading-[19.5px] font-bold mb-[22px]">
                {t("footer.contact.title")}
              </h2>
              <ul className="flex gap-[22px] flex-col">
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium flex items-start gap-2"
                  >
                    <img src={LocationIcon} alt="location" className="mt-1" />
                    {t("footer.contact.location")}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium flex items-start gap-2"
                  >
                    <img src={PhoneIcon} alt="phone" width={22} height={24} />
                    {t("footer.contact.phone")}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium flex items-start gap-2"
                  >
                    <img
                      src={EmailIcon}
                      alt="email"
                      width={20}
                      height={16}
                      className="mt-0.5"
                    />
                    {t("footer.contact.email")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#9CA3AF] mt-8">
          <div className="mt-7 flex sm:items-center sm:flex-row flex-col justify-between w-full gap-8">
            <p className="text-white text-base leading-[24px] font-medium">
              {t("footer.footerText")}
            </p>
            <div className="flex items-center gap-5">
              <a href="">
                <img src={Twitter} alt="twitter" width={26} height={23.5} />
              </a>
              <a href="">
                <img src={Facebook} alt="facebook" width={23.14} height={23} />
              </a>
              <a href="">
                <img src={Linkedin} alt="linkedin" width={23} height={23} />
              </a>
              <a href="">
                <img src={Instagram} alt="instagram" width={23} height={23} />
              </a>
              <a href="">
                <img src={Youtube} alt="youtube" width={32.86} height={23} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
