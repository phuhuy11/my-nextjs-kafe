import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-4 text-white shadow-md z-10">
      <div className="h-[8vh] max-h-16 min-h-10 ">
        <button> 
          <img src={"./images/cafe_uno_100.png"}
          
          alt="CAFÉ UNO"
          style={{ 
            maxWidth: "auto",
            height: "auto" 
          }}
          loading="lazy"/>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;