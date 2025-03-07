import React from "react";

function ImageSection() {
  return (
    <div className="w-full flex justify-center">
      <img
        src="/images/cafeunofirst.png"
        alt="Café UNO"
        style={{ 
          maxWidth: "100vw",
          height: "auto" 
        }}
        loading="lazy"
      />
    </div>
  );
}

export default ImageSection;