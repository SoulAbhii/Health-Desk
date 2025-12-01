import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        
        <div className="flex items-center">
          
          <img
            src="/logo.png"
            alt="Health Desk Clinic Logo"
            className="h-[60px] w-auto"
          />
        </div>
        <div className="flex items-center gap-10">
            
              <ul className="hidden items-center space-x-10 text-[16px] font-medium text-gray-900 md:flex">
                <li className="cursor-pointer hover:text-blue-600">Home</li>
                <li className="cursor-pointer hover:text-blue-600">Shop</li>
                <li className="cursor-pointer hover:text-blue-600">About Us</li>
                <li className="cursor-pointer hover:text-blue-600">FAQ</li>
                <li className="cursor-pointer hover:text-blue-600">Blog</li>
                <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
              </ul>
           
              <button
                type="button"
                className="hidden h-[34px] w-[34px] items-center justify-center  md:flex"
              >
                
                <span className="text-[18px]"><img src='/shop.png' alt="" /></span>
              </button>
        </div>
      

       

        
        <button className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 md:hidden">
          <span className="sr-only">Open menu</span>
          <div className="space-y-[3px]">
            <span className="block h-[2px] w-4 bg-gray-700" />
            <span className="block h-[2px] w-4 bg-gray-700" />
            <span className="block h-[2px] w-4 bg-gray-700" />
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
