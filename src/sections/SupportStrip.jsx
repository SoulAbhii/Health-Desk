import React from "react";

const SupportStrip = () => {
  return (
    <section className="w-full bg-white">
      {/* ❌ Yellow line removed */}

      {/* ✅ Light grey info band with EXTRA TOP & BOTTOM SPACE */}
      <div className="w-full bg-[#f5f6f8] py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 md:flex-row md:justify-between">
          
          {/* Have a Question */}
          <div className="max-w-[260px]">
            <h3 className="text-[18px] font-semibold text-black">
              Have a Question?
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#4b5563]">
              Check out our FAQs where we answer the most commonly asked
              questions.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex h-[36px] items-center justify-center 
                         border border-[#1264d6] px-4 text-[13px] 
                         font-medium text-[#1264d6] 
                         hover:bg-[#1264d6] hover:text-white transition-colors"
            >
              Read FAQs
            </button>
          </div>

          {/* Connect With Us */}
          <div className="max-w-[260px]">
            <h3 className="text-[18px] font-semibold text-black">
              Connect With Us
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#4b5563]">
              Enjoy free shipping for all orders.
            </p>
            <p className="mt-3 text-[16px] font-bold text-black">
              1-800-822-7777
            </p>
          </div>

          {/* We're Social */}
          <div className="max-w-[260px]">
            <h3 className="text-[18px] font-semibold text-black">
              We&apos;re Social
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#4b5563]">
              Like us, love us, follow us!
            </p>
          </div>

        </div>
      </div>

      {/* ✅ Blue email bar stays unchanged */}
      <div className="w-full bg-[#1264d6]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-4 px-6 py-6 text-white md:flex-row md:items-center md:justify-between">
          
          {/* Left text */}
          <div>
            <h3 className="text-[18px] font-semibold">Let&apos;s Grow Together</h3>
            <p className="mt-1 text-[13px] text-[#e5ecff]">
              We&apos;ll keep it simple. Only the news and updates you need.
            </p>
          </div>

          <form className="flex w-full max-w-[420px] flex-col gap-0 md:flex-row">
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="h-[40px] flex-1 border border-white bg-[#0957c4] 
                         px-3 text-[13px] text-black 
                         placeholder:text-white outline-none"
            />
            <button
              type="submit"
              className="h-[40px] px-6 text-[13px] 
                         font-semibold bg-white text-black 
                         border border-white hover:bg-gray-100 transition-colors"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default SupportStrip;
