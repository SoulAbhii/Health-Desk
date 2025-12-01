import React from "react";

const features = [
  {
    id: 1,
    label: "All Natural",
    icon: "/natural.png", // make sure this is in /public
  },
  {
    id: 2,
    label: "Cruelty-Free",
    icon: "/cruel.png",
  },
  {
    id: 3,
    label: "Money-back Guarantee",
    icon: "/90day.png",
  },
  {
    id: 4,
    label: "Giving back",
    icon: "/giving.png",
  },
  {
    id: 5,
    label: "Non-GMO",
    icon: "/non.png",
  },
];

const BrandTrust = () => {
  return (
    
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        
        <div className="relative overflow-hidden rounded-[16px] bg-[#f2f7fb] px-8 py-14 md:px-16">
          
          <div className="pointer-events-none absolute inset-0 bg-[url('/brand-bg.png')] bg-cover bg-center opacity-40" />

          <div className="relative text-center">
            
            <h1 className="text-[26px] md:text-[32px] font-bold text-black">
              A Brand That You Can Trust
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed font-semibold text-[#4b5563]">
              Our results-driven supplements are made with premium &amp; safe
              ingredients
            </p>

            
            <div className="mt-10 grid md:grid-cols-5">
              {features.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <p className="mt-3 text-[15px] font-medium text-[#1664d6]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;
