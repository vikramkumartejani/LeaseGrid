import React from "react";
import { GrFormCheckmark } from "react-icons/gr";

const ChoosePlan = () => {
  return (
    <div className="bg-white py-[80px] px-[20px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2 className="text-[40px] text-black_100 leading-[42.8px] font-[700] tracking-[-2%]">
            Choose Your Plan
          </h2>
          <p className="mt-[20px] text-[16px] leading-[24px] text-gray_600 max-w-[632px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Eget maecenas bibendum nisi
            arcu vitae cum cras aenean. Risus diam lectus platea elit lectus
            quisque
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center md:items-stretch items-center gap-[20px] mt-[60px]">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white px-[30px] py-[40px] rounded-[22px] ${
                tier.highlighted
                  ? "border-[3px] border-[#4F45E4]"
                  : "border border-[#E5E7EB]"
              } w-full max-w-sm`}
              style={{
                boxShadow: `0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A`,
              }}
            >
              <h2 className="text-[24px] font-[600] mb-[12px]">{tier.title}</h2>
              <div className="text-[47px] font-[700] mb-[32px] flex items-center leading-[52.64px]">
                {tier.price}
                <span className="text-[20px] ml-[16px] text-gray_600 leading-[22.4px]">
                  /month
                </span>
              </div>
              <ul className="mb-[32px] pb-[32px] space-y-[21px] border-b border-b-[#D1D5DB]">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src="/icons/check.png"
                      className="mr-[12px] flex-shrink-0 w-[15px] h-[13px] my-auto"
                    />
                    <span className="text-gray_600 text-[16px] leading-[20.16px] font-[500]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-[12px] px-6 rounded-full text-[20px] font-[700] leading-[30px] ${
                  tier.highlighted
                    ? "bg-[#4F45E4] text-white hover:bg-indigo-600"
                    : "bg-[#E4E7EB] text-black hover:bg-gray-200"
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;

const tiers = [
  {
    title: "Starter",
    price: "14.90$",
    features: [
      "Lorem ipsum dolor sit amet consectetur. Sit congue tincidunt",
      "Feature label goes here",
      "et consectetur. Sit congue tincidunt",
      "Feature label goes here",
    ],
    ctaText: "Start Free Trial",
    highlighted: false,
  },
  {
    title: "Pro",
    price: "14.90$",
    features: [
      "Lorem ipsum dolor sit amet consectetur. Sit congue tincidunt",
      "Feature label goes here",
      "et consectetur. Sit congue tincidunt",
      "Feature label goes here",
    ],
    ctaText: "Get Started",
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "14.90$",
    features: [
      "Lorem ipsum dolor sit amet consectetur. Sit congue tincidunt",
      "Feature label goes here",
      "et consectetur. Sit congue tincidunt",
      "Feature label goes here",
    ],
    ctaText: "Contact Sales",
    highlighted: false,
  },
];
