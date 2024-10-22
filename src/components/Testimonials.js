import React from "react";
import { MdOutlineStar } from "react-icons/md";

const Testimonials = () => {
  return (
    <div className="bg-white py-[80px] px-[20px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2 className="text-[40px] text-black_100 leading-[42.8px] font-[700] tracking-[-2%]">
            Testimonials
          </h2>
          <p className="mt-[20px] text-[16px] leading-[24px] text-gray_600 max-w-[632px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Eget maecenas bibendum nisi
            arcu vitae cum cras aenean. Risus diam lectus platea elit lectus
            quisque
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[60px] max-w-[1120px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] overflow-hidden px-[30px] py-[40px] flex flex-col gap-[28px]"
              style={{
                boxShadow:
                  "0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A",
              }}
            >
              <div className="flex items-center justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <MdOutlineStar size={30} key={i} className="text-[#F8C23A]" />
                ))}
              </div>
              <p className="text-[#27262B] text-[16px] font-[400] text-center">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-center">
                <img
                  className="h-[64px] w-[64px] object-cover rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-[14px]">
                  <p className="text-[18px] font-[700] leading-[28px] text-[#27262B]">
                    {testimonial.name}
                  </p>
                  <p className="text-[16px] font-[500] leading-[26px] text-[#27262B]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const testimonials = [
  {
    name: "Ronald Richards",
    location: "United States",
    image: "/profile-1.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    rating: 5,
  },
  {
    name: "Annette Black",
    location: "United States",
    image: "/profile-2.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    rating: 5,
  },
  {
    name: "Esther Howard",
    location: "United States",
    image: "/profile-3.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    rating: 5,
  },
];
