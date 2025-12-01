import React from "react";

const charityLogos = [
  { id: 1, img: "/prostate.png", alt: "Prostate Cancer Foundation" },
  { id: 2, img: "/americatin.png", alt: "American Tinnitus Association" },
  { id: 3, img: "/uspain.png", alt: "U.S. Pain Foundation" },
  { id: 4, img: "/americadia.png", alt: "American Diabetes Association" },
  { id: 5, img: "/americaheart.png", alt: "American Heart Association" },
];

const testimonials = [
  {
    id: 1,
    name: "Ryan R.",
    product: "TestoBites",
    text:
      "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and vitality as well. Highly recommended.",
    image: "/testobites.png",
  },
  {
    id: 2,
    name: "Jamie Fields",
    product: "Vita Renew",
    text:
      "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my skin care.",
    image: "/vitarenew.png",
  },
  {
    id: 3,
    name: "Anonymous",
    product: "Nerve Freedom",
    text:
      "I have been an RN for 20 years and love helping people find solutions to their health issues. Nerve Freedom is the best natural product for neuropathy pain hands down.",
    image: "/freedom.png",
  },
];

const CharityAndTestimonials = () => {
  return (
    <section className="w-full bg-white">
      
      <div className=" relative w-full bg-[url('/bgimage.jpg')]
     bg-[length:110%_auto] bg-center bg-no-repeat
    py-14">
        <div className="mx-auto max-w-[1200px] px-6 text-center text-white">
          <h2 className="text-[28px] font-bold">Our Charitable Initiatives</h2>
          <h3 className="mt-1 text-[24px] font-bold">
            Health Care Desk Gives Back
          </h3>

          <p className="mt-3 text-[13px] opacity-90">
            At Health Care Desk, a portion of our profits are committed to
            supporting charities and global health research initiatives
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
            {charityLogos.map((logo) => (
              <img
                key={logo.id}
                src={logo.img}
                alt={logo.alt}
                className="h-[48px] object-contain opacity-95"
              />
            ))}
          </div>
        </div>
      </div>

      
      <div className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-center text-[28px] font-bold text-black">
            Verified Customer Testimonials
          </h2>

         
<div className="mt-12 grid gap-8 md:grid-cols-3">
  {testimonials.map((item) => (
    <div
      key={item.id}
      className="relative rounded-[20px] bg-[#eaf6fb] px-8 pt-14 pb-8"
    >
      
      <div className="mb-2">
        <img
          src={item.image}
          alt={item.product}
          className="h-[60px] object-contain"
        />
      </div>

      
      <h3 className="text-[18px] font-semibold text-black">
        {item.product}
      </h3>

     
      <div className="mt-1 text-[15px] text-[#f59e0b]">★★★★★</div>

      
      <p className="mt-5 text-[14px] leading-relaxed text-[#374151]">
        {item.text}
      </p>

      
      <p className="mt-6 text-[14px] font-semibold text-black">
        - {item.name}
      </p>
    </div>
  ))}
</div>


          {/* Logo + follow us */}
          <div className="mt-16 flex flex-col items-center justify-center text-center">
            <img
              src="/logonew.png"
              alt="Health Desk"
              className="h-[210px] w-auto object-contain"
            />

            <button
              className="mt-4  border border-[#3b82f6] px-6 py-2
                         text-[13px] font-semibold text-[#3b82f6]
                         hover:bg-[#3b82f6] hover:text-white transition"
            >
              Follow Us
            </button>

            <div className="mt-4 flex gap-4 text-[#3b82f6] text-[18px]">
              <a href="#"><img src="./facebook.png" alt="" /></a>
              <a href="#"><img src="./twitter.png" alt="" /></a>
              <a href="#"><img src="./telegram.png
              " alt="" /></a>
              <a href="#"><img src="./linkedin.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityAndTestimonials;
