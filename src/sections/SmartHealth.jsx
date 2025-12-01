import React from "react";

const blocks = [
  {
    id: 1,
    title: "100% Natural Components",
    subtitle: "Nature-Powered Wellness You Can Trust",
    body: `We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.`,
    image: "/Compo.jpg", 
    reverse: false,
  },
  {
    id: 2,
    title: "Research-Backed Formulations",
    subtitle: "Formulated with Clinically Tested Ingredients",
    body: `We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.`,
    image: "/Research.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "Eco-Conscious Manufacturing",
    subtitle: "Sustainable from Source to Shelf",
    body: `Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly practices and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you.`,
    image: "/Eco.jpg",
    reverse: false,
  },
];

const SmartHealth = () => {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      
      <div className="mx-auto max-w-[1200px] px-6">
        
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="text-[28px] md:text-[28px] font-bold text-black">
            Health Care Desk
          </h2>
          <h3 className="mt-1 text-[24px] md:text-[26px] font-bold text-black">
            The Future Of Smart Health
          </h3>
          <p className="mt-4 text-[16px] md:text-[15px] leading-relaxed text-[#4b5563] font-medium">
            At Health Care Desk, we are committed to producing supplements that
            harness the power of all-natural superfoods. Our products help
            support the body&apos;s natural processes, improving our customers&apos;
            quality of life.
          </p>
        </div>

       
        <div className="mt-16 space-y-16">
          {blocks.map((block) => (
            <div
              key={block.id}
              className={`flex flex-col gap-8 md:gap-14 md:items-start ${
                block.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              
              <div className="w-full md:w-[320px] lg:w-[340px] flex-shrink-0">
                <div className="overflow-hidden rounded-[10px] bg-[#f5f6f8]">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              
              <div className="flex-1 max-w-[620px]">
                <h4 className="text-[18px] md:text-[20px] font-bold text-black">
                  {block.title}
                </h4>
                <p className="mt-1 text-[13px] font-semibold uppercase tracking-wide text-[#000000]">
                  {block.subtitle}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-[#4b5563]">
                  {block.body}
                </p>

                <button
                  type="button"
                  className="mt-5 inline-flex h-[40px] items-center justify-center rounded-[3px]
                             border border-[#1f54c9] px-6 text-[14px] font-semibold text-[#1f54c9]
                             hover:bg-[#1f54c9] hover:text-white transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartHealth;