import React from "react";

const products = [
  {
    id: 1,
    name: "Dent Pure",
    image: "/DentPure.png", // put your real file names here
  },
  {
    id: 2,
    name: "True Fem",
    image: "/Truedem.png",
  },
  {
    id: 3,
    name: "Vita Renew",
    image: "/vita.png",
  },
  {
    id: 4,
    name: "ProstaZen",
    image: "/pros.png",
  },
  {
    id: 5,
    name: "Nerve Freedom",
    image: "/NerveN.png",
  },
];

const BestSellers = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
      
        <div>
          <h2 className="text-[32px] md:text-[38px] font-bold text-black">
            Our Best Sellers
          </h2>
          <p className="mt-3 max-w-[820px] text-[14px] font-medium leading-relaxed text-gray-600">
            Formulated with science-backed all-natural ingredients, our unique
            supplements support holistic health, healing &amp; wellness.
          </p>
        </div>

      
        <div className="mt-7 flex flex-wrap items-center gap-4 text-[15px] font-bold text-black">
          <button className="pb-1 border-b-2 border-black">
            Results-Driven
          </button>
          <span className="h-5 w-px bg-gray-300" />
          <button className="pb-1 hover:text-gray-700">All-Natural</button>
          <span className="h-5 w-px bg-gray-300" />
          <button className="pb-1 hover:text-gray-700">Non-GMO</button>
          <span className="h-5 w-px bg-gray-300" />
          <button className="pb-1 hover:text-gray-700">Cruelty-Free</button>
        </div>


        <div className="mt-10 grid gap-8 md:grid-cols-5">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">

              <div className="rounded-[26px] bg-[#f4f6fb] px-4 pt-6 pb-4 shadow-sm">
                <div className="flex h-[220px] items-center justify-center overflow-hidden rounded-[22px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <h3 className="mt-4 text-[17px] font-bold text-black">
                {product.name}
              </h3>

              <div className="mt-1 flex items-center gap-1 text-[14px] text-[#F59E0B]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>

              <button
                type="button"
                className="mt-4 inline-flex h-[48px] w-[150px] items-center justify-center 
                           border border-[#1364d6] text-[15px] font-semibold text-[#1364d6]
                           hover:bg-[#1364d6] hover:text-white transition-colors"
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
