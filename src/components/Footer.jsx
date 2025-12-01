import React from "react";

const productColumns = [
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Uro flow"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Memof"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Derma care"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "TestoZen"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "True Fem"],
];

const paymentLogos = [
  { id: 1, src: "/payment.png", alt: "MasterCard" },

];

const Footer = () => {
  return (
    <footer className="w-full bg-white">
     
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-10 md:flex-row">
          
          <div className="w-full max-w-[320px]">
            <div className="mb-4">
              
              <img
                src="/logonew.png"
                alt="Health Care Desk"
                className="h-[120px] w-auto object-contain"
              />
            </div>
            <p className="text-[14px] leading-relaxed text-[#374151]">
              <span className="font-semibold">Address:</span> 7823 Red Oak
              Trail, Austin, TX, 78745, United States
              <br />
              <span className="font-semibold">Phone:</span> (512) 555-2376
              <br />
              <span className="font-semibold">Email:</span>{" "}
              Ereforce@outlook.com
            </p>
          </div>

        
          <div className="hidden border-l border-gray-300 md:block" />

         
          <div className="flex-1">
            <h3 className="text-[18px] font-semibold text-[#1664d6]">
              Our Products
            </h3>

            <div className="mt-4 grid gap-x-8 gap-y-2 text-[14px] text-[#374151] md:grid-cols-5">
              {productColumns.map((col, colIndex) => (
                <div key={colIndex} className="space-y-[2px]">
                  {col.map((product, i) => (
                    <p key={i}>{product}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-[#e7e7e7] px-4 py-6">
        <div className="mx-auto max-w-[900px] text-center text-[12px] leading-relaxed text-[#4b5563]">
          <p>
            These statements have not been evaluated by the Food and Drug
            Administration.
          </p>
          <p>
            These products are not intended to diagnose, treat, cure or prevent
            any disease. Individual results may vary.
          </p>

          
          <div className="mt-4 flex items-center justify-center gap-3">
            {paymentLogos.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                className="h-[26px] w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      
      <div className="bg-[#dddddd] px-4 py-4">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 text-[12px] text-[#4b5563] md:flex-row">
          <p>© 2025, Health Desk Clinic. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <button className="hover:text-black">Terms And Conditions</button>
            <span className="h-3 w-px bg-gray-400" />
            <button className="hover:text-black">Privacy Policy</button>
            <span className="h-3 w-px bg-gray-400" />
            <button className="hover:text-black">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
