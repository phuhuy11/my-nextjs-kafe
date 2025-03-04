import React, { useState } from "react";

function ImageCarousel() {
  const images = [
    "/images/espresso.png",
    "/images/latte.png",
    "/images/svart-kaffe.png",
    "/images/machiato.png",
    "/images/americano.png",
    "/images/cortado.png"
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full flex flex-col items-center p-4">
      <div className="flex justify-center items-center relative">
        <button onClick={prevImage} className="absolute left-4 text-2xl">❮</button>
        <img
          src={images[currentIndex]}
          alt="Carousel"
          width={250}
          height={300}
          className="w-1/2 h-auto object-cover transition-transform duration-300"
        />
        <button onClick={nextImage} className="absolute right-4 text-2xl">❯</button>
      </div>
    </section>
  );
}

export default ImageCarousel; 