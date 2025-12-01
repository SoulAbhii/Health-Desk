import React from "react";

const products = [
  {
    id: 1,
    title: "Weight Loss",
    description:
      "Targeted products designed to support safe and effective weight management.",
    icon: "/Weight.png",
  },
  {
    id: 2,
    title: "Nerve Pain",
    description:
      "Discover nerve health products designed to support comfort and mobility.",
    icon: "/nerve.png",
  },
  {
    id: 3,
    title: "Skin Care",
    description:
      "Explore premium skincare products that nourish, protect, and enhance your glow.",
    icon: "/skincare-routine.png",
  },
  {
    id: 4,
    title: "Men's Health",
    description:
      "Shop men's health products that help boost strength, stamina, and vitality.",
    icon: "/medical-history.png",
  },
  {
    id: 5,
    title: "Women's Health",
    description:
      "Support hormonal balance, energy, and overall wellness with women's health formulas.",
    icon: "/doctorfe.png",
  },
  {
    id: 6,
    title: "Dental Care",
    description:
      "Dental care essentials to keep your smile bright, healthy, and confident.",
    icon: "/clean.png",
  },
  {
    id: 7,
    title: "Memory",
    description:
      "Discover memory support products that help enhance focus, clarity, and performance.",
    icon: "/memory.png",
  },
];


const scrollingProducts = [...products, ...products];

const NutritionSolutions = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
   
      <div className="w-screen px-[8vw]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[32px] leading-tight font-bold text-black md:text-[40px]">
            Nutrition Solutions
            <br />
            for Your Complete Well-Being
          </h2>
        </div>
      </div>

      
      <div className="mt-16 w-screen overflow-hidden">
        <div
          className="
            flex gap-6 animate-marquee hover:pause-animation
            px-[8vw]
          "
        >
          {scrollingProducts.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex h-[260px] w-[260px] flex-col justify-between
                         rounded-[30px] bg-[#eaf8f5]
                         px-6 py-6
                         shadow-[0_18px_30px_rgba(0,0,0,0.04)]
                         shrink-0"
            >
             
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d8efff]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-6 w-6 object-contain"
                  />
                </div>
              </div>

             
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>

      
              <button
                type="button"
                className="mt-4 h-[46px] w-full rounded-full
                           bg-gradient-to-r from-[#4b87ff] to-[#5f47e7]
                           text-[14px] font-semibold text-white
                           shadow-[0_10px_20px_rgba(36,107,253,0.35)]
                           hover:shadow-[0_12px_22px_rgba(36,107,253,0.45)]
                           transition-shadow"
              >
                Buy now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionSolutions;
