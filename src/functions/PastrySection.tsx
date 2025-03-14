import React from "react";

const PastrySection = () => {
  return (
    <section className="bg-[#f6e9cc] p-4">
      {/* Green Info Box */}
      <div className="bg-green-900 text-white p-4 rounded-lg text-center">
        <h3 className="text-lg font-bold">Kanel bolle 30kr</h3>
        <p className="text-sm">med glasur</p>
      </div>

      {/* Image Wrapper - Responsive scaling */}
      <div className="w-full mt-3 flex justify-center">
        <div className="w-[70vw] max-w-md sm:w-[60vw] md:w-[50vw] lg:w-[40vw] overflow-hidden rounded-lg">
          <img 
            src="/images/cinnamon-roll.png" 
            alt="Kanelbolle" 
            className="w-full h-auto object-cover"
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
};

export default PastrySection;