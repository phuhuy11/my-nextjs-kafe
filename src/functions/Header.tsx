import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-4 bg-black text-white shadow-md z-10">
      <div className="h-[8vh] max-h-16 min-h-10">
        <img 
          src="/images/logo.png" 
          alt="CAFÉ UNO"
          style={{ 
            maxWidth: "60vw",
            height: "auto" 
          }}
          loading="lazy"
        />
      </div>
      <button className="text-2xl p-2 focus:outline-none" aria-label="Menu">
        ☰
      </button>
    </nav>
  );
}

export default Navbar;