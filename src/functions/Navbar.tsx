import React from "react";

function Navbar() {
  return (
    <div className="bg-[#434343] w-full h-[8vh] max-h-16 min-h-10 flex items-center px-10">
      <button 
        className="bg-[#434343] p-2 rounded border-0 focus:outline-none" 
        style={{ backgroundColor: 'black', WebkitAppearance: 'none' }}
      > 
        <img 
          src={"./images/cafe_uno_5.png"}
          alt="CAFÉ UNO"
          className="w-auto h-[5vh] max-h-12"
          loading="lazy"
        />
      </button>
    </div>
  );
}

export default Navbar;