import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        
        <div className="bg-[#f5f6f8] rounded-[4px] px-12 py-12 md:px-16 md:py-14">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-stretch">
            
            <div className="md:basis-[55%] flex flex-col justify-center">
              <h1 className="text-[36px] leading-[1.2] font-bold text-gray-900 md:text-[44px]">
                Health Desk Clinic:
                <br />
                All Natural Supplements
              </h1>

              <p className="mt-6 max-w-[540px] text-[15px] leading-[1.6] text-gray-700 font-semibold">
                Health Care Desk is the premier choice for those seeking wellness
                through wholesome, superfood-enriched formulas that actually work.
                Our all-natural, organic health supplements are designed to give
                your body what it needs to thrive and optimize your health each day!
              </p>

              <button
                type="button"
                className="mt-10 inline-flex h-[64px] w-[190px] items-center justify-center rounded-full
                            bg-[#1264d6] text-[18px] font-semibold text-white shadow-sm
                            border-1 border-transparent
                            transition-all duration-300
                            hover:bg-white hover:text-[#1264d6] hover:border-[#1264d6]
                  "
              >
                Shop Now
              </button>
            </div>

           
            <div className="md:basis-[45%] flex items-center justify-center md:justify-end">
              
              <img
                src="/doc.png"
                alt="Doctor"
                className="h-[380px] w-auto object-contain md:h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
