import React from "react";

const KeyFeatures = () => {
  return (
    <div className="bg-white pt-[120px] pb-[80px] px-[20px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2 className="text-[40px] text-black_100 leading-[42.8px] font-[700] tracking-[-2%]">
            Key Features of LeaseGrid
          </h2>
          <p className="mt-[20px] text-[16px] leading-[24px] text-gray_600 max-w-[632px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Eget maecenas bibendum nisi
            arcu vitae cum cras aenean. Risus diam lectus platea elit lectus
            quisque
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[84px] mt-[60px] max-w-[1120px] mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center ">
              <img
                src={feature.icon}
                width={60}
                height={60}
                alt={feature.title}
                className="w-[60px] h-[60px]"
              />
              <h2 className="mt-[20px] text-[28px] font-[700] leading-[33.6px] text-black_100 text-center">
                {feature.title}
              </h2>
              <p className="mt-[16px] text-[16px] leading-[24px] text-gray_600 text-center font-[400]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;

const features = [
  {
    title: (
      <span>
        Lease & Tenant <br /> Management
      </span>
    ),
    description:
      "Easily manage your leases, track tenant information, and stay on top of lease renewals. Automate rent reminders, send notices, and streamline communication to ensure a seamless relationship with your tenants.",
    icon: "/icons/feature-1.png",
  },
  {
    title: (
      <span>
        Maintenance <br /> Tracking
      </span>
    ),
    description:
      "Keep your properties in top condition with our intuitive maintenance management tool. Track requests, assign tasks to vendors, and monitor progress—all from a single dashboard.",
    icon: "/icons/feature-2.png",
  },
  {
    title: (
      <span>
        Accounting & Financial <br /> Reporting
      </span>
    ),
    description:
      "No need for complex spreadsheets. Our integrated accounting system lets you manage payments, track income and expenses, and generate detailed financial reports with ease. Stay organized and compliant, whether it's for taxes or audits.",
    icon: "/icons/feature-3.png",
  },
  {
    title: (
      <span>
        Online Rent <br /> Payments
      </span>
    ),
    description:
      "Make rent collection easier for both you and your tenants. With our secure online payment options, tenants can pay rent, deposits, and fees electronically, while you receive instant notifications and track payment statuses in real time.",
    icon: "/icons/feature-4.png",
  },
  {
    title: (
      <span>
        Document <br /> Management
      </span>
    ),
    description:
      "Store all of your important property and tenant documents in one place. Whether it's leases, inspection reports, or maintenance records, access everything you need anytime, from anywhere.",
    icon: "/icons/feature-5.png",
  },
  {
    title: (
      <span>
        Customizable <br /> Reports & Analytics
      </span>
    ),
    description:
      "Gain valuable insights into your property management performance with customizable reports and real-time data analytics. Make informed decisions to maximize your profitability and efficiency.",
    icon: "/icons/feature-6.png",
  },
  {
    title: (
      <span>
        Automated <br /> Workflows
      </span>
    ),
    description:
      "Reduce manual effort by automating routine tasks such as rent reminders, tenant communications, and lease renewals. Let LeaseGrid handle the repetitive tasks, so you can focus on growing your business.",
    icon: "/icons/feature-7.png",
  },
  {
    title: (
      <span>
        Multi-Property & <br /> Portfolio Management
      </span>
    ),
    description:
      "Managing multiple properties? No problem. With LeaseGrid, you can handle various properties or portfolios from a single dashboard, giving you a bird’s eye view of all your operations.",
    icon: "/icons/feature-8.png",
  },
  {
    title: (
      <span>
        Mobile-Friendly <br /> Interface
      </span>
    ),
    description:
      "Stay connected and manage your properties on the go. Our mobile-friendly platform allows you to handle critical tasks right from your smartphone or tablet, ensuring you’re always in control, no matter where you are.",
    icon: "/icons/feature-9.png",
  },
];
