export default function WhyChoose() {
  return (
    <div id="whychooseus" className="px-[20px] py-[80px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[28px]">
          <div className="flex flex-col gap-[59px]">
            <h2 className="text-[40px] leading-[44px] text-black_100 font-[700]">
              Why Choose LeaseGrid
            </h2>
            <p className="text-gray_600 text-[16px] font-[500]">
              LeaseGrid is the only property management solution you'll ever
              need. Our platform is designed to simplify every aspect of your
              business.
            </p>
          </div>

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col gap-[16px] rounded-[20px] bg-[#F9FAFB] px-[30px] py-[40px]"
            >
              <img
                src={reason.imgSrc}
                alt={reason.imgAlt}
                className="w-[60px] h-[60px]"
              />
              <h3 className="mt-[34px] text-[26px] font-[700] text-black_100 leading-[31.2px]">
                {reason.title}
              </h3>
              <p className="text-gray_600 text-[16px] font-[500]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const reasons = [
  {
    imgSrc: "/icons/why-choose-1.png",
    imgAlt: "Clock icon",
    title: "Save Time",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictumst facilisis quis malesuada sed. Nisi nisi aenean suspendisse sagittis.",
  },
  {
    imgSrc: "/icons/why-choose-2.png",
    imgAlt: "Coins icon",
    title: "Reduce Costs",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictumst facilisis quis malesuada sed. Nisi nisi aenean suspendisse sagittis.",
  },
  {
    imgSrc: "/icons/why-choose-3.png",
    imgAlt: "Star icon",
    title: "Tenant Satisfaction",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictumst facilisis quis malesuada sed. Nisi nisi aenean suspendisse sagittis.",
  },
  {
    imgSrc: "/icons/why-choose-4.png",
    imgAlt: "Mobile checkmark icon",
    title: "User Friendly Interface",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictumst facilisis quis malesuada sed. Nisi nisi aenean suspendisse sagittis.",
  },
  {
    imgSrc: "/icons/why-choose-5.png",
    imgAlt: "Headset icon",
    title: "World-Class Support",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictumst facilisis quis malesuada sed. Nisi nisi aenean suspendisse sagittis.",
  },
];
