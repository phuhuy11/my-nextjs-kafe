import React from "react";

function Navbar() {
  return (
    <div className="bg-black w-full h-[8vh] max-h-16 min-h-10 flex items-center justify-center">
      <button 
        className="bg-black p-2 w-full mx-0 rounded-none border-0 focus:outline-none hover:bg-black active:bg-black" 
        style={{ backgroundColor: 'black', WebkitAppearance: 'none' }}
      > 
        <img 
          src={"./images/cafe_uno_5.png"}
          alt="CAFÉ UNO"
          className="w-auto h-[5vh] max-h-12 mx-auto"
          loading="lazy"
        />
      </button>
    </div>
  );
}

export default Navbar;