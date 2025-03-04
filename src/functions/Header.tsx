import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md w-full">
      <h1 className="font-bold text-lg">CAFÉ UNO</h1>
      <button className="text-xl">☰</button>
    </header>
  );
}

export default Header; 