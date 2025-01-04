import React from 'react';

const Header = () => {
  return (
    <div className="absolute px-24  bg-gradient-to-b from-black  w-full flex justify-between ">
      {/* Logo Section */}
      <div>
        <img 
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          className="w-56" 
          alt="Netflix logo" 
        />
      </div>

      {/* Buttons Section */}
      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <button
          name="language"
          id="language"
          className="px-4 py-2 text-white border border-gray-400 rounded bg-transparent flex items-center gap-2"
        >
          English <span>▽</span>
        </button>

        {/* Login Button */}
        <button className="px-6 py-2 bg-red-600 text-white rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
