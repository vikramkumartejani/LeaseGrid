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
    <div
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
                CONTENT
              </h2>
              <ul className="flex gap-[22px] flex-col">
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    Key Features
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    Why Choose Us?
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-bold"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-sm leading-[19.5px] font-bold mb-[22px]">
                COMPANY
              </h2>
              <ul className="flex gap-[22px] flex-col">
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium"
                  >
                    Cookies Settings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-sm leading-[19.5px] font-bold mb-[22px]">
                CONTACT
              </h2>
              <ul className="flex gap-[22px] flex-col">
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium flex items-start gap-2"
                  >
                    <img src={LocationIcon} alt="location" className="mt-1" />
                    London W3 9NW, United <br /> Kingdom
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium flex items-start gap-2"
                  >
                    <img
                      src={PhoneIcon}
                      alt="location"
                      width={22}
                      height={24}
                    />
                    0208 993 4500
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white text-sm leading-[19.5px] font-medium flex items-start gap-2"
                  >
                    <img
                      src={EmailIcon}
                      alt="location"
                      width={20}
                      height={16}
                      className="mt-0.5"
                    />
                    info@leasgrid.io
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#9CA3AF] mt-8">
          <div className="mt-7 flex sm:items-center sm:flex-row flex-col justify-between w-full gap-8">
            <p className="text-white text-base leading-[24px] font-medium">
              © 2024. All rights reserved.
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
    </div>
  );
};

export default Footer;
