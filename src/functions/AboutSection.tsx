import React from "react";

function AboutSection() {
  return (
    <section className="py-8 px-4 text-center flex flex-col items-center w-full bg-[#7D290F]">
      <p className="font-bold mb-4 text-lg">
        Café UNO er en ungdomskafe i hjertet av Hamar sentrum.
      </p>
      <p className="text-base">UNO har en kaffebar med god kvalitet til snille priser.</p>
      <img src={"./images/Cafe uno bakgrunn_22.png"}
          
          alt="CAFÉ UNO"
          style={{ 
            maxWidth: "100vw",
            height: "auto" 
          }}
          loading="lazy"/>
    </section>
  );
}

export default AboutSection;

